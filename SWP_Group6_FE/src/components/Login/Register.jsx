import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  InputRightElement,
  FormControl,
  FormLabel,
  Circle,
  Center,
  FormErrorMessage,
  Spacer,
  VStack,
  StackDivider,
  Radio,
  RadioGroup,
  Text,
  ChakraBaseProvider,
  position,
} from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEye } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [formData, setFormData] = useState({
    accName : String,
    accPass : String,
    accEmail : String,
    dob : Date,
    gender :  true,
    role : String,
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Show loading toast
      

      console.log(formData)

      const response = await axios.post('http://localhost:5121/api/Account/Register', formData);
      console.log('response' + response.data.message)
      // Close loading toast
      
      
      if(response.data.success === true){
        toast.success("Registration successful", {
          position: "top-right"
        });
  
        // Redirect to login page after successful registration
        setTimeout(() => {
          navigate("/login");
        }, 2000);

      }else if(response.data.success === false && response.data.message == "Duplicate Value"){
        toast.error("Account already exists , try again", {
          position: 'top-right',
        }
        )
      }
      
      // Show success toast
      

    } catch (error) {
      // Show error toast with specific error message
      toast.error("Registration error !", {
        position: "top-right"
      });
      
      console.error('Register error:', error);
    }
  };

  const handleGenderChange = (value) => {
    setFormData({
      ...formData,
      gender: value === 'true' // Convert string to boolean
    });
  };
  
  return(
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ChakraBaseProvider>
        <Flex  alignItems={"center"} justifyContent={"center"} bg={"gray.100"} >
          <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
          >           
          <Heading as='h5' size='md'>  Register your account </Heading>
          <Circle size="100px" bg="blue.700" py='6' >
            < FontAwesomeIcon icon={faUser} size='4x'/>
          </Circle>
          
            <Formik
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
          <Box maxW={{ base: "90%", md: "468px" }}  borderWidth='1px' p='8' borderRadius='lg' bg='gray.300'>
            <Form onSubmit={handleSubmit}>
              <FormControl id='email' py='3' isRequired>
                <FormLabel>Email address</FormLabel>
                Value: {formData.accEmail}
                <Input 
                  variant='filled'
                  type='email'
                  size='lg'
                  onChange={(e) => setFormData({
                    ...formData,
                    accEmail: e.target.value
                  })}
                />
              </FormControl>

              <FormControl id='username' py='3' isRequired>
                <FormLabel>User Name</FormLabel>
                Value: {formData.accName}
                <Input 
                  variant='filled'
                  type='text'
                  size='lg'
                  onChange={(e) => setFormData({
                    ...formData,
                    accName: e.target.value
                  })}
                />
              </FormControl>
            
              <FormControl id='password' py='3' isRequired>
                <FormLabel>Password</FormLabel>
                Value: {formData.accPass}
                <InputGroup>
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    variant={'outline'} 
                    onChange={(e) => setFormData({
                      ...formData,
                      accPass: e.target.value
                    })}
                  />
                  <InputRightElement>
                    <Button 
                      variant="outline" 
                      h='1.75rem' 
                      size='sm' 
                      colorScheme="teal" 
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            
              <FormControl id='dob' py='3' isRequired>
                <FormLabel>Date of Birth</FormLabel>
                Value: {formData.dob}
                <Input 
                  variant='filled'
                  type='date'
                  size='lg'
                  onChange={(e) => setFormData({
                    ...formData,
                    dob: e.target.value
                  })}
                />
              </FormControl>
              
              <FormControl id='gender' py='3' isRequired>
                <FormLabel>Gender</FormLabel>
                Value: {String(formData.gender)}
                <RadioGroup
                  onChange={handleGenderChange}
                  defaultValue='true'
                >
                  <Stack direction='row' spacing='20px' >
                    <Radio 
                      value='true'
                      colorScheme='blue'
                      size='lg'
                    >
                      <Text fontSize='16px'  textColor='black'>Male</Text>
                    </Radio>
                    <Radio 
                      value='false'
                      colorScheme='pink'
                      size='lg'
                    >
                      <Text fontSize='16px'  textColor='black'>Female</Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl id='role' py='3' isRequired>
                <FormLabel>Select Role</FormLabel>
                Value: {formData.role}
                <Stack direction='row' spacing={4} justify='center' py={2}>
                  <Button
                    rounded='full'
                    bg='white'
                    colorScheme={formData.role === 'Student' ? 'blue' : 'gray'}
                    variant={formData.role === 'Student' ? 'solid' : 'outline'}
                    onClick={() => setFormData({
                      ...formData,
                      role: 'Student'
                    })}
                    _hover={{ bg: 'blue.300' }}
                    w='150px'
                    h='50px'
                    size='lg'
                  >
                    Student
                  </Button>
                  <Button
                    rounded='full'
                    bg='white'
                    colorScheme={formData.role === 'Parent' ? 'green' : 'gray'}
                    variant={formData.role === 'Parent' ? 'solid' : 'outline'}
                    onClick={() => setFormData({
                      ...formData,
                      role: 'Parent'
                    })}
                    _hover={{ bg: 'blue.300' }}
                    w='150px'
                    h='50px'
                    size='lg'
                  >
                    Parent
                  </Button>
                </Stack>
                {!formData.role && (
                  <FormErrorMessage>Please select a role</FormErrorMessage>
                )}
              </FormControl>

              <VStack spacing={4} align='center'>
                <Button 
                  type='submit' 
                  colorScheme='blue' 
                  py='3'  
                  variant='outline' 
                  w='50%' 
                  bg='blue.700' 
                  color='white'
                >
                  Register
                </Button>
              </VStack>
            </Form>
          </Box>
          </Formik>
          </Stack>
        </Flex>
      </ChakraBaseProvider>
    </>
  )
}