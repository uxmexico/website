import React from 'react';
import styled from '@emotion/styled';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

export const eventgQuery = graphql`
    query PageQuery($slug: String!) {
        wordpressPage(slug: { eq: $slug }, status: { eq: "publish" }) {
            title
            content
        }
    }
`;

const PageContainer = styled.article`
    padding: 10px;
    max-width: 100%;
`;

const StaticPage = ({ data }) => {
    const { title, content } = data.wordpressPage;

    return (
        <Layout>
            <SEO title={title} />

            <PageContainer>
                <h1>{title}</h1>
                {ReactHtmlParser(content)}
            </PageContainer>
        </Layout>
    );
};

export default StaticPage;
