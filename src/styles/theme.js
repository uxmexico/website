const lightTheme = {
    blockMarginBottom: '1.5rem',
    fonts: {
        text: 'Roboto',
    },
    colors: {
        background: '#fafcf7',
        text: '#212529',
        link: '#ff1ac2',
    },
    breakpoints: {
        desktop: '@media all and (min-width: 900px)',
    },
    transition: '.5s ease',
};

const darkTheme = {
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
        background: '#292d35',
        text: '#f4f9ff',
        link: '#ff557f',
    },
};

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme);

export default theme;
