import Profile from '../../components/MyProfile/Profile'
import { Box, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const MyProfile = () => {
  const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))
  // console.log(currentUser)
  return (
    <>
    <VStack backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} minH={'84vh'}>
      <Profile details={currentUser}/>
    </VStack>
    </>
  )
}

export default MyProfile