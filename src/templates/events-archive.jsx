import React from 'react';
import styled from '@emotion/styled';
import ReactHtmlParser from 'react-html-parser';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Vacancies from '../components/Vacancies';
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
                uri
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
    padding: 24px;
    h1 {
        font-size: 24px;
        text-align: center;
    }
    background: #f2f2f2;
`;

const Event = styled.div`
    border-radius: 16px;
    background: #fff;
    margin: 10px 10px 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
`;

const EventInfo = styled.div`
    padding: 12px;
`

const EventDate = styled.p`
    font-size: 14px !important;
    color: #999;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-bottom: 6px;
`;

const EventLocation = styled.div`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #999999;
`;

const RowShareEvent = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
`;

const RowCenterButton = styled.div`
    display: flex;
    justify-content: center;
`;

const CTAButton = styled.button`
    font-size: 14px;
    color: #fff;
    padding: 10px 30px;
    border: 0;
    border-radius: 50px;
    box-shadow: 0 8px 12px 0 rgba(255, 26, 194, 0.16);
    background-image: linear-gradient(100deg, #ff1ac2, #ff1573);
    &:focus {
        outline: 0;
    }
`;

const EventsContainer = styled.div`
    display: grid;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 360px;
    width: 95%;
    margin: auto;

    ${props => props.theme.breakpoints.desktop} {
        grid-template-columns: repeat(4, 25%);
        width: 80%;
    }
`;

const EventGrid = styled.div`
    display: flex;
`;

const EventsList = ({ data, pageContext }) => {
    const { pageCount, currentPageNum } = pageContext;

    return (
        <Layout className="mainPrincipal">
            <SEO title={`Eventos - Página ${currentPageNum}`} />

            <Container>
                <h1>Eventos UX</h1>
                <EventsContainer>
                    {data.allWpEvent.nodes.map((event) => {
                        const {
                            id,
                            title,
                            uri,
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
                                        className="card__image"
                                        fluid={
                                            featuredImage.node.localFile.childImageSharp
                                                .fluid
                                        }
                                        alt={title}
                                    />
                                )}
                                <EventInfo>
                                    <EventDate>{formatedDate}</EventDate>
                                    <EventGrid>
                                        <div className="description-event">
                                            <h5><Link to={uri}>{title}</Link></h5>
                                            <p>{ReactHtmlParser(excerpt)}</p>
                                            <RowShareEvent>
                                                <EventLocation>Piedad Narvarte CDMX </EventLocation>
                                                <FontAwesomeIcon className="pinkIcon" icon={faShareAlt} />
                                            </RowShareEvent>
                                        </div>
                                    </EventGrid>
                                </EventInfo>
                            </Event>
                        );
                    })}
                </EventsContainer>
                <RowCenterButton>
                    <CTAButton>Mostrar más eventos</CTAButton>
                </RowCenterButton>
            </Container>
            <Pagination
                basePath="/events/"
                totalPages={pageCount}
                currentPage={currentPageNum}
            />
            <Vacancies />
        </Layout>
    );
};

export default EventsList;
