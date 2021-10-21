import { Flex, Stack, Input, Button } from "@chakra-ui/react"
import React, {useState} from "react"
export default function Login (){
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    async function handleLogin(){
        const req = await fetch('',{
            method: 'POST',
            body: JSON.stringify({
                nome,
                senha
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await req.json()

        console.log(json)
    }
    return(
        <Flex w="100vw" h="100vh" align="center" justify="center" bg="black">
            <Flex borderRadius="8" w="100%" maxW="360px" h="100%" maxH="500px" bg="gray.900" justify="center" align="center">
                <Stack direction="column" spacing="6">
                    <Input value={nome} onChange={e => setNome(e.target.value)} color="gray.50" placeholder="user" />
                    <Input value={senha} onChange={e => setSenha(e.target.value)} type="password" color="gray.50" placeholder="senha" />
                    <Button onClick={handleLogin} variant="solid" bg="blue.600" color="gray.50">Entrar</Button>
                </Stack>
            </Flex>
        </Flex>
    )
}