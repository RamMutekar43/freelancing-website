import { Avatar, AvatarGroup, Box, Button, Flex, Grid, RatingGroup, Text, VStack } from '@chakra-ui/react'
// import { Avatar } from '../ui/avatar'
import React, { useEffect, useState } from 'react'
import Skills from './Skills'
import EditProfile from './EditProfile'
import { useNavigate } from 'react-router-dom'

import { Skeleton } from '../ui/skeleton';

const Profile = ({details}) => {
    // console.log(details)
    const [updated, setUpdated] = useState(false)
    const token = localStorage.getItem('token')

    // useEffect(()=>{
    //     fetch("http://localhost:8080/upload",{
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${token}`,  // Use token from context in the Authorization header
    //         },
    //       })
    //         .then((res) => {
    //           if (!res.ok) {
    //             throw new Error("Failed to fetch freelancers");
    //           }
    //           return  res.json();
    //         })
    //         .then((data) => {
    //           localStorage.setItem('user', JSON.stringify(data))
    //           console.log(data)
    //         })
    //         .catch((err) => {
    //           console.error("Error:", err);
    //         });
    // },[])
    
    return (
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
                src={details.profileImageUrl} 
                alt="this is alita" />
                </Avatar.Root>
            </AvatarGroup>

            <Box>
                <RatingGroup.Root count={5} defaultValue={Math.floor(details.userRatings)} size="lg" colorPalette={'yellow'} readOnly>
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
                    <Text fontSize={{base:'sm',md:'lg'}}>{details.username}</Text>
                    <Flex gap={4} alignItems={'center'} justifyContent={'center'} ml={{base:2,sm:4}} >
                        {/* <Button 
                        bg={'white'} 
                        color={'black'} 
                        _hover={{bg:"whiteAlpha.800"}} 
                        size={{base:'xs',md:"sm"}}
                        >
                            Edit Profile
                        </Button> */}
                        <EditProfile details={details}/>
                    </Flex>
                </Flex>
                
                <Text fontSize={"sm"} >{details.bio}</Text>
                <Flex gap={2}><Text fontSize={"sm"} fontStyle={'lg'} fontWeight={'medium'}>Domain of work:</Text>
                <Text fontSize={"sm"} >{details.domain}</Text>
                </Flex>
                <Text fontSize={"sm"} >{details.experience}</Text>

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
                    {details.skills.map((e,idx)=>{
                        return (<Skills skill={e} key={idx}/>)
                    })}
                </Grid>
                </VStack>

            </VStack>
        </Flex>
        </>
      )
}

export default Profile