import JobMenu from "../../components/Jobs/JobMenu"
import Job from "../../components/Jobs/Job"
import { Flex, Text, VStack, Box, Button } from '@chakra-ui/react'
import React from 'react'

const GetJob = () => {
  return (
    <>
    <Flex>
    <Flex backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} ps={10} pe={5}>
        <VStack pe={5}>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
        </VStack>

        <Box mt={5} borderRadius={5}>
            <JobMenu/>
        </Box>
    </Flex>
    </Flex>
    </>
  )
}

export default GetJob