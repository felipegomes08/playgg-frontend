import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  Select,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { json } from "stream/consumers";

export const SigupForm = () => {
  const [nomeJogador, setNomeJogador] = useState("");
  const [idade, setIdade] = useState(0);
  const [funcao, setFuncao] = useState("");
  const [equipePertencente, setEquipePertencente] = useState("");
  const toast = useToast();

  async function hadleSent() {
    if (nomeJogador != "" && funcao != "") {
      const req = await fetch("http://localhost:5000/api/Jogadores", {
        method: "POST",
        body: JSON.stringify({
          nomeJogador,
          idade,
          funcao,
          equipePertencente,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
          toast({
            title: "Sucesso ao cadastrar usuário",
            status: "success",
            isClosable: true,
          });
      }).catch(() => {
        toast({
          title: "Erro ao cadastrar usuário",
          status: "error",
          isClosable: true,
        });
      })
      
    } else {
      toast({
        title: "Preencha todos os campos corretamente",
        status: "error",
        isClosable: true,
      });
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // your submit logic here
      }}
    >
      <Stack spacing="4">
        <FormControl id="name">
          <FormLabel mb={1}>NomeJogador</FormLabel>
          <Input
            autoComplete="name"
            value={nomeJogador}
            onChange={(e) => setNomeJogador(e.target.value)}
          />
        </FormControl>
        <FormControl id="idade">
          <FormLabel mb={1}>Idade</FormLabel>
          <Input
            autoComplete="name"
            value={idade}
            type="number"
            onChange={(e) => setIdade(e.target.valueAsNumber)}
          />
        </FormControl>
        <FormControl id="equipe">
          <FormLabel mb={1}>Equipe</FormLabel>
          <Select onChange={(e) => setEquipePertencente(e.target.value)} placeholder="Selecione sua equipe">
            <option color="black" value="Equipe1">Equipe 1</option>
            <option color="black" value="Equipe2">Equipe 2</option>
            <option color="black" value="Equipe3">Equipe 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <Flex align="baseline" justify="space-between">
            <FormLabel mb={1}>Função</FormLabel>
          </Flex>
          <Input
            type="text"
            value={funcao}
            onChange={(e) => setFuncao(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          fontSize="md"
          onClick={hadleSent}
        >
          Criar conta
        </Button>
      </Stack>
    </form>
  );
};
