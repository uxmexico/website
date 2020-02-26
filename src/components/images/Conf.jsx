import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Conf = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "conf.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
        }
    `);

    return (
        <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Conference"
        />
    );
};

export default Conf;
