import { Box, Flex, Heading, RatingGroup, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { Avatar } from '../ui/avatar'

const Freelancer = ({url, username, domain, description, ratings}) => {
  // console.log(ratings)
  return (
    <>
    <VStack 
        cursor={'pointer'}
        _hover={{ bg: "whiteAlpha.400", shadow:"sm" }}
        borderRadius={6}
        transition={"background 0.2s ease-in-out"}
        h={'60vh'}
        p={5}
        textAlign={'center'}
        color={'black'}
        backgroundColor={"#DFE8E6"}
        border={'1px solid rgb(208, 213, 212)'} >
            
            <Box w={40} h={40}>
            <Avatar  w={40} h={40} src={url}/>
            </Box>

            <Heading as={"h1"} size={'2xl'}>{username}</Heading>
            <Heading as={"h2"} size={'xl'}>{domain}</Heading>
            <Box >
                {description}
            </Box>

            <Box>
            <RatingGroup.Root count={5} defaultValue={Math.floor(ratings)} size="lg" colorPalette={'yellow'} readOnly>
                <RatingGroup.HiddenInput/>
                <RatingGroup.Control />
            </RatingGroup.Root>
            </Box>

            <Flex
            mt={'auto'} 
            w={'full'} 
            >
            {/* <Text>Check Profile</Text> */}
            <CgArrowLongRight size={30}/>

            </Flex>
        </VStack>
    </>
  )
}

export default Freelancer