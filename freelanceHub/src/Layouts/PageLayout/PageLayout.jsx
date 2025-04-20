// import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar';
import { Box, Button, Flex, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import Footer from '../../components/Footer/Footer';


const PageLayout = ({children}) => {
    const [isMenu, setIsMenu] = useState(false);
    const [isAuth,setIsAuth] = useState(localStorage.getItem('user'))
    // const user = localStorage.getItem('user')
    
    
    return (
    <>
    <Box backgroundColor={'#DFE8E6'}>
        <Box 
        backgroundColor={'black'}
        w={'full'}>
            <Navbar isAuth={isAuth}/>
        </Box>

        <Flex>
            {/* left  sidebar */}
            {isAuth ? (
            <>
            <VStack gap={0}>
            <Flex w={'full'}  h={'10vh'} px={3} alignItems={'center'}>
            <Button  
            backgroundColor={"#DFE8E6"} 
            onClick={()=>setIsMenu(!isMenu)}
            shadow={'sm'}
            _hover={{cursor:'pointer'}}
            py={4}
            px={2}>
                <AiOutlineMenu color='black' size={40}/>
            </Button>
            </Flex>

            {isMenu ? (
                <Box w={{base:"70px",md:"240px"}}>
                <Sidebar/>
                </Box>
            ) : null}
            </VStack>
            </>
            ) : null}

    
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

        {/* <Box 
        backgroundColor={'#A0430A'}
        w={'full'}>
            <Footer/>
        </Box> */}
    </Box>
    </>
    )
}

export default PageLayout
