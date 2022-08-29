import React from 'react'
import {Menu,Container} from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

const NavBar = () => {
  return (
   <Menu inverted fixed='top'>
    <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" srcset="" />
            Re-vents
        </Menu.Item>
        <Menu name="Evengts"/>
        <Menu.Item>
  <Button positive inverted/>
        </Menu.Item>
    </Container>
   </Menu>
  )
}

export default NavBar
