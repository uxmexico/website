import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Logo from './Logo';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    ${props => props.theme.breakpoints.desktop} {
        align-items: center;
    }
`;

const ToggleMenuButton = styled.button`
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 0.25rem;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    outline: 0;
    order: 3;
    margin: 3px 10px 0 0;

    ${props => props.theme.breakpoints.desktop} {
        display: none;
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
        text-decoration: underline;
    }

    ${props => props.theme.breakpoints.desktop} {
        padding: 10px 15px;
    }
`;

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const _toggleMenu = () => setMenuOpen(prev => !prev);

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
            text-decoration: underline;
        }
    `;

    return (
        <Nav>
            <Link
                to="/"
                css={theme => css`
                    align-self: flex-start;
                    padding: 5px 0 0 10px;
                    display: inline-block;
                    color: ${theme.colors.text};
                    font-size: 30px;
                    text-decoration: none;
                    text-transform: capitalize;
                    order: 1;
                    width: auto;
                    outline: none;
                    flex-grow: 1;
                    transition: color ${theme.transition};

                    ${theme.breakpoints.desktop} {
                        flex-grow: 0;
                        padding: 5px 0 0;
                    }
                `}
            >
                <Logo />
            </Link>
            <ToggleMenuButton aria-label="Toggle Menu" onClick={_toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </ToggleMenuButton>
            <NavList>
                <NavListItem>
                    <NavLink to="/" activeClassName="current" partiallyActive>
                        Home
                    </NavLink>
                </NavListItem>
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
                        to="/jobs"
                        activeClassName="current"
                        partiallyActive
                    >
                        Bolsa de Trabajo
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
        </Nav>
    );
};

export default Navigation;
