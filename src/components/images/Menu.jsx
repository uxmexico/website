import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

const Img = styled.img`
    width: 32px;
    display: inline-block;
    margin: 5px 0;
    ${props => props.theme.breakpoints.desktop} {
        display: none;
    }
`;

const Menu = ({onClick}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            placeholderImage: file(relativePath: { eq: "menu.svg" }) {
                publicURL
            }
        }
    `);

    return (
        <Img onClick={onClick}
            src={data.placeholderImage.publicURL}
        />
    );
};

export default Menu;