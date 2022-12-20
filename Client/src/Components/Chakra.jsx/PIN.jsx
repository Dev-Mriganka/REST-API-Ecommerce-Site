import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
    ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  Center,
  useToast
} from "@chakra-ui/react";
import {PinInput, PinInputField,HStack} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";
export default function InitialFocus() {
  const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();
    const navigate = useNavigate();
    const initialRef = React.useRef(null);
     const {cart, setCart} = useContext(AppContext);
  const finalRef = React.useRef(null);
    const triggered = () => {
      toast({
      title: "Payment Successfull",
      description: "Thanks for purchasing",
      status: "success",
      position: "top-right",
      duration: 3000,
      isClosable: true,
      });
        navigate("/home/women");
        setCart([]);
}
  return (
    <>
      <Button w={"full"} disabled={cart.length==0} onClick={onOpen}>
        Checkout
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
                  <ModalHeader>
                      <Center> Enter the OTP</Center>
                     <Center fontSize={13}>We've send an OTP to your regiseterd number</Center>
                  </ModalHeader>
                  <ModalCloseButton />
                   <Center>
          <ModalBody pl={28} pb={6}>
            <HStack>
              <PinInput size={"lg"}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </ModalBody></Center>

                  <ModalFooter>
                      <Center><Button disabled={cart.length==0} colorScheme="blue" mr={3} onClick={triggered}>
              Submit
            </Button></Center>
            
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
