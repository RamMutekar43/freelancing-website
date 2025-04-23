import Profile from '../../components/MyProfile/Profile'
import { Box, Flex, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '../../components/ui/skeleton';

const MyProfile = () => {
  const  currentUser = JSON.parse(localStorage.getItem('user'))
  // console.log(currentUser)

  const [isLoading,setIsLoading] = useState(true);
  
      useEffect(()=>{
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        },[])  

  return (
    <>
    <VStack backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} minH={'84vh'}>
      {isLoading && [0].map((_,idx)=>(
        <Flex gap={{base:4,sm:10}} py={10} direction={{base:'column',sm:"row"}} color={'black'} w={'3/4'} key={idx}>
          <VStack>
          <SkeletonCircle size={'32'}/>
          <Skeleton height={'25px'}>
            <Box>bashbjashxsajkajs</Box>
          </Skeleton>
          </VStack>

          <VStack w={'1/2'}>
          <Flex w={'full'} gap={5} alignItems={'center'} pb={3}>
          <Skeleton height={'20px'}>
            <Box>jajdasjhddjashdj</Box>
          </Skeleton>
          <Skeleton height={'50px'}>
            <Box>bashbjashxsajkajs</Box>
          </Skeleton>
          </Flex>
          <SkeletonText noOfLines={4} gap="4" w={'full'}/>

          <Flex gap={2} w={'full'}>
          <Skeleton height={'45px'}>
            <Box>bashbjashhHSLJJa</Box>
          </Skeleton>
          <Skeleton height={'45px'}>
            <Box>bashbjashhHSLJJa</Box>
          </Skeleton>
          <Skeleton height={'45px'}>
            <Box>bashbjashhHSLJJa</Box>
          </Skeleton>
          
          </Flex>
          </VStack>
          
        </Flex>
      ))}

      {!isLoading && (
      <Profile details={currentUser}/>)
      }

    </VStack>
    </>
  )
}

export default MyProfile