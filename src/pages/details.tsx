import React, { useEffect, useState } from "react";
//import Copa from "./../assets/img/cup.png"//
import {
  Flex,
  Box,
  Text,
  Image,
  HStack,
  Button,
  Stack,
  Link,
  Input,
  FormLabel,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  Modal,
  ModalFooter,
  FormControl,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Table,
  TableCaption,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Tfoot
} from "@chakra-ui/react";
import Logo from "./../assets/img/logo.png";
export default function details() {
  
  return (
    <Flex width="100%" height="100%" direction="column">
      <Flex w="100%" h="80px" justify="flex-end">
        <Flex w="50%" h="100%" align="center" justify="left" pl="20">
          <Image src="https://i.ibb.co/0D9bSpD/logo.png" />
        </Flex>
        <Flex
          justify="space-evenly"
          align="center"
          bg="black"
          h="100%"
          w="50%"
          borderLeftRadius="10"
        >
          <Link color="white" href="./">
            Home
          </Link>
          <Link color="white" href="./Sobre">
            Sobre nós
          </Link>
          <Link color="white" href="/Campeonatos">
            Campeonatos
          </Link>
          <Button bg="purple" color="white" onClick={() => {}}>
            Seja um jogador
          </Button>
        </Flex>
      </Flex>
      <Flex width="100%" height="100vh" justify="center" align="center">
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/1291iKRc5Ho" 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       
      <iframe
      src="https://www.youtube.com/live_chat?v=1291iKRc5Ho&embed_domain=localhost"
      width="700"height="560">  
      </iframe>


      </Flex>
      
      <Flex
        width="100%"
        align="center"
        justify="center"
        flexDir="column"
        padding="10"
        bg="#000000"
      >
        <Text textAlign="justify" fontSize="50" color="#ccc9c9">
          Resultados
        </Text>
      </Flex>
      <Table color="#ccc9c9">
  <Thead>
    <Tr>
      <Th>Posição</Th>
      <Th>Time</Th>
      <Th isNumeric>Pontos</Th>
      <Th isNumeric>V</Th>
      <Th isNumeric>D</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>1</Td>
      <Td>PaiN Gaming</Td>
      <Td isNumeric>4</Td>
      <Td isNumeric>4</Td>
      <Td isNumeric>0</Td>
    </Tr>
    <Tr>
      <Td>2</Td>
      <Td>Keyd Team</Td>
      <Td isNumeric>3</Td>
      <Td isNumeric>3</Td>
      <Td isNumeric>1</Td>
    </Tr>
    <Tr>
      <Td>3</Td>
      <Td>INTZ</Td>
      <Td isNumeric>2</Td>
      <Td isNumeric>2</Td>
      <Td isNumeric>2</Td>
    </Tr>   
      <Td>4</Td>
      <Td>KabuM e-Sports</Td>
      <Td isNumeric>1</Td>
      <Td isNumeric>1</Td>
      <Td isNumeric>3</Td>
  </Tbody>
</Table>


      <Flex bg="black" w="100%" h="80px" justify="space-between" align="center">
        <Image />
        <Text color="white">© 2021 PLAYGG – Todos os direitos reservados.</Text>
        <Flex>
          <Image />
          <Image />
          <Image />
        </Flex>
      </Flex>
      
    </Flex>
  );
}
