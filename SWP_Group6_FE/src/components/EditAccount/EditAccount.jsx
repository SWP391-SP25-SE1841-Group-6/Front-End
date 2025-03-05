import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
//import api from "../config/axios";
import axios from "axios";
import {Select} from "@mui/material";
import {InputLabel} from "@mui/material";
import {Input} from "@mui/material";
import MuiCard from "@mui/material/Card"
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {MenuItem} from "@mui/material";
import {InputBase} from "@mui/material";
import {NativeSelect} from"@mui/material";

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '450px',
    },
    boxShadow:
      'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
      boxShadow:
        'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
  }));

  const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
      backgroundRepeat: 'no-repeat',
      ...theme.applyStyles('dark', {
        backgroundImage:
          'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
      }),
    },
  }));

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  var Accounts = {
    accID : Number,
    accName : String,
    Role : String,
}

export default function EditProfile(props){

    const [accounts, setAccounts] = useState([]);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };

    const fetchAccounts= async (id) => {
        const { data } = await axios.get(
      "http://localhost:5121/api/Account/id?id="+1,
    );
    const accounts = data;
    setAccounts(accounts.data);
    console.log(accounts);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);
    /*async function getAll() {
            try {
                const response = await axiosInstance.get(
                    `http://localhost:5121/api/Account`

                );

                setData(response.data);
                console.log(data);
            } catch (error) {
                console.log("Can not get mentor list", error);
            }
        }*/
    

    
        return (
        <>
          
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            //onSubmit//{handleSubmit}
            //noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                //error//={emailError}
                //helperText//={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="   your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                //color//={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="username">UserName</FormLabel>
              <TextField
                //error//={emailError}
                //helperText//={emailErrorMessage}
                id="username"
                type="username"
                name="username"
                placeholder="your name"
                autoComplete="username"
                autoFocus
                required
                fullWidth
                variant="outlined"
                //color//={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
               // error//={passwordError}
                //helperText//={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                //color//={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl sx={{ m: 1 , minWidth: 120 }} >
                <InputLabel id="demo-customized-select-label">Age</InputLabel>
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth:120}} >
                <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
                <Select
                id="demo-customized-select-native"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
                >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
                </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
               // error//={passwordError}
                //helperText//={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                //color//={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              //onClick={validateInputs}
            >
              Save
            </Button>

            <Button
              type="reset"
              fullWidth
              variant="contained"
              //onClick={() => window.open("http://localhost:5173/", "_blank")} redirect 
            >
              Cancel
            </Button>
           
          
          </Box>
          
        </Card>
      </SignInContainer>
    </>
           
            );
    
}
