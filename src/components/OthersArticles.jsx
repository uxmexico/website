import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const OthersArticlesContainer = styled.section`
    background-image: radial-gradient(circle at 0 0, #f2f2f2, #ffffff 79%);
    padding: 40px 0;
`;

const OthersArticles = () => {


    return (
        <OthersArticlesContainer>
            <h2 className="titleSection">Otros artículos</h2>

           
        </OthersArticlesContainer>
    );
};

export default OthersArticles;
