import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
    Box,
    VStack,
    Heading,
    Card,
    CardHeader,
    CardBody,
    Button,
    useToast,
    ChakraBaseProvider,
    Container,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Select,
    Text,
    Spinner
} from "@chakra-ui/react";

export default function AddQuestions() {   

    const navigate = useNavigate();
    const { id } = useParams();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState(Array(8).fill(''));

    useEffect(() => {
        console.log('Current id from params:', id);
        if (!id) {
            toast({
                title: 'Error',
                description: 'No test ID provided',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            navigate('/admin/tests');
            return;
        }
        fetchQuestions();
    }, [id]);

    // Fetch available questions from API
    const fetchQuestions = async () => {
        try {
            const response = await axios.get('http://localhost:5121/api/Question');
            console.log('Questions fetched:', response.data.data);
            setQuestions(response.data.data);
        } catch (error) {
            toast({
                title: 'Error fetching questions',
                description: error.response?.data?.message || 'Failed to load questions',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleQuestionSelect = (index, questionId) => {
        const newSelectedQuestions = [...selectedQuestions];
        newSelectedQuestions[index] = questionId;
        setSelectedQuestions(newSelectedQuestions);
    };

    const handleSubmit = async () => {
        const validQuestions = selectedQuestions.filter(q => q !== '');
        if (validQuestions.length === 0) {
            toast({
                title: 'No questions selected',
                description: 'Please select at least one question',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        if (!id) {
            console.error('Test ID is missing:', id);
            toast({
                title: 'Error',
                description: 'Test ID is missing. Please try again.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            navigate('/admin/tests');
            return;
        }

        setLoading(true);
        try {
            const parsedTestId = parseInt(id);
            console.log('Starting to add questions to test:', parsedTestId);
            // Make individual API calls for each selected question
            const promises = validQuestions.map(async (questionId) => {
                console.log('Sending request for questionId:', questionId, 'to testId:', parsedTestId);
                const response = await axios.post('http://localhost:5121/api/TestQuestion', {
                    testId: parsedTestId,
                    questionId: parseInt(questionId)
                });
                console.log('Response for questionId', questionId, ':', response.data);
                return response;
            });

            // Wait for all API calls to complete
            console.log('Waiting for all questions to be added...');
            const results = await Promise.all(promises);
            console.log('All questions added successfully:', results);
            
            toast({
                title: 'Questions added successfully',
                description: `Added ${validQuestions.length} questions to test ${id}`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            navigate('/admin/tests');
        } catch (error) {
            console.error('Error in handleSubmit:', error);
            console.error('Error response:', error.response?.data);
            toast({
                title: 'Error adding questions',
                description: error.response?.data?.message || 'Something went wrong',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <ChakraBaseProvider>
            <Box 
                minH="100vh" 
                bg="gray.100" 
                py={10}
                position="relative"
            >
                <Button
                    position="absolute"
                    top={4}
                    left={4}
                    colorScheme="blue"
                    size="md"
                    onClick={() => navigate('/admin/tests')}
                >
                    Back to Tests
                </Button>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Container maxW="4xl" p={0}>
                        <Card 
                            variant="elevated" 
                            boxShadow="xl"
                            borderRadius="lg"
                            overflow="hidden"
                        >
                            <CardHeader bg="blue.700" py={6}>
                                <Heading size="md" color="white" textAlign="center">Add Questions to Test</Heading>
                            </CardHeader>
                            <CardBody p={8}>
                                <VStack spacing={6} align="stretch">
                                    <Card variant="outline">
                                        <CardHeader bg="blue.50">
                                            <Heading size="md" color="blue.700">Select Questions</Heading>
                                        </CardHeader>
                                        <CardBody>
                                            {questions.length === 0 ? (
                                                <Box textAlign="center" py={4}>
                                                    <Spinner />
                                                    <Text mt={2}>Loading questions...</Text>
                                                </Box>
                                            ) : (
                                                <>
                                                    <Accordion allowToggle mb={6}>
                                                        <AccordionItem>
                                                            <h2>
                                                                <AccordionButton
                                                                    _expanded={{ bg: 'blue.700', color: 'white' }}
                                                                >
                                                                    <Box flex='1' textAlign='left'>
                                                                        Available Questions ({questions.length})
                                                                    </Box>
                                                                    <AccordionIcon />
                                                                </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={4} bg="white">
                                                                <VStack align="stretch" spacing={3}>
                                                                    {questions.map((question) => (
                                                                        <Box 
                                                                            key={question.questionId}
                                                                            p={3}
                                                                            borderWidth="1px"
                                                                            borderRadius="md"
                                                                            borderColor="gray.200"
                                                                            _hover={{ bg: 'gray.50' }}
                                                                        >
                                                                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                                                                <Box flex="1">
                                                                                    <Text fontWeight="bold">
                                                                                        Question ID: {question.questionId}
                                                                                    </Text>
                                                                                    <Text mt={1}>
                                                                                        {question.question1}
                                                                                    </Text>
                                                                                    <Text fontSize="sm" color="gray.500" mt={1}>
                                                                                        Type: {question.qtype}
                                                                                    </Text>
                                                                                </Box>
                                                                                <Box ml={4}>
                                                                                    {selectedQuestions.includes(question.questionId) ? (
                                                                                        <Text color="green.500" fontSize="sm">
                                                                                            Selected in Question {selectedQuestions.indexOf(question.questionId) + 1}
                                                                                        </Text>
                                                                                    ) : (
                                                                                        <Button
                                                                                            size="sm"
                                                                                            colorScheme="blue"
                                                                                            onClick={() => {
                                                                                                const emptyIndex = selectedQuestions.findIndex(q => !q);
                                                                                                if (emptyIndex !== -1) {
                                                                                                    const newSelectedQuestions = [...selectedQuestions];
                                                                                                    newSelectedQuestions[emptyIndex] = question.questionId;
                                                                                                    setSelectedQuestions(newSelectedQuestions);
                                                                                                } else {
                                                                                                    toast({
                                                                                                        title: 'All slots filled',
                                                                                                        description: 'Remove a question first to add a new one',
                                                                                                        status: 'warning',
                                                                                                        duration: 3000,
                                                                                                        isClosable: true,
                                                                                                    });
                                                                                                }
                                                                                            }}
                                                                                        >
                                                                                            Add to Test
                                                                                        </Button>
                                                                                    )}
                                                                                </Box>
                                                                            </Box>
                                                                        </Box>
                                                                    ))}
                                                                </VStack>
                                                            </AccordionPanel>
                                                        </AccordionItem>
                                                    </Accordion>

                                                    <Accordion allowMultiple>
                                                        {Array(8).fill(null).map((_, index) => (
                                                            <AccordionItem key={index}>
                                                                <h2>
                                                                    <AccordionButton
                                                                        _expanded={{ bg: 'blue.700', color: 'white' }}
                                                                    >
                                                                        <Box flex='1' textAlign='left'>
                                                                            Question {index + 1}
                                                                            {selectedQuestions[index] && (
                                                                                <Text fontSize="sm" color={selectedQuestions[index] ? "green.300" : "inherit"}>
                                                                                    {' '}(Selected: {questions.find(q => q.questionId === selectedQuestions[index])?.question1})
                                                                                </Text>
                                                                            )}
                                                                        </Box>
                                                                        <AccordionIcon />
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4} bg="white">
                                                                    <Box p={2}>
                                                                        {selectedQuestions[index] ? (
                                                                            <Button
                                                                                colorScheme="red"
                                                                                size="sm"
                                                                                onClick={() => {
                                                                                    const newSelectedQuestions = [...selectedQuestions];
                                                                                    newSelectedQuestions[index] = '';
                                                                                    setSelectedQuestions(newSelectedQuestions);
                                                                                }}
                                                                                width="full"
                                                                            >
                                                                                Remove Question
                                                                            </Button>
                                                                        ) : (
                                                                            <Text color="gray.500">
                                                                                No question selected. Select one from the Available Questions above.
                                                                            </Text>
                                                                        )}
                                                                    </Box>
                                                                </AccordionPanel>
                                                            </AccordionItem>
                                                        ))}
                                                    </Accordion>
                                                    <Button
                                                        mt={6}
                                                        colorScheme="blue"
                                                        isLoading={loading}
                                                        onClick={handleSubmit}
                                                        width="full"
                                                    >
                                                        Save Questions
                                                    </Button>
                                                </>
                                            )}
                                        </CardBody>
                                    </Card>
                                </VStack>
                            </CardBody>
                        </Card>
                    </Container>
                </Box>
            </Box>
        </ChakraBaseProvider>
    );  
}
