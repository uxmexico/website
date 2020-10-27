import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

const Img = styled.img`
    height: 25px;
    display: inline-block;
    margin: 5px 0 0;
`;

const Close = ({onClick}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }

            placeholderImage: file(relativePath: { eq: "close.svg" }) {
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

export default Close;