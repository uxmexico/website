import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const VacanciesContainer = styled.section`
    background-image: linear-gradient(119deg, #ff1ac2, #ff1573);
    padding: 20px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CTAButtonSecundary = styled.button`
    border: 1px solid #fff;
    border-radius: 50px;
    width: 160px;
    padding: 5px;
    background: none;
    color: #fff;
    margin: auto;
    outline: none;

    &:hover {
        background: #fff;
        color: #ff1ac2;
    }
    &:focus {
        outline: 0;
    }
`
const BoxVacancies = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
`
const TextVacanciesBlock = styled.p`
    text-align: center;
    color: #fff;
`;

const Vacancies = () => (
    <VacanciesContainer>
        <BoxVacancies>
            <FontAwesomeIcon
                className="vacanciesIcon" 
                icon={faBriefcase} 
                color="#fff"
            />
            <TextVacanciesBlock>
                <b>Enterate de las últimas vacantes</b>
                <br/>
                en nuestra bolsa de trabajo
            </TextVacanciesBlock>
            <CTAButtonSecundary>Registra tu CV</CTAButtonSecundary>
        </BoxVacancies>
        
    </VacanciesContainer>
);

export default Vacancies;