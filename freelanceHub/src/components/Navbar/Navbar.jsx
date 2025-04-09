import { Box, Button, Container, Flex, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar } from '../ui/avatar'
import useAuthStore from '../../Store/authStore'

const Navbar = () => {
  const isAuth  = useAuthStore(state => state.user)
  const logoutUser = useAuthStore( state => state.logout)
  const Navigate = useNavigate()

//   console.log(isAuth)

  const handleLogout = ()=>{
    localStorage.removeItem('user')
    logoutUser();
    // Navigate('/auth')
  }

  return (
    <>
    <Container 
    h={'10vh'}
    w={'full'}
    py={4} 
    px={0}
    >
        <Flex w={'full'} justifyContent={{base:'center',sm:"space-between"}} alignItems={'center'}>
            {/* <Image src="/Logo/textLogo.png" display={{base:'none',sm:"block"}} cursor={'pointer'} w={150}/> */}
            <Box fontWeight={"bold"}>FreelancHub</Box>
            <Flex gap={4} alignItems={'center'}>
                <Link to={"/"}>
                <Button variant={'outline'} size={'sm'} border={'1px solid black'} _hover={{background:'transparent', shadow:'sm', backgroundColor:'#DFE8E6' , color:"black"}} color={'white'}>
                    Home
                </Button>
                </Link>
                <Link to={"/get-job"}>
                <Button variant={'outline'} size={'sm'} border={'1px solid black'} _hover={{background:'transparent', shadow:'sm',backgroundColor:'#DFE8E6' , color:"black"}} color={'white'}>
                    Get Job
                </Button>
                </Link>
                <Link to={"/hire-job"}>
                <Button variant={'outline'} size={'sm'} border={'1px solid black'} _hover={{background:'transparent', shadow:'sm',backgroundColor:'#DFE8E6' , color:"black"}} color={'white'}>
                    Hire Job
                </Button>
                </Link>
                {!isAuth ? (
                    <>
                    <Link to={"/auth"}>
                    <Button backgroundColor={'blue.400'} size={'sm'} >
                    Login
                    </Button>
                    </Link>
                    <Link to={"/auth"}>
                    <Button variant={'outline'} size={'sm'} border={'1px solid black'} _hover={{background:'transparent', shadow:'sm',backgroundColor:'#DFE8E6' , color:"black"}} color={'white'}>
                    Signup
                    </Button>
                    </Link>
                    </>
                ) : (
                <>
                <Link to={"/auth"}>
                <Button 
                variant={'outline'} 
                size={'sm'} border={'1px solid black'}
                 _hover={{background:'transparent', shadow:'sm',backgroundColor:'#DFE8E6' , color:"black"}} 
                 color={'white'}
                 onClick={handleLogout}
                 >
                Logout
                </Button>
                </Link>
                <Link to={""}>
                <Avatar size={'xl'}/>
                </Link>
                </>
                )}

                

            </Flex>
        </Flex>
    </Container>
    </>
  )
}

export default Navbar