import React, { useState } from 'react'
import { Flex, Text, VStack, Box, Button } from '@chakra-ui/react'
import JobDescription from './JobDescription'
import { useNavigate } from 'react-router-dom'

const Job = ({title, description,budget}) => {
  const [isApplied, setIsApplied] = useState(false)
  const navigate = useNavigate();
  const handleApplication = ()=>{
    setIsApplied(true);
    navigate('/get-job/apply')
  }
  return (
    <>
    <Box pe={10} py={5} w={'full'}>
    <Flex backgroundColor={'whiteAlpha.400'} w={'full'} shadow={'sm'} borderRadius={5}>
                <VStack w={'4/5'} py={5} px={10} >
                    <Flex color={'black'} w={'full'} gap={2} alignItems={'baseline'}>
                    <Text textStyle={'xl'} fontWeight={'bold'}>Job Title : </Text>
                    <Text>{title}</Text>
                    </Flex>
    
                    <Box color={'black'} w={'full'} h={'20vh'} >
                    <Text textStyle={'xl'} fontWeight={'bold'}>Job Description : </Text>
                    <Box overflowY={'hidden'} w={'full'} h={'10vh'}>
                    <Text>
                        {description}
                    </Text>
                    </Box>
                    <JobDescription/>
                    </Box>

                    <Flex color={'black'} w={'full'} gap={2} alignItems={'baseline'}>
                    <Text textStyle={'xl'} fontWeight={'bold'}>Budget : </Text>
                    <Text>{budget}</Text>
                    </Flex>
                    
                </VStack>
                <Flex w={'1/5'}  alignItems={'center'} justifyContent={'center'}>
                <Button 
                backgroundColor={'blue.400'} 
                _hover={{shadow: 'sm'}}
                onClick={handleApplication}
                >
                  {isApplied ? "Applied" : "Apply"}
                </Button>
                </Flex>
    </Flex>
    </Box>
    </>
  )
}

export default Job