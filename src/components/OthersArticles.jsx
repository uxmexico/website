import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const OthersArticlesContainer = styled.section`
    background-image: radial-gradient(circle at 0 0, #f2f2f2, #ffffff 79%);
    padding: 40px 0;
`;

const OthersArticles = () => {


    return (
        <OthersArticlesContainer>
            <h2 className="titleSection">Otros artículos</h2>

            <div className="cards">
                {data.allWpPost.nodes.map((post) => (
                    <div key={post.id} className="cardx">
                        {post.featuredImage ? (
                            <Img
                                className="card__image"
                                title={post.title}
                                fluid={
                                    post.featuredImage.node.localFile
                                        .childImageSharp.fluid
                                }
                            />
                        ) : (
                            <img
                                className="card__image"
                                src="https://fakeimg.pl/400x300/009578/fff/"
                                alt=""
                            />
                        )}
                        <div className="card__content">
                            <h1>{post.title}</h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.excerpt,
                                }}
                            />
                        </div>
                        <div className="card__info">
                            <div>
                                <Link className="card__link" to={post.uri}>
                                    Leer más
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </OthersArticlesContainer>
    );
};

export default OthersArticles;
