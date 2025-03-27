import React, { useState } from 'react'
import { Box, Button, Flex, Menu, Portal, Text } from "@chakra-ui/react"
import { RiMenuSearchLine } from 'react-icons/ri'

const JobMenu = ({domains}) => {
  const [isOption, setIsOption] = useState("");
  const setMenu = ()=>{
    localStorage.setItem("option",isOption)
  }
  setMenu()

  return (
    <>
    <Box>
    <Menu.Root>
      <Menu.Trigger asChild>
        <Flex color={'black'} gap={2} alignItems={'center'} cursor={'pointer'} shadow={'sm'} p={3} borderRadius={5}>
            <Text>Services</Text>
            <RiMenuSearchLine size={20} />
        </Flex>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {domains.map((e,key)=>{
              return(
                <>
                <Menu.Item value={e} key={key} onClick={()=>setIsOption(e)}>
                {e}
                </Menu.Item>
                </>
              )
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </Box>
    </>
  )
}

export default JobMenu