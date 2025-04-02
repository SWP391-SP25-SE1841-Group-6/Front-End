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
  VStack,
} from '@chakra-ui/react';

import logo from '../../assets/images/logofinal.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faFontAwesome } from '@fortawesome/free-regular-svg-icons';

import {Link} from "react-router-dom";
const LinkNames = ['Dashboard', 'Accounts' ,'Questions','Tests'];
const links = ['/adminDashboard','/Accounts','/Questions','/tests'];
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../utils/logoutHandler';

export default function AdminMenuBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const navigate = useNavigate();

  const onLogoutClick = () => {
    handleLogout(navigate);
  };
  
  return (
    <>
      <Flex width={"100vw"} py='10px' alignItems={"center"} justifyContent={"center"} bg={"gray.100"}>
        <Box
          p={2}
          borderWidth="3px"
          borderColor="blue.700"
          borderRadius="full"
          overflow="hidden"
          transition="transform 0.2s"
          _hover={{
            transform: "scale(1.05)",
          }}
        >
          <img 
            src={logo} 
            alt="School Psychology Logo" 
            className="w-36 h-36 object-contain rounded-full"
          />
        </Box>
      </Flex>
      
      <Box >
        {/*<Flex h={20} alignItems={'center'} justifyContent='space-evenly'>
         
         <IconButton
            size={'sm'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            
          />
          <HStack spacing={8} alignItems={'center'}>*/}
            
            <Flex as={'nav'} bg='blue.700' maxH='100%' textAlign='center' px='30px' fontSize='xl' fontWeight='bold' textColor='white' gap="4">
              <Spacer>
              <Box
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.500', 'gray.700'),
                  textColor: 'blue.700',
                }}
              >
              <Link to="/admin">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              </Box>
              </Spacer>
              <Spacer>
              <Box
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.500', 'gray.700'),
                  textColor: 'blue.700',
                }}
              >
                <Link to="/admin/accounts">
                  <Button variant="ghost">Accounts</Button>
                </Link>
              </Box>
              </Spacer>
              <Spacer>
              <Box
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.500', 'gray.700'),
                  textColor: 'blue.700',
                  
                }}
              >
                <Link to="/admin/questions">
                  <Button size='md'>Questions</Button>
                </Link>
              </Box>
              </Spacer>
              <Spacer>
              <Box
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.500', 'gray.700'),
                  textColor: 'blue.700',
                }}
              >
                <Link to="/admin/tests">
                  <Button variant="solid">Tests</Button>
                </Link>
              </Box>
              </Spacer>
               
          {/*</HStack>*/}
          <Box>
          <Menu >
            <Center>
            <MenuButton
              as={Button}        
            >
              <Circle size="60px" bg="gray.700"  >
                < FontAwesomeIcon icon={faUser} size='2x'/>
              </Circle>
            </MenuButton>
            </Center>
            <MenuList 
              bg='gray.700' borderColor='black' px={4} py={2}
            > 
              {localStorage.getItem('userEmail')}
            
              <MenuItem >
                <Link to='/test'>Profile </Link>
              </MenuItem>
              <MenuDivider/>
              <MenuItem onClick={onLogoutClick} >Sign out</MenuItem>
            </MenuList>
          </Menu>
          </Box>
          </Flex>
        
      </Box>
    </>
  );
}