import React from "react";
import { Box, Flex, Text, Button, Spacer, Link, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaUserCircle, FaCoins, FaExchangeAlt, FaRegFileVideo, FaRegStar } from "react-icons/fa";

function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex bg={colorMode === "dark" ? "gray.800" : "blue.500"} color="white" p="4" align="center" wrap="wrap">
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
      const {(colorMode, toggleColorMode)} = useColorMode();
      <Button leftIcon={<FaUserCircle />} variant="outline" colorScheme="whiteAlpha" mr="4">
        Sign Up
      </Button>
      <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="md" alignSelf="center" onClick={toggleColorMode} aria-label="Toggle color mode" />
    </Flex>
  );
}

export default Navigation;
