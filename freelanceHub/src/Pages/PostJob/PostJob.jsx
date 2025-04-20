import PostJobForm from '../../components/PostJobForm/PostJobForm'
import { Box, VStack } from '@chakra-ui/react'
import { Toaster } from '../../components/ui/toaster'
import React from 'react'

const PostJob = () => {
  return (
    <>
    <VStack backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} minH={'100vh'}>
        <Box color={'black'} fontWeight={'bold'} textStyle={'2xl'}>
            Post a new job
        </Box>
        <PostJobForm/>
    </VStack>
    <Toaster/>
    </>
  )
}

export default PostJob