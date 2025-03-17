import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  InputRightElement,
  FormControl,
  FormLabel,
  Circle,
  Center,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';

//import { PasswordInput } from "@/components/ui/password-input"

/*
const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
})*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEye } from "@fortawesome/free-solid-svg-icons";
import AdminMenuBar from "./AdminMenuBar";

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

const AdminDashboard = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <>
    <AdminMenuBar> </AdminMenuBar>
    <Flex>
    

    </Flex>
    
    </>
  )
}

export default AdminDashboard
