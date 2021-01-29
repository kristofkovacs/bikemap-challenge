import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Card = ({ name, location, ...props }) => {
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
        {...props}
      >
        <Flex direction="column">
          <Heading as="h2" size="lg" color="gray.700">
            {name}
          </Heading>
          <Heading as="h2" size="md" color="gray.600">
            {location.city || "No city added"}
          </Heading>
        </Flex>
        <ChevronRightIcon h={6} w={6} color="teal.600" />
      </Flex>
    </>
  );
};

export default Card;
