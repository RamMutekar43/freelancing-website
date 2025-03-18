import WebInfo from '../../components/WebInfo/WebInfo'
import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import Services from '../../components/Services/Services'
import { Box } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <>
    <Box backgroundColor={'whiteAlpha.500'} me={5} my={2} borderRadius={15}>
    <WebInfo/>
    <Services/>
    </Box>
    </>
  )
}

export default HomePage