import WebInfo from '../../components/WebInfo/WebInfo'
import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import Services from '../../components/Services/Services'
import { Box } from '@chakra-ui/react'
import ClientReviews from '../../components/ClientReviews/ClientReviews'

const HomePage = () => {
  return (
    <>
    <Box backgroundColor={'whiteAlpha.500'} 
    // ms={5} 
     my={5} borderRadius={15}>
    <WebInfo/>
    <Services/>
    <ClientReviews/>
    </Box>
    </>
  )
}

export default HomePage