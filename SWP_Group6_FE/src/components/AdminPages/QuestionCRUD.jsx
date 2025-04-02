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
  HStack,
  Icon,
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import AdminMenuBar from './AdminMenuBar';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function QuestionCRUD(){
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const toast = useToast();
   
    const [questionTypes, setQuestionTypes] = useState([]);

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

    const fetchQuestionTypes = async () => {
        try {
            const response = await axios.get("http://localhost:5121/api/QuestionType");
            const typesData = response.data.data;
            console.log("Question Types:", typesData);
            setQuestionTypes(typesData);
        } catch (error) {
            console.error("Error fetching question types:", error);
            toast({
                title: 'Error',
                description: 'Failed to load question types',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value, qtypeId } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(qtypeId && name === 'qtype' ? { qtypeId } : {})
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate required fields
        if (!formData.question1 || !formData.qtypeId) {
            toast({
                title: 'Error',
                description: 'Please fill in all required fields',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        // Prepare data for API call
        const data = {
            question1: formData.question1,
            qtypeId: formData.qtypeId
        };

        try {
            const response = await axios.post('http://localhost:5121/api/Question', data);

            if (response.data) {
                toast({
                    title: 'Success',
                    description: 'Question created successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                
                // Reset form
                setFormData({
                    questionId: 0,
                    qtypeId: 0,
                    question1: '',
                    isDeleted: false,
                    qtype: ''
                });
                
                // Refresh questions list
                fetchQuestions();
            }
        } catch (error) {
            console.error('Error creating question:', error);
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to create question',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete('http://localhost:5121/api/Question?id='+id);
            fetchQuestions();
            console.log(id);
        } catch (error) {
            console.error("Error deleting account:", error);
        }
    }
        
    
    useEffect(() => {
        fetchQuestions();
        fetchQuestionTypes();
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
                                                Add to Question Bank
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
                                        

                                        

                                        <FormControl isRequired isInvalid={!!formErrors.question1} gridColumn="span 2">
                                            <FormLabel fontWeight="medium">Question</FormLabel>
                                            <Input
                                                name="question1"
                                                value={formData.question1}
                                                onChange={handleInputChange}
                                                placeholder="Enter your question here"
                                                bg="white"
                                                borderColor="gray.300"
                                                _hover={{ borderColor: 'blue.400' }}
                                                _focus={{ borderColor: 'blue.500', shadow: 'outline' }}
                                            />
                                            <FormErrorMessage>{formErrors.question1}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl isRequired gridColumn="span 2">
                                            <FormLabel fontWeight="medium">Question Type</FormLabel>
                                            <RadioGroup
                                                value={formData.qtype}
                                                onChange={(value) => handleInputChange({
                                                    target: {
                                                        name: 'qtype',
                                                        value: value,
                                                        qtypeId: questionTypes.find(t => t.qtype === value)?.qtypeId
                                                    }
                                                })}
                                            >
                                                <Stack direction="row" spacing={8} justify="center">
                                                    {questionTypes.map((type) => (
                                                        <Radio
                                                            key={type.qtypeId}
                                                            value={type.qtype}
                                                            colorScheme={
                                                                type.qtype === 'Cognitive' ? 'green' :
                                                                type.qtype === 'Social' ? 'purple' :
                                                                type.qtype === 'Emotional' ? 'blue' : 'gray'
                                                            }
                                                            size="lg"
                                                        >
                                                            {type.qtype}
                                                        </Radio>
                                                    ))}
                                                </Stack>
                                            </RadioGroup>
                                            <FormErrorMessage>{formErrors.qtype}</FormErrorMessage>
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