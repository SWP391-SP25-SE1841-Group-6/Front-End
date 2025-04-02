import { useState, useEffect } from 'react';
import {
  ChakraBaseProvider,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  ButtonGroup,
  RadioGroup,
  Radio,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import AdminMenuBar from './AdminMenuBar';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function QuestionCRUD(){
    const [questions, setQuestions] = useState([]);
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
        questionId: 0,
        qtypeId: 0,
        question1: '',
        isDeleted: false,
        qtype: ''
    });
    const [formErrors, setFormErrors] = useState({
        questionId: '',
        qtypeId: '',
        question1: '',
        qtype: ''
    });

    const fetchQuestions = async () => {
        try {
            const response = await axios.get("http://localhost:5121/api/Question");
            const accountsData = response.data.data;
            console.log(accountsData);
            setQuestions(accountsData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching questions:", error);
            setError("Failed to fetch questions");
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        
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
                fetchQuestions();
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
            fetchQuestions();
            console.log(id);
        } catch (error) {
            console.error("Error deleting account:", error);
        }
    }
        
    
    useEffect(() => {
        fetchQuestions();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return(
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
                                     Add to Question Bank
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
                                      
                                                <FormControl isRequired isInvalid={!!formErrors.questionId}>
                                                    <FormLabel>Question ID</FormLabel>
                                                    <Input
                                                        name="questionId"
                                                        type="number"
                                                        value={formData.questionId}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter question ID"
                                                        width="100px"
                                                    />
                                                    <FormErrorMessage>{formErrors.questionId}</FormErrorMessage>
                                                </FormControl>
    
                                                <FormControl isRequired isInvalid={!!formErrors.qtypeId}>
                                                    <FormLabel>Question Type ID</FormLabel>
                                                    <Input
                                                        name="qtypeId"
                                                        type="number"
                                                        value={formData.qtypeId}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter question type ID"
                                                        width="100px"
                                                    />
                                                    <FormErrorMessage>{formErrors.qtypeId}</FormErrorMessage>
                                                </FormControl>
                                            
                                                <FormControl isRequired isInvalid={!!formErrors.question1}>
                                                    <FormLabel>Question</FormLabel>
                                                    <Input
                                                        name="question1"
                                                        value={formData.question1}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter question"
                                                        width="100px"
                                                    />
                                                    <FormErrorMessage>{formErrors.question1}</FormErrorMessage>
                                                </FormControl>
    
                                                <FormControl isRequired>
                                                    <FormLabel>Question Type</FormLabel>
                                                    <ButtonGroup size='sm' isAttached variant='outline'>
                                                        <Button
                                                            onClick={() => handleInputChange({
                                                                target: { name: 'qtype', value: 'Cognitive' }
                                                            })}
                                                            colorScheme={formData.qtype === 'Cognitive' ? 'green' : 'gray'}
                                                            width="100px"
                                                        >
                                                            Cognitive
                                                        </Button>
                                                        <Button
                                                            onClick={() => handleInputChange({
                                                                target: { name: 'qtype', value: 'Social' }
                                                            })}
                                                            colorScheme={formData.qtype === 'Social' ? 'purple' : 'gray'}
                                                            width="100px"
                                                        >
                                                            Social
                                                        </Button>
                                                        <Button
                                                            onClick={() => handleInputChange({
                                                                target: { name: 'qtype', value: 'Emotional' }
                                                            })}
                                                            colorScheme={formData.qtype === 'Emotional' ? 'blue' : 'gray'}
                                                            width="100px"
                                                        >
                                                            Emotional
                                                        </Button>
                                                    </ButtonGroup>
                                                </FormControl>
    
                                                <FormControl>
                                                    <FormLabel>Is Deleted</FormLabel>
                                                    <RadioGroup
                                                        value={formData.isDeleted.toString()}
                                                        onChange={(value) => handleInputChange({
                                                            target: { name: 'isDeleted', value: value === 'true' }
                                                        })}
                                                    >
                                                        <Stack direction="row">
                                                            <Radio value="true">Yes</Radio>
                                                            <Radio value="false">No</Radio>
                                                        </Stack>
                                                    </RadioGroup>
                                                </FormControl>
    
                                            <Button
                                                mt={4}
                                                colorScheme="blue"
                                                type="submit"
                                                width="full"
                                            >
                                                Create Question
                                            </Button>
                                        
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                            </Accordion>
                            </Box>
                            <Box overflowX="auto" bg='white' shadow="lg" rounded='lg' my={4}>
                                <TableContainer>
                                    <Table variant="simple" colorScheme="blue">
                                        <Thead bg="blue.700">
                                            <Tr>
                                                <Th textColor='white' fontSize="md">Question ID</Th>
                                                <Th textColor='white' fontSize="md">Question</Th>
                                                <Th textColor='white' fontSize="md">Type ID</Th>
                                                <Th textColor='white' fontSize="md">Question Type</Th>
                                                <Th textColor='white' fontSize="md">Status</Th>
                                                <Th textColor='white' fontSize="md">Actions</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {questions.map((question) => (
                                                <Tr key={question.questionId} 
                                                    _hover={{ bg: "gray.50" }}
                                                    transition="background-color 0.2s"
                                                >
                                                    <Td fontWeight="medium">{question.questionId}</Td>
                                                    <Td maxW="300px" overflow="hidden" textOverflow="ellipsis">
                                                        {question.question1}
                                                    </Td>
                                                    <Td>{question.qtypeId}</Td>
                                                    <Td>
                                                        <Badge
                                                            px={3}
                                                            py={1}
                                                            borderRadius="full"
                                                            colorScheme={
                                                                question.qtype === 'Cognitive' ? 'green' :
                                                                question.qtype === 'Social' ? 'purple' :
                                                                question.qtype === 'Emotional' ? 'blue' : 'gray'
                                                            }
                                                            fontSize="sm"
                                                        >
                                                            {question.qtype}
                                                        </Badge>
                                                    </Td>
                                                    <Td>
                                                        <Badge
                                                            px={3}
                                                            py={1}
                                                            borderRadius="full"
                                                            colorScheme={question.isDeleted ? 'red' : 'green'}
                                                            fontSize="sm"
                                                        >
                                                            {question.isDeleted ? 'Deleted' : 'Active'}
                                                        </Badge>
                                                    </Td>
                                                    <Td>
                                                        <ButtonGroup spacing={2} size="sm">
                                                            <Button
                                                                leftIcon={<EditIcon />}
                                                                colorScheme="yellow"
                                                                variant="solid"
                                                                onClick={() => handleEdit(question)}
                                                                _hover={{ transform: 'translateY(-2px)' }}
                                                                transition="all 0.2s"
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Button
                                                                leftIcon={<DeleteIcon />}
                                                                colorScheme="red"
                                                                variant="solid"
                                                                onClick={() => handleDelete(question.questionId)}
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