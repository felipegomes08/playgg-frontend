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
export default function Sobre() {
  return (
    <Flex width="100%" height="100%" direction="column" bg="#011627">
      <Flex w="100%" h="80px" justify="flex-end">
        <Flex w="50%" h="100%" align="center" justify="left" pl="5">
          <Image src= "https://i.ibb.co/0D9bSpD/logo.png"/>
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
      <Flex
        width="100%"
        align="center"
        justify="center"
        flexDir="column"
        padding="100"
      >
        <Text textAlign="justify" fontSize="21" fontWeight="bold" color="white">
          GGPLAY
        </Text>
        <Text textAlign="justify" fontSize="90" fontWeight="bold" color="white">
          SOBRE NÓS
        </Text>
      </Flex>
      <Flex width="100%" height="100%" justify="center" align="center">
        <Flex width="100%" height="100%" align="flex-start" pb="24">
          <Flex width="50%" height="100%" align="center" justify="center">
            <Image
              width="565.98"
              height="413.98"
              src="https://gamerstream.com.br/wp-content/uploads/2021/10/anthony-brolin-nVzSd3zrKDtE-unsplash-min.jpg"
            ></Image>
          </Flex>
          <Box
            width="50%"
            height="50%"
            display="flex"
            flexDir="column"
            align="center"
            justify="flex-end"
            px="10%"
          >
            <Text textAlign="justify" fontSize="40" color="white">
              Nossa missão é mudar a vida de milhões de jovens e crianças e
              ensiná-las diversas habilidades importantes para o profissional do
              futuro, de maneira didática, sem enrolação e com muita diversão!
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        align="center"
        justify="center"
        flexDir="column"
        padding="100"
        bg="#ffffff"
      >
        <Text textAlign="justify" fontSize="50" color="black">
          Pessoas por trás do projeto?
        </Text>
      </Flex>
      <Flex width="100%" bg="#011627" justify="center" pt="10px">
        <Stack bg="black" spacing="5" direction="row" p="2.5">
          <Flex boxSize="sm" direction="column" position="relative">
            <Flex
              position="absolute"
              width="100%"
              height="100%"
              bg="#240d8dc9"
            >
            <Stack direction="column" justify="flex-end" align="center" width="100%" pb="20"> 
              <Text fontSize="14" fontWeight="bold" color="white">ITALLO ANDRADE</Text>
              <Text fontSize="14"as="i" color="white">DESENVOLVEDOR FULLSTACK</Text>
              </Stack>
            </Flex>
            <Image
              height="100%"
              src="https://i.ibb.co/sQVnZb7/itallo.jpg"
              alt="Segun Adebayo"
            />
          </Flex>
          <Flex boxSize="sm" direction="column" position="relative">
            <Flex
              position="absolute"
              width="100%"
              height="100%"
              bg="#240d8dc9"
            >
               <Stack direction="column" justify="flex-end" align="center" width="100%" pb="20"> 
              <Text fontSize="14" fontWeight="bold" color="white">FELIPE GOMES</Text>
              <Text fontSize="14" as="i" color="white">DESENVOLVEDOR FULLSTACK</Text>
              </Stack>
            </Flex>
            <Image
              height="100%"
              src="https://i.ibb.co/GHvCKmH/felipe.jpg"
              alt="Segun Adebayo"
            />
          </Flex>
          <Flex boxSize="sm" direction="column" position="relative">
            <Flex
              position="absolute"
              width="100%"
              height="100%"
              bg="#240d8dc9"
            >
               <Stack direction="column" justify="flex-end" align="center" width="100%" pb="20"> 
              <Text fontSize="14" fontWeight="bold" color="white">WILSON JUNIOR</Text>
              <Text fontSize="14" as="i" color="white">DESENVOLVEDOR FULLSTACK</Text>
              </Stack>
            </Flex>
            <Image
              height="100%"
              w="100%"
              src="https://i.ibb.co/kgjpJ6R/wilson.jpg"
              alt="Segun Adebayo"
            />
          </Flex>
        </Stack>
      </Flex>

      <Flex width="100%" bg="#011627" justify="center" pt="10px" >
        <Stack  spacing="5" direction="row" p="2.5" justify="center" align="center" >
          <Flex boxSize="sm" direction="column" justify="center" align="center"  >
            <Flex border="10px solid #3a07c8" >
            <iframe     
                      
              width="335.25"
              height="221.53"
              src="https://www.youtube.com/embed/box4SFtGvA0"
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            </Flex>
          </Flex>
          <Flex boxSize="sm" direction="column" justify="center" align="center">
          
          <Flex border="10px solid #3a07c8" >
            <iframe
              width="335.25"
              height="221.53"
              src="https://www.youtube.com/embed/5fMZEmO549c"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            </Flex>
          </Flex>
          <Flex boxSize="sm" direction="column" justify="center" align="center">
          <Flex border="10px solid #3a07c8" >
            <iframe
              width="335.25"
              height="221.53"
              src="https://www.youtube.com/embed/62SoZQxJMQc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            </Flex>
          </Flex>
          <Flex boxSize="sm" direction="column" justify="center" align="center">
          <Flex border="10px solid #3a07c8" >
            <iframe
              width="335.25"
              height="221.53"
              src="https://www.youtube.com/embed/tSqhhCewNww"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            </Flex>
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
