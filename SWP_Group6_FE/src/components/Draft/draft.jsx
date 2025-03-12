import { Field, Form, Formik } from 'formik';
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

const Links = ['Dashboard', 'Accounts', 'Tests','Questions'];


export default function draft() {
  

  return (
    <Flex width={"100vw"} height={"100vh"} alignItems={"center"} justifyContent={"center"} bg={"gray.100"} >
        <Input variant='outline' placeholder="Basic usag" />
    </Flex>
  );
}