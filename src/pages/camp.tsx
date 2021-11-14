import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  Select
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiCloudUpload } from 'react-icons/hi'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { FieldGroup } from '../components/CadastroCamp/FieldGroup'
import { CurrencySelect } from '../components/CadastroCamp/CurrencySelect'
import { LanguageSelect } from '../components/CadastroCamp/LanguageSelect'

export default function Camp(){
  const [Game, setGame] = useState("")
  const [Description, setDescription] = useState("")
  const [Data, setData] = useState("")
  const [Location, setLocation] = useState("")
  const [numberOfTeams, setNumberOfTeams] = useState(0)

  async function handleSendChamp(){
      if(Game != "" && Description != "" && Data != "" && Location != "" && numberOfTeams > 0){
        const req = await fetch('http://localhost:5000/api/Champions', {
          method: 'POST', 
                   body: JSON.stringify({
                    Game,
                    Description,
                    Location, 
                    Data,
                    numberOfTeams
                   }),
                   headers: {'Content-Type': 'application/json'}
        });
        const json = await req.json();
        alert("Sucesso ao cadastrar!!");
      } else {
        alert("Preencha todos os campos corretamente");
      }
  }
  return(
  <Box px={{ base: '4', md: '10' }} py="16" maxWidth="3xl" mx="auto">
    <form
      id="settings-form"
      onSubmit={(e) => {
        e.preventDefault()
        // form submit logic
      }}
    >
      <Stack spacing="4" divider={<StackDivider />}>
        <Heading size="lg" as="h1" paddingBottom="4">
          Novo Campeonato
        </Heading>
        <FieldGroup title="Informações">
          <VStack width="full" spacing="6">
            <FormControl id="name">
              <FormLabel>Nome</FormLabel>
              <Input value={Game} onChange={e => setGame(e.target.value)} type="text" maxLength={255} />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Categoria (jogo)</FormLabel>
              <Input type="email" isReadOnly />
            </FormControl>
            <FormControl id="number">
              <FormLabel>Quantidade máxima de times</FormLabel>
              <Input type="number" value={numberOfTeams} onChange={e => setNumberOfTeams(e.target.valueAsNumber)} />
            </FormControl>
            <FormControl id="Data">
              <FormLabel>Data do evento</FormLabel>
              <Input value={Data} onChange={e => setData(e.target.value)} />
            </FormControl>

            <FormControl id="bio">
              <FormLabel>Descrição</FormLabel>
              <Textarea value={Description} onChange={e => setDescription(e.target.value)} rows={5} />
            </FormControl>
          </VStack>
        </FieldGroup>
        <FieldGroup title="Wallpaper">
          <Stack direction="row" spacing="6" align="center" width="full">
            <Avatar
              size="xl"
              name="Lol"
              src="https://t2.tudocdn.net/490459?w=1200"
            />
            <Box>
              <HStack spacing="5">
                <Button leftIcon={<HiCloudUpload />}>Carregar</Button>
                <Button variant="ghost" colorScheme="red">
                  Deletar
                </Button>
              </HStack>
              <Text fontSize="sm" mt="3" color={useColorModeValue('gray.500', 'whiteAlpha.600')}>
                .jpg, .gif, or .png. Tamanho máximo 700K.
              </Text>
            </Box>
          </Stack>
        </FieldGroup>
        <FieldGroup title="Language">
          <VStack width="full" spacing="6">
          <FormControl id="language">
          <FormLabel>Modalidade</FormLabel>
            <Select value={Location} onChange={e => setLocation(e.target.value)} maxW="2xs">
              <option>Presencial</option>
              <option>Online</option>
            </Select>
          </FormControl>
            <CurrencySelect />
          </VStack>
        </FieldGroup>
      </Stack>
      <FieldGroup mt="8">
        <HStack width="full">
          <Button onClick={handleSendChamp} colorScheme="blue">
            Salvar
          </Button>
          <Button variant="outline">Cancelar</Button>
        </HStack>
      </FieldGroup>
    </form>
  </Box>
  )}
