import { Box, VStack, Image, Flex, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
// import GoogleAuth from './GoogleAuth'
import { Toaster } from '../ui/toaster'


const LoginForm = () => {
//   const [isLogin, setIsLogin] = useState(false)

 
  return (
    <>
    <Box border={"1px solid gray"} p={5} borderRadius={4}>
      <VStack spaceY={4}>
      {/* <Image src='' 
      // h={200} 
      alt='Logo'/> */}
      <>FreelanceHub</>
        {/* <Box><h1>FreelanceHub</h1></Box> */}

        <Login/>

      </VStack>
    </Box>

    <Box border={'1px solid gray'} p={5} borderRadius={4}>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Box mx={4} fontSize={14}>
          Don't have an account?
        </Box>
        <Box color={'blue.500'} cursor={'pointer'}>
            Sign up
        </Box>
      </Flex>
    </Box>
    <Toaster/>
    </>
    
  )
}

export default LoginForm