import React from 'react';
import styled from '@emotion/styled';
import ReactHtmlParser from 'react-html-parser';
import { Link, graphql } from 'gatsby';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

export const categoriesListQuery = graphql`
    query CategoriesArchive($skip: Int!, $limit: Int!, $categoryId: String!) {
        allWpPost(
            filter: {
                status: { eq: "publish" }
                categories: {
                    nodes: { elemMatch: { id: { eq: $categoryId } } }
                }
            }
            sort: { fields: date, order: ASC }
            limit: $limit
            skip: $skip
        ) {
            nodes {
                id
                title
                uri
                date(formatString: "YYYY-MM-DD HH:mm:ss ZZ")
                excerpt
            }
        }
    }
`;

const Container = styled.section`
    padding: 10px;
`;

const Post = styled.article``;

const CategoriesArchive = ({ data, pageContext }) => {
    const {
        pageCount,
        currentPageNum,
        categoryName,
        categorySlug,
    } = pageContext;

    return (
        <Layout>
            <SEO
                title={`Archivo - Categoría: ${categoryName} - Página ${currentPageNum}`}
            />

            <Container>
                {data.allWpPost.nodes.map((post) => {
                    const { id, title, date: postDate, uri, excerpt } = post;

                    const formatedDate = format(
                        parse(postDate, 'yyyy-MM-dd HH:mm:ss XX', new Date()),
                        'dd MMMM, y',
                        { locale: es },
                    );

                    return (
                        <Post key={id}>
                            <h2>
                                <Link to={uri}>{title}</Link>
                            </h2>
                            <p>{formatedDate}</p>

                            {ReactHtmlParser(excerpt)}
                        </Post>
                    );
                })}
            </Container>

            <Pagination
                basePath={`/category/${categorySlug}/`}
                totalPages={pageCount}
                currentPage={currentPageNum}
            />
        </Layout>
    );
};

export default CategoriesArchive;
