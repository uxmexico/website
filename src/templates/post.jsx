import React from 'react';
import styled from '@emotion/styled';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

export const postQuery = graphql`
    query PostQuery($slug: String!) {
        wordpressPost(slug: { eq: $slug }, status: { eq: "publish" }) {
            title
            slug
            content
            date(formatString: "YYYY-MM-DD HH:mm:ss ZZ")
            author
            categories {
                slug
                name
            }
            tags {
                slug
                name
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

const formatTaxonomy = (taxonomies, field = 'name') =>
    taxonomies.reduce((acc, item) => [...acc, item[field]], []).join(', ');

const Post = ({ data }) => {
    const {
        title,
        content,
        date: postDate,
        categories,
        tags,
    } = data.wordpressPost;

    const formatedDate = format(
        parse(postDate, 'yyyy-MM-dd HH:mm:ss XX', new Date()),
        'dd MMMM, y',
        { locale: es },
    );

    return (
        <Layout>
            <SEO title={`Blog - ${title}`} />

            <PostContainer>
                {/* {featured_media && (
                    <Img
                        fluid={featured_media.localFile.childImageSharp.fluid}
                        alt={title}
                    />
                )} */}
                <h1>{title}</h1>
                <PostDate>{formatedDate}</PostDate>
                <p>Categorías: {formatTaxonomy(categories)}</p>
                <p>Tags: {formatTaxonomy(tags)}</p>
                {ReactHtmlParser(content)}
            </PostContainer>
        </Layout>
    );
};

export default Post;
