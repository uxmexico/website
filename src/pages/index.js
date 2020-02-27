import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import MainHome from '../components/events/MainHome';
import NextEvents from '../components/events/NextEvents';

const articles = [
    {
        title: 'Title 1',
        description: 'Description 1',
        image: '',
    },
    {
        title: 'Title 2',
        description: 'Description 1',
        image: '',
    },
    {
        title: 'Title 3',
        description: 'Description 1',
        image: '',
    },
    {
        title: 'Title 4',
        description: 'Description 1',
        image: '',
    },
];

const IndexPage = () => {
    const events = useStaticQuery(graphql`
        query EventsHome {
            allWordpressWpEvents(
                sort: { fields: acf___date, order: ASC }
                limit: 5
            ) {
                edges {
                    node {
                        id
                        title
                        slug
                        content
                        excerpt
                        acf {
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
            }
        }
    `);

    const mainEvent = events.allWordpressWpEvents.edges[0];
    const otherEvents = events.allWordpressWpEvents.edges.slice(1);

    return (
        <Layout>
            <SEO title="Home" />
            <MainHome event={mainEvent} />
            <NextEvents events={otherEvents} />
        </Layout>
    );
};

export default IndexPage;
