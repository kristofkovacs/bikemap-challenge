import React, { useState, useEffect } from "react";

import cityBikes from "../api/cityBikes";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Heading,
  Flex,
  Button,
  Text,
  Spinner,
  ModalCloseButton,
} from "@chakra-ui/react";

const NetworkDetail = ({ isOpen, onClose, id, name }) => {
  const [network, setNetwork] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cityBikes.get(`/networks/${id}`).then(({ data }) => {
      setNetwork(data.network);
      setLoading(false);

      // remove later
      console.log(data);
    });
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt={6} bg="gray.100">
        <ModalCloseButton color="red.500" />
        <ModalHeader color="gray.600" fontWeight="semibold" fontSize={28}>
          Network: <b>{name}</b>
        </ModalHeader>

        <ModalBody>
          {loading ? (
            <Flex
              justify="center"
              align="center"
              justifySelf="center"
              alignSelf="center"
              py={12}
            >
              <Spinner
                thickness="4px"
                speed="0.5s"
                emptyColor="gray.300"
                color="blue.500"
                size="lg"
              />
            </Flex>
          ) : (
            <>
              <Flex direction="column">
                <Text color="gray.400" fontWeight="semibold">
                  City
                </Text>
                <Heading as="h2" size="md" color="gray.700">
                  {network.location.city || "No city added"}
                </Heading>
                <Text color="gray.400" fontWeight="semibold" mt={3}>
                  Company
                </Text>
                <Heading as="h2" size="md" color="gray.700">
                  {network.company[0]}
                </Heading>
              </Flex>
              <Heading as="h2" size="lg" color="gray.700" mt={5}>
                Stations
              </Heading>
              {network.stations.map((station, index) => {
                return (
                  <Flex
                    py={4}
                    px={6}
                    direction="column"
                    borderRadius={10}
                    bgColor="gray.200"
                    mt={4}
                  >
                    <Heading as="h4" size="sm" color="gray.500">
                      {`${index + 1}. ${station.name}`}
                    </Heading>
                  </Flex>
                );
              })}
            </>
          )}
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button colorScheme="red" mr={3} onClick={onClose} mb={[8, 8, 2]}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NetworkDetail;
