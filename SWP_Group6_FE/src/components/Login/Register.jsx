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
  useToast,
  Radio,
  RadioGroup,
  Text,
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
    isApproved : false,
    isActive : true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');

  const validatePasswords = () => {
    if (!confirmPassword.match(formData.accPass)) {
      setPasswordError('Passwords do not match');
      return false;
    }
    if (formData.accPass.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      accPass: e.target.value
    });
    validatePasswords();
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!validatePasswords()) {
      return;
    }

    try {
      const response = await instance.post('/Account/register', {
        ...formData,
        confirmPassword: undefined
      });
      console.log('Register response:', response);
    } catch (error) {
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
      <Box maxW={{ base: "90%", md: "468px" }}  borderWidth='1px' p='8' borderRadius='lg' bg='gray.300'>
        <Form onSubmit={handleSubmit}>
        {/*Username goes here*/}

          <FormControl id='email' py='3' isRequired>
            <FormLabel>Email address</FormLabel>
            Value: {formData.accEmail}
            <Input 
              variant='filled'
              //placeholder='Your email'
              type='email'
              size='lg'
              //value={formData.accEmail}
              onChange={(e) => setFormData({
                ...formData,
                accEmail: e.target.value
              })}
            />
          </FormControl>

          {/* Form Control username */}
          <FormControl id='username' py='3' isRequired>
            <FormLabel>User Name</FormLabel>
            Value: {formData.accName}
            <Input 
              variant='filled'
              //placeholder='Your username'
              type='text'
              size='lg'
              //value={formData.accName}
              onChange={(e) => setFormData({
                ...formData,
                accName: e.target.value
              })}
            />
          </FormControl>
          {/* Form Control username */}

        
        {/*Password goes here*/}
        <FormControl id='password' py='3' isRequired isInvalid={!!passwordError}>
          <FormLabel>Password</FormLabel>
          Value: {formData.accPass}
          <InputGroup>
            
            <Input 
              type={showPassword ? "text" : "password"} 
              variant={'outline'} 
              //placeholder="Your password"
              //value={formData.accPass}
              onChange={handlePasswordChange}
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
        
        <FormControl id='confirmPassword' py='3' isRequired isInvalid={!!passwordError}>
          <FormLabel>Confirm Password</FormLabel>
          Value: {confirmPassword}
          <InputGroup>
            
            <Input
              type={showConfirmPassword ? "text" : "password"}
              variant={'outline'}
              //placeholder="Confirm your password"
              //value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <InputRightElement>
              <Button
                variant="outline"
                h='1.75rem'
                size='sm'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {passwordError && (
            <FormErrorMessage textColor={"red"}>{passwordError}</FormErrorMessage>
          )}
        </FormControl>
        
        {/* Form Control dob */}
        <FormControl id='dob' py='3' isRequired>
            <FormLabel>Date of Birth</FormLabel>
            Value: {formData.dob}
            <Input 
              variant='filled'
              //placeholder={formData.dob}
              type='date'
              size='lg'
              //value={formData.dob}
              onChange={(e) => setFormData({
                ...formData,
                dob: e.target.value
              })}
            />
          </FormControl>
        {/* Form Control dob */}  
          
        {/* Form Control gender */}
        <FormControl id='gender' py='3' isRequired>
          <FormLabel>Gender</FormLabel>
          Value: {String(formData.gender)}
          <RadioGroup
            //value={String(formData.gender)}
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
        {/* Form Control gender */} 

        {/* Form Control role */}
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
        {/* Form Control role */}

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
            isDisabled={!!passwordError}
          >
            Register
          </Button>
          
        </VStack>
        
      </Form>
      </Box>
      </Formik>
        </Stack>
    </Flex>
    
      )
}

{/*const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'string'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await instance.post('/Account/register', formData);
      console.log('Register response:', response);

      if (response.status === 200) {
        alert("Đăng ký thành công! Vui lòng đăng nhập.");
        navigate("/login");
      }
    } catch (error) {
      console.error('Register error:', error);
      setError("Có lỗi xảy ra khi đăng ký. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Đăng ký tài khoản</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? "Đang xử lý..." : "Đăng ký"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
            Đã có tài khoản? Đăng nhập ngay
          </Link>
        </div>
      </div>
    </div>
  );
};
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../components/Auth/AuthContext";
import instance from "../config/axios";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await instance.post('/Account/login', formData);
      console.log('Login response:', response);

      if (response.status === 200) {
        login();
        navigate("/studenthome");
      }
    } catch (error) {
      console.error('Login error:', error);
      setError("Email hoặc mật khẩu không đúng!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? "Đang xử lý..." : "Đăng nhập"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/register" className="text-indigo-600 hover:text-indigo-500">
            Chưa có tài khoản? Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>*/}