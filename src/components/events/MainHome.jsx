import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

const Title = styled.h2`
    text-align: center;
`;

const Description = styled.p`
    padding: 0 20px;
    text-align: center;
    font-size: 0.9rem;
`;

const Date = styled.p`
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
    const date = format(parseISO(event.date), 'dd MMMM, y', { locale: es });

    return (
        <Fragment>
            {event.image && event.image()}
            <Title>{event.title}</Title>
            <Description>
                {event.description} <Link to="/events">Saber más</Link>
            </Description>
            <Date>{date}</Date>
            <CTAButton>¡Quiero asistir!</CTAButton>
        </Fragment>
    );
};

MainHome.propTypes = {
    event: PropTypes.object,
};

export default MainHome;
