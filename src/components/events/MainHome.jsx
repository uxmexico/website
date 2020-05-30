import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'gatsby';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

const MainEventContainer = styled.section`
    padding-bottom: 20px;
`;

const Title = styled.h2`
    text-align: center;
`;

const Description = styled.section`
    padding: 0 20px;
    text-align: center;
    font-size: 0.9rem;
`;

const EventDate = styled.p`
    color: #999;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.9rem;
`;

const CTAButton = styled.button`
    margin: 0 auto;
    display: block;
    width: auto;
    color: #fff;
    padding: 10px 30px;
    border: 0;
    border-radius: 20px;
    box-shadow: 0 8px 12px 0 rgba(255, 26, 194, 0.16);
    background-image: linear-gradient(100deg, #ff1ac2, #ff1573);
`;

const MainHome = ({ event }) => {
    const {
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
        <MainEventContainer>
            {featuredImage && (
                <Img
                    fluid={featuredImage.localFile.childImageSharp.fluid}
                    alt={title}
                />
            )}
            <Title>
                <Link to={`/events/${slug}`}>{title}</Link>
            </Title>
            <Description>{ReactHtmlParser(excerpt)}</Description>
            <EventDate>{formatedDate}</EventDate>
            <CTAButton>¡Quiero asistir!</CTAButton>
        </MainEventContainer>
    );
};

MainHome.propTypes = {
    event: PropTypes.object,
};

export default MainHome;
