import { useState, useEffect } from "react";
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
  ChakraBaseProvider,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../Auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginWithAPI() {
  useEffect(() => {
    localStorage.clear();
  }, []); // Empty dependency array means this runs once when component mounts

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const checkApproved = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5121/api/Account/id?id=${userId}`
      );

      console.log('Checking approval status:', response.data.data.isApproved);
      
      return response.data.data.isApproved;
      
    } catch (error) {
      console.error('Error checking approval status:', error);
      
      toast.error(error.response?.data?.message || "Failed to verify account status", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Log the request data
      console.log('Login attempt with:', {
        email: formData.email,
        password: formData.password
      });

      // Format the email for URL
      const emailURL = formData.email.replace("@", "%40");
      
      const response = await login(emailURL,formData.password);
      // Make the API call
      {/*const response = await axios.post(
        `http://localhost:5121/api/Account/Login?email=${emailURL}&password=${formData.password}`
      );*/}

      // Log the complete response
      console.log('Complete Response:', response);
      
      const check = Boolean;
      console.log(response.success);
      if (response.success) {
        {/*Store user data in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('userName', response.data.user.name);
        localStorage.setItem('userEmail', response.data.user.email);
        localStorage.setItem('role', response.data.user.role);
          */}
        // Check if account is approved
        const isApproved = await checkApproved(localStorage.getItem('userId'));
        
        if (!isApproved) {
          toast.warning("Your account is pending approval.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          return;
        }

        {/* First show the success toast
        toast.success(`Welcome back, ${localStorage.getItem('userName')}!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });*/}
        setTimeout(() => {
        // Then navigate after a short delay
          console.log('response role' + response.role)
          switch(response.role) {
            case 'Manager':
              navigate('/admin');
              break;
            case 'Student':
              navigate('/studenthome');
              break;
            case 'Psychologist':
              navigate('/psychologist');
              break;
            case 'Parent':
              navigate('/parent');
              break;
            default:
              navigate('/');
          }

        }, 1000); // 1 second delay before navigation
      } 

      {/*else {
        
        setTimeout(() => {
          toast.error(response.message || "Invalid credentials", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }, 1000); // 1 second delay for error message
      }*/}
      
    } catch (error) {
      console.log(error);

      toast.error(`An Error has occured`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      
    }
  };

  return (
    <ChakraBaseProvider>
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
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-r, blue.400, blue.600)"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <Box textAlign="center" color="white">
            <Heading size="xl" mb={2}>Welcome Back</Heading>
            <Heading as="h2" size="md" fontWeight="normal">Sign in to your account</Heading>
          </Box>

          <Circle 
            size="120px" 
            bg="white" 
            shadow="lg"
            transition="all 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <FontAwesomeIcon icon={faUser} size="3x" color="#2B6CB0" />
          </Circle>

          <Box
            w={{ base: "90%", md: "450px" }}
            bg="white"
            borderRadius="xl"
            p={8}
            shadow="2xl"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-2px)', shadow: 'dark-lg' }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={6}>
                <FormControl id="email" isRequired>
                  <FormLabel fontWeight="medium">Email address</FormLabel>
                  <Input
                    type="email"
                    size="lg"
                    borderRadius="md"
                    bg="gray.50"
                    _hover={{ bg: 'gray.100' }}
                    _focus={{ bg: 'white', borderColor: 'blue.400', shadow: 'outline' }}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel fontWeight="medium">Password</FormLabel>
                  <InputGroup size="lg">
                    <Input
                      type={showPassword ? "text" : "password"}
                      borderRadius="md"
                      bg="gray.50"
                      _hover={{ bg: 'gray.100' }}
                      _focus={{ bg: 'white', borderColor: 'blue.400', shadow: 'outline' }}
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                  w="100%"
                  mt={4}
                  shadow="md"
                  _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                >
                  Sign in
                </Button>
              </Stack>
            </form>

            <Flex direction="column" align="center" mt={8}>
              <Text color="gray.600" mb={4}>Don't have an account?</Text>
              <Button
                variant="outline"
                colorScheme="blue"
                w="100%"
                onClick={() => navigate("/register")}
                _hover={{ bg: 'blue.50' }}
              >
                Create Account
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </ChakraBaseProvider>
  );
}


