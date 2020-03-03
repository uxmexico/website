import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = styled.footer`
    text-align: center;
    background-image: radial-gradient(circle at 50% 0, #f8f8f8, #ffffff 91%);
`;

const SocialList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    margin: 0;
    padding-bottom: 20px;
`;

const SocialItem = styled.li`
    margin: 0 0.5rem;
`;

const Footer = () => (
    <FooterComponent>
        <h3>Siguenos en</h3>
        <SocialList>
            <SocialItem>
                <a href="https://twitter.com/UXMexico" title="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </SocialItem>
            <SocialItem>
                <a href="https://www.facebook.com/UXMexico" title="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </SocialItem>
        </SocialList>
    </FooterComponent>
);

export default Footer;
