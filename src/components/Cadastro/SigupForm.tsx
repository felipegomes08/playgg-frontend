import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { json } from 'stream/consumers';

export const SigupForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function hadleSent() {
    if(nome != "" && email != "" && senha != ""){
      const req = await fetch('http://localhost:5000/api/Users', {
        method: 'POST', 
                 body: JSON.stringify({
                   nome,
                   email, 
                   senha
                 }),
                 headers: {'Content-Type': 'application/json'}
      });
      const json = await req.json();
      alert("Sucesso ao cadastrar!!");
    } else {
      alert("Preencha todos os campos corretamente");
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        // your submit logic here
      }}
    >
      <Stack spacing="4">
        <FormControl id="name">
          <FormLabel mb={1}>Nome</FormLabel>
          <Input autoComplete="name" value={nome} onChange={e => setNome(e.target.value)}/>
        </FormControl>
        <FormControl id="email">
          <FormLabel mb={1}>Email</FormLabel>
          <Input autoComplete="name" value={email} onChange={e => setEmail(e.target.value)}/>
        </FormControl>
        <FormControl>
          <Flex align="baseline" justify="space-between">
            <FormLabel mb={1}>Senha</FormLabel>
            <Box
              as="a"
              href="#"
              fontWeight="semibold"
              fontSize="sm"
              color={mode('blue.600', 'blue.200')}
            >
              Esqueceu a senha?
            </Box>
          </Flex>
          <Input type="password" autoComplete="current-password"  value={senha} onChange={e => setSenha(e.target.value)}/>
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md" onClick={hadleSent}> 
          Criar conta
        </Button>
      </Stack>
    </form>
  )
}
