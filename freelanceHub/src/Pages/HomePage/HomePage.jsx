import WebInfo from '../../components/WebInfo/WebInfo'
import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import Services from '../../components/Services/Services'
import { Box } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <>
    <Box 
    // backgroundColor={'ivory'}
    >
    <WebInfo/>
    <Services/>
    </Box>
    </>
  )
}

export default HomePage