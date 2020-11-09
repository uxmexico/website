import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Logo from './images/Logo';
import Close from './images/Close';
import SocialNetworks from './SocialNetworks';



const NavListItem = styled.li`
    margin: 0;
    padding: 0 24px;
    width: 100%;
    text-align: left;

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
    font-size: 18px;
    font-weight: 600;

    &:hover {
        text-decoration: none !important;
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

const MenuMobile = ({onClose, className}) => {


    const Nav = styled.nav`

        background: white;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 3000;
        top: 0;
        left: 0;

        ${props => props.theme.breakpoints.desktop} {
            display: none;
        }
    `;

    const NavList = styled.ul`
        list-style: none;
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

    return (
        <Nav className={className}>
            <div className="rowMobile">
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
                    `}
                >
                    <Logo />
                    <LogoText>México</LogoText>
                </Link>
                <Close onClick={onClose}/>
            </div>
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
        </Nav>
    );
};

export default MenuMobile;
