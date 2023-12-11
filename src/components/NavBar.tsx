'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
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
    color={"white"}
    _hover={{ textDecoration: 'none', bg: 'gray.700' }}
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
      <Box bg={'gray.900'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontWeight={'bold'} color={"white"}>Spotify Unwrapped</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.to}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
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
