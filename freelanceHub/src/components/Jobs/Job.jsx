import React from 'react'
import { Flex, Text, VStack, Box, Button } from '@chakra-ui/react'
import JobDescription from './JobDescription'

const Job = () => {
  return (
    <>
    <Box pe={10} py={5}>
    <Flex backgroundColor={'whiteAlpha.400'} w={'full'} shadow={'sm'} borderRadius={5}>
                <VStack w={'4/5'} py={5} px={10} >
                    <Flex color={'black'} w={'full'} gap={2} alignItems={'baseline'}>
                    <Text textStyle={'xl'} fontWeight={'bold'}>Job Title : </Text>
                    <Text>Web Development</Text>
                    </Flex>
    
                    <Box color={'black'} w={'full'} h={'20vh'} >
                    <Text textStyle={'xl'} fontWeight={'bold'}>Job Description : </Text>
                    <Box overflowY={'hidden'} w={'full'} h={'10vh'}>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eius qui minus quam nesciunt dolor dolore magnam voluptatibus corrupti repellat. Laboriosam facilis a fugit illum accusamus necessitatibus maiores voluptatibus esse.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam ea non labore eligendi beatae quas, nobis provident ullam, assumenda perferendis mollitia omnis, est repudiandae. Ratione suscipit animi adipisci magnam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis rem ipsam quaerat cumque et amet culpa rerum! Nostrum est laboriosam molestiae unde fugit omnis doloribus saepe libero cupiditate, aliquam officia.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui ducimus quas deleniti ad, atque officiis. Et dolorem necessitatibus voluptatum neque soluta nemo suscipit, mollitia quibusdam doloribus molestias, est temporibus?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ex ut blanditiis ad voluptates tenetur, pariatur omnis facere ab odit expedita quam dolorem ullam sed minus incidunt quae ipsum accusantium.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sint sequi, dolorum perspiciatis culpa quo assumenda excepturi consequuntur ut accusantium repudiandae quis doloribus id recusandae laborum quam debitis sapiente enim!
                    </Text>
                    </Box>
                    <JobDescription/>
                    </Box>

                    <Flex color={'black'} w={'full'} gap={2} alignItems={'baseline'}>
                    <Text textStyle={'xl'} fontWeight={'bold'}>Budget : </Text>
                    <Text>10K</Text>
                    </Flex>
                    
                </VStack>
                <Flex w={'1/5'}  alignItems={'center'} justifyContent={'center'}>
                <Button backgroundColor={'blue.400'} _hover={{shadow: 'sm'}}>Apply</Button>
                </Flex>
    </Flex>
    </Box>
    </>
  )
}

export default Job