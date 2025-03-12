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
} from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';

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
import AdminMenuBar from "./AdminMenuBar";
 {/*accounts DTO*/}
 var Accounts = {
  accID : Number,
  accName : String,
  accPass : String,
  accEmail : String,
  dob : Date,
  gender :  Boolean,
  role : String,
}
{/*Accounts DTO*/}

const AdminDashboard = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <>
    <AdminMenuBar> </AdminMenuBar>
    <Flex width={"100vw"} height={"100vh"} alignItems={"center"} justifyContent={"center"} bg={"gray.100"} >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >           
      <Heading as='h5' size='md'>  Edit Account </Heading>
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
      <Box minW={{ base: "90%", md: "468px" }} variant='filled' borderWidth='1px' p='8' borderRadius='lg' bg='white'>
        <Form>
        {/*Username goes here*/}
       
          <FormControl id='email' py='3' isRequired>
            <FormLabel>Email address</FormLabel>
            <Input variant='outline' type='email' size ='lg' />
            
          </FormControl>
       
        
        {/*Password goes here*/}
        <FormControl id='password'py='3' isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} />
            <InputRightElement>
              <Button variant="outline" h='1.75rem' size='sm' colorPalette="teal" onClick={handleShowClick}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        

        <Center>
          <Button type='submit' colorScheme='blue' py='3'  variant='outline' w='50%' bg='blue.700' color='white'>
            Sign in
          </Button>
        </Center>
      </Form>
      </Box>
      </Formik>
        </Stack>
    </Flex>
    </>
  )
}

export default AdminDashboard
