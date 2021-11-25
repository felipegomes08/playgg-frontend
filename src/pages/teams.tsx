import {
  Box,
  Heading,
  LightMode,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { Card } from "../components/Teams/Card";
import { EmailLoginForm } from "../components/Teams/EmailLoginForm";
import { GoogleLoginButton } from "../components/Teams/GoogleLoginButton";
import { Logo } from "../components/Teams/Logo";

export default function Teams() {
  return (
    <Box as="section" bgGradient="black" py="20" h="100vh">
      <Card maxW="2xl" mx="auto" textAlign="center">
        <Stack maxW="xs" mx="auto" spacing="8">
          <Stack spacing="3">
            <Heading as="h1" letterSpacing="tight">
              Cadastre sua equipe
            </Heading>
            <Text
              fontWeight="medium"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Junte a galera e venha competir
            </Text>
          </Stack>
          <EmailLoginForm />
        </Stack>
        <Text
          mt="16"
          fontSize="xs"
          mx="auto"
          maxW="md"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Continuando você concorda com os termos da PlayGG.
        </Text>
      </Card>
    </Box>
  );
}
