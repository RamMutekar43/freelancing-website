// import Sidebar from '../../components/Sidebar/Sidebar'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'

const PageLayout = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <>
        <Flex>
            {/* left  sidebar */}
            {isAuth ? (
                <>
                <Box w={{base:"70px",md:"240px"}}>
                {/* <Sidebar/> */}
                </Box>
                </>
            ) : null}

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
