import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import instance from "../config/axios";
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


export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const validatePasswords = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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

  return(
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
            Value: {formData.email}
            <Input 
              variant='filled'
              placeholder='Your email'
              type='email'
              size='lg'
              value={formData.email}
              onChange={(e) => setFormData({
                ...formData,
                email: e.target.value
              })}
            />
          </FormControl>
       
        
        {/*Password goes here*/}
        <FormControl id='password' py='3' isRequired isInvalid={!!passwordError}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            
            <Input 
              type={showPassword ? "text" : "password"} 
              variant={'outline'} 
              placeholder="Your password"
              value={formData.password}
              onChange={(e) => setFormData({
                ...formData,
                password: e.target.value
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
        
        <FormControl id='confirmPassword' py='3' isRequired isInvalid={!!passwordError}>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              variant={'outline'}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({
                ...formData,
                confirmPassword: e.target.value
              })}
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
            <FormErrorMessage>{passwordError}</FormErrorMessage>
          )}
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
            isDisabled={!!passwordError}
          >
            Register
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