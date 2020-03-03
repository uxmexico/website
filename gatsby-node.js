const path = require('path');

const EVENTS_PER_PAGE = 5;

const makeEvents = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const eventTemplate = path.resolve('src/templates/event.jsx');
    const eventsListTemplate = path.resolve('src/templates/eventsList.jsx');

    const { errors, data } = await graphql(`
        query EventsHome {
            allWordpressWpEvents(filter: { status: { eq: "publish" } }) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (errors) {
        throw new Error(errors);
    }

    const events = data.allWordpressWpEvents.edges;

    // Create pages for events list pagination
    const pageCount = Math.ceil(events.length / EVENTS_PER_PAGE);

    [...Array(pageCount)].forEach((_val, pageNum) => {
        createPage({
            path: pageNum === 0 ? `/events/` : `/events/page-${pageNum + 1}/`,
            component: eventsListTemplate,
            context: {
                limit: EVENTS_PER_PAGE,
                skip: pageNum * EVENTS_PER_PAGE,
                pageCount,
                currentPageNum: pageNum + 1,
            },
        });
    });

    // And create page for each single event.
    events.forEach(event => {
        createPage({
            path: `events/${event.node.slug}`,
            component: eventTemplate,
            context: {
                slug: event.node.slug,
            },
        });
    });
};

exports.createPages = async ({ actions, graphql }) => {
    await Promise.all([makeEvents({ actions, graphql })]);
};
