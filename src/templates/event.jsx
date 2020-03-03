import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

export const eventQuery = graphql`
    query EventQuery($slug: String!) {
        wordpressWpEvents(slug: { eq: $slug }, status: { eq: "publish" }) {
            title
            content
            acf {
                address
                date
                eventbrite_url
            }
            featured_media {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                            presentationWidth
                        }
                    }
                }
            }
        }
    }
`;

const EventContainer = styled.article`
    padding: 10px;
    max-width: 100%;
`;

const EventDate = styled.p`
    color: #999;
    text-transform: uppercase;
    font-size: 0.9rem;
`;

const Event = ({ data }) => {
    const {
        title,
        content,
        acf: { address, date: eventDate },
        featured_media,
    } = data.wordpressWpEvents;

    const formatedDate = format(
        parse(eventDate, 'MM/dd/yyyy', new Date()),
        'dd MMMM, y',
        { locale: es },
    );

    return (
        <Layout>
            <SEO title={`Eventos - ${title}`} />

            <EventContainer>
                {featured_media && (
                    <Img
                        fluid={featured_media.localFile.childImageSharp.fluid}
                        alt={title}
                    />
                )}
                <h1>{title}</h1>
                <EventDate>{formatedDate}</EventDate>
                {ReactHtmlParser(content)}

                <h2>¿Donde?</h2>
                {ReactHtmlParser(address)}
            </EventContainer>
        </Layout>
    );
};

export default Event;
