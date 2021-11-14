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
export default function Index() {
  const slides = [
    {
      img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/12/valorant-ep1-ato3-publi.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://s2.glbimg.com/VoXILhGLU6mIST_g8RkPhvEv7Iw=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/x/p/byvgKJTtymBdyJwS09uA/league-newlogo-banner.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/12/valorant-ep1-ato3-publi.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/12/valorant-ep1-ato3-publi.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/12/valorant-ep1-ato3-publi.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

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
      <Flex width="100%" height="100vh" align="center">
        <Box
          width="50%"
          height="50%"
          display="flex"
          flexDir="column"
          align="center"
          justify="flex-end"
          px="10%"
        >
          <Text textAlign="justify" fontSize="72" fontWeight="bold">
            Em destaque
            <br /> na playGG
          </Text>
          <Text textAlign="justify" fontSize="30">
            O #Worlds2021, o grande Mundial de League of Legends, acontece do
            dia 5 de outubro até 6 de novembro, e você assiste AO VIVO nos
            canais oficiais do CBLOL – no YouTube, na Twitch e na Nimo TV. Não
            perca nenhuma emoção!
          </Text>
        </Box>
        <Box
          width="50%"
          height="50%"
          display="flex"
          align="center"
          justify="center"
        >
          <iframe
            width="607"
            height="341"
            src="https://www.youtube.com/embed/oJDRxXCgUB8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Box>
      </Flex>
      <Flex width="100%" height="100%" direction="column">
        <Box width="100%">
          <Text fontSize="71" fontWeight="Regular " align="center">
            Jogos que estão conosco:
          </Text>
        </Box>
        <Flex w="full" p={10} alignItems="center" justifyContent="center">
          <Flex w="700px" overflow="hidden" pos="relative">
            <Flex h="400px" w="full" {...carouselStyle}>
              {slides.map((slide, sid) => (
                <Box
                  key={`slide-${sid}`}
                  boxSize="full"
                  shadow="md"
                  flex="none"
                >
                  <Text
                    color="white"
                    fontSize="xs"
                    p="8px 12px"
                    pos="absolute"
                    top="0"
                  >
                    {sid + 1} / {slidesCount}
                  </Text>
                  <Image
                    src={slide.img}
                    boxSize="full"
                    backgroundSize="cover"
                  />
                </Box>
              ))}
            </Flex>
            <Text left="0" onClick={prevSlide}>
              &#10094;
            </Text>
            <Text right="0" onClick={nextSlide}>
              &#10095;
            </Text>
            <HStack justify="center" pos="absolute" bottom="8px" w="full">
              {Array.from({ length: slidesCount }).map((_, slide) => (
                <Box
                  key={`dots-${slide}`}
                  cursor="pointer"
                  boxSize={["7px", , "15px"]}
                  m="0 2px"
                  bg={
                    currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                  }
                  rounded="50%"
                  display="inline-block"
                  transition="background-color 0.6s ease"
                  _hover={{ bg: "blackAlpha.800" }}
                  onClick={() => setSlide(slide)}
                ></Box>
              ))}
            </HStack>
          </Flex>
        </Flex>
        <Box width="100%">
          <Text fontSize="71" fontWeight="Regular " align="center">
            Campeonatos próximos a você:
          </Text>
        </Box>
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
