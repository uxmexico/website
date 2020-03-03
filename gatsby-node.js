const path = require('path');

const EVENTS_PER_PAGE = 5;
const POSTS_PER_PAGE = 5;

const makeEvents = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const eventTemplate = path.resolve('src/templates/event.jsx');
    const eventsListTemplate = path.resolve('src/templates/eventsList.jsx');

    const { errors, data } = await graphql(`
        query AllEvents {
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
            path: `/events/${event.node.slug}`,
            component: eventTemplate,
            context: {
                slug: event.node.slug,
            },
        });
    });
};

const makeStaticPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const pageTemplate = path.resolve('src/templates/page.jsx');

    const { errors, data } = await graphql(`
        query AllPages {
            allWordpressPage(filter: { status: { eq: "publish" } }) {
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

    const pages = data.allWordpressPage.edges;

    pages.forEach(page => {
        createPage({
            path: `/${page.node.slug}`,
            component: pageTemplate,
            context: {
                slug: page.node.slug,
            },
        });
    });
};

const makeBlogPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const postTemplate = path.resolve('src/templates/post.jsx');
    const postsListTemplate = path.resolve('src/templates/postsList.jsx');

    const { errors, data } = await graphql(`
        query AllPosts {
            allWordpressPost(filter: { status: { eq: "publish" } }) {
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

    const posts = data.allWordpressPost.edges;

    // Create pages for posts list pagination
    const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

    [...Array(pageCount)].forEach((_val, pageNum) => {
        createPage({
            path: pageNum === 0 ? `/blog/` : `/blog/page-${pageNum + 1}/`,
            component: postsListTemplate,
            context: {
                limit: POSTS_PER_PAGE,
                skip: pageNum * POSTS_PER_PAGE,
                pageCount,
                currentPageNum: pageNum + 1,
            },
        });
    });

    // And create page for each single post.
    posts.forEach(post => {
        createPage({
            path: `/blog/${post.node.slug}`,
            component: postTemplate,
            context: {
                slug: post.node.slug,
            },
        });
    });
};

exports.createPages = async ({ actions, graphql }) => {
    await Promise.all([
        makeEvents({ actions, graphql }),
        makeStaticPages({ actions, graphql }),
        makeBlogPages({ actions, graphql }),
    ]);
};
