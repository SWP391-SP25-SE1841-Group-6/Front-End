import { useEffect, useState } from "react";
import React from "react";
import axios from 'axios';
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
  Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text,
  VStack,
  ChakraBaseProvider,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';
import { useAuth } from "../Auth/AuthContext";
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
 var Accounts = [{
  accID : Number,
  accName : String,
  accPass : String,
  accEmail : String,
  dob : Date,
  gender :  Boolean,
  role : String,
  isApproved : Boolean,
  isActive : Boolean,
  
}];
{/*Accounts DTO*/}

const AdminDashboard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notApprovedAccounts, setNotApprovedAccounts] = useState([{Accounts}]);
  const [accounts, setAccounts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  {/*Fetch accounts from API
  const fetchAccounts = async () => {
    try {
      const response = await axios.get("http://localhost:5121/api/Account/");
      setAccounts(response.data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };*/}
  console.log(localStorage.getItem('token'));

  const getPendingAccounts = () => {  
    const filteredAccounts = accounts.filter(account => !account.isApproved);
    console.log('filteredAccounts' + filteredAccounts);
    return accounts.filter(account => !account.isApproved);
  };
  
  

  const fetchAccounts= async () => {
    const response = await axios.get(
    "http://localhost:5121/api/Account/Unapproved")
  
    const unapprovedAccounts = response.data.data;
    console.log('response.data: ' + JSON.stringify(response.data.data));
    
    setAccounts(unapprovedAccounts);
    console.log('account: ' + unapprovedAccounts.length);
    
  }

  const handleShowClick = () => setShowPassword(!showPassword);

  useEffect(() => {
    fetchAccounts();
  }, []);
  return (
    <>

    <ChakraBaseProvider>
    <AdminMenuBar/> 
    <VStack px={5} py={10} spacing={10} maxW='100vw' maxH='100vh' columns={2} bg='gray.100'>
    <Card variant='filled' bg='blue.700' textColor='white' size='md' rounded='md'px={5} py={5}>
      <CardHeader>
        <Heading size='md'> Pending Accounts</Heading>
      </CardHeader>
      <CardBody>
        <Text>Number of pending accounts: {accounts.length}</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={onOpen}>View here</Button>
      </CardFooter>
    </Card>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </VStack>

    </ChakraBaseProvider>
    
    
    </>
  )
}

export default AdminDashboard
