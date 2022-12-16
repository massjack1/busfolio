import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
   return (
        <StyledNav>
            <h1><Link id="logo" to="/">Busfolio</Link></h1>
            <ul>
                <li>
                    <Link className="link" to="/aboutus">About Us</Link>
                </li>
                <li>
                    <Link className="link" to="/ourwork">Our Work</Link>
                </li>
                <li>
                    <Link className="link" to="/contact">Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
   ) 
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828; 
    .link {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #Logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`; 

export default Nav;