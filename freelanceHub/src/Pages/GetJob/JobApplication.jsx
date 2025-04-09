import JobApplicationForm from '../../components/JobApplicationForm/JobApplicationForm'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const JobApplication = () => {
  return (
    <VStack color={'black'}  backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} minH={'100vh'}>
        <Heading as={'h1'}>FreelanceHub</Heading>
        <Container w={'1/2'} backgroundColor={'pink'}>
            <JobApplicationForm/>
        </Container>
    </VStack>
  )
}

export default JobApplication