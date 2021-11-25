import { Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/system";
import React,{useState} from "react";

export function EmailLoginForm(){
  const toast = useToast();
  const [nomeEquipe, setNomeEquipe] = useState("");
  const [logoEquipe, setLogoEquipe] = useState("");

  async function handleSent() {
    if (nomeEquipe != "" && logoEquipe != "") {
      const req = await fetch("http://localhost:5000/api/Equipes", {
        method: "POST",
        body: JSON.stringify({
          nomeEquipe,
          logoEquipe,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then(() => {
          toast({
            title: "Sucesso ao cadastrar equipe",
            status: "success",
            isClosable: true,
          });
        })
        .catch(() => {
          toast({
            title: "Erro ao cadastrar equipe",
            status: "error",
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "Preencha todos os campos corretamente",
        status: "error",
        isClosable: true,
      });
    }
  }
  return(
  <chakra.form width="full">
    <FormControl>
      <Input
        mb="3"
        placeholder="Nome da equipe"
        _placeholder={{ color: useColorModeValue("gray.600", "gray.400") }}
        value={nomeEquipe}
        onChange={e => setNomeEquipe(e.target.value)}
      />
      <Input
        placeholder="Insira o link da LOGO da equipe"
        _placeholder={{ color: useColorModeValue("gray.600", "gray.400") }}
        value={logoEquipe}
        onChange={e => setLogoEquipe(e.target.value)}
      />
    </FormControl>
    <Button
      mt="3"
      isFullWidth
      fontSize="sm"
      fontWeight="bold"
      colorScheme="gray"
      onClick={handleSent}
    >
      Criar equipe
    </Button>
  </chakra.form>
);}
