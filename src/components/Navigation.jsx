import React from "react";
import { Box, Flex, Text, Button, Spacer, Link } from "@chakra-ui/react";
import { FaUserCircle, FaCoins, FaExchangeAlt, FaRegFileVideo, FaRegStar } from "react-icons/fa";

function Navigation() {
  return (
    <Flex bg="blue.500" color="white" p="4" align="center" wrap="wrap">
      <Box p="2">
        <Text fontSize="xl" fontWeight="bold">
          CryptoMarket
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Link href="/cryptocurrencies" px="2">
          <FaCoins /> Cryptocurrencies
        </Link>
        <Link href="/exchanges" px="2">
          <FaExchangeAlt /> Exchanges
        </Link>
        <Link href="/nft" px="2">
          <FaRegFileVideo /> NFT
        </Link>
        <Link href="/watchlist" px="2">
          <FaRegStar /> Watchlist
        </Link>
      </Box>
      <Spacer />
      <Button leftIcon={<FaUserCircle />} variant="outline" colorScheme="whiteAlpha">
        Sign Up
      </Button>
    </Flex>
  );
}

export default Navigation;
