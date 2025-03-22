import { ChakraBaseProvider, VStack, Card, CardBody, CardHeader, Heading, Table, TableContainer, Thead, Tbody, Tr, Th, Td, Button, IconButton, useToast, Box, Badge, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import AdminMenuBar from "./AdminMenuBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function TestsCRUD() {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const toast = useToast();
    const navigate = useNavigate();

    const fetchTests = async () => {    
        try {
            const response = await axios.get("http://localhost:5121/api/Test");
            const testsData = response.data.data;
            console.log(testsData);
            setTests(testsData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching tests:", error);
            setError("Failed to fetch tests");
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5121/api/Test?id=${id}`);
            toast({
                title: 'Success',
                description: 'Test deleted successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            fetchTests();
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to delete test',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    useEffect(() => {
        fetchTests();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <ChakraBaseProvider>
            <AdminMenuBar />
            <VStack py={10} px={5} spacing={5} bg="gray.100">
                <Card width="100%" variant="elevated">
                    <CardHeader>
                        <Heading size="sm" textColor='blue.700'>All Tests</Heading>
                    </CardHeader>
                    <CardBody>
                        <Box mb={4}>
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h5>
                                        <AccordionButton bg='blue.700' textColor='white'>
                                            <Box as='span' flex='1' textAlign='left'>
                                                Add a test
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h5>
                                    <AccordionPanel pb={4} bg='blue.700' textColor='white' pt={4} px={4}>
                                        {/* Add Test Form will go here */}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                        <Box overflowX="auto" bg='blue.700' textColor='white' rounded='md'>
                            <TableContainer>
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th>Test ID</Th>
                                            <Th>Test Name</Th>
                                            <Th>Date Created</Th>
                                            <Th>Date Updated</Th>
                                            <Th>Actions</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {tests.map((test) => (
                                            <Tr key={test.testId}>
                                                <Td>{test.testId}</Td>
                                                <Td>{test.testName}</Td>
                                                <Td>{new Date(test.dateCreated).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}</Td>
                                                <Td>{new Date(test.dateUpdated).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}</Td>
                                                <Td>
                                                    <Button
                                                        size={'sm'}
                                                        colorScheme="blue"
                                                        mr={2}
                                                        onClick={() => navigate(`/admin/tests/`+test.testId)}
                                                    >
                                                        Details
                                                    </Button>
                                                    <Button
                                                        size={'sm'}
                                                        colorScheme="red"
                                                        onClick={() => handleDelete(test.testId)}
                                                    >
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
