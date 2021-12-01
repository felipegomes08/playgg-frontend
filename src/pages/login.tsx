import * as React from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import {useRouter} from "next/router"; 

import { Card } from "./../components/Login/Card";
import { Link } from "./../components/Login/Link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const toast = useToast();
  const router = useRouter();

  function handleLogin() {
    if (email != "" && senha != "") {
      if (email == "admin@gmail.com") {
        router.push("/Admin");
      } else if (email == "wilson@gmail.com") {
        router.push("/");
      } else {
        toast({
          title: "Email ou senha inválidos!",
          status: "error",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Preencha todos os campos!",
        status: "error",
        isClosable: true,
      });
    }
  }
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        {/* <Logo mx="auto" h="8" mb={{ base: '10', md: '20' }} /> */}
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Entre com sua conta
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Não possui uma conta?</Text>
          <Link href="./Cadastro">Cadastre-se agora</Link>
        </Text>
        <Card>
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
                  type="password"
                  required
                  onChange={(e) => setSenha(e.target.value)}
                />
              </FormControl>
              <Button
                onClick={handleLogin}
                type="submit"
                colorScheme="blue"
                size="lg"
                fontSize="md"
              >
                Entrar
              </Button>
            </Stack>
          </chakra.form>
        </Card>
      </Box>
    </Box>
  );
}
