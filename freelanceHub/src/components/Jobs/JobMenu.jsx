import React from 'react'
import { Button, Flex, Menu, Portal, Text } from "@chakra-ui/react"
import { RiMenuSearchLine } from 'react-icons/ri'

const JobMenu = () => {
  return (
    <>
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
            <Menu.Item value="new-txt-a">
              New Text File <Menu.ItemCommand>⌘E</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="new-file-a">
              New File... <Menu.ItemCommand>⌘N</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="new-win-a">
              New Window <Menu.ItemCommand>⌘W</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="open-file-a">
              Open File... <Menu.ItemCommand>⌘O</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="export-a">
              Export <Menu.ItemCommand>⌘S</Menu.ItemCommand>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </>
  )
}

export default JobMenu