import React, { useState, useEffect } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import cityBikes from "./api/cityBikes";
import NetworkCardList from "./components/NetworkCardList";

const App = () => {
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    cityBikes.get("/networks").then(({ data }) => {
      setNetworks(data.networks);
      console.log(data);
    });
  }, []);

  return (
    <ChakraProvider>
      <Flex justify="center" w="100vw" minH="100vh" bgColor="blue.400">
        <Flex
          w={["95%", "90%", "650px", "800px", "1000px"]}
          my={6}
          align="center"
          direction="column"
        >
          <NetworkCardList data={networks}></NetworkCardList>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
