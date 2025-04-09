import { Box, Heading, Input, Text, VStack, Button, FileUpload, Flex, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiUpload } from 'react-icons/hi'

const JobApplicationForm = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    console.log(selectedFile)
  return (
    <>
    <VStack w={'full'}>
        <Heading as="h2" size="lg">Job Application Form</Heading>
        <Box w={'full'}>
            <Text>Name: </Text>
            <Input type='text'/>
        </Box>
        <Box w={'full'}>
            <Text>Work experience: </Text>
            <Input type='text'/>
        </Box>
        <Box w={'full'}>
            <Text>Sample Work: </Text>
            <Input type='text'/>
        </Box>
        <Flex alignItems={'center'} justifyContent={'center'}>
            <Text>Resume/CV: </Text>
            <Input type='file' borderStyle={'none'} h={'full'} onChange={(e)=>setSelectedFile( e.target.files[0])}/>
        </Flex>
        
    </VStack>
    </>
  )
}

export default JobApplicationForm