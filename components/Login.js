import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";

export default function Login(){
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Center
      h='100vh'>
        <Stack
          align='center'
          bgColor='gray.600'
          p={16}
          borderRadius='10%'
          spacing={10}
          boxShadow='lg'
        >
          <Box
            bgColor='blue.500'
            w='fit-content'
            p={5}
            borderRadius='10%'
            boxShadow='md'
            >
            <ChatIcon w='100px' h='100px' color='white' />
          </Box>
          <Button boxShadow='md'>Sign In with Google</Button>
        </Stack>
      </Center>
    </>
  )
}