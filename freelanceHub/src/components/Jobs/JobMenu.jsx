import { Button, Menu, Portal , Box, InputGroup, Input, VStack} from "@chakra-ui/react"
import React from 'react'
import { LuSearch } from "react-icons/lu"

const JobMenu = ({domain}) => {
  return (
    <Box w={'full'}>
      <Menu.Root w={'full'}>
      <Menu.Trigger asChild>
        <Box w={'full'}>
        <InputGroup flex="1" startElement={<LuSearch  />} color={'black'} outlineColor={'pink'} backgroundColor={'whiteAlpha.700'} w={'full'}>
          <Input placeholder="Search contacts" _placeholder={{color:"blackAlpha.700"}} h={'7vh'}/>
        </InputGroup>
        </Box>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner w={'1/2'}>
          <Menu.Content backgroundColor={'white'} color={'black'} w={'full'}>
          <VStack>
              {domain.map((e,key)=>{
                          return(
                          <>
                            {/* <Link to={'/get-job'}> */}
                            <Box value={e} key={key} w={'full'} color={'black'}>
                            {e}
                            </Box>
                            {/* </Link> */}
                          </>
                          )
              })}
            </VStack>
        
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </Box>
  )
}

export default JobMenu