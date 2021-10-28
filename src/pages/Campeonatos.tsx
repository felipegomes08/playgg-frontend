import React, { useState } from "react";
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
    allowfullscreen="true">
</iframe>
<iframe id="twitch-chat-embed"
        src="https://www.twitch.tv/embed/yoda/chat?parent=localhost"
        height="700"
        width="400">
</iframe>
      </Flex>
       
      
        
        <Flex width="100%" bg="#011627" justify="center" pt="10px">
          <Stack spacing="5" direction="row">
            <Flex boxSize="sm" direction="column">
              <Image
                height="180px"
                src="https://gamerstream.com.br/wp-content/uploads/2021/10/5cf14011e05c1-1024x536.jpg"
                alt="Segun Adebayo"
              />
              <Text mt="2" color="white" fontWeight="bold">
                28 SET-05 OUT
              </Text>
              <Text my="2" color="white">
                Qui, 07 Out · 14:00
              </Text>
              <Text my="2" color="white">
                GAME CUP 2021
              </Text>
              <Text my="2" color="white">
                oCeano – Patos de Minas, MG
              </Text>
              <Button
                my="2"
                alignSelf="center"
                w="120px"
                bg="blue"
                color="white"
              >
                Saiba Mais
              </Button>
            </Flex>
            <Flex boxSize="sm" direction="column">
              <Image
                height="180px"
                src="https://gamerstream.com.br/wp-content/uploads/2021/10/IEM-Cologne-2021-1024x538.jpg"
                alt="Segun Adebayo"
              />
              <Text mt="2" color="white" fontWeight="bold">
                28 SET-10 OUT
              </Text>
              <Text my="2" color="white">
                Ter, 12 Out · 14:00
              </Text>
              <Text my="2" color="white">
                Cologne 2021 2021
              </Text>
              <Text my="2" color="white">
                oCeano – Patos de Minas, MG
              </Text>
              <Button
                my="2"
                alignSelf="center"
                w="120px"
                bg="blue"
                color="white"
              >
                Saiba Mais
              </Button>
            </Flex>
            <Flex boxSize="sm" direction="column">
              <Image
                height="180px"
                src="https://gamerstream.com.br/wp-content/uploads/2021/10/LCK-2021-logo-1024x576.png"
                alt="Segun Adebayo"
              />
              <Text mt="2" color="white" fontWeight="bold">
                28 SET-05 OUT
              </Text>
              <Text my="2" color="white">
                Qui, 21 Out · 14:00
              </Text>
              <Text my="2" color="white">
                LCK 2021 Spring
              </Text>
              <Text my="2" color="white">
                oCeano – Patos de Minas, MG
              </Text>
              <Button
                my="2"
                alignSelf="center"
                w="120px"
                bg="blue"
                color="white"
              >
                Saiba Mais
              </Button>
            </Flex>
            <Flex boxSize="sm" direction="column">
              <Image
                height="180px"
                src="https://gamerstream.com.br/wp-content/uploads/2021/10/copa-do-mundo-fortnite.jpg"
                alt="Segun Adebayo"
              />
              <Text mt="2" color="white" fontWeight="bold">
                28 SET-15 NOV
              </Text>
              <Text my="2" color="white">
                Ter, 16 Nov · 14:00
              </Text>
              <Text my="2" color="white">
                GAME CUP 2021
              </Text>
              <Text my="2" color="white">
                oCeano – Patos de Minas, MG
              </Text>
              <Button
                my="2"
                alignSelf="center"
                w="120px"
                bg="blue"
                color="white"
              >
                Saiba Mais
              </Button>
            </Flex>
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
