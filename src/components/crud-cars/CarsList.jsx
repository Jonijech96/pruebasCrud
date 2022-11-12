import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
  Divider,
  Box,
  Heading,
} from "@chakra-ui/react";
import { AlertDelete } from "./AlertDelete";

export const CarsList = ({ carsList, selectCard, deleteCard }) => {
  return (
    <UnorderedList
      display="grid"
      gridGap={6}
      gridTemplateColumns="repeat(2, 1fr)"
    >
      {carsList.map((car) => (
        <ListItem
          p={6}
          border="1px"
          borderRadius="20px"
          key={car.id}
          boxShadow="dark-lg"
          display="grid"
          gridGap={2}
          _hover={{
            background: "white",
            color: "teal.500",
          }}
        >
          <Heading mb={2} size="lg">
            {car.brand}
          </Heading>
          <Divider />
          <p>{car.model}</p>
          <p>{car.color}</p>
          <p>{car.year}</p>
          <p>{car.price}</p>
          <Divider />

          <Box display="flex" justifyContent="end" gridGap={2}>
            <Button colorScheme="blue" onClick={() => selectCard(car)}>
              select
            </Button>
            <AlertDelete deleteCard={deleteCard} idcar={car.id}/>
            {/* <Button colorScheme="teal" onClick={() => deleteCard(car.id)}>
              delete
            </Button> */}
          </Box>
        </ListItem>
      ))}
    </UnorderedList>
  );
};
