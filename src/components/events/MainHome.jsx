import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import ReactHtmlParser from 'react-html-parser';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

const MainEventContainer = styled.section`
    padding-bottom: 20px;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 24px;
`;

const Link = styled.a`
    color: #000;
`;

const Description = styled.section`
    padding: 0 20px;
    text-align: center;
    font-size: props.font-size;
    line-height: 24px;
`;

const EventDate = styled.p`
    color: #999;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
`;

const RowCenterButton = styled.div`
    display: flex;
    justify-content: center;
`

const CTAButton = styled.button`
    color: #fff;
    padding: 10px 30px;
    border: 0;
    border-radius: 20px;
    box-shadow: 0 8px 12px 0 rgba(255, 26, 194, 0.16);
    background-image: linear-gradient(100deg, #ff1ac2, #ff1573);
    &:focus {
        outline: 0;
    }
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
                    fluid={featuredImage.node.localFile.childImageSharp.fluid}
                    alt={title}
                />
            )}
            <Title>
                <Link to={`/events/${slug}`}>{title}</Link>
            </Title>
            <Description font-size="16px">{ReactHtmlParser(excerpt)}</Description>
            <div className="dateFormat">
                <EventDate>{formatedDate}</EventDate>
            </div>
            <RowCenterButton>
                <CTAButton>¡Quiero asistir!</CTAButton>
            </RowCenterButton>
        </MainEventContainer>
    );
};

MainHome.propTypes = {
    event: PropTypes.object,
};

export default MainHome;
