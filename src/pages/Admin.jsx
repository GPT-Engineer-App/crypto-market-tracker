import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';

function Admin() {
  return (
    <Box p={5}>
      <Heading mb={4}>Admin Dashboard</Heading>
      <VStack spacing={4} align='stretch'>
        <Box h='40px' bg='teal.500'>
          User Management
        </Box>
        <Box h='40px' bg='teal.500'>
          Menu Items Management
        </Box>
      </VStack>
    </Box>
  );
}

export default Admin;