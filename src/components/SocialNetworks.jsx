import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
`;

const SocialNetworks = () => {


    const Nav = styled.nav`

        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
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
        <Nav >
            <NavList>
                <NavListItem>
                    <NavLink
                        to="/events"
                        activeClassName="current"
                        partiallyActive
                    >
                        <FontAwesomeIcon
                            fixedWidth
                            icon={faTimes}
                        />
                    </NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink
                        to="/blog"
                        activeClassName="current"
                        partiallyActive
                    >
                        <FontAwesomeIcon
                            fixedWidth
                            icon={faTimes}
                        />
                    </NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink
                        to="/about"
                        activeClassName="current"
                        partiallyActive
                    >
                        <FontAwesomeIcon
                            fixedWidth
                            icon={faTimes}
                        />
                    </NavLink>
                </NavListItem>
            </NavList>
        </Nav>
    );
};

export default SocialNetworks;
