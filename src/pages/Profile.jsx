import React, { useState } from "react";
import { Box, Button, Input, VStack, Heading } from "@chakra-ui/react";

const Profile = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (crypto) => {
    setFavorites([...favorites, crypto]);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Your Profile</Heading>
      <VStack spacing={4}>
        <Input placeholder="Add a cryptocurrency to favorites" />
        <Button onClick={() => addFavorite("Example Crypto")}>Add to Favorites</Button>
      </VStack>
    </Box>
  );
};

export default Profile;
