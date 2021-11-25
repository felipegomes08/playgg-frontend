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
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Campeonatos from "./Campeonatos";

export default function Admin() {
  const [users, setUsers] = useState<any>([]);
  const [nomeJogador, setNomeJogador] = useState("");
  const [idade, setIdade] = useState("");
  const [funcao, setFuncao] = useState("");
  const [equipePertencente, setEquipePertencente] = useState("");
  const [id, setId] = useState(0);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function loadUsers() {
      // GET request using fetch with error handling
      fetch("http://localhost:5000/api/Jogadores")
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
    if (nomeJogador != "" && idade != "") {
      const req = await fetch("http://localhost:5000/api/Jogadores/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id,
          nomeJogador,
          idade,
          funcao,
          equipePertencente,
        }),
      });
      const json = await req.json();
      toast({
        title: "Sucesso ao editar usuário",
        status: "success",
        isClosable: true,
      });
    } else {
      toast({
        title: "Erro ao editar usuário",
        status: "error",
        isClosable: true,
      });
    }
  }
  function handleDelete() {
    fetch("http://localhost:5000/api/Jogadores/" + id, { method: "DELETE" })
      .then(() => {
        toast({
          title: "Sucesso ao deletar usuário",
          status: "success",
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Erro ao editar usuário",
          status: "error",
          isClosable: true,
        });
      });
  }
  return (
    <Box p="10">
      <Table>
        <Thead>
          <Tr>
            <Th>Nome do Jogador</Th>
            <Th>Equipe</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((users, index) => (
            <Tr key={index}>
              <Td>{users.nomeJogador}</Td>
              <Td>{users.equipePertencente}</Td>
              <Td>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      bg="#2E2E2E"
                      mr="5"
                      onMouseMove={() => {
                        setNomeJogador(users.nomeJogador);
                        setIdade(users.idade);
                        setFuncao(users.funcao);
                        setEquipePertencente(users.equipePertencente);
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
                        Esta ação é irreverssível, tem certeza que deseja
                        deletar este usuário?
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
                    setNomeJogador(users.nomeJogador);
                    setIdade(users.idade);
                    setFuncao(users.funcao);
                    setEquipePertencente(users.equipePertencente);
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
              placeholder={nomeJogador}
              onChange={(e) => {
                setNomeJogador(e.target.value);
              }}
              mb="5"
            />
            <Input
              placeholder={equipePertencente}
              onChange={(e) => {
                setEquipePertencente(e.target.value);
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
