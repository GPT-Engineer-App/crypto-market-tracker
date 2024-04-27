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

    { name: "Ripple", symbol: "XRP", price: "$0.80", change: "+0.3%" },
    { name: "Litecoin", symbol: "LTC", price: "$150.34", change: "-1.1%" },
    { name: "Polkadot", symbol: "DOT", price: "$20.12", change: "+1.5%" },
    { name: "Solana", symbol: "SOL", price: "$102.65", change: "+2.0%" },
    { name: "Dogecoin", symbol: "DOGE", price: "$0.30", change: "-0.8%" },
    { name: "Chainlink", symbol: "LINK", price: "$23.45", change: "+0.5%" },
    { name: "Uniswap", symbol: "UNI", price: "$18.70", change: "+1.2%" },
    { name: "Bitcoin Cash", symbol: "BCH", price: "$312.00", change: "-0.4%" },
    { name: "Stellar", symbol: "XLM", price: "$0.35", change: "+0.1%" },
    { name: "Aave", symbol: "AAVE", price: "$300.50", change: "+3.1%" },
    { name: "Cosmos", symbol: "ATOM", price: "$15.00", change: "+1.8%" },
    { name: "Monero", symbol: "XMR", price: "$220.00", change: "+2.3%" },
    { name: "Dash", symbol: "DASH", price: "$100.00", change: "+0.7%" },
    { name: "Zcash", symbol: "ZEC", price: "$130.00", change: "-1.5%" },
    { name: "Tezos", symbol: "XTZ", price: "$4.00", change: "+0.9%" },
    { name: "Maker", symbol: "MKR", price: "$2,500.00", change: "+4.5%" },
    { name: "Compound", symbol: "COMP", price: "$140.00", change: "-2.0%" },
    { name: "Algorand", symbol: "ALGO", price: "$0.85", change: "+0.4%" },
    { name: "Decred", symbol: "DCR", price: "$50.00", change: "+1.0%" },
    { name: "Hedera", symbol: "HBAR", price: "$0.10", change: "+0.5%" },
    { name: "NEO", symbol: "NEO", price: "$20.00", change: "-1.2%" },
    { name: "VeChain", symbol: "VET", price: "$0.07", change: "+0.2%" },
    { name: "QTUM", symbol: "QTUM", price: "$5.00", change: "+0.3%" },
    { name: "ICON", symbol: "ICX", price: "$1.20", change: "+0.6%" },
    { name: "Lisk", symbol: "LSK", price: "$3.50", change: "+0.4%" },
    { name: "Waves", symbol: "WAVES", price: "$12.00", change: "+1.1%" },
    { name: "OmiseGO", symbol: "OMG", price: "$6.00", change: "-0.9%" },
    { name: "Nano", symbol: "NANO", price: "$5.00", change: "+0.5%" },
    { name: "BitTorrent", symbol: "BTT", price: "$0.002", change: "+0.1%" },
    { name: "Paxos Standard", symbol: "PAX", price: "$1.00", change: "0.0%" },
    { name: "DigiByte", symbol: "DGB", price: "$0.05", change: "+0.2%" },
    { name: "Siacoin", symbol: "SC", price: "$0.01", change: "-0.3%" },
    { name: "Klaytn", symbol: "KLAY", price: "$0.60", change: "+0.7%" },
    { name: "Zilliqa", symbol: "ZIL", price: "$0.07", change: "+0.4%" },
    { name: "Ontology", symbol: "ONT", price: "$0.60", change: "+0.5%" },
    { name: "Ardor", symbol: "ARDR", price: "$0.20", change: "+0.1%" },
    { name: "Ren", symbol: "REN", price: "$0.30", change: "+0.2%" },
    { name: "Loopring", symbol: "LRC", price: "$0.40", change: "+0.3%" },
    { name: "Horizen", symbol: "ZEN", price: "$20.00", change: "+1.5%" },
    { name: "Skycoin", symbol: "SKY", price: "$2.00", change: "+0.5%" },
    { name: "Stratis", symbol: "STRAT", price: "$0.50", change: "+0.2%" },
    { name: "Komodo", symbol: "KMD", price: "$0.80", change: "+0.6%" },
    { name: "Steem", symbol: "STEEM", price: "$0.30", change: "+0.1%" },
    { name: "Syscoin", symbol: "SYS", price: "$0.20", change: "+0.3%" },
    { name: "HyperCash", symbol: "HC", price: "$1.00", change: "+0.4%" },
    { name: "Verge", symbol: "XVG", price: "$0.01", change: "+0.1%" },
    { name: "Electroneum", symbol: "ETN", price: "$0.01", change: "+0.2%" },
    { name: "MaidSafeCoin", symbol: "MAID", price: "$0.20", change: "+0.3%" },
    { name: "Factom", symbol: "FCT", price: "$1.50", change: "+0.5%" },
    { name: "Nxt", symbol: "NXT", price: "$0.02", change: "+0.1%" },
    { name: "FunFair", symbol: "FUN", price: "$0.01", change: "+0.2%" },
    { name: "Gnosis", symbol: "GNO", price: "$50.00", change: "+1.0%" },
    { name: "Gas", symbol: "GAS", price: "$10.00", change: "+0.8%" },
    { name: "Bancor", symbol: "BNT", price: "$1.50", change: "+0.4%" },
    { name: "Blocknet", symbol: "BLOCK", price: "$1.20", change: "+0.6%" },
    { name: "Storj", symbol: "STORJ", price: "$1.30", change: "+0.7%" },
    { name: "Civic", symbol: "CVC", price: "$0.25", change: "+0.3%" },
    { name: "Golem", symbol: "GNT", price: "$0.10", change: "+0.2%" },
    { name: "SALT", symbol: "SALT", price: "$0.50", change: "+0.1%" },
    { name: "TenX", symbol: "PAY", price: "$0.30", change: "+0.2%" },
    { name: "WAX", symbol: "WAXP", price: "$0.05", change: "+0.1%" },
    { name: "Power Ledger", symbol: "POWR", price: "$0.20", change: "+0.3%" },
    { name: "Augur", symbol: "REP", price: "$14.00", change: "+0.9%" },
    { name: "0x", symbol: "ZRX", price: "$0.90", change: "+0.4%" },
    { name: "Status", symbol: "SNT", price: "$0.03", change: "+0.1%" },
    { name: "Aragon", symbol: "ANT", price: "$3.00", change: "+0.5%" },
    { name: "Decentraland", symbol: "MANA", price: "$0.75", change: "+0.6%" },
    { name: "Basic Attention Token", symbol: "BAT", price: "$0.70", change: "+0.2%" },
    { name: "Kyber Network", symbol: "KNC", price: "$1.50", change: "+0.3%" },
    { name: "Enjin Coin", symbol: "ENJ", price: "$1.80", change: "+0.7%" },
    { name: "Nervos Network", symbol: "CKB", price: "$0.01", change: "+0.1%" },
    { name: "Ocean Protocol", symbol: "OCEAN", price: "$0.60", change: "+0.5%" },
    { name: "Pundi X", symbol: "NPXS", price: "$0.001", change: "+0.1%" },
    { name: "Quantstamp", symbol: "QSP", price: "$0.03", change: "+0.2%" },
    { name: "Rarible", symbol: "RARI", price: "$2.00", change: "+0.4%" },
    { name: "SushiSwap", symbol: "SUSHI", price: "$7.00", change: "+0.8%" },
    { name: "SwissBorg", symbol: "CHSB", price: "$0.80", change: "+0.3%" },
    { name: "Synthetix", symbol: "SNX", price: "$5.00", change: "+0.6%" },
    { name: "The Sandbox", symbol: "SAND", price: "$0.50", change: "+0.4%" },
    { name: "Theta Fuel", symbol: "TFUEL", price: "$0.09", change: "+0.2%" },
    { name: "Theta Network", symbol: "THETA", price: "$6.00", change: "+1.0%" },
    { name: "UMA", symbol: "UMA", price: "$8.00", change: "+0.7%" },
    { name: "Unibright", symbol: "UBT", price: "$1.00", change: "+0.5%" },
    { name: "Verge", symbol: "XVG", price: "$0.01", change: "+0.1%" },
    { name: "Wanchain", symbol: "WAN", price: "$0.75", change: "+0.6%" },
    { name: "Waves", symbol: "WAVES", price: "$12.00", change: "+1.1%" },
    { name: "WAX", symbol: "WAXP", price: "$0.05", change: "+0.1%" },
    { name: "Wing Finance", symbol: "WING", price: "$12.00", change: "+0.9%" },
    { name: "Yearn.finance", symbol: "YFI", price: "$32,000.00", change: "+1.2%" },
    { name: "Zcash", symbol: "ZEC", price: "$130.00", change: "-1.5%" },
    { name: "Zilliqa", symbol: "ZIL", price: "$0.07", change: "+0.4%" },
    { name: "ZRX", symbol: "ZRX", price: "$0.90", change: "+0.4%" },
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
