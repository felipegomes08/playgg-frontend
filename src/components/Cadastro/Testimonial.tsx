import {
  Box,
  Flex,
  HStack,
  Img,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { ImQuotesLeft } from "react-icons/im";

export function Testimonial() {
  return (
    <Flex as="blockquote" flex="1">
      <Box marginEnd="4" fontSize="32px" color="gray.300">
        <ImQuotesLeft />
      </Box>
      <Box>
        <Text fontSize="2xl" mt="4">
          Buscando unir estudos com os games, levando entreterimento aos jovens
          que curtem os e-sports.
        </Text>
      </Box>
    </Flex>
  );
}
