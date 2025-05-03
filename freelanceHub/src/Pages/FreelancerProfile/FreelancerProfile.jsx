
import { Avatar, AvatarGroup, Box, Button, Flex, Grid, RatingGroup, Text, VStack } from '@chakra-ui/react'
// import { Avatar } from '../ui/avatar'
import React, { useEffect, useState } from 'react'
import Skills from '../../components/MyProfile/Skills'

import { Skeleton, SkeletonCircle, SkeletonText } from '../../components/ui/skeleton';

const FreelancerProfile = () => {
  const [isLoading,setIsLoading] = useState(true);
  const freelancer = JSON.parse(localStorage.getItem("freelancerProfile"))
  console.log(freelancer)
    
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
                <>
                <Flex gap={{base:4,sm:10}} py={10} direction={{base:'column',sm:"row"}} color={'black'} w={'3/4'}>
              <VStack>
              <AvatarGroup  
              mx={'auto'} 
              justifySelf={"center"} 
              alignSelf={"flex-start"} 
              h={{base:'64px',sm:"100px",md:"130px"}} 
              w={{base:'64px',sm:"100px",md:"130px"}} 
              border={'2px solid gray'} 
              borderRadius={'full'} size={'full'}
              >
                  <Avatar.Root>
                  <Avatar.Image name="this is alita" 
                  src={freelancer.profileImageUrl} 
                  alt="this is alita" />
                  </Avatar.Root>
              </AvatarGroup>
  
              <Box>
                  <RatingGroup.Root count={5} defaultValue={Math.floor(freelancer.userRatings)} size="lg" colorPalette={'yellow'} readOnly>
                      <RatingGroup.HiddenInput/>
                      <RatingGroup.Control />
                  </RatingGroup.Root>
                  </Box>
              </VStack>
      
              <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1} >
                  <Flex direction={{base:"column",sm:'row'}}
                  justifyContent={{base:"center",sm:"flex-start"}}
                  alignItems={'center'}
                  w={'full'}
                  >
                      <Text fontSize={{base:'sm',md:'lg'}}>{freelancer.username}</Text>
                      <Flex gap={4} alignItems={'center'} justifyContent={'center'} ml={{base:2,sm:4}} >
                          {/* <Button 
                          bg={'white'} 
                          color={'black'} 
                          _hover={{bg:"whiteAlpha.800"}} 
                          size={{base:'xs',md:"sm"}}
                          >
                              Edit Profile
                          </Button> */}
                          {/* <EditProfile details={details}/> */}
                      </Flex>
                  </Flex>
                  
                  <Text fontSize={"sm"} >{freelancer.bio}</Text>
                  <Flex gap={2}><Text fontSize={"sm"} fontStyle={'lg'} fontWeight={'medium'}>Domain of work:</Text>
                  <Text fontSize={"sm"} >{freelancer.domain}</Text>
                  </Flex>
                  <Text fontSize={"sm"} >{freelancer.experience}</Text>
  
                  <VStack>
                  <Box w={'full'}><Text fontStyle={'lg'} fontWeight={'medium'}>Tech-Stack</Text></Box>
                  <Grid
                  templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(4, 1fr)',
                  }}
                  gap={1}
                  columnGap={1}
                  w={'full'}
                  >
                      {freelancer.skills.map((e,idx)=>{
                          return (<Skills skill={e} key={idx}/>)
                      })}
                  </Grid>
                  </VStack>
  
              </VStack>
          </Flex>
                </>
              )
                }
          
              </VStack>
          </>
        )
}

export default FreelancerProfile