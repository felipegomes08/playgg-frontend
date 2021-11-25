import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { PasswordField } from "./PasswordField";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const toast = useToast();

function handleLogin(){
  if(email != "" && senha != ""){
    if(email == "admin@gmail.com"){

    }else if(email == "wilson@gmail.com"){

    }else{
      toast({
        title: "Email ou senha inválidos!",
        status: "error",
        isClosable: true,
      });
    }
  }else{
    toast({
      title: "Preencha todos os campos!",
      status: "error",
      isClosable: true,
    });
  }
}

  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault();
        // your login logic here
      }}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="senha">
          <FormLabel>Senha</FormLabel>
          <Input
            name="senha"
            type="senha"
            required
            onChange={(e) => setSenha(e.target.value)}
          />
        </FormControl>
        <Button onClick={handleLogin} type="submit" colorScheme="blue" size="lg" fontSize="md">
          Entrar
        </Button>
      </Stack>
    </chakra.form>
  );
}
