import { Box, VStack, Image, Flex, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
// import GoogleAuth from './GoogleAuth'
import { Toaster } from '../ui/toaster'


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

 
  return (
    <>
    <Box border={"1px solid gray"} p={5} borderRadius={4}>
      <VStack spaceY={4}>
      <Image src='/Logo/logo-transparent-png.png' h={200} alt='Logo'/>
        {/* <Box><h1>FreelanceHub</h1></Box> */}

        {isLogin ?  <Login/> : <Signup/>}

        {/* ------------ OR ----------- */}
        <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
          <Box h={'1px'} bg={'gray.400'} flex={2}/>
          <Text mx={1} color={'white'}> OR </Text>
          <Box h={'1px'} bg={'gray.400'} flex={2}/>
        </Flex>

        {/* <GoogleAuth/> */}

      </VStack>
    </Box>

    <Box border={'1px solid gray'} p={5} borderRadius={4}>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Box mx={4} fontSize={14}>
          {isLogin? "Don't have an account?" : "Already have an account?"}
        </Box>
        <Box onClick={()=> setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
        {isLogin? "Sign up" : "Log in"}
        </Box>
      </Flex>
    </Box>
    <Toaster/>
    </>
    
  )
}

export default AuthForm