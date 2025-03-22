import AdminMenuBar from "./AdminMenuBar"
import { Icon, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import axios from "axios"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Badge,
    ChakraBaseProvider,
    Heading,
    VStack,
    Card,
    CardHeader,
    CardBody,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    useToast,
    RadioGroup,
    Radio,
    FormErrorMessage,
    HStack,
    ButtonGroup,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Accounts() {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const toast = useToast();
    const [accEmail, setAccEmail] = useState('');
    const [accPass, setAccPass] = useState('');
    const [accName, setAccName] = useState('');
    const [role, setRole] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    const [formData, setFormData] = useState({
        accName: '',
        accEmail: '',
        accPass: '',
        
        role: 'Student',
        dob: '',
        gender: 'true'
    });
    const [formErrors, setFormErrors] = useState({});

    const fetchAccounts = async () => {
        try {
            const response = await axios.get("http://localhost:5121/api/Account");
            const accountsData = response.data.data;
            setAccounts(accountsData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching accounts:", error);
            setError("Failed to fetch accounts");
            setLoading(false);
        }
    };


    const validateForm = () => {
        const errors = {};
        if (!formData.accName) errors.accName = 'Name is required';
        if (!formData.accEmail) errors.accEmail = 'Email is required';
        if (!formData.accPass) errors.accPass = 'Password is required';
        
        if (!formData.dob) errors.dob = 'Date of birth is required';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        

        let data = {
            accName: formData.accName,
            accPass: formData.accPass,
            accEmail: formData.accEmail,
            dob: formData.dob,
            gender: formData.gender,
            role: formData.role,
        }

        console.log('data' + data);
        try {
            const response = await axios.post('http://localhost:5121/api/Account', 
               data,
            );

            console.log(response.data);
            if (response.data) {
                toast({
                    title: 'Success',
                    description: 'Account created successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                setFormData({
                    accName: '',
                    accEmail: '',
                    accPass: '',
                   
                    role: 'Student',
                    dob: '',
                    gender: 'true'
                });
                fetchAccounts();
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to create account',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete('http://localhost:5121/api/Account?id='+id);
            fetchAccounts();
            console.log(id);
        } catch (error) {
            console.error("Error deleting account:", error);
        }
    }
        
    
    useEffect(() => {
        fetchAccounts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <ChakraBaseProvider>
            <AdminMenuBar />
            <VStack py={10} px={5} spacing={5} bg="gray.100">
                <Card width="100%" variant="elevated">
                    <CardHeader>
                        <Heading size="sm" textColor='blue.700'>All Accounts</Heading>
                    </CardHeader>
                    <CardBody>
                        <Box mb={4}>
                        <Accordion allowToggle>
                        <AccordionItem>
                            <h5>
                            <AccordionButton bg='blue.700' textColor='white'>
                                <Box as='span' flex='1' textAlign='left'>
                                 Add an account
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h5>
                            <AccordionPanel pb={4} bg='blue.700' textColor='white' pt={4} px={4} >
                                <Box as="form" onSubmit={handleSubmit} 
                                 sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexWrap: 'wrap',
                                    width: '100%',
                                    gap: 2,
                                  }}
                                >
                                    
                                        
                                            <FormControl isRequired isInvalid={!!formErrors.accName}>
                                                <FormLabel>Name</FormLabel>
                                                Value:{accName}
                                                <Input
                                                    name="accName"
                                                    value={accName}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter full name"
                                                    width="100px"
                                                />
                                                <FormErrorMessage>{formErrors.accName}</FormErrorMessage>
                                            </FormControl>

                                            <FormControl isRequired isInvalid={!!formErrors.accEmail}>
                                                <FormLabel>Email</FormLabel>
                                                Value:{accEmail}
                                                <Input
                                                    name="accEmail"
                                                    type="email"
                                                    value={accEmail}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter email"
                                                    width="100px"
                                                />
                                                <FormErrorMessage>{formErrors.accEmail}</FormErrorMessage>
                                            </FormControl>
                                        

                                        
                                            <FormControl isRequired isInvalid={!!formErrors.accPass}>
                                                <FormLabel>Password</FormLabel>
                                                Value:{accPass}
                                                <Input
                                                    name="accPass"
                                                    type="password"
                                                    value={accPass}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter password"
                                                    width="100px"
                                                />
                                                <FormErrorMessage>{formErrors.accPass}</FormErrorMessage>
                                            </FormControl>

                                            
                                        

                                        
                                            <FormControl isRequired>
                                                <FormLabel>Role</FormLabel>
                                                Value:{role}
                                                <ButtonGroup size='sm' isAttached variant='outline'>
                                                    <Button
                                                        onClick={() => handleInputChange({
                                                            target: { name: 'role', value: 'Student' }
                                                        })}
                                                        colorScheme={formData.role === 'Student' ? 'green' : 'gray'}
                                                        width="100px"
                                                    >
                                                        Student
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleInputChange({
                                                            target: { name: 'role', value: 'Parent' }
                                                        })}
                                                        colorScheme={formData.role === 'Parent' ? 'purple' : 'gray'}
                                                        width="100px"
                                                    >
                                                        Parent
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleInputChange({
                                                            target: { name: 'role', value: 'Psychologist' }
                                                        })}
                                                        colorScheme={formData.role === 'Psychologist' ? 'blue' : 'gray'}
                                                        width="100px"
                                                    >
                                                        Psychologist
                                                    </Button>
                                                </ButtonGroup>
                                            </FormControl>

                                            <FormControl isRequired isInvalid={!!formErrors.dob}>
                                                <FormLabel>Date of Birth</FormLabel>
                                                Value:{dob}
                                                <Input
                                                    name="dob"
                                                    type="date"
                                                    value={dob}
                                                    onChange={handleInputChange}
                                                    width="100px"
                                                />
                                                <FormErrorMessage>{formErrors.dob}</FormErrorMessage>
                                            </FormControl>
                                       

                                        <FormControl isRequired>
                                            <FormLabel>Gender</FormLabel>
                                            Value:{gender}
                                            <RadioGroup
                                                value={gender}
                                                onChange={(value) => handleInputChange({
                                                    target: { name: 'gender', value }
                                                })}
                                            >
                                                <Stack direction="row">
                                                    <Radio value="true">Male</Radio>
                                                    <Radio value="false">Female</Radio>
                                                </Stack>
                                            </RadioGroup>
                                        </FormControl>

                                        <Button
                                            mt={4}
                                            colorScheme="blue"
                                            type="submit"
                                            width="full"
                                        >
                                            Create Account
                                        </Button>
                                    
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        </Accordion>
                        </Box>
                        <Box overflowX="auto" bg='blue.700' textColor='white' rounded='md'>
                            
                            <TableContainer>
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th>Account Name</Th>
                                            <Th>Email</Th>
                                            <Th>Role</Th>
                                            <Th>Date of Birth</Th>
                                            <Th>Gender</Th>
                                            <Th>Status</Th>
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
                                                    <Badge
                                                        colorScheme={account.isApproved ? 'green' : 'red'}
                                                    >
                                                        {account.isApproved ? 'Approved' : 'Pending'}
                                                    </Badge>
                                                </Td>
                                                <Td>
                                                    <Button  size={'lg'} rounded={'md'}>
                                                        Edit
                                                    </Button>
                                                    
                                                </Td>
                                                <Td>
                                                    <Button  size={'lg'} rounded={'md'} onClick={() => handleDelete(account.accId)}>
                                                        Delete
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </CardBody>
                </Card>
            </VStack>
            
        </ChakraBaseProvider>
    );
}