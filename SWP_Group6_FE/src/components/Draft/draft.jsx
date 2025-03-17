import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Circle,
  Spacer,
  Square,
  Center,
  Input,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { faUser, faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

const Links = ['Dashboard', 'Accounts', 'Tests','Questions'];


export default function draft() {
  const [user, setUser] = useState('');

  useEffect(() => {
      setUser(localStorage.getItem('userName'));
    }, []);
  
  return (
     
      <h1>{user}</h1> 
  );
}