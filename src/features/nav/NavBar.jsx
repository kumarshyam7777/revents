import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";

const NavBar = ({ setFormOpen }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignedOut() {
    setAuthenticated(false);
    history.push("/");
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img
            src='/assets/logo.png'
            alt='logo'
            srcSet=''
            style={{ marginRight: 15 }}
          />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />

        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button
              // onClick={() => setFormOpen(true)}
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
        )}

        {authenticated ? (
          <SignedInMenu signOut={handleSignedOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
