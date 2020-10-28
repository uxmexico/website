import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ListComponent = styled.section`
    background: #f8f8f8;
    padding: 40px 18px;
`;

const AllEvents = styled.div`
    text-align: center; 
`;

const ListEvents = () => (
    <ListComponent>
        <h2 className="titleSection">Próximos eventos</h2>

        <div className="upcoming-events">

            <div className="grid-info-event">
                <div className="date-event">
                    <div className="container-date-event">
                        <label>28 nov</label>
                    </div>
                </div>
                <div className="description-event">
                    <h5>Sistemas de diseño</h5>
                    <p>Around the world that bring together different.
                        <br/> 
                        <a className="know-more" href="#">Leer más</a>
                    </p>
                </div>
            </div>

        </div>
        <AllEvents>
            <a className="showAllEvents" href="#" title="Todos los eventos">
                Todos los eventos
                <FontAwesomeIcon className="pinkIcon" icon={faChevronRight} />
            </a>
        </AllEvents>
    </ListComponent>
);

export default ListEvents;