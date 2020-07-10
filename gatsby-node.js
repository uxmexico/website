const path = require('path');

const EVENTS_PER_PAGE = 5;
const POSTS_PER_PAGE = 5;

const makeEvents = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const eventTemplate = path.resolve('src/templates/event.jsx');
    const eventsListTemplate = path.resolve('src/templates/events-archive.jsx');

    const { errors, data } = await graphql(`
        query AllEvents {
            allWpEvent(filter: { status: { eq: "publish" } }) {
                nodes {
                    id
                    uri
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
            path: event.uri,
            component: eventTemplate,
            context: {
                id: event.id,
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
                    id
                    uri
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
            path: page.uri,
            component: pageTemplate,
            context: {
                id: page.id,
            },
        });
    });
};

const makeBlogPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const postTemplate = path.resolve('src/templates/post.jsx');
    const postsListTemplate = path.resolve('src/templates/posts-archive.jsx');

    const { errors, data } = await graphql(`
        query AllPosts {
            allWpPost(filter: { status: { eq: "publish" } }) {
                nodes {
                    id
                    uri
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
            path: post.uri,
            component: postTemplate,
            context: {
                id: post.id,
            },
        });
    });
};

const makeCategoriesAndTagsPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const categoriesTemplate = path.resolve(
        'src/templates/categories-archive.jsx',
    );
    const tagsTemplate = path.resolve(
        'src/templates/tags-archive.jsx',
    );

    const { errors, data } = await graphql(`
        query allCategoriesAndTagsQuery {
            allWpCategory {
                nodes {
                    id
                    name
                    slug
                    uri
                    posts {
                        nodes {
                            id
                        }
                    }
                }
            }
            allWpTag {
                nodes {
                    id
                    name
                    slug
                    uri
                    posts {
                        nodes {
                            id
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        throw new Error(errors);
    }

    const categories = data.allWpCategory.nodes;
    const tags = data.allWpTag.nodes;

    categories.map((category) => {
        const pageCount = Math.ceil(
            category.posts.nodes.length / POSTS_PER_PAGE,
        );

        [...Array(pageCount)].forEach((_val, pageNum) => {
            createPage({
                path:
                    pageNum === 0
                        ? `/category/${category.slug}/`
                        : `/category/${category.slug}/page-${pageNum + 1}/`,
                component: categoriesTemplate,
                context: {
                    limit: POSTS_PER_PAGE,
                    skip: pageNum * POSTS_PER_PAGE,
                    pageCount,
                    currentPageNum: pageNum + 1,
                    categoryId: category.id,
                    categoryName: category.name,
                    categorySlug: category.slug,
                },
            });
        });
    });

    tags.map((tag) => {
        const pageCount = Math.ceil(
            tag.posts.nodes.length / POSTS_PER_PAGE,
        );

        [...Array(pageCount)].forEach((_val, pageNum) => {
            createPage({
                path:
                    pageNum === 0
                        ? `/tag/${tag.slug}/`
                        : `/tag/${tag.slug}/page-${pageNum + 1}/`,
                component: tagsTemplate,
                context: {
                    limit: POSTS_PER_PAGE,
                    skip: pageNum * POSTS_PER_PAGE,
                    pageCount,
                    currentPageNum: pageNum + 1,
                    tagId: tag.id,
                    tagName: tag.name,
                    tagSlug: tag.slug,
                },
            });
        });
    });
};

exports.createPages = async ({ actions, graphql }) => {
    await Promise.all([
        makeEvents({ actions, graphql }),
        makeStaticPages({ actions, graphql }),
        makeBlogPages({ actions, graphql }),
        makeCategoriesAndTagsPages({ actions, graphql }),
    ]);
};
