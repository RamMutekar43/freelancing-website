import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

const Service = ({title,description,icon}) => {
    // const icon = <SlEarphonesAlt/>
  return (
    <>
    <VStack 
    cursor={'pointer'}
    _hover={{ bg: "whiteAlpha.400", shadow:"sm" }}
    borderRadius={6}
    transition={"background 0.2s ease-in-out"}
    h={'50vh'}
    p={5}
    textAlign={'center'}
    color={'black'}
    backgroundColor={"#DFE8E6"}
    border={'1px solid rgb(208, 213, 212)'} >
        {icon}
        <Text
        fontWeight={'medium'}
        fontSize={'xl'}
        pt={3}
        >
            {title}
        </Text>
        <Text
        fontSize={'lg'}
        fontWeight={'light'}
        >
            {description}
        </Text>
        <Box 
        mt={'auto'} 
        w={'full'} 
        >
        <CgArrowLongRight size={30}/>
        </Box>
    </VStack>
    </>
  )
}

export default Service