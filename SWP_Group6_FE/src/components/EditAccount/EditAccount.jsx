import React, { useEffect } from "react";
import { useState } from "react";
//import api from "../config/axios";
import axios from "axios";
import MuiCard from "@mui/material/Card"
import {Visibility} from '@mui/icons-material';
import { VisibilityOff } from "@mui/icons-material";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import {
  OutlinedInput,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  FormLabel,
  FormControl,
  Stack,
  Box,
  Button,
  styled,
  CssBaseline,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
/*
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import {OutlinedInput} from '@mui/material';
import {InputAdornment} from '@mui/material';
import {IconButton} from '@mui/material';
import {Visibility} from '@mui/icons-material';
import { VisibilityOff } from "@mui/icons-material";
import CssBaseline from '@mui/material/CssBaseline';s
*/

  {/*Card style settings*/}
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
  {/*Card style settings*/}

  {/*Container style settings*/}
  const EditProfileContainer = styled(Stack)(({ theme }) => ({
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
  {/*Container style settings*/}

  {/*accounts DTO*/}
  var Accounts = {
    accID : Number,
    accName : String,
    accPass : String,
    accEmail : String,
    dob : Date,
    gender :  Boolean,
    role : String,
  }
  {/*Accounts DTO*/}

export default function EditProfile(){
    const [accounts, setAccounts] = useState([]);
    const [dob, setDob] = React.useState(dayjs(accounts.dob).format('YYYY-MM-DD'));
    {/*password show / hide handling */}
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };
    {/*password show / hide handling */}

    const handleChange = (event) => {
        setAge(event.target.value);
      };

    {/* API call function get account by id*/}
    const fetchAccounts= async (id) => {
        const { data } = await axios.get(
      "http://localhost:5121/api/Account/id?id="+1,
    );
    const accounts = data;
    setAccounts(accounts.data);
    console.log(accounts);
     };
    {/* API call function get account by id*/}
    
    const genderBooltoString = () => {
      let stringGender = "female" ;
      if(accounts.gender === true){
        stringGender = "male";
      }
      return stringGender;
    }
  useEffect(() => {
    fetchAccounts();
    setDob();
  }, []);
    return (
    <>
      <CssBaseline enableColorScheme />
      <EditProfileContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Edit Account
          </Typography>
          <Box
            component="form"

            //onSubmit//{handleSubmit}
            //noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              width: '100%',
              gap: 2,
            }}
          >

          {/* Form Control Email */}
          <FormControl fullWidth>
            <FormLabel htmlFor="email">Email</FormLabel>     
            <TextField
              id="email"
              name="email"
              type="email"
              value={accounts.accEmail || ''}
              //onChange={(e) => setAccounts({...accounts, accEmail: e.target.value})}
              placeholder="Enter your email"
              autoComplete="email"
              size="medium"
              required
              fullWidth
              variant="outlined"
              
            />
          </FormControl>
          {/* Form Control Email*/}

          {/* Form Control Username */}
          <FormControl fullWidth>
            <FormLabel htmlFor="username">Username</FormLabel>
            <TextField
              id="username"
              name="username"
              type=""
              value={accounts.accName || ''}
              onChange={(e) => setAccounts({...accounts, accName: e.target.value})}
              placeholder="Enter your username"
              autoComplete="username"
              size="medium"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          {/* Form Control Username */}

          {/* Form Control Password */}
          <FormControl >
          <FormLabel htmlFor="default-adornment-password">Password</FormLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type= {showPassword ? "text" : "password"}
            defaultValue={accounts.accPass}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            />
          </FormControl>
          {/* Form Control Password */}
            
          {/* Form Control dob */}
          <FormControl>
          <FormLabel htmlFor="dob">Date of birth</FormLabel>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              value={dayjs(accounts.dob)}
              //onChange={(newValue) => setDob(newValue)}

            />
            {/*actual dob : {accounts.dob}*/}
          </LocalizationProvider>
          </FormControl>
          {/* Form Control dob */}

          {/* Form Control gender */}
          <FormControl fullWidth margin="normal">
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                value="false"
                //onChange={(e) => setAccount({ ...account, gender: e.target.value === 'true' })}
              >
                <FormControlLabel value={false} control={<Radio />} label="Female" />
                <FormControlLabel value={true} control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          {/* Form Control gender */}


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
      </EditProfileContainer>
    </>
           
      );
    
}

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