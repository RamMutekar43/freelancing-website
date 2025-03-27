import JobMenu from "../../components/Jobs/JobMenu"
import Job from "../../components/Jobs/Job"
import { Flex, Text, VStack, Box, Button } from '@chakra-ui/react'
import React from 'react'

const GetJob = () => {
  return (
    <>
    
    <Flex backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} ps={7} pe={8}>
        <VStack me={20} >
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
        </VStack>

        <Box mt={5} position={"fixed"} right={6}>
            <JobMenu/>
        </Box>
    </Flex>
    
    </>
  )
}

export default GetJob