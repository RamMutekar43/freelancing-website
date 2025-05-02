import { Box, Flex,  LinkBox,  Text,  VStack } from '@chakra-ui/react';
import { Tooltip } from '../ui/tooltip';
import React from 'react'
import { Link } from 'react-router-dom';

const SidebarItems = () => {
    const menuItems = [
        { title: "Profile", route: "/profile" },
        { title: "Post Job", route: "/post-job" },
        { title: "My Posts", route: "/my-posts" },
        // { title: "Notifications", route: "/notifications" }
      ];
      

  return (
    <VStack>
        {menuItems.map((e,idx)=>{
            // console.log(e)
            return (
                <>
                
                <Tooltip
                showArrow
                content={e.title}
                positioning = {{placement:'right-center'}}
                openDelay={500}
                closeDelay={100}
                display={{ base: "block", md: "none" }}
                idx ={idx}
                >   
                    <Box
                    transition={"background 0.2s ease-in-out"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400", shadow:"sm" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    mt={"auto"}
                    >
                        <Link to={e.route}>
                        <Text>
                        {e.title}
                        </Text>
                        </Link>
                    </Box>
                </Tooltip>
                </>
            )
        })}
    </VStack>
  )
}

export default SidebarItems