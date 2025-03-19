// import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar';
import { Box, Container, Flex, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';

const PageLayout = ({children}) => {
    const [isAuth, setIsAuth] = useState(true);
    return (
    <>
    <Box backgroundColor={'#DFE8E6'}>
        <Box 
        backgroundColor={'#A0430A'}
        w={'full'}>
            <Navbar/>
        </Box>

        <Flex>
            {/* left  sidebar */}
            {isAuth ? (
                <>
                <Box w={{base:"70px",md:"240px"}}>
                <Sidebar/>
                </Box>
                </>
            ) : null}

            {/* Navbar */}
    
            {/* right side conntent */}
            <Box 
            maxH={'90vh'}
            flex={1} 
            w={{base:"calc(100% -70px)",md:"calc(100% -240px)"}}
            overflowY={'auto'} 
            >
                {children}
            </Box>
        </Flex>
    </Box>
    </>
    )
}

export default PageLayout
