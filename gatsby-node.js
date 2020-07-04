const path = require('path');

const EVENTS_PER_PAGE = 5;
const POSTS_PER_PAGE = 5;

const makeEvents = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const eventTemplate = path.resolve('src/templates/event.jsx');
    const eventsListTemplate = path.resolve('src/templates/eventsList.jsx');

    const { errors, data } = await graphql(`
        query AllEvents {
            allWpEvent(filter: { status: { eq: "publish" } }) {
                nodes {
                    slug
                }
            }
        }
    `);

    if (errors) {
        throw new Error(errors);
    }

    const events = data.allWpEvent.nodes;

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
    events.forEach((event) => {
        createPage({
            path: `/events/${event.slug}`,
            component: eventTemplate,
            context: {
                slug: event.slug,
            },
        });
    });
};

const makeStaticPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const pageTemplate = path.resolve('src/templates/page.jsx');

    const { errors, data } = await graphql(`
        query AllPages {
            allWpPage(filter: { status: { eq: "publish" } }) {
                nodes {
                    slug
                }
            }
        }
    `);

    if (errors) {
        throw new Error(errors);
    }

    const pages = data.allWpPage.nodes;

    pages.forEach((page) => {
        createPage({
            path: `/${page.slug}`,
            component: pageTemplate,
            context: {
                slug: page.slug,
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
            allWpPost(filter: { status: { eq: "publish" } }) {
                nodes {
                    slug
                }
            }
        }
    `);

    if (errors) {
        throw new Error(errors);
    }

    const posts = data.allWpPost.nodes;

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
    posts.forEach((post) => {
        createPage({
            path: `/blog/${post.slug}`,
            component: postTemplate,
            context: {
                slug: post.slug,
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
