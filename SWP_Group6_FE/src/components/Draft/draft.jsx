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
  Portal,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { faUser, faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import EditProfile from '../EditAccount/EditAccount';
import Sidebar from './testSideBar';

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Main content */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;