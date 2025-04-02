import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    VStack,
    Heading,
    Text,
    Card,
    CardHeader,
    CardBody,
    Stack,
    StackDivider,
    Badge,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    OrderedList,
    ListItem,
    ChakraBaseProvider,
    Container,
    Center,
    Button
} from "@chakra-ui/react";

export default function TestDetails() {   
    const { id } = useParams();
    const navigate = useNavigate();
    const [test, setTest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [questions, setQuestions] = useState([]);

    const fetchTest = async () => {
        try {
            const response = await axios.get(`http://localhost:5121/api/Test/id?id=${id}`);
            setTest(response.data);
            if (response.data.data.listQuestions) {
                setQuestions(response.data.data.listQuestions);
                console.log('Questions loaded:', response.data.data.listQuestions);
            } else {
                console.log('No questions found in response');
                setQuestions([]);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching test:", error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchTest();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!test) return <div>No test found</div>;

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
                                <Heading size="md" color="white" textAlign="center">Test Information</Heading>
                            </CardHeader>
                            <CardBody p={8}>
                                <VStack spacing={6} align="stretch">
                                    <Card variant="outline">
                                        <CardHeader bg="blue.50">
                                            <Heading size="md" color="blue.700">Test Details</Heading>
                                        </CardHeader>
                                        <CardBody>
                                            <Stack divider={<StackDivider />} spacing={4}>
                                                <Box>
                                                    <Text fontWeight="bold" color="gray.600">Test ID:</Text>
                                                    <Text>{test.data.testId}</Text>
                                                </Box>
                                                <Box>
                                                    <Text fontWeight="bold" color="gray.600">Test Name:</Text>
                                                    <Text>{test.data.testName}</Text>
                                                </Box>
                                                <Box>
                                                    <Text fontWeight="bold" color="gray.600">Description:</Text>
                                                    <Text>{test.data.testDescription}</Text>
                                                </Box>
                                                <Box>
                                                    <Text fontWeight="bold" color="gray.600">Created At:</Text>
                                                    <Text>{new Date(test.data.dateCreated).toLocaleDateString()}</Text>
                                                </Box>
                                                <Box>
                                                    <Text fontWeight="bold" color="gray.600">Updated At:</Text>
                                                    <Text>{new Date(test.data.dateUpdated).toLocaleDateString()}</Text>
                                                </Box>
                                            </Stack>
                                        </CardBody>
                                    </Card>

                                    <Card variant="outline">
                                        <CardHeader bg="blue.50">
                                            <Heading size="md" color="blue.700">
                                                Test Questions
                                            </Heading>
                                        </CardHeader>
                                        <CardBody>
                                            {questions.length > 0 ? (
                                                <Accordion allowMultiple>
                                                    {questions.map((question, index) => (
                                                        <AccordionItem key={question.testQuestionId || index}>
                                                            <h2>
                                                                <AccordionButton 
                                                                    _expanded={{ bg: 'blue.700', color: 'white' }}
                                                                    borderRadius="md"
                                                                    mt={2}
                                                                    p={2}
                                                                >
                                                                    <Box flex='1' textAlign='left'>
                                                                        <Text fontSize="2xl" fontWeight="medium">
                                                                            Question {index + 1}
                                                                        </Text>
                                                                        <Text fontSize="2xl" color="gray.500" noOfLines={2}>
                                                                            {question.question1}
                                                                        </Text>
                                                                    </Box>
                                                                    <AccordionIcon />
                                                                </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={4} pt={4} px={4} bg="gray.50" borderRadius="md">
                                                                <VStack align="stretch" spacing={3}>
                                                                    <Box>
                                                                        <Text fontSize="md" fontWeight="bold" color="gray.600">Test Question ID:</Text>
                                                                        <Text fontSize="md">{question.testQuestionId}</Text>
                                                                    </Box>
                                                                    <Box>
                                                                        <Text fontSize="md" fontWeight="bold" color="gray.600">Question ID:</Text>
                                                                        <Text fontSize="md">{question.questionId}</Text>
                                                                    </Box>
                                                                    <Box>
                                                                        <Text fontSize="md" fontWeight="bold" color="gray.600">Question Type ID:</Text>
                                                                        <Text fontSize="md">{question.qtypeId}</Text>
                                                                    </Box>
                                                                    <Box>
                                                                        <Text fontSize="md" fontWeight="bold" color="gray.600">Question Type:</Text>
                                                                        <Badge fontSize="md" colorScheme="blue">{question.qtype}</Badge>
                                                                    </Box>
                                                                </VStack>
                                                            </AccordionPanel>
                                                        </AccordionItem>
                                                    ))}
                                                </Accordion>
                                            ) : (
                                                <VStack spacing={4} align="center">
                                                    <Text fontSize="sm" color="gray.500">No questions available for this test.</Text>
                                                    <Button
                                                        colorScheme="blue"
                                                        onClick={() => {
                                                            console.log('Navigating to add questions with testId:', test.data.testId);
                                                            navigate(`/admin/tests/add-questions/${test.data.testId}`);
                                                        }}
                                                        size="lg"
                                                        width="full"
                                                    >
                                                        Add Questions
                                                    </Button>
                                                </VStack>
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
