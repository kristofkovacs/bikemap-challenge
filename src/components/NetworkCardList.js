import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import NetworkCard from "./NetworkCard";

const NetworkCardList = ({ data, ...props }) => {
  return (
    <SimpleGrid
      columns={[1, 1, 1, 2]}
      spacing={[4, 4, 4, 8]}
      {...props}
      w="100%"
    >
      {data &&
        data.map(({ id, name, location }) => {
          return (
            <NetworkCard key={id} id={id} name={name} location={location} />
          );
        })}
    </SimpleGrid>
  );
};

export default NetworkCardList;
