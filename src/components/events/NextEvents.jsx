import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

const EventsContainer = styled.section`
    padding-top: 20px;
    min-height: 200px;
    background-image: radial-gradient(circle at 50% 0, #f8f8f8, #ffffff 94%);
`;

const Heading = styled.h3`
    text-align: center;
`;

const Event = styled.div``;

const EventTitle = styled.h4``;

const EventDescription = styled.div``;

const NextEvents = ({ events }) => {
    if (events.length === 0) return null;

    return (
        <EventsContainer>
            <Heading>Próximos Eventos</Heading>

            {events.map(({ node: event }) => {
                const {
                    id,
                    title,
                    slug,
                    excerpt,
                    acf: { date: eventDate },
                } = event;

                const formatedDate = format(
                    parse(eventDate, 'MM/dd/yyyy', new Date()),
                    'dd MMM',
                    { locale: es },
                );

                return (
                    <Event key={id}>
                        <EventTitle>{title}</EventTitle>
                        <EventDescription
                            dangerouslySetInnerHTML={{ __html: excerpt }}
                        />
                    </Event>
                );
            })}
        </EventsContainer>
    );
};

NextEvents.propTypes = {
    events: PropTypes.array,
};

export default NextEvents;
