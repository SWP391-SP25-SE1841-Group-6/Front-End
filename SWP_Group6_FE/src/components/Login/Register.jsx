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
  FormErrorMessage,
  RadioGroup,
  Radio,
  Text,
  ChakraBaseProvider,
  useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [formData, setFormData] = useState({
    accName: "",
    accPass: "",
    accEmail: "",
    dob: "",
    gender: true,
    role: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.accEmail) newErrors.accEmail = "Email is required";
    if (!formData.accName) newErrors.accName = "Username is required";
    if (!formData.accPass) newErrors.accPass = "Password is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.role) newErrors.role = "Role is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      // Log the form data before sending
      console.log('Form Data to be sent:', {
        accName: formData.accName,
        accPass: formData.accPass,
        accEmail: formData.accEmail,
        dob: formData.dob,
        gender: formData.gender,
        role: formData.role
      });

      const response = await axios.post('http://localhost:5121/api/Account/Register', formData);
      
      // Log the complete response
      console.log('Complete Response:', response);
      // Log specific response data
      console.log('Response Data:', response.data);
      console.log('Success Status:', response.data.success);
      console.log('Message:', response.data.message);
      
      if (response.data.success) {
        toast({
          title: "Registration successful",
          description: "You can now login with your account",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast({
          title: "Registration failed",
          description: response.data.message || "Something went wrong",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Log error details
      console.error('Registration Error:', error);
      console.error('Error Response:', error.response?.data);
      console.error('Error Status:', error.response?.status);
      
      toast({
        title: "Error",
        description: error.response?.data?.message || "Registration failed",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <ChakraBaseProvider>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Circle size="100px" bg="blue.700" color="white" mb={4}>
            <FontAwesomeIcon icon={faUser} size="3x" />
          </Circle>
          
          <Heading color="blue.700" mb={6}>Register Account</Heading>
          
          <Box
            minW={{ base: "90%", md: "468px" }}
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            p={8}
            bg="white"
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl isInvalid={errors.accEmail}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={formData.accEmail}
                    onChange={(e) => setFormData({...formData, accEmail: e.target.value})}
                    placeholder="Enter your email"
                  />
                  <FormErrorMessage>{errors.accEmail}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.accName}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    value={formData.accName}
                    onChange={(e) => setFormData({...formData, accName: e.target.value})}
                    placeholder="Enter your username"
                  />
                  <FormErrorMessage>{errors.accName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.accPass}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={formData.accPass}
                      onChange={(e) => setFormData({...formData, accPass: e.target.value})}
                      placeholder="Enter your password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.accPass}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.dob}>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  />
                  <FormErrorMessage>{errors.dob}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup
                    value={formData.gender.toString()}
                    onChange={(value) => setFormData({...formData, gender: value === 'true'})}
                  >
                    <Stack direction="row" spacing={5}>
                      <Radio value="true" colorScheme="blue">
                        <Text color="gray.700">Male</Text>
                      </Radio>
                      <Radio value="false" colorScheme="pink">
                        <Text color="gray.700">Female</Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl isInvalid={errors.role}>
                  <FormLabel>Select Role</FormLabel>
                  <Stack direction="row" spacing={4} justify="center">
                    <Button
                      flex={1}
                      h="50px"
                      colorScheme={formData.role === 'Student' ? 'blue' : 'gray'}
                      variant={formData.role === 'Student' ? 'solid' : 'outline'}
                      onClick={() => setFormData({...formData, role: 'Student'})}
                      _hover={{ bg: formData.role === 'Student' ? 'blue.500' : 'blue.50' }}
                    >
                      Student
                    </Button>
                    <Button
                      flex={1}
                      h="50px"
                      colorScheme={formData.role === 'Parent' ? 'blue' : 'gray'}
                      variant={formData.role === 'Parent' ? 'solid' : 'outline'}
                      onClick={() => setFormData({...formData, role: 'Parent'})}
                      _hover={{ bg: formData.role === 'Parent' ? 'blue.500' : 'blue.50' }}
                    >
                      Parent
                    </Button>
                  </Stack>
                  <FormErrorMessage>{errors.role}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  bg="blue.700"
                  color="white"
                  width="full"
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Register
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => navigate("/login")}
                  width="full"
                >
                  Already have an account? Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </ChakraBaseProvider>
  );
}