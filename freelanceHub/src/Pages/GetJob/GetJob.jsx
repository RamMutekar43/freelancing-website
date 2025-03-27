import Job from "../../components/Jobs/Job"
import { Flex, Text, VStack, Box, Button } from '@chakra-ui/react'
import React from 'react'

const GetJob = () => {
  return (
    <>
    <Box backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5}>
        <Job/>
        <Job/>
        <Job/>
        <Job/>
        <Job/>
        <Job/>
        <Job/>
        <Job/>
    </Box>
    </>
  )
}

export default GetJob