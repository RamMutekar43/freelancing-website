import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FcConferenceCall } from 'react-icons/fc'
import Reviews from './Reviews'


const ClientReviews = () => {
  return (
    <>
    <Box pt={10} h={'100vh'}>
    <VStack color={'black'}>
      <Flex textAlign={'start'} w={'full'} px={5} gap={2} alignItems={'self-end'}>
              <Text
              color={'black'}
              fontWeight={'medium'}
              fontSize={'5xl'}
              pt={3}
              >
                Client Reviews
              </Text>
              <FcConferenceCall size={60} />
        </Flex>
        <Reviews/>
    </VStack>
    </Box>
    </>
  )
}

export default ClientReviews