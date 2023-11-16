'use client'

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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavLink = ({ children, to }: NavLinkProps) => (
  <Box
    as={Link}
    to={to}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}
  >
    {children}
  </Box>
);

const Links = [
  { name: 'Home', to: '/home' },
  { name: 'Top Tracks', to: '/top-tracks' },
  { name: 'Top Artists', to: '/top-artists' },
  { name: 'User Profile', to: '/user-profile' }
];

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Spotify Unwrapped</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.to}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://avatars.dicebear.com/api/male/username.svg'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.to}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}