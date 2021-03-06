import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import MainHome from '../components/events/MainHome';
import NextEvents from '../components/events/NextEvents';
import ListEvents from '../components/ListEvents';
import LastArticles from '../components/LastArticles';
import Vacancies from '../components/Vacancies';
import Members from '../components/Members';

const IndexPage = () => {
    const events = useStaticQuery(graphql`
        query EventsHome {
            allWpEvent(
                limit: 5
                sort: { fields: eventmeta___date, order: ASC }
                filter: { status: { eq: "publish" } }
            ) {
                nodes {
                    id
                    title
                    slug
                    excerpt
                    eventmeta {
                        date
                        eventbriteUrl
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 1800) {
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

    const mainEvent = events.allWpEvent.nodes[0];
    const otherEvents = events.allWpEvent.nodes.slice(1);

    return (
        <Layout>
            <SEO title="Home" />
            <MainHome event={mainEvent} />
            <NextEvents events={otherEvents} />
            <ListEvents />
            <LastArticles />
            <Vacancies />
            <Members />
        </Layout>
    );
};

export default IndexPage;
