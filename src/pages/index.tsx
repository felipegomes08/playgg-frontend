import React from "react";
import Copa from "./../assets/img/cup.png"
import { Flex, Box, Text,Image } from "@chakra-ui/react";
export default function Home() {
  return (
    <Flex width="100%" height="100%" direction="column">
      <Flex>
        <Box>
          <Text fontSize="72" fontWeight="bold">Em destaque na playGG</Text>
          <Text fontSize="30">
            O #Worlds2021, o grande Mundial de League of Legends, acontece do
            dia 5 de outubro até 6 de novembro, e você assiste AO VIVO nos
            canais oficiais do CBLOL – no YouTube, na Twitch e na Nimo TV. Não
            perca nenhuma emoção!
          </Text>
        </Box>
        <Box>
       <Image src={Copa}/>
        </Box>
      </Flex>
    </Flex>
  );
}
