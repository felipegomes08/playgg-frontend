import {
  Box,
  Stack,
  Td,
  Th,
  Tr,
  Thead,
  TableCaption,
  Table,
  Tbody,
  Tfoot,
  Button,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  Modal,
  useDisclosure,
  Input,
  PopoverBody,
  PopoverCloseButton,
  PopoverArrow,
  PopoverContent,
  Portal,
  PopoverTrigger,
  Popover,
  PopoverHeader,
  useToast
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Campeonatos from "./Campeonatos";

export default function Admin() {
  const [users, setUsers] = useState<any>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [id, setId] = useState(0);
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function loadUsers() {
      // GET request using fetch with error handling
      fetch("http://localhost:5000/api/Users")
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          console.log(data);
          setUsers(data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
    loadUsers();
  }, []);

  async function updateUser() {
    if (nome != "" && email != "") {
      const req = await fetch("http://localhost:5000/api/Users/"+id, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json',
        'Accept': 'application/json' },
        body: JSON.stringify({
          id,
          nome,
          email,
          senha,
        }),
      });
      const json = await req.json();
      toast({
        title: "Sucesso ao editar usuário",
        status: "success",
        isClosable: true,
      })
    } else {
      toast({
        title: "Erro ao editar usuário",
        status: "error",
        isClosable: true,
      })
    }
  }
  function handleDelete() {
    try {
      fetch("http://localhost:5000/api/Users/"+id, { method: "DELETE"});
    } catch (error) {
      console.log(error);
    }finally{
    }
  }
  return (
    <Box p="10">
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((users, index) => (
            <Tr key={index}>
              <Td>{users.nome}</Td>
              <Td>{users.email}</Td>
              <Td>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      bg="#2E2E2E"
                      mr="5"
                      onMouseMove={() => {
                        setNome(users.nome);
                        setEmail(users.email);
                        setSenha(users.senha);
                        setId(users.id);
                      }}
                    >
                      Deletar
                    </Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>
                        Esta ação é irreverssível, tem certeza que deseja deletar
                        este usuário?
                      </PopoverHeader>
                      <PopoverBody>
                        <Button colorScheme="red" onClick={handleDelete}>
                          Confirmar
                        </Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
                <Button
                  bg="#2E2E2E"
                  onMouseMove={() => {
                    setNome(users.nome);
                    setEmail(users.email);
                    setSenha(users.senha);
                    setId(users.id);
                  }}
                  onClick={onOpen}
                >
                  Editar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalHeader>Editar usuário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
              mb="5"
            />
            <Input
              placeholder={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={updateUser}>
              Salvar
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
