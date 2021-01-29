import React from "react";
import { Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NetworkDetail from "./NetworkDetail";

const Card = ({ name, id, location, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        minW={["100%", "100%", "350px"]}
        py={4}
        px={6}
        align="center"
        justify="space-between"
        borderRadius={10}
        _hover={{ transform: "scale(1.05)" }}
        transition="all 0.15s ease-in-out"
        bgColor="white"
        style={{ cursor: "pointer" }}
        onClick={onOpen}
        {...props}
      >
        <Flex direction="column">
          <Text color="gray.400" fontWeight="semibold">
            Network name
          </Text>
          <Heading as="h2" size="lg" color="gray.700">
            {name}
          </Heading>
          <Text color="gray.400" fontWeight="semibold" mt={3}>
            City
          </Text>
          <Heading as="h2" size="md" color="gray.600">
            {location.city || "No city added"}
          </Heading>
        </Flex>
        <ChevronRightIcon h={6} w={6} color="teal.600" />
      </Flex>
      {isOpen && (
        <NetworkDetail isOpen={isOpen} onClose={onClose} name={name} id={id} />
      )}
    </>
  );
};

export default Card;
