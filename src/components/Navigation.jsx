import React from 'react';
import { Box, Flex, Text, Button, Spacer } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

function Navigation() {
  return (
    <Flex bg="blue.500" color="white" p="4" align="center">
      <Box p="2">
        <Text fontSize="xl" fontWeight="bold">CryptoMarket</Text>
      </Box>
      <Spacer />
      <Button leftIcon={<FaUserCircle />} variant="outline" colorScheme="whiteAlpha">
        Sign Up
      </Button>
    </Flex>
  );
}

export default Navigation;