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
  ChakraBaseProvider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../Auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginWithAPI() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { login } = useAuth();

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
      
      // Make the API call
      const response = await axios.post(
        `http://localhost:5121/api/Account/Login?email=${emailURL}&password=${formData.password}`
      );

      // Log the complete response
      console.log('Complete Response:', response);
      console.log('Response Data:', response.data);
      console.log('Token:', response.data.token);
      console.log('User Info:', response.data.user);

      if (response.data) {
        // Store user data in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('userName', response.data.user.name);
        localStorage.setItem('userEmail', response.data.user.email);
        localStorage.setItem('role', response.data.user.role);

        toast.success(`Welcome back, ${response.data.user.name}!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Navigate based on role
        switch(response.data.user.role) {
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
      } else {
        toast.error(response.data.message || "Invalid credentials", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Login Error:', error);
      console.error('Error Response:', error.response?.data);
      console.error('Error Status:', error.response?.status);

      toast.error(error.response?.data?.message || "Please check your credentials and try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
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
        bg="gray.100"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h5" size="md">Sign In to your account</Heading>
          <Circle size="100px" bg="blue.700" py="6">
            <FontAwesomeIcon icon={faUser} size="4x" />
          </Circle>

          <Box
            minW={{ base: "90%", md: "468px" }}
            borderWidth="1px"
            p="8"
            borderRadius="lg"
            bg="gray.300"
          >
            <form onSubmit={handleSubmit}>
              <FormControl id="email" py="3" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  variant="filled"
                  placeholder="Your email"
                  type="email"
                  size="lg"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </FormControl>

              <FormControl id="password" py="3" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    variant="outline"
                    placeholder="Your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <InputRightElement>
                    <Button
                      variant="outline"
                      h="1.75rem"
                      size="sm"
                      colorScheme="teal"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={4} align="center">
                <Button
                  type="submit"
                  colorScheme="blue"
                  py="3"
                  variant="outline"
                  w="50%"
                  bg="blue.700"
                  color="white"
                >
                  Sign in
                </Button>

                <Center color="white">Or</Center>

                <Button
                  colorScheme="blue"
                  py="3"
                  variant="outline"
                  w="50%"
                  bg="blue.700"
                  color="white"
                  onClick={() => navigate("/register")}
                >
                  Register an account
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </ChakraBaseProvider>
  );
}


