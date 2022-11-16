import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

function Nav() {
  return (
    <Sidebar>
      <div></div>
      <Menu>
        <MenuItem> Dashboard </MenuItem>
        <SubMenu label="User">
          <MenuItem> User Profile </MenuItem>
          <MenuItem> Trade Activity </MenuItem>
        </SubMenu>
        <SubMenu label="Market">
          <MenuItem>NZX</MenuItem>
          <MenuItem>Live Transactions</MenuItem>
        </SubMenu>
        <MenuItem> Hall of Fame </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default Nav
