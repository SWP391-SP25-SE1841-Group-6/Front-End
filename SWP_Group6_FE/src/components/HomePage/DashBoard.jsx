import React, { useState } from "react";
import { Container, Typography, Box, Drawer, List, ListItem, ListItemText, Grid, Paper, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/system";

const Sidebar = styled(Drawer)({
    width: 260,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 260,
        boxSizing: "border-box",
        background: "#2c3e50",
        color: "#ecf0f1",
        transition: "background 0.3s ease-in-out"
    }
});

const menuItems = [
    "Account",
    "Question",
    "Test"
];

const dummyData = {
    Account: [
        { id: 1, name: "John Doe", role: "Admin", info: "Manages users and permissions" },
        { id: 2, name: "Jane Smith", role: "User", info: "Schedules appointments" }
    ],
    Question: [
        { id: 1, question: "How do you feel today?", category: "Emotional Well-being" },
        { id: 2, question: "Do you often experience stress?", category: "Mental Health" }
    ],
    Test: [
        { id: 1, title: "Psychological Stress Test", totalQuestions: 10 },
        { id: 2, title: "Emotional Resilience Test", totalQuestions: 15 }
    ]
};

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [selectedItem, setSelectedItem] = useState(menuItems[0]);
    
    const renderContent = () => {
        return (
            <>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" color="primary">Create {selectedItem}</Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" color="secondary">Update {selectedItem}</Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" color="error">Delete {selectedItem}</Button>
                    </Grid>
                </Grid>
                <TextField fullWidth label="Search" variant="outlined" sx={{ mb: 2 }} />
                <TableContainer component={Paper} sx={{ borderRadius: "10px", overflow: "hidden" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#1abc9c", color: "#fff" }}>
                                {Object.keys(dummyData[selectedItem][0] || {}).map((key, index) => (
                                    <TableCell key={index} sx={{ fontWeight: "bold", color: "#fff" }}>{key.toUpperCase()}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dummyData[selectedItem].map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {Object.values(row).map((value, colIndex) => (
                                        <TableCell key={colIndex}>{value}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        );
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar variant="permanent">
                <Typography variant="h5" sx={{ p: 2, fontWeight: "bold", color: "#ecf0f1" }}>Admin Dashboard</Typography>
                <Typography variant="subtitle1" sx={{ p: 2, color: "#bdc3c7", fontWeight: "bold" }}>Welcome, {user ? user.email : 'Admin'}!</Typography>
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem 
                            button 
                            key={index} 
                            onClick={() => setSelectedItem(text)}
                            sx={{
                                '&:hover': {
                                    cursor: "pointer",
                                    backgroundColor: "#1abc9c",
                                    color: "#ffffff",
                                    transition: "background 0.3s ease-in-out"
                                }
                            }}
                        >
                            <ListItemText primary={text} primaryTypographyProps={{ variant: "h6", fontWeight: "bold" }} />
                        </ListItem>
                    ))}
                </List>
            </Sidebar>

            <Container sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#1abc9c" }}>
                    {selectedItem}
                </Typography>
                {renderContent()}
            </Container>
        </Box>
    );
};

export default Dashboard;
