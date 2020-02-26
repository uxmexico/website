import normalize from 'normalize.css';
import { css } from '@emotion/core';

const global = theme => css`
    ${normalize}

    html {
        font-size: 106.25%;
        line-height: 1.45em;
        box-sizing: border-box;
        overflow-y: scroll;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        background: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: ${theme.fonts.text};
        font-weight: 400;
        word-wrap: break-word;
        font-kerning: normal;
        font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    }

    a {
        color: ${theme.colors.link};
    }

    img {
        max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hgroup,
    ul,
    ol,
    dl,
    dd,
    p,
    figure,
    pre,
    table,
    fieldset,
    blockquote,
    form,
    noscript,
    iframe,
    img,
    hr,
    address {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: ${theme.blockMarginBottom};
    }
    b,
    strong,
    dt,
    th {
        font-weight: 700;
    }

    ol,
    ul {
        list-style-position: outside;
        list-style-image: none;
        margin-left: 1.5rem;
        li {
            padding-left: 0;
        }
    }
    li {
        margin-bottom: calc(${theme.blockMarginBottom} / 2);
        p {
            margin-bottom: calc(${theme.blockMarginBottom} / 2);
        }
        > ol,
        > ul {
            margin-left: 1.5rem;
            margin-bottom: calc(${theme.blockMarginBottom} / 2);
            margin-top: calc(${theme.blockMarginBottom} / 2);
        }
    }
    blockquote *:last-child,
    li *:last-child,
    p *:last-child {
        margin-bottom: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0.67em;
        font-family: ${theme.fonts.headings};
        font-weight: 700;
        text-rendering: optimizeLegibility;
    }
`;

export default global;
