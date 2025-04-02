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
  Container,
} from "@chakra-ui/react";
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
import AdminMenuBar from "./AdminMenuBar";
import AdminFooter from "./AdminFooter";
import { toast } from "materialize-css";
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
  const [students, setStudents] = useState([]); 
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
  //console.log(localStorage.getItem('token'));

  const fetchStudents = async () => {
    let students = [];
    const response = await axios.get("http://localhost:5121/api/Account");
    students = response.data;
    console.log('students: ' + JSON.stringify(students.data.filter(account => account.role === 'Student')));
  }
  
  

  const fetchAccounts= async () => {
    try{
    const response = await axios.get(
    "http://localhost:5121/api/Account/Unapproved")
    
    if(response.data.data){
    const unapprovedAccounts = response.data.data;
    console.log('response.data: ' + JSON.stringify(response.data.data));
    
    setAccounts(unapprovedAccounts);
    console.log('account: ' + unapprovedAccounts.length);
    }else{
      toast.success("all accounts approved !", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            }
    }catch(error){
      toast.error(response.data.message || "Server Error", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
    }
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
    fetchStudents();
  }, []);
  return (
    <>
    
    <ChakraBaseProvider>
    <AdminMenuBar/> 
    
    <Box minH="100vh" bg="gray.100" py={8}>
      <Container maxW="7xl" centerContent px={'40'}>
        <Box w="full" maxW="1200px">
          <SimpleGrid 
            columns={{ base: 1, lg: 2 }} 
            spacing={'80'} 
            mb={8} 
            
          >
            {/* Pending Accounts Card */}
            <Card 
              variant='elevated' 
              bg='white' 
              shadow="xl" 
              rounded='xl' 
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', shadow: '2xl' }}
              w={{ base: "full", lg: "550px" }}
            >
              <CardHeader bg="blue.700" py={4}>
                <Heading size='md' color="white">Pending Accounts</Heading>
              </CardHeader>
              <CardBody p={6}>
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="lg" fontWeight="medium">
                    Number of pending accounts: {accounts.length}
                  </Text>
                  <Accordion allowToggle>
                    <AccordionItem border="none">
                      <AccordionButton 
                        bg="blue.50" 
                        rounded="md" 
                        _hover={{ bg: 'blue.100' }}
                      >
                        <Box flex='1' textAlign='left' fontWeight="medium">
                          View Pending Accounts
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel py={4}>
                        <Box overflowX="auto" shadow="sm" rounded="lg">
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
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </VStack>
              </CardBody>
            </Card>

            {/* Assigning Parents Card */}
            <Card 
              variant='elevated' 
              bg='white' 
              shadow="xl" 
              rounded='xl'
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', shadow: '2xl' }}
              w={{ base: "full", lg: "550px" }}
            >
              <CardHeader bg="blue.700" py={4}>
                <Heading size='md' color="white">Assigning Parents</Heading>
              </CardHeader>
              <CardBody p={6}>
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="lg" fontWeight="medium">
                    Pending assignments: {/* Add count here */}
                  </Text>
                  <Accordion allowToggle>
                    <AccordionItem border="none">
                      <AccordionButton 
                        bg="blue.50" 
                        rounded="md"
                        _hover={{ bg: 'blue.100' }}
                      >
                        <Box flex='1' textAlign='left' fontWeight="medium">
                          View Assignments
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel py={4}>
                        <Box overflowX="auto" shadow="sm" rounded="lg">
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
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
    <AdminFooter/>
    
    </ChakraBaseProvider>
    
    
    </>
  )
}

export default AdminDashboard
