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
  Input
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Campeonatos from "./Campeonatos";

export default function Admin() {
  const [users, setUsers] = useState<any>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [id, setId] = useState(0);
  
  const { isOpen, onOpen, onClose } = useDisclosure()

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

  async function updateUser(){
      if(nome != "" && email != ""){
        const req = await fetch('http://localhost:5000/api/Users/${id}', {
          method: 'PUT', 
          headers: {'Content-Type': 'application/json'},
                   body: JSON.stringify({
                     id,
                     nome,
                     email, 
                     senha
                   })
        });
        const json = await req.json();
        alert("Sucesso ao enviar informações!!");
      } else {
        alert("Preencha todos os campos corretamente");
      }
    
  }
  function handleDelete(){
    console.log(id)
    fetch("http://localhost:5000/api/Users/${id}", { method: "DELETE" })
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
                <Button bg="#2E2E2E" mr="5" onClick={handleDelete} onMouseMove={()=>{setNome(users.nome); setEmail(users.email); setSenha(users.senha); setId(users.id)}} >
                  Deletar
                </Button>
                <Button bg="#2E2E2E" onMouseMove={()=>{setNome(users.nome); setEmail(users.email); setSenha(users.senha); setId(users.id)}} onClick={onOpen}>Editar</Button>
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
            <Input onChange={e=>{setId(e.target.valueAsNumber)}} mb="5"/>
            <Input placeholder={nome} onChange={e=>{setNome(e.target.value)}} mb="5"/>
            <Input placeholder={email} onChange={e=>{setEmail(e.target.value)}} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={updateUser} >
              Salvar
            </Button>
            <Button colorScheme="red" onClick={onClose}>Cacelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
