import React, { useState, useEffect } from "react";
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

  const slides = [
    {
      img: "https://support-leagueoflegends.riotgames.com/hc/article_attachments/4402976855699/Multiple_Sentinels_Splash.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://s2.glbimg.com/rPy7A1d3xGNXhEBkFeymDy45rl4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/s/W/rPsLN6SyAp4q7AcIBYTQ/1541419312747-tr-2-wallpaper.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/12/valorant-ep1-ato3-publi.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/hoodwink.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://s2.glbimg.com/s6t4nWk32AxxarrPDAhXB_VxRYs=/0x0:2560x1440/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/7/h/4Hj5ZbRK2xsfpavGhW7Q/playerunknowns-battleground-fps.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        <Flex w="50%" h="100%" align="center" justify="left" pl="20">
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
          <Link color="white" href="./">Home</Link>
          <Link color="white" href="./Sobre">Sobre nós</Link>
          <Link color="white" href="/Campeonatos">Campeonatos</Link>
          <Link href="/Cadastro" textDecoration="none">
            <Button bg="purple" color="white">
              Seja um jogador
            </Button>
          </Link>
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
          <Text textAlign="justify" fontSize="62" fontWeight="bold">
            Em destaque
            <br /> na playGG
          </Text>
          <Text textAlign="justify" fontSize="20">
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
            src="https://www.youtube.com/embed/oJDRxXCgUB8?autoplay=1"
            title="YouTube video player"
            allow='autoplay'
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
        <Flex width="100%" bg="#011627" justify="center" py="10px">
          <Stack w="100%" spacing="5" direction="row" flexWrap="wrap" justify="center" align="center">
            {campeonatos.map((item, index) => (
              <Flex borderRadius="8" bg="#00111f"  key={index} boxSize="sm" direction="column">
                <Image
                  height="180px"
                  src="https://gamerstream.com.br/wp-content/uploads/2021/10/5cf14011e05c1-1024x536.jpg"
                  alt="Segun Adebayo"
                />
                <Text fontSize="20" mt="2" mx="5" color="white" fontWeight="bold">
                  {item.data}
                </Text>
                <Text fontSize="20" my="2" mx="5" color="white">
                  {item.game}
                </Text>
                <Text fontSize="20" my="2" mx="5" color="white">
                  {item.location}
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
            ))}
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
