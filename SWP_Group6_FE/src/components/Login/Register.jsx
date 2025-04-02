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
            <Heading size="xl" mb={2}>Create Account</Heading>
            <Text fontSize="lg" fontWeight="normal">Join our community today</Text>
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
            w={{ base: "90%", md: "500px" }}
            bg="white"
            borderRadius="xl"
            p={8}
            shadow="2xl"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-2px)', shadow: 'dark-lg' }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={6}>
                <FormControl isInvalid={errors.accEmail}>
                  <FormLabel fontWeight="medium">Email</FormLabel>
                  <Input
                    type="email"
                    value={formData.accEmail}
                    onChange={(e) => setFormData({...formData, accEmail: e.target.value})}
                    placeholder="Enter your email"
                    size="lg"
                    borderRadius="md"
                    bg="gray.50"
                    _hover={{ bg: 'gray.100' }}
                    _focus={{ bg: 'white', borderColor: 'blue.400', shadow: 'outline' }}
                  />
                  <FormErrorMessage>{errors.accEmail}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.accName}>
                  <FormLabel fontWeight="medium">Username</FormLabel>
                  <Input
                    type="text"
                    value={formData.accName}
                    onChange={(e) => setFormData({...formData, accName: e.target.value})}
                    placeholder="Enter your username"
                    size="lg"
                    borderRadius="md"
                    bg="gray.50"
                    _hover={{ bg: 'gray.100' }}
                    _focus={{ bg: 'white', borderColor: 'blue.400', shadow: 'outline' }}
                  />
                  <FormErrorMessage>{errors.accName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.accPass}>
                  <FormLabel fontWeight="medium">Password</FormLabel>
                  <InputGroup size="lg">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={formData.accPass}
                      onChange={(e) => setFormData({...formData, accPass: e.target.value})}
                      placeholder="Enter your password"
                      borderRadius="md"
                      bg="gray.50"
                      _hover={{ bg: 'gray.100' }}
                      _focus={{ bg: 'white', borderColor: 'blue.400', shadow: 'outline' }}
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
                  <FormErrorMessage>{errors.accPass}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.dob}>
                  <FormLabel fontWeight="medium">Date of Birth</FormLabel>
                  <Input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({...formData, dob: e.target.value})}
                    size="lg"
                    borderRadius="md"
                    bg="gray.50"
                    _hover={{ bg: 'gray.100' }}
                    _focus={{ bg: 'white', borderColor: 'blue.400', shadow: 'outline' }}
                  />
                  <FormErrorMessage>{errors.dob}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="medium">Gender</FormLabel>
                  <RadioGroup
                    value={formData.gender.toString()}
                    onChange={(value) => setFormData({...formData, gender: value === 'true'})}
                  >
                    <Stack direction="row" spacing={8}>
                      <Radio value="true" colorScheme="blue" size="lg">Male</Radio>
                      <Radio value="false" colorScheme="pink" size="lg">Female</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl isInvalid={errors.role}>
                  <FormLabel fontWeight="medium">Select Role</FormLabel>
                  <Stack direction="row" spacing={4}>
                    <Button
                      flex={1}
                      size="lg"
                      colorScheme={formData.role === 'Student' ? 'blue' : 'gray'}
                      onClick={() => setFormData({...formData, role: 'Student'})}
                      _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
                      transition="all 0.2s"
                    >
                      Student
                    </Button>
                    <Button
                      flex={1}
                      size="lg"
                      colorScheme={formData.role === 'Parent' ? 'blue' : 'gray'}
                      onClick={() => setFormData({...formData, role: 'Parent'})}
                      _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
                      transition="all 0.2s"
                    >
                      Parent
                    </Button>
                  </Stack>
                  <FormErrorMessage>{errors.role}</FormErrorMessage>
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
                  Create Account
                </Button>

                <Flex direction="column" align="center" mt={4}>
                  <Text color="gray.600" mb={2}>Already have an account?</Text>
                  <Button
                    variant="outline"
                    colorScheme="blue"
                    w="100%"
                    onClick={() => navigate("/login")}
                    _hover={{ bg: 'blue.50' }}
                  >
                    Sign In
                  </Button>
                </Flex>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </ChakraBaseProvider>
  );
}