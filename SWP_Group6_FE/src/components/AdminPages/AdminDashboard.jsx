import { useEffect, useState } from "react";
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
 var Accounts = [{
  accID : Number,
  accName : String,
  accPass : String,
  accEmail : String,
  dob : Date,
  gender :  Boolean,
  isApproved : Boolean,
  isActive : Boolean,
  role : String,
}];
{/*Accounts DTO*/}

const AdminDashboard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notApprovedAccounts, setNotApprovedAccounts] = useState([{Accounts}]);
  const [accounts, setAccounts] = useState([
    {
      accID: Number,
      accName: String,
      accEmail: String,
      accPass: String,
      dob: Date,
      gender: Boolean,
      role: String,
      isApproved: Boolean,
      isActive: Boolean
    }
  ]);
  {/*Fetch accounts from API
  const fetchAccounts = async () => {
    try {
      const response = await axios.get("http://localhost:5121/api/Account/");
      setAccounts(response.data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };*/}

  const getPendingAccounts = () => {  
    const filteredAccounts = accounts.filter(account => !account.isApproved);
    console.log('filteredAccounts' + filteredAccounts);
    return accounts.filter(account => !account.isApproved);
  };
  
  const fetchAccounts= async () => {
    const response = await axios.get(
    "http://localhost:5121/api/Account",)
  
    setAccounts(response.data);
  }

  const handleShowClick = () => setShowPassword(!showPassword);

  useEffect(() => {
    fetchAccounts();
  }, []);
  return (
    <>
    <AdminMenuBar/> 
    
    <VStack px={5} py={10} spacing={10} maxW='100vw' maxH='100vh' columns={2} bg='gray.100'>
    <Card variant='filled' bg='blue.700' textColor='white' size='md' rounded='md'px={5} py={5}>
      <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
    </VStack>

  
    </>
  )
}

export default AdminDashboard
