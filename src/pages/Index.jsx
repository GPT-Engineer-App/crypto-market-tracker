import React, { useState } from "react";
import { Box, Input, Table, Thead, Tbody, Tr, Th, Td, Text, Container, Heading, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [search, setSearch] = useState("");

  const data = [
    { name: "Bitcoin", symbol: "BTC", price: "$42,000", change: "+1.2%" },
    { name: "Ethereum", symbol: "ETH", price: "$3,000", change: "-0.5%" },
    { name: "Cardano", symbol: "ADA", price: "$1.3", change: "+0.2%" },
    { name: "Binance Coin", symbol: "BNB", price: "$350", change: "+0.7%" },
  ];

  const filteredData = data.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" my="8">
        Cryptocurrency Market Cap
      </Heading>
      <InputGroup mb="8">
        <InputLeftElement pointerEvents="none">
          <Icon as={FaSearch} color="gray.300" />
        </InputLeftElement>
        <Input placeholder="Search for a cryptocurrency..." onChange={(event) => setSearch(event.target.value)} />
      </InputGroup>
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Symbol</Th>
              <Th>Price</Th>
              <Th>Change</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((coin, index) => (
              <Tr key={index}>
                <Td>{coin.name}</Td>
                <Td>{coin.symbol}</Td>
                <Td>{coin.price}</Td>
                <Td>
                  <Text color={coin.change.startsWith("-") ? "red.500" : "green.500"}>{coin.change}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default Index;
