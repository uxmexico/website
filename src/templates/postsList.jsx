import React from 'react';
import styled from '@emotion/styled';
import ReactHtmlParser from 'react-html-parser';
import { Link, graphql } from 'gatsby';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

export const postsListQuery = graphql`
    query PostsListing($skip: Int!, $limit: Int!) {
        allWordpressPost(
            filter: { status: { eq: "publish" } }
            sort: { fields: date, order: ASC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    title
                    slug
                    date(formatString: "YYYY-MM-DD HH:mm:ss ZZ")
                    excerpt
                }
            }
        }
    }
`;

const Container = styled.section`
    padding: 10px;
`;

const Post = styled.article``;

const PostList = ({ data, pageContext }) => {
    const { pageCount, currentPageNum } = pageContext;

    return (
        <Layout>
            <SEO title={`Blog - Página ${currentPageNum}`} />

            <Container>
                {data.allWordpressPost.edges.map(({ node }) => {
                    const { id, title, date: postDate, slug, excerpt } = node;

                    const formatedDate = format(
                        parse(postDate, 'yyyy-MM-dd HH:mm:ss XX', new Date()),
                        'dd MMMM, y',
                        { locale: es },
                    );

                    return (
                        <Post key={id}>
                            <h2>
                                <Link to={`/blog/${slug}`}>{title}</Link>
                            </h2>
                            <p>{formatedDate}</p>

                            {ReactHtmlParser(excerpt)}
                        </Post>
                    );
                })}
            </Container>

            <Pagination
                basePath="/events/"
                totalPages={pageCount}
                currentPage={currentPageNum}
            />
        </Layout>
    );
};

export default PostList;
