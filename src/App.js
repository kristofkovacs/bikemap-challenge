import React, { useState, useEffect } from "react";
import { ChakraProvider, Flex, Heading, Spinner } from "@chakra-ui/react";
import cityBikes from "./api/cityBikes";
import NetworkCardList from "./components/NetworkCardList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [networks, setNetworks] = useState([]);
  const [filteredNetworks, setFilteredNetworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cityBikes.get("/networks").then(({ data }) => {
      setNetworks(data.networks);
      setFilteredNetworks(data.networks);
      setLoading(false);

      // remove later
      console.log(data);
    });
  }, []);

  const onSearch = (searchTerm) => {
    setFilteredNetworks(
      networks.filter((network) => {
        return network.location.city
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  };

  return (
    <ChakraProvider>
      <Flex justify="center" w="100vw" minH="100vh" bgColor="blue.400">
        <Flex
          w={["95%", "90%", "650px", "800px", "1000px"]}
          my={6}
          align="center"
          direction="column"
        >
          <SearchBar onSearch={onSearch} />

          {loading ? (
            <Flex
              justify="center"
              align="center"
              justifySelf="center"
              alignSelf="center"
              py={[12, 12, 20, 64]}
            >
              <Spinner
                thickness="4px"
                speed="0.5s"
                emptyColor="gray.50"
                color="blue.100"
                size="lg"
              />
            </Flex>
          ) : filteredNetworks.length ? (
            <NetworkCardList data={filteredNetworks} mt={6}></NetworkCardList>
          ) : (
            <Flex
              justify="center"
              align="center"
              py={[12, 12, 20, 64]}
              px={[4]}
            >
              <Heading
                as="h4"
                fontSize={[24, 24, 32]}
                color="gray.100"
                textAlign="center"
                maxW={500}
              >
                No results for this term. Please try searching for another
                city...
              </Heading>
            </Flex>
          )}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
