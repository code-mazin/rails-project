import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }
   
    return (
        <Wrapper>
            <Logo>
                <Link to="/">Home</Link>
            </Logo>
            <Nav>
                <Button as={Link} to="/new">
                    New Job
                </Button>
                <Button onClick={handleLogoutClick}>
                    Logout
                </Button>
                <Button as={Link} to="/login">
                    Login
                </Button>
                
            </Nav>
        </Wrapper>
    );
}


const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: blue;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
