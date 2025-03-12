import React, { useState } from "react";
import axios from "axios";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import {
  Card,
  OutlinedInput,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  FormLabel,
  FormControl,
  Box,
  Button,
  CssBaseline,
  Radio,
  RadioGroup,
  FormControlLabel,
  Container,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function CreateAccount() {
  const [account, setAccount] = useState({
    accID: 0,
    accName: '',
    accPass: '',
    accEmail: '',
    dob: dayjs(),
    gender: false,
    role: 'user'
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (prop) => (event) => {
    setAccount({ ...account, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5121/api/Account', account);
      console.log('Account created:', response.data);
      // Add success notification here
    } catch (error) {
      console.error('Error creating account:', error);
      // Add error notification here
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card sx={{ p: 4, width: '100%' }}>
          <Typography component="h1" variant="h4" gutterBottom>
            Create Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                id="email"
                name="email"
                type="email"
                value={account.accEmail}
                onChange={handleChange('accEmail')}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="username">Username</FormLabel>
              <TextField
                required
                id="username"
                name="username"
                value={account.accName}
                onChange={handleChange('accName')}
                placeholder="Enter your username"
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="password">Password</FormLabel>
              <OutlinedInput
                required
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={account.accPass}
                onChange={handleChange('accPass')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="dob">Date of Birth</FormLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                  value={account.dob}
                  onChange={(newValue) => setAccount({ ...account, dob: newValue })}
                />
              </LocalizationProvider>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                value={account.gender}
                onChange={(e) => setAccount({ ...account, gender: e.target.value === 'true' })}
              >
                <FormControlLabel value={false} control={<Radio />} label="Female" />
                <FormControlLabel value={true} control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}