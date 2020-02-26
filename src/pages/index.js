import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Conf from '../components/images/Conf';
import MainHome from '../components/events/MainHome';

const events = [
    {
        title: 'World Usability Day',
        date: '2020-02-20',
        description:
            'Around the world that bring together different communities to celebrate how we can make our world easy for all.',
        image: () => <Conf />,
    },
    {
        title: 'Sistemas de diseño',
        date: '2020-03-10',
        description: 'Around the world that bring together.',
        image: null,
    },
    {
        title: 'Service Design',
        date: '2020-03-20',
        description: 'Around the world that bring together.',
        image: null,
    },
    {
        title: 'Human Centric Design',
        date: '2020-03-22',
        description: 'Around the world that bring together.',
        image: null,
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

const IndexPage = () => {
    const mainEvent = events[0];
    const otherEvents = events.slice(1);

    return (
        <Layout>
            <SEO title="Home" />
            <MainHome event={mainEvent} />
        </Layout>
    );
};

export default IndexPage;
