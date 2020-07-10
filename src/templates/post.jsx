import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

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
        }
    }
`;

const PostContainer = styled.article`
    padding: 10px;
    max-width: 100%;
`;

const PostDate = styled.p`
    color: #999;
    text-transform: uppercase;
    font-size: 0.9rem;
`;

const TaxonomyLink = styled(Link)`
    margin: 5px;
`;

const Post = ({ data }) => {
    const {
        title,
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
            <SEO title={`Blog - ${title}`} />

            <PostContainer>
                <h1>{title}</h1>
                <PostDate>{formatedDate}</PostDate>
                {categories.length > 0 && (
                    <p>
                        Categorías:{' '}
                        {categories.map((category) => (
                            <TaxonomyLink key={category.id} to={category.uri}>
                                {category.name}
                            </TaxonomyLink>
                        ))}
                    </p>
                )}
                {tags.length > 0 && (
                    <p>
                        Tags:{' '}
                        {tags.map((tag) => (
                            <TaxonomyLink key={tag.id} to={tag.uri}>
                                {tag.name}
                            </TaxonomyLink>
                        ))}
                    </p>
                )}
                {ReactHtmlParser(content)}
            </PostContainer>
        </Layout>
    );
};

export default Post;
