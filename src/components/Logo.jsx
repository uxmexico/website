import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
        <img
            src={data.placeholderImage.publicURL}
            alt={data.site.siteMetadata.title}
            style={{
                height: '50px',
            }}
        />
    );
};

export default Logo;
