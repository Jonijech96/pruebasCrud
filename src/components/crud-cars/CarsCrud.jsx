import React, { useEffect, useState } from "react";
import axios from "axios";
import { CarsList } from "./CarsList";
import { CardsForm } from "./CardsForm";
import {
  Box,
  Heading,
  Flex,
  Button,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";

export const CarsCrud = () => {
  const [carsList, setCarsList] = useState([]);
  const [carSelected, setCarSelected] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    axios
      .get("http://cars-crud.academlo.tech/cars/")
      .then((res) => setCarsList(res.data));
  };

  const deleteCard = (id) => {
    axios
      .delete(`http://cars-crud.academlo.tech/cars/${id}/`)
      .then(() => getCars())
      .catch((error) => console.log(error.response?.data));
  };

  const selectCard = (movie) => {
    setCarSelected(movie);
    onOpen();
  };

  return (
    <Box bg="gray.700" color="gray.200" minH="100vh">
      <Box maxW="1200px" w="80%" mx="auto">
        <Flex alignItems="center">
          <Heading mb={4}>Cars</Heading>
          <Spacer />

          <CardsForm
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            getCars={getCars}
            carSelected={carSelected}
            selectCard={selectCard}
            setCarSelected={setCarSelected}
          />
        </Flex>
        <CarsList
          carsList={carsList}
          selectCard={selectCard}
          deleteCard={deleteCard}
        />
      </Box>
    </Box>
  );
};
