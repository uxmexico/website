import React from 'react';
import styled from '@emotion/styled';
import ReactHtmlParser from 'react-html-parser';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

export const eventsListQuery = graphql`
    query EventsListing($skip: Int!, $limit: Int!) {
        allWpEvent(
            filter: { status: { eq: "publish" } }
            sort: { fields: eventmeta___date, order: ASC }
            limit: $limit
            skip: $skip
        ) {
            nodes {
                id
                title
                slug
                excerpt
                eventmeta {
                    date
                }
                featuredImage {
                    node {
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
`;

const Container = styled.section`
    padding: 10px;
`;

const Event = styled.div`
    /* display: flex; */
`;

const EventDate = styled.p`
    color: #999;
    text-transform: uppercase;
    font-size: 0.9rem;
`;

const EventsList = ({ data, pageContext }) => {
    const { pageCount, currentPageNum } = pageContext;

    return (
        <Layout>
            <SEO title={`Eventos - Página ${currentPageNum}`} />

            <Container>
                <h1>Próximos Eventos</h1>

                {data.allWpEvent.nodes.map((event) => {
                    const {
                        id,
                        title,
                        slug,
                        excerpt,
                        eventmeta: { date: eventDate },
                        featuredImage,
                    } = event;

                    const formatedDate = format(
                        parse(eventDate, 'MM/dd/yyyy', new Date()),
                        'dd MMMM, y',
                        { locale: es },
                    );

                    return (
                        <Event key={id}>
                            {featuredImage && (
                                <Img
                                    fluid={
                                        featuredImage.node.localFile.childImageSharp
                                            .fluid
                                    }
                                    alt={title}
                                />
                            )}
                            <div>
                                <h2>
                                    <Link to={`/events/${slug}`}>{title}</Link>
                                </h2>
                                <EventDate>{formatedDate}</EventDate>
                                {ReactHtmlParser(excerpt)}
                            </div>
                        </Event>
                    );
                })}
            </Container>
            <Pagination
                basePath="/events/"
                totalPages={pageCount}
                currentPage={currentPageNum}
            />
        </Layout>
    );
};

export default EventsList;
