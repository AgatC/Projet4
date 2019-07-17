import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Menu inverted attached='top'>
      <Link to="/">
        <Dropdown item icon='home' simple>
          <Dropdown.Menu>
            <Dropdown.Item>My Profile</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Link>
    </Menu>
  </div>
)

export default Navbar;