// import Sidebar from '../../components/Sidebar/Sidebar'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const PageLayout = ({children}) => {
    return (
        <>
        <Flex>
            {/* left  sidebar */}
            
                <Box w={{base:"70px",md:"240px"}}>
                {/* <Sidebar/> */}
                </Box>

            {/* Navbar */}
    
            {/* right side conntent */}
            <Box flex={1} w={{base:"calc(100% -70px)",md:"calc(100% -240px)"}}>
                {children}
            </Box>
        </Flex>
        </>
    )
}

export default PageLayout
