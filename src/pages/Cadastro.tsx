import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import * as Logos from '../components/Cadastro/Brands'
import { DividerWithText } from './../components/Cadastro/DividerWithText'
import { Logo } from './../components/Cadastro/Logo'
import { SigupForm } from './../components/Cadastro/SigupForm'
import { Testimonial } from './../components/Cadastro/Testimonial'
export default function Cadastro (){
  
    return(
        <Box minH="100vh" bg={{ md: mode('gray.100', 'inherit') }}>
      <Box maxW="6xl" mx="auto" py={{ base: '10', md: '20' }} px={{ base: '4', md: '10' }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="14">
          <Box w="full" maxW="xl" mx="auto">
            <Box
              bg={{ md: mode('white', 'gray.700') }}
              rounded={{ md: '2xl' }}
              p={{ base: '4', md: '12' }}
              borderWidth={{ md: '1px' }}
              borderColor={mode('gray.200', 'transparent')}
              shadow={{ md: 'lg' }}
            >
              {/* <Logo
                h="6"
                mb={{ base: '16', md: '10' }}
                iconColor="blue.600"
                mx={{ base: 'auto', md: 'unset' }}
              /> */}
              <Box mb="8" textAlign={{ base: 'center', md: 'start' }}>
                <Heading size="lg" mb="2" fontWeight="extrabold">
                  Bem vindo ao PlayGG
                </Heading>
                <Text fontSize="lg" color={mode('gray.600', 'gray.400')} fontWeight="medium">
                  Entre e dê start em seus camps
                </Text>
              </Box>
              {/* <Stack spacing="4">
                <Button variant="outline" leftIcon={<Box as={FaGoogle} color="red.500" />}>
                  Sign up with Google
                </Button>
                <Button
                  variant="outline"
                  leftIcon={<Box as={FaFacebook} color={mode('facebook.500', 'facebook.300')} />}
                >
                  Sign up with Facebook
                </Button>
              </Stack>

              <DividerWithText>or</DividerWithText> */}
              <SigupForm />
            </Box>

            <Text mt="8" align="center" fontWeight="medium">
              Já possui uma conta?{' '}
              <Box
                as="a"
                href="./Login"
                color={mode('blue.600', 'blue.200')}
                display={{ base: 'block', md: 'inline-block' }}
              >
                Login em PlayGG
              </Box>
            </Text>
          </Box>

          <Flex direction="column" py="24" display={{ base: 'none', lg: 'flex' }}>
            <Testimonial />
            <SimpleGrid
              columns={3}
              spacing="10"
              paddingStart="12"
              alignItems="center"
              color="gray.400"
            >
              {/* <Logos.Wakanda />
              <Logos.ChatMonkey />
              <Logos.Lighthouse /> */}
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
    )
}