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
        >
          <Box
            bgColor='blue.500'
            w='fit-content'
            p={5}
            rounded='3x1'
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