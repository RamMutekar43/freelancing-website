import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'

const WebInfo = () => {
  return (
    <>
    <Box h={'65vh'} >
    <Flex color={'black'} 
    justifyContent={'space-between'} 
    alignItems={'flex-end'} h={'full'} 
    p={14}>

      <Text 
      textStyle={'xl'} 
      fontWeight={'medium'}
      >
      A freelancing platform connecting <br/>
      professionals with businesses to <br/>
      showcasetalent, find projects, and <br/>
      collaborate.
      </Text>

      <Text 
      textStyle={'7xl'}
      fontWeight={'extrabold'}
      textAlign={'end'}
      // pe={14}
      >
      Where Talent <br/>Meets <br/>Opportunity
      </Text>
    </Flex>
    </Box>
    </>
  )
}

export default WebInfo