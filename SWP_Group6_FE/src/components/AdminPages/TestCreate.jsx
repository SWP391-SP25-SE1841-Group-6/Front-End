import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Box,
    VStack,
    Heading,
    Card,
    CardHeader,
    CardBody,
    Stack,
    Input,
    Button,
    useToast,
    ChakraBaseProvider,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage
} from "@chakra-ui/react";

export default function TestCreate() {   
    const navigate = useNavigate();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [testData, setTestData] = useState({
        testName: ''
    });
    const [testId, setTestId] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!testData.testName.trim()) {
            newErrors.testName = 'Test name is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTestData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5121/api/Test', {
                testName: testData.testName
            });
            
            // Save testId from response
            const newTestId = response.data.data.testId;
            setTestId(newTestId);
            
            toast({
                title: 'Test created successfully',
                description: `Test ID: ${newTestId}`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            
            // Navigate to add questions page
            navigate(`/admin/tests/add-questions/${newTestId}`);
        } catch (error) {
            toast({
                title: 'Error creating test',
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
                                <Heading size="md" color="white" textAlign="center">Create New Test</Heading>
                            </CardHeader>
                            <CardBody p={8}>
                                <VStack spacing={6} align="stretch">
                                    <Card variant="outline">
                                        <CardHeader bg="blue.50">
                                            <Heading size="md" color="blue.700">Add a test name</Heading>
                                        </CardHeader>
                                        <CardBody>
                                            <Stack spacing={4}>
                                                <FormControl isInvalid={errors.testName}>
                                                    <FormLabel fontWeight="bold" color="gray.600">Test Name</FormLabel>
                                                    <Input
                                                        name="testName"
                                                        value={testData.testName}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter test name"
                                                    />
                                                    <FormErrorMessage>{errors.testName}</FormErrorMessage>
                                                </FormControl>

                                                <Button
                                                    mt={4}
                                                    colorScheme="blue"
                                                    isLoading={loading}
                                                    onClick={handleSubmit}
                                                    width="full"
                                                >
                                                    Add Questions
                                                </Button>
                                            </Stack>
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
