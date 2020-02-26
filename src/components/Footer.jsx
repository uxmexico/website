import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = styled.footer`
    background-image: radial-gradient(circle at 50% 0, #f8f8f8, #ffffff 91%);
`;

const SocialList = styled.ul`
    list-style: none;
`;

const Footer = () => (
    <FooterComponent>
        <h1>Siguenos en</h1>
        <SocialList>
            <li>
                <a href="https://twitter.com/UXMexico">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/UXMexico">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
        </SocialList>
    </FooterComponent>
);

export default Footer;
