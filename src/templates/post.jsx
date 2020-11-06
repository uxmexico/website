import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import OthersArticles from '../components/OthersArticles';

import ProgressBar from "react-scroll-progress-bar";
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHeart } from '@fortawesome/free-regular-svg-icons';

export const postQuery = graphql`
    query PostQuery($id: String!) {
        wpPost(id: { eq: $id }, status: { eq: "publish" }) {
            title
            slug
            content
            date(formatString: "YYYY-MM-DD HH:mm:ss ZZ")
            author {
                node {
                    name
                    slug
                }
            }
            categories {
                nodes {
                    id
                    name
                    uri
                }
            }
            tags {
                nodes {
                    id
                    name
                    uri
                }
            }
            featuredImage {
                node {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1800) {
                                ...GatsbyImageSharpFluid
                                presentationWidth
                            }
                        }
                    }
                }
            }
        }
    }
`;

const PostContainer = styled.article`
    padding: 10px 24px;
    max-width: 100%;

    ${props => props.theme.breakpoints.desktop} {
        padding: 10px 48px;
    }
`;

const PostDate = styled.p`
    color: #999;
    text-transform: uppercase;
    font-size: 0.9rem;
`;

const TaxonomyLink = styled(Link)`
    margin: 5px;
    background: #f5f5f6;
    padding: 3px 6px;
    border-radius: 12px;
    font-size: 12px;
    color: #999999;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        color: #495057;
    }
`;

const CategoryLink = styled(Link)`
    margin: 5px;
`;

const ContainerProgressBar = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    height: 8px;
    position: fixed;
    top: 0px;
    z-index: 99;
`
const TitlePost = styled.h1`
    font-size: 24px;
`

const Line = styled.hr`
    width: 90%;
    margin: 40px auto;
    background: #e0e1e8;
`

const YouLike = styled.div`
    width: 100%;
    padding: 0 24px;

    ${props => props.theme.breakpoints.desktop} {
        padding: 0 48px;
    }
`

const SharePost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 24px;
    padding: 0 20px;

    ${props => props.theme.breakpoints.desktop} {
        justify-content: flex-start;
    }
`
const ShareButton = styled.button`
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    border: none;
    font-size: 14px;
    width: 128px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &:focus {
        outline: 0;
    }

    ${props => props.theme.breakpoints.desktop} {
        margin: 0 10px;
    }
`

const CommentPost = styled.div`
    width: 100%;
    margin: 14px 0 7px;
`

const BoldText = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin: 14px 0 7px; 
`

const TextArea = styled.textarea`
    width: 100%;
    height: 120px;
    border-radius: 12px;
    border: solid 1px #999999;
    padding: 20px;
    margin: 0 0 15px;

    &::placeholder {
        color: #ccc;
    }

    &:focus {
        outline: 0;
    }
`

const SendButton = styled.button`
    width: 140px;
    height: 40px;
    color: #fff;
    border: 0;
    border-radius: 20px;
    box-shadow: 0 8px 12px 0 rgba(255, 26, 194, 0.16);
    background-image: linear-gradient(100deg, #ff1ac2, #ff1573);
    &:focus {
        outline: 0;
    }   
`
const FeaturedImage = styled.div`
    & div {
        height: 450px;
    }
`

const Post = ({ data }) => {
    const {
        featuredImage,
        title,
        author,
        content,
        date: postDate,
        categories: { nodes: categories },
        tags: { nodes: tags },
    } = data.wpPost;

    const formatedDate = format(
        parse(postDate, 'yyyy-MM-dd HH:mm:ss XX', new Date()),
        'dd MMMM, y',
        { locale: es },
    );

    return (
        <Layout>
            <ContainerProgressBar>
                <ProgressBar 
                    height="8px" 
                    bgcolor="#ff1ac2"
                />
            </ContainerProgressBar>
            <SEO title={`Blog - ${title}`} />
            <FeaturedImage>
                {featuredImage && (
                    <Img
                        fluid={featuredImage.node.localFile.childImageSharp.fluid}
                        alt={title}
                    />
                )}
            </FeaturedImage>
            <PostContainer>
                <TitlePost>{title}</TitlePost>
                <PostDate>{formatedDate}</PostDate>
                
                <p>Por <a href="./">Adrian Solca</a></p>
                {categories.length > 0 && (
                    <p>
                        Categorías:{' '}
                        {categories.map((category) => (
                            <CategoryLink key={category.id} to={category.uri}>
                                {category.name}
                            </CategoryLink>
                        ))}
                    </p>
                )}
                {ReactHtmlParser(content)}
                {tags.length > 0 && (
                    <p>
                        {tags.map((tag) => (
                            <TaxonomyLink key={tag.id} to={tag.uri}>
                                {tag.name}
                            </TaxonomyLink>
                        ))}
                    </p>
                )}
            </PostContainer>
            <Line />
            <YouLike>
                <TitlePost>¿Te gustó?</TitlePost>
                <p>Ayúdanos a compartir este conocimiento o dejanos tus comentarios.</p>
                <SharePost>
                    <ShareButton>
                        <FontAwesomeIcon 
                            className="pinkIcon"
                            icon={faPaperPlane} 
                        /> 
                        Compartir
                    </ShareButton>
                    <ShareButton>
                        <FontAwesomeIcon
                            className="pinkIcon" 
                            icon={faHeart} 
                        /> 
                        Me gusta
                    </ShareButton>
                </SharePost>
                <CommentPost>
                    <BoldText>
                        Comentario
                    </BoldText>
                    <TextArea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Pienso que...">
                    </TextArea>
                    <SendButton>Enviar</SendButton>
                </CommentPost>
            </YouLike>
            <Line />
            <OthersArticles />
        </Layout>
    );
};

export default Post;
