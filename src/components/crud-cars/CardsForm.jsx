import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

export const CardsForm = ({
  getCars,
  carSelected,
  selectCard,
  onOpen,
  onClose,
  isOpen,
  setCarSelected,
}) => {
  const { handleSubmit, register, reset } = useForm();
  const initialValue = {
    brand: "",
    model: "",
    color: "",
    year: "",
    price: "",
  };
  const toast = useToast();
  useEffect(() => {
    if (carSelected) {
      reset(carSelected);
    } else {
      reset(initialValue);
    }
  }, [carSelected]);

  const submit = (data) => {
    if (carSelected) {
      axios
        .put(`http://cars-crud.academlo.tech/cars/${carSelected.id}/`, data)
        .then(() => getCars())
        .catch((error) => console.log(error.response?.data));
      selectCard(null);
    } else {
      axios
        .post("http://cars-crud.academlo.tech/cars/", data)
        .then(() => getCars())
        .catch((error) => console.log(error.response?.data));
      reset(initialValue);
    }
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };
  const cancel = () => {
    onClose();
    toast({
      title: carSelected ?"card edit cancel.": "card create cancel",
      description: "We've created your account for you.",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
    setCarSelected(null);
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Add new Car
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{!carSelected ? "Add new Car" : "Edit Car"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action="" onSubmit={handleSubmit(submit)} id="newForm">
              <FormControl isRequired mb={4} id="brand">
                <FormLabel>Brand</FormLabel>
                <Input type="text" placeholder="brand" {...register("brand")} />
                <FormHelperText>ingrese nombre del vehiculo</FormHelperText>
              </FormControl>
              <FormControl isRequired mb={4} id="model">
                <FormLabel>Model</FormLabel>
                <Input type="text" placeholder="model" {...register("model")} />
                <FormHelperText>ingrese Modelo del vehiculo</FormHelperText>
              </FormControl>
              <FormControl isInvalid={false} mb={4} id="color">
                <FormLabel>Color</FormLabel>
                <Input type="text" placeholder="Color" {...register("color")} />
                <FormHelperText>ingrese color del vehiculo</FormHelperText>
              </FormControl>
              <FormControl mb={4} id="year">
                <FormLabel>Year</FormLabel>
                <Input
                  type="number"
                  placeholder="model"
                  {...register("year")}
                />

                <FormHelperText>ingrese año del vehiculo</FormHelperText>
              </FormControl>
              <FormControl isRequired id="price">
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  placeholder="model"
                  {...register("price")}
                />

                <FormHelperText>ingrese Precio del vehiculo</FormHelperText>
              </FormControl>

              {/* <button>enviar</button> */}
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray.200"
              variant="outline"
              type="submit"
              form="newForm"
            >
              Save
            </Button>
            <Button colorScheme="blue" mr={3} onClick={cancel}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Box maxW="600px" mx="auto" p={6} border="1px" borderRadius="20px"> */}
      {/* <Heading mb={4} textAlign="center">
        Form cars
      </Heading> */}
      {/* </Box> */}
    </>
  );
};
