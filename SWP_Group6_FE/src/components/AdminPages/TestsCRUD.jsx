import { ChakraBaseProvider, VStack, Card, CardBody, CardHeader, Heading, Table, TableContainer, Thead, Tbody, Tr, Th, Td, Button, IconButton, useToast, Box, Badge, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import AdminMenuBar from "./AdminMenuBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ViewIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
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
                        <Box mb={6}>
                            <Button
                                leftIcon={<AddIcon boxSize={5} />}
                                bg='blue.700'
                                color='white'
                                _hover={{ 
                                    bg: 'blue.600',
                                    transform: 'translateY(-2px)',
                                    shadow: 'lg'
                                }}
                                _active={{
                                    bg: 'blue.800',
                                    transform: 'translateY(0)',
                                }}
                                onClick={() => navigate('/admin/tests/create')}
                                size="lg"
                                height="14"
                                px={8}
                                fontSize="lg"
                                fontWeight="bold"
                                borderRadius="lg"
                                transition="all 0.2s"
                                shadow="md"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap={2}
                            >
                                Create New Test
                            </Button>
                        </Box>
                        <Box overflowX="auto" bg='white' shadow="lg" rounded='lg'>
                            <TableContainer>
                                <Table variant="simple" colorScheme="blue">
                                    <Thead bg="blue.700">
                                        <Tr>
                                            <Th textColor='white' fontSize="md">Test ID</Th>
                                            <Th textColor='white' fontSize="md">Test Name</Th>
                                            <Th textColor='white' fontSize="md">Date Created</Th>
                                            <Th textColor='white' fontSize="md">Date Updated</Th>
                                            <Th textColor='white' fontSize="md">Actions</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {tests.map((test) => (
                                            <Tr 
                                                key={test.testId}
                                                _hover={{ bg: "gray.50" }}
                                                transition="background-color 0.2s"
                                            >
                                                <Td fontWeight="medium">{test.testId}</Td>
                                                <Td>
                                                    <Badge 
                                                        colorScheme="blue" 
                                                        fontSize="md" 
                                                        px={3} 
                                                        py={1} 
                                                        borderRadius="full"
                                                    >
                                                        {test.testName}
                                                    </Badge>
                                                </Td>
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
                                                        size="sm"
                                                        colorScheme="blue"
                                                        mr={2}
                                                        onClick={() => navigate(`/admin/tests/${test.testId}`)}
                                                        leftIcon={<ViewIcon />}
                                                        _hover={{ transform: 'translateY(-2px)' }}
                                                        transition="all 0.2s"
                                                    >
                                                        Details
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        colorScheme="red"
                                                        onClick={() => handleDelete(test.testId)}
                                                        leftIcon={<DeleteIcon />}
                                                        _hover={{ transform: 'translateY(-2px)' }}
                                                        transition="all 0.2s"
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
