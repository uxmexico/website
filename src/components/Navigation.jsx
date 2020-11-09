import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import MenuMobile from './MenuMobile';

import Logo from './images/Logo';
import Menu from './images/Menu';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    ${props => props.theme.breakpoints.desktop} {
        align-items: flex-end;
        padding: 0 1rem;
    }
`;

const NavListItem = styled.li`
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;

    ${props => props.theme.breakpoints.desktop} {
        width: auto;
        display: block;
    }
`;

const NavLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 5px 0;
    color: ${props => props.theme.colors.text};
    width: 100%;

    &:hover {
        text-decoration: none;
    }

    ${props => props.theme.breakpoints.desktop} {
        padding: 0 15px;
    }
`;

const LogoText = styled.span`
    display: inline-block;
    font-size: 22px;
    font-weight: normal;
    line-height: 1.45;
    color: #000000;
    padding: 0 8px;
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
`;

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const _toggleMenu = () => setMenuOpen(!menuOpen);

    const _hideMenu = () => {
        console.log("Cerrando")
        setMenuOpen(false);
    }


    const NavList = styled.ul`
        list-style: none;
        display: ${menuOpen ? 'flex' : 'none'};
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100%;
        order: 3;

        ${props => props.theme.breakpoints.desktop} {
            order: 2;
            width: auto;
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
        }

        .current {
            &:after {
                content: "-";
                color: #ff1ac2;
                font-size: 40px;
                line-height: 20px;
                width: 20px;
                height: 1px;
                padding: 0 5px;
                position: absolute;
            }
        }
    `;
    const MenuMobileStyled = styled(MenuMobile)`
        display: ${menuOpen ? 'block' : 'none'};
        
        ${props => props.theme.breakpoints.desktop} {
            display: none;
        }
    `
    return (
        <Nav>
            <MenuMobileStyled onClose={_hideMenu}/>
            <div className="itemsNav">
                <Link
                    to="/"
                    css={theme => css`
                        height: 40px;
                        align-self: flex-start;
                        display: inline-block;
                        color: ${theme.colors.text};
                        font-size: 30px;
                        text-decoration: none;
                        text-transform: capitalize;
                        order: 1;
                        width: auto;
                        outline: none;
                        flex-grow: 1;
                        display: flex;
                        align-items: baseline;
                        ${theme.breakpoints.desktop} {
                            display: flex;
                            align-items: baseline;
                            flex-grow: 0;
                            padding: 5px 0 0;
                        }

                        &:hover {
                            text-decoration: none;
                        }
                    `}
                >
                    <Logo />
                    <LogoText>México</LogoText>
                </Link>
                
                <Menu onClick={_toggleMenu}/>
                <NavList>
                    <NavListItem>
                        <NavLink
                            to="/events"
                            activeClassName="current"
                            partiallyActive
                        >
                            Eventos
                        </NavLink>
                    </NavListItem>
                    <NavListItem>
                        <NavLink
                            to="/blog"
                            activeClassName="current"
                            partiallyActive
                        >
                            Blog
                        </NavLink>
                    </NavListItem>
                    <NavListItem>
                        <NavLink
                            to="/about"
                            activeClassName="current"
                            partiallyActive
                        >
                            Nosotros
                        </NavLink>
                    </NavListItem>
                </NavList>
            </div>
        </Nav>
    );
};

export default Navigation;
