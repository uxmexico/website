import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

const Img = styled.img`
    height: 30px;
    display: inline-block;
    margin-bottom: 0;
`;

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }

            placeholderImage: file(relativePath: { eq: "logo-uxmexico.svg" }) {
                publicURL
            }
        }
    `);

    return (
        <Img
            src={data.placeholderImage.publicURL}
            alt={data.site.siteMetadata.title}
        />
    );
};

export default Logo;
