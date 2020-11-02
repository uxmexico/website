import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ArticlesContainer = styled.section`
    background-image: radial-gradient(circle at 0 0, #f2f2f2, #ffffff 79%);
    padding: 40px 0;
`;

const AllEvents = styled.div`
    text-align: center; 
`;

const LastArticles = () => (
    <ArticlesContainer>
        <h2 className="titleSection">Últimos artículos</h2>

        <div className="cards">
            <div className="cardx">
                <img className="card__image" src="https://fakeimg.pl/400x300/009578/fff/" alt=""/>
                <div className="card__content">
                    <h1>Human centric design </h1>
                    <p>Mauris eu pulvinar dui, ut semper nunc. Sed volutpat, tellus eu dictum tempus.</p>
                </div>
                <div className="card__info">
                    <div>
                        <a className="card__link" href="./">Leer más</a>
                    </div>
                </div>
            </div>
            <div className="cardx">
                <img className="card__image" src="https://fakeimg.pl/400x300/009578/fff/" alt=""/>
                <div className="card__content">
                    <h1>Human centric design </h1>
                    <p>Mauris eu pulvinar dui, ut semper nunc. Sed volutpat, tellus eu dictum tempus.</p>
                </div>
                <div className="card__info">
                    <div>
                        <a className="card__link" href="./">Leer más</a>
                    </div>
                </div>
            </div>
            <div className="cardx">
                <img className="card__image" src="https://fakeimg.pl/400x300/009578/fff/" alt=""/>
                <div className="card__content">
                    <h1>Human centric design </h1>
                    <p>Mauris eu pulvinar dui, ut semper nunc. Sed volutpat, tellus eu dictum tempus.</p>
                </div>
                <div className="card__info">
                    <div>
                        <a className="card__link" href="./">Leer más</a>
                    </div>
                </div>
            </div>
            <div className="cardx">
                <img className="card__image" src="https://fakeimg.pl/400x300/009578/fff/" alt=""/>
                <div className="card__content">
                    <h1>Human centric design </h1>
                    <p>Mauris eu pulvinar dui, ut semper nunc. Sed volutpat, tellus eu dictum tempus.</p>
                </div>
                <div className="card__info">
                    <div>
                        <a className="card__link" href="./">Leer más</a>
                    </div>
                </div>
            </div>

        </div>
    </ArticlesContainer>
);

export default LastArticles;