import { Box, VStack, Image, Flex, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import Signup from './Signup'
// import GoogleAuth from './GoogleAuth'
import { Toaster } from '../ui/toaster'
import useShowToast from '../../Hooks/useShowToast'


const SignupForm = () => {
//   const [isLogin, setIsLogin] = useState(false)
// const showToast = useShowToast();


 
  return (
    <>
    <Box border={"1px solid gray"} p={5} borderRadius={4}>
      <VStack spaceY={4}>
      {/* <Image src='' 
      // h={200} 
      alt='Logo'/> */}
      <>FreelanceHub</>
        {/* <Box><h1>FreelanceHub</h1></Box> */}

        <Signup/>

      </VStack>
    </Box>

    <Box border={'1px solid gray'} p={5} borderRadius={4}>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Box mx={4} fontSize={14}>
          Already have an account?
        </Box>
        <Box color={'blue.500'} cursor={'pointer'}>
            Log in
        </Box>
      </Flex>
    </Box>
    <Toaster/>
    </>
    
  )
}

export default SignupForm