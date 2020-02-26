import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const events = [
    {
        title: 'World Usability Day',
        date: '2020-02-20',
        description:
            'Around the world that bring together different communities to celebrate how we can make our world easy for all.',
        image: '',
    },
    {
        title: 'Sistemas de diseño',
        date: '2020-03-10',
        description: 'Around the world that bring together.',
        image: '',
    },
    {
        title: 'Service Design',
        date: '2020-03-20',
        description: 'Around the world that bring together.',
        image: '',
    },
    {
        title: 'Human Centric Design',
        date: '2020-03-22',
        description: 'Around the world that bring together.',
        image: '',
    },
];

const articles = [
    {
        title: 'Title 1',
        description: 'Description 1',
        image: '',
    },
    {
        title: 'Title 2',
        description: 'Description 1',
        image: '',
    },
    {
        title: 'Title 3',
        description: 'Description 1',
        image: '',
    },
    {
        title: 'Title 4',
        description: 'Description 1',
        image: '',
    },
];

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
