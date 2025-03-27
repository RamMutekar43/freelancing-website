import React, { useState } from 'react'
import { Box, Button, Flex, Menu, Portal, Text } from "@chakra-ui/react"
import { RiMenuSearchLine } from 'react-icons/ri'

const JobMenu = () => {
  const [isOption, setIsOption] = useState("");
  localStorage.setItem("Option",isOption);

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
            <Menu.Item value="Web Development" onClick={()=>setIsOption(value)}>
              Web Development
            </Menu.Item>
            <Menu.Item value="Graphic Design">
              Graphic Design
            </Menu.Item>
            <Menu.Item value="Mobile App Development">
              Mobile App Development
            </Menu.Item>
            <Menu.Item value="Content Writing">
              Content Writing
            </Menu.Item>
            <Menu.Item value="Digital Marketing">
              Digital Marketing
            </Menu.Item>
            <Menu.Item value="UI/UX Design">
              UI/UX Design
            </Menu.Item>
            <Menu.Item value="Video editing">
              Video editing
            </Menu.Item>
            <Menu.Item value="Virtual Assistant">
              Virtual Assistant
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </Box>
    </>
  )
}

export default JobMenu