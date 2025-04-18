import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, Input, InputGroup, Text, VStack } from '@chakra-ui/react'
import Freelancer from './Freelancer'
import { LuSearch } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Freelancers = ( { selectedDomain, isFreelancers}) => {

  return (
    <>
    <VStack pt={10} w={'full'}>
      <Flex textAlign={'start'} w={'full'} px={5}  gap={2}>
        <Text color={'black'} fontWeight={'medium'} fontSize={'5xl'} pt={3} w={'full'}> Our Freelancers </Text>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)"  gap={4} p={4}>
            {
                selectedDomain ? isFreelancers.map((e,key)=>{
                    if(e.domain.toLowerCase() == selectedDomain.toLowerCase()) return(
                        <>
                        <Link to={`/:${e.username}`}>
                        <Freelancer username={e.username} domain={e.domain} description={e.description} url={e.profileUrl}  key={key} rating={e.rating}/>
                        </Link>
                        </>
                      )
                }) : 
                isFreelancers.map((e,key)=>{
                    return(
                      <>
                      <Link to={`/:${e.username}`}>
                        <Freelancer username={e.username} domain={e.domain} description={e.description} url={e.profileUrl}  key={key} rating={e.rating}/>
                      </Link>
                      </>
                    )
                  })
            }
      </Grid>
    </VStack>
    </>
  )
}

export default Freelancers