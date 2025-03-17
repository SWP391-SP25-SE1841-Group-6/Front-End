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
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { faUser, faFontAwesome } from '@fortawesome/free-regular-svg-icons';
const Links = ['Dashboard', 'Accounts', 'Tests','Questions'];

const NavLink = ({ children }) => (
  <Box
    
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.500', 'gray.700'),
      textColor: 'blue.700',
    }}
  >
    {children}
  </Box>
);

export default function AdminMenuBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex width={"100vw"} py='10px' alignItems={"center"} justifyContent={"center"} bg={"gray.100"}>
        <Box>
          <FontAwesomeIcon icon={faFontAwesome} size='4x' />
        </Box>
      </Flex>
      
      <Box bg={useColorModeValue('gray.100', 'gray.900')}>
        <Flex h={20} alignItems={'center'} justifyContent='space-evenly'>
          <IconButton
            size={'sm'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            
          />
          {/*<HStack spacing={8} alignItems={'center'}>*/}
            
            <Flex as={'nav'} bg='blue.700' maxH='100%' textAlign='center' px='30px' fontSize='xl' fontWeight='bold' textColor='white' >
              {Links.map((link) => (
                <Spacer>
                  
                  <NavLink key={link} >{link}</NavLink>
                  
                </Spacer>
               
              ))}
              
            
          {/*</HStack>*/}
          
         
          <Menu placement='bottom-end'>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
            <Circle size="60px" bg="gray.700"  >
              < FontAwesomeIcon icon={faUser} size='2x'/>
            </Circle>
            </MenuButton>
            <MenuList 
            bg='gray.700'
            outline={'full'}
            >
              <MenuItem>
                Profile
              </MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider/>
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
          </Flex>
        </Flex>

        {/* Mobile menu */}
        {isOpen ? (
          <Box pb={8} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}