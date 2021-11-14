import React, { useEffect, useState } from "react";
//import Copa from "./../assets/img/cup.png"//
import {
  Flex,
  Box,
  Text,
  Image,
  HStack,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import Logo from "./../assets/img/logo.png";
export default function Campeonatos() {
  const [campeonatos, setCampeonatos] = useState<any>([]);

  useEffect(() => {
    async function loadChampions() {
      // GET request using fetch with error handling
      fetch("http://localhost:5000/api/Champions")
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          console.log(data);
          setCampeonatos(data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
    loadChampions();
  }, []);

  return (
    <Flex width="100%" height="100%" direction="column">
      <Flex w="100%" h="80px" justify="flex-end">
        <Flex w="50%" h="100%" align="center" justify="left" pl="5">
          <Image />
        </Flex>
        <Flex
          justify="space-evenly"
          align="center"
          bg="black"
          h="100%"
          w="50%"
          borderLeftRadius="10"
        >
          <Link color="white">Home</Link>
          <Link color="white">Sobre nós</Link>
          <Link color="white">Campeonatos</Link>
          <Button bg="purple" color="white">
            Seja um organizador
          </Button>
        </Flex>
      </Flex>
      <Flex width="100%" height="100vh" justify="center" align="center">
        <iframe
          src="https://player.twitch.tv/?channel=yoda&parent=localhost&muted=true"
          height="720"
          width="1280"
          allowFullScreen={true}
        ></iframe>
        <iframe
          id="twitch-chat-embed"
          src="https://www.twitch.tv/embed/yoda/chat?parent=localhost"
          height="700"
          width="400"
        ></iframe>
      </Flex>

      <Flex w="100%" px="50" mt="10">
        <Stack direction="row" flexWrap="wrap" w="100%" justify="center">
          {campeonatos.map((item, index) => (
            <Flex p="5" key={index}>
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="flex-start"
                borderRadius="8"
                w="300px"
                h="300px"
                bg="white"
                color="black"
              >
                <Image
                  borderRadius="5"
                  objectFit="cover"
                  h="60%"
                  w="100%"
                  src="https://image.api.playstation.com/vulcan/img/rnd/202109/1303/kaXldqXxbIyvX9Kn8eeFckQJ.png?"
                  alt=""
                />
                <Text fontSize="20" fontWeight="bold">
                  {item.game}
                </Text>
                <Stack w="100%" spacing="1">
                  <Text>Data: {item.data}</Text>
                  <Text>Local: {item.location}</Text>
                  <Text>Vagas: {item.numberOfTeams}</Text>
                </Stack>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Flex>

      <Flex bg="black" w="100%" h="80px" justify="space-between" align="center">
        <Image />
        <Text color="white">© 2021 PLAYGG – Todos os direitos reservados.</Text>
        <Flex>
          <Image />
          <Image />
          <Image />
        </Flex>
      </Flex>
    </Flex>
  );
}
