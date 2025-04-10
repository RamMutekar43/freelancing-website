import { Box, Container, Flex, Image, VStack} from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import useAuthStore from '../../Store/authStore'
// import { Toaster } from '../../components/ui/toaster'

const AuthPage = () => {
    const isAuth = useAuthStore(state => state.user)

  return (
    <>
    
    <Flex alignItems={"center"} justifyContent={"center"} minH={"90vh"} p={4} color={"white"} backgroundColor={'black'}>
        <Container minW={"container.md"} p={0} >
            <Flex alignItems={"center"} justifyContent={"center"} >
                {/* left side image */}
                <Box display={{base:"none", md:"block"}}>
                    <Image src='/Logo/img1.svg' h={600}/>
                </Box>

                {/* right side form */}
                <VStack wordSpacing={4} align={"stretch"} w={{base:"50vw", md:"25vw"}} mr={10}>
                    <AuthForm/>
                    <Box textAlign={"center"}>Get the App.</Box>
                </VStack>
            </Flex>
        </Container>
    </Flex>
    
    </>
  )
}

export default AuthPage