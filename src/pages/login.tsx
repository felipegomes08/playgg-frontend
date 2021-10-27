import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Card } from './../components/Login/Card'
import { DividerWithText } from './../components/Login/DividerWithText'
import { Link } from './../components/Login/Link'
import { LoginForm } from './../components/Login/LoginForm'
import { Logo } from './../components/Login/Logo'

export default function Login(){
  return(
<Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <Box maxW="md" mx="auto">
      {/* <Logo mx="auto" h="8" mb={{ base: '10', md: '20' }} /> */}
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Entre com sua conta de Organizador
      </Heading>
      <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
        <Text as="span">Não possui uma conta?</Text>
        <Link href="./Cadastro">Cadastre-se agora</Link>
      </Text>
      <Card>
        <LoginForm />
        <DividerWithText mt="6">ou faça login com</DividerWithText>
        <SimpleGrid mt="6" columns={3} spacing="3">
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Facebook</VisuallyHidden>
            <FaFacebook />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Google</VisuallyHidden>
            <FaGoogle />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Github</VisuallyHidden>
            <FaGithub />
          </Button>
        </SimpleGrid>
      </Card>
    </Box>
  </Box>
  )
}
