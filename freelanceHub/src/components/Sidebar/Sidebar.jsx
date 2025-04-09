import { Box, Flex, Image, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Avatar } from '../ui/avatar'

import React, { useState } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Tooltip } from '../ui/tooltip'
import useAuthStore from '../../Store/authStore'


const Sidebar = () => {
  const logoutUser = useAuthStore(state => state.logoutUser)
  const Navigate = useNavigate()

  const handleLogout = ()=>{
    localStorage.removeItem('user')
    logoutUser();
    Navigate('/auth')
  }

  return (
    <>
    <Box
    color={'black'}
    height={'100vh'}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    p={8}
    position={'sticky'}
    top={0}
    left={0}
    px={{base:2,md:4}}
    h={'80vh'}
    >

    <Flex direction={"column"} gap={10} width={'full'} height={'full'}>
        <Link top={"/"} as={RouterLink} pl={2}  cursor={"pointer"} display={{base:'none',md:'block'}}>
          {/* <Image src='/Logo/textLogo.png' w={150} /> */}
          {/* <Avatar/> */}
        </Link>


            {/* SidebarItems */}
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
				  {/* <SidebarItems /> */}
			  </Flex>

            {/* Logout */}
        <Tooltip
			  showArrow
			  content={"Logout"}
			  positioning = {{placement:'right-center'}}
			  openDelay={500}
        closeDelay={100}
			  display={{ base: "block", md: "none" }}
			  >

        
				<Flex
        transition={"background 0.2s ease-in-out"}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400", shadow:"sm" }}
		    borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				mt={"auto"}
				justifyContent={{ base: "center", md: "flex-start" }}
				>
					<BiLogOut size={25} />
					<Button
          onClick={handleLogout}
          color={'black'}
					display={{ base: "none", md: "block" }}
					variant={"ghost"}
					_hover={{ bg: "transparent" }}
					>
					Logout
					</Button>
				</Flex>
        
		    </Tooltip>
        </Flex>
    </Box>
    </>
  )
}

export default Sidebar