import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = styled.footer`
    text-align: center;
    background: #f8f8f8;
    padding: 40px 40px 20px;
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
        <h2 className="socialFooter">Síguenos en</h2>
        <SocialList>
        <SocialItem>
                <a className="socialLink" href="https://www.linkedin.com/company/ux-m%C3%A9xico/" title="Linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </SocialItem>
            <SocialItem>
                <a className="socialLink" href="https://twitter.com/UXMexico" title="Twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
            </SocialItem>
            <SocialItem>
                <a className="socialLink" href="https://www.facebook.com/UXMexico" title="Facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
            </SocialItem>
        </SocialList>
        <div className="rowFooterTop">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </div>
        <div className="rowFooterBottom">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </FooterComponent>
);

export default Footer;
