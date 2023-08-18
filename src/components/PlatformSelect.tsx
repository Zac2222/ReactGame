import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelect = () => {
    const {data} = usePlatforms()
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>platform</MenuButton> 
        <MenuList>
            {data.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
      
  )
}

export default PlatformSelect
