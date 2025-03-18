import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Text,
  IconButton,
  Drawer,
  DrawerContent,
  useDisclosure,
  CloseButton,
} from '@chakra-ui/react';
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiBox,
  FiFileText,
  FiMenu,
  FiDatabase,
} from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

const NavItems = [
  { name: 'Dashboard', icon: FiHome, path: '/dashboard' },
  { name: 'Users', icon: FiUsers, path: '/users' },
  { name: 'Products', icon: FiBox, path: '/products' },
  { name: 'Reports', icon: FiFileText, path: '/reports' },
  { name: 'Database', icon: FiDatabase, path: '/database' },
  { name: 'Settings', icon: FiSettings, path: '/settings' },
];

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      {/* Mobile nav */}
      <MobileNav onOpen={onOpen} />
      
      {/* Sidebar content */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Desktop nav */}
      <Box display={{ base: 'none', md: 'block' }}>
        <SidebarContent />
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      borderRight="1px"
      borderRightColor={borderColor}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      
      {NavItems.map((item) => (
        <NavItem
          key={item.name}
          icon={item.icon}
          path={item.path}
          onClose={onClose}
        >
          {item.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, path, onClose, ...rest }) => {
  const activeBg = useColorModeValue('gray.100', 'gray.700');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Link
      as={RouterLink}
      to={path}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      onClick={() => {
        if (onClose) onClose();
      }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: hoverBg,
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
            _groupHover={{
              color: useColorModeValue('gray.600', 'gray.300'),
            }}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={bgColor}
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      justifyContent="flex-start"
      display={{ base: 'flex', md: 'none' }}
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

export default Sidebar;
