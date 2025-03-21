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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
} from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';
import { useAuth } from "../Auth/AuthContext";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
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
  const [notApprovedAccounts, setNotApprovedAccounts] = useState();
  const [accounts, setAccounts] = useState([]);
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

  const setApproved = async (accountId) => {
    try {
      if (!accountId) {
        console.error('Account ID is undefined or null');
        return;
      }
      console.log('Approving account with ID:', accountId);
      const response = await axios.put(`http://localhost:5121/api/Account/Approve/?id=`+accountId);
      if (response.data) {
        console.log('Account approved successfully:', response.data);
        await fetchAccounts(); // Refresh the accounts list
      }
    } catch (error) {
      console.error('Error approving account:', error);
    }
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
      
      <Accordion allowToggle>
      <AccordionItem>
        <h5>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h5>
        <AccordionPanel pb={4}>
        <TableContainer>
            <Table variant='simple' colorScheme='blue' size='sm'>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Date of Birth</Th>
                  <Th>Gender</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {accounts.map((account) => (
                  <Tr key={account.accID}>
                    <Td>{account.accName}</Td>
                    <Td>{account.accEmail}</Td>
                    <Td>
                      <Badge 
                        colorScheme={
                          account.role === 'Student' ? 'green' : 
                          account.role === 'Parent' ? 'purple' : 
                          account.role === 'Psychologist' ? 'blue' : 'gray'
                        }
                      >
                        {account.role}
                      </Badge>
                    </Td>
                    <Td>{new Date(account.dob).toLocaleDateString()}</Td>
                    <Td>{account.gender ? 'Male' : 'Female'}</Td>
                    
                    <Td>
                      <Button
                        colorScheme='green'
                        size='xs'
                        mr={2}
                        onClick={() => {
                          
                          console.log('Account being approved:', account);
                          console.log('Account ID:', account.accId);
                          
                          setApproved(account.accId);
                        }}
                        leftIcon={<FontAwesomeIcon icon={faCheck} />}
                      >
                        Approve
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </AccordionPanel>
      </AccordionItem>
      </Accordion>
      </CardFooter>
    </Card>
    
    </VStack>

    </ChakraBaseProvider>
    
    
    </>
  )
}

export default AdminDashboard
