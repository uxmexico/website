import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import theme from '../styles/theme';
import mainStyles from '../styles/global';

import Navigation from './Navigation';
import Footer from './Footer';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;

    & > * {
        flex: 1 100%;
    }
`;

const Main = styled.main`
    padding: 0 15px 0 10px;
    max-width: 100%;

    ${props => props.theme.breakpoints.desktop} {
        margin-top: 10px;
        padding: 0;
    }
`;

const Layout = ({ children }) => {
    const computedTheme = theme('light');

    return (
        <ThemeProvider theme={computedTheme}>
            <Global styles={mainStyles} />
            <Container>
                <Navigation />
                <Main>{children}</Main>
                <Footer />
            </Container>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
