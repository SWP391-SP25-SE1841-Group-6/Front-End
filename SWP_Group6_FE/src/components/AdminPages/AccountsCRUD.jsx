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
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

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
                            <AccordionButton
                                bg='blue.700'
                                textColor='white'
                                _hover={{
                                    bg: 'blue.600',
                                    transform: 'translateY(-2px)',
                                    shadow: 'lg'
                                }}
                                _expanded={{
                                    bg: 'blue.800',
                                    transform: 'translateY(0)',
                                }}
                                transition="all 0.2s"
                                borderRadius="lg"
                                py={4}
                                px={6}
                            >
                                <HStack flex='1' spacing={3}>
                                    <Icon as={AddIcon} w={5} h={5} />
                                    <Box as='span' textAlign='left' fontSize="lg" fontWeight="bold">
                                        Add an Account
                                    </Box>
                                </HStack>
                                <AccordionIcon w={6} h={6} />
                            </AccordionButton>
                            </h5>
                            <AccordionPanel 
                                pb={6} 
                                bg='white' 
                                borderRadius="lg"
                                mt={2}
                                shadow="lg"
                            >
                                <Box 
                                    as="form" 
                                    onSubmit={handleSubmit} 
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: 6,
                                        p: 4
                                    }}
                                >
                                    <FormControl isRequired isInvalid={!!formErrors.accName}>
                                        <FormLabel fontWeight="medium">Name</FormLabel>
                                        <Input
                                            name="accName"
                                            value={accName}
                                            onChange={handleInputChange}
                                            placeholder="Enter full name"
                                            bg="white"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'blue.400' }}
                                            _focus={{ borderColor: 'blue.500', shadow: 'outline' }}
                                        />
                                        <FormErrorMessage>{formErrors.accName}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!formErrors.accEmail}>
                                        <FormLabel fontWeight="medium">Email</FormLabel>
                                        <Input
                                            name="accEmail"
                                            type="email"
                                            value={accEmail}
                                            onChange={handleInputChange}
                                            placeholder="Enter email"
                                            bg="white"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'blue.400' }}
                                            _focus={{ borderColor: 'blue.500', shadow: 'outline' }}
                                        />
                                        <FormErrorMessage>{formErrors.accEmail}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!formErrors.accPass}>
                                        <FormLabel fontWeight="medium">Password</FormLabel>
                                        <Input
                                            name="accPass"
                                            type="password"
                                            value={accPass}
                                            onChange={handleInputChange}
                                            placeholder="Enter password"
                                            bg="white"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'blue.400' }}
                                            _focus={{ borderColor: 'blue.500', shadow: 'outline' }}
                                        />
                                        <FormErrorMessage>{formErrors.accPass}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!formErrors.dob}>
                                        <FormLabel fontWeight="medium">Date of Birth</FormLabel>
                                        <Input
                                            name="dob"
                                            type="date"
                                            value={dob}
                                            onChange={handleInputChange}
                                            bg="white"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'blue.400' }}
                                            _focus={{ borderColor: 'blue.500', shadow: 'outline' }}
                                        />
                                        <FormErrorMessage>{formErrors.dob}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel fontWeight="medium">Role</FormLabel>
                                        <RadioGroup
                                            value={formData.role}
                                            onChange={(value) => handleInputChange({
                                                target: { name: 'role', value }
                                            })}
                                        >
                                            <Stack direction="row" spacing={8}>
                                                <Radio 
                                                    value="Student" 
                                                    colorScheme="green"
                                                    size="lg"
                                                >
                                                    Student
                                                </Radio>
                                                <Radio 
                                                    value="Parent" 
                                                    colorScheme="purple"
                                                    size="lg"
                                                >
                                                    Parent
                                                </Radio>
                                                <Radio 
                                                    value="Psychologist" 
                                                    colorScheme="blue"
                                                    size="lg"
                                                >
                                                    Psychologist
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel fontWeight="medium">Gender</FormLabel>
                                        <RadioGroup
                                            value={formData.gender}
                                            onChange={(value) => handleInputChange({
                                                target: { name: 'gender', value }
                                            })}
                                        >
                                            <Stack direction="row" spacing={8}>
                                                <Radio value="true" colorScheme="blue">Male</Radio>
                                                <Radio value="false" colorScheme="pink">Female</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </FormControl>

                                    <Button
                                        gridColumn="span 2"
                                        mt={6}
                                        colorScheme="blue"
                                        type="submit"
                                        size="lg"
                                        _hover={{ transform: 'translateY(-2px)' }}
                                        transition="all 0.2s"
                                    >
                                        Create Account
                                    </Button>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        </Accordion>
                        </Box>
                        <Box overflowX="auto" bg='white' shadow="xl" rounded='lg' my={4}>
                            <TableContainer>
                                <Table variant="simple" colorScheme="blue">
                                    <Thead bg="blue.700">
                                        <Tr>
                                            <Th textColor='white' fontSize="md">Account Name</Th>
                                            <Th textColor='white' fontSize="md">Email</Th>
                                            <Th textColor='white' fontSize="md">Role</Th>
                                            <Th textColor='white' fontSize="md">Date of Birth</Th>
                                            <Th textColor='white' fontSize="md">Gender</Th>
                                            <Th textColor='white' fontSize="md">Status</Th>
                                            <Th textColor='white' fontSize="md">Actions</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {accounts.map((account) => (
                                            <Tr 
                                                key={account.accID}
                                                _hover={{ bg: "gray.50" }}
                                                transition="background-color 0.2s"
                                            >
                                                <Td fontWeight="medium">{account.accName}</Td>
                                                <Td>{account.accEmail}</Td>
                                                <Td>
                                                    <Badge
                                                        px={3}
                                                        py={1}
                                                        borderRadius="full"
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
                                                <Td>
                                                    <Badge
                                                        px={2}
                                                        py={1}
                                                        borderRadius="full"
                                                        colorScheme={account.gender ? 'blue' : 'pink'}
                                                    >
                                                        {account.gender ? 'Male' : 'Female'}
                                                    </Badge>
                                                </Td>
                                                <Td>
                                                    <Badge
                                                        px={3}
                                                        py={1}
                                                        borderRadius="full"
                                                        colorScheme={account.isApproved ? 'green' : 'red'}
                                                    >
                                                        {account.isApproved ? 'Approved' : 'Pending'}
                                                    </Badge>
                                                </Td>
                                                <Td>
                                                    <ButtonGroup spacing={2} size="sm">
                                                        <Button
                                                            leftIcon={<EditIcon />}
                                                            colorScheme="yellow"
                                                            variant="solid"
                                                            onClick={() => handleEdit(account)}
                                                            _hover={{ transform: 'translateY(-2px)' }}
                                                            transition="all 0.2s"
                                                        >
                                                            Edit
                                                        </Button>
                                                        <Button
                                                            leftIcon={<DeleteIcon />}
                                                            colorScheme="red"
                                                            variant="solid"
                                                            onClick={() => handleDelete(account.accId)}
                                                            _hover={{ transform: 'translateY(-2px)' }}
                                                            transition="all 0.2s"
                                                        >
                                                            Delete
                                                        </Button>
                                                    </ButtonGroup>
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