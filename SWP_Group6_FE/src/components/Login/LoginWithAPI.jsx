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
  useToast
} from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import { PasswordInput } from "@/components/ui/password-input"

/*
const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
})*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEye } from "@fortawesome/free-solid-svg-icons";
 {/*accounts DTO*/}
 var loginDTO = {
  id: Number,
  email: String,
  role: String,
  name: String
}
{/*Accounts DTO*/}

export default function LoginWithAPI() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [data, setData] = useState(loginDTO);
  const navigate = useNavigate();
  const handleEmailChange = (event) => setEmail(event.target.value)
  const postLogin = async () => {
    setIsLoading(true);
    try {
      const dataCheck = email + password;
      const UrlEmail = email.replace("@","%40");
      
      const response = await axios.post(
        'http://localhost:5121/api/Account/Login?email='+UrlEmail+'&password='+password
      );
      
      console.log('message '+ response.data.message);
      console.log('token ' + response.data.token);
      console.log('id ' + response.data.user.id);
      console.log('email ' + response.data.user.email);
      console.log('user name ' + response.data.user.name);
      console.log('role ' + response.data.user.role);
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.get)
      localStorage.setItem('userId', response.data.user.id);
      localStorage.setItem('userName', response.data.user.name);
      localStorage.setItem('userEmail', response.data.user.email);
      localStorage.setItem('userRole', response.data.user.role);

      if(response.data.message == "Login successful"){
        toast.success("Login Success ! Welcome back " + localStorage.getItem('userName'), {
          position: "top-right"
        });
      }

      if(response.data.role )
      // Redirect to dashboard or home page
      navigate('/test');

    } catch (error) {
      toast.error("Login Failed ! Please re-check your login credentials !" , {
        position: "top-right"
      });
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password);
    postLogin(email, password);
    
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <>
    

    
    <Flex width={"100vw"} height={"100vh"} alignItems={"center"} justifyContent={"center"} bg={"gray.100"} >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >           
      <Heading as='h5' size='md'>  Sign In to your account </Heading>
      <Circle size="100px" bg="blue.700" py='6' >
        < FontAwesomeIcon icon={faUser} size='4x'/>
      </Circle>
        {/*<Avatar.Root colorPalette="red">
          <Avatar.Fallback />
          <Avatar.Image src="https://bit.ly/broken-link" />
        </Avatar.Root>*/}
        <Formik
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
      <Box minW={{ base: "90%", md: "468px" }} borderWidth='1px' p='8' borderRadius='lg' bg='gray.300'>
        <Form onSubmit={handleSubmit}>
        {/*Username goes here*/}

          <FormControl id='email' py='3' isRequired>
            <FormLabel>Email address</FormLabel>
            Value: {email}
            <Input 
              variant='filled'
              placeholder='Your email'
              type='email'
              size='lg'
              value={email}
              onChange={handleEmailChange}
            />
          </FormControl>
       
        
        {/*Password goes here*/}
        <FormControl id='password'py='3' isRequired>
          <FormLabel>Password</FormLabel>
          Value: {password}
          <InputGroup>
            
            <Input 
              type={showPassword ? "text" : "password"} 
              variant={'outline'} 
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement>
              <Button 
                variant="outline" 
                h='1.75rem' 
                size='sm' 
                colorScheme="teal" 
                onClick={handleShowClick}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        


        <VStack
          spacing={4}
          align='center'
          
        >
          <Button 
            type='submit' 
            colorScheme='blue' 
            py='3'  
            variant='outline' 
            w='50%' 
            bg='blue.700' 
            color='white'
            isLoading={isLoading}
            loadingText="Signing in..."
          >
            Sign in
          </Button>
          <Box color='white'>
            <Center>
              Or
            </Center>
          </Box > 
          <Button type='register' colorScheme='blue' py='3'  variant='outline' w='50%' bg='blue.700' color='white'>
            Register an account
          </Button>
        </VStack>
        
      </Form>
      </Box>
      </Formik>
        </Stack>
    </Flex>
    
    </>
  )
}


