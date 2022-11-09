import { Flex } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Flex
      bg='blue.100'
      w='300px'
      h='100vh'
      borderEnd='1px solid' borderColor='gray.200'
    >
      <Flex
        h='81px'
        bg='red.100'
        w='100%'
      >

      </Flex>
    </Flex>
  )
}