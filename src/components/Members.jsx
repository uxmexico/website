import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const MembersContainer = styled.section`
    background-image: radial-gradient(circle at 0 0, #f2f2f2, #ffffff 79%);
    padding: 40px 0;
`;

const MemberCard = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    width: 200px;
` 

const MemberImage = styled.div`
    background-image: url('https://fakeimg.pl/400x300/009578/fff/'); 
    width: 100px; 
    height: 100px; 
    border-radius:50%; 
`

const MemberDescription = styled.div`
    text-align: center;
`

const MemberRole = styled.p`
    text-transform: uppercase; 
    color: #999999; 
    font-size: 12px;
` 

const MemberAbout = styled.p`
    font-size: 14px;
`

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

const MemberCardAlt = styled.div`
    width: 375px;
    background: #DBD0BC;
    overflow-y: scroll;
    padding: 10px 0;

    ${props => props.theme.breakpoints.desktop} {
        width: 100%;
    }
`
const MemberInfo = styled.article`
    display: flex;
    justify-content: center;
`
const Members = () => (
    <MembersContainer>
        <h2 className="titleSection">Detrás de UX México</h2>

        <section class="grid-mm">
            <MemberInfo>
                <MemberCard>
                    <MemberImage></MemberImage>
                    <MemberDescription>
                        <h6>Adrían Solcá</h6>
                        <MemberRole>Design strategist</MemberRole>
                        <MemberAbout>Around the world that bring together different.</MemberAbout>
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
                        </SocialList>
                    </MemberDescription>
                </MemberCard>
            </MemberInfo>
            <MemberInfo>
                <MemberCard>
                    <MemberImage></MemberImage>
                    <MemberDescription>
                        <h6>Adrían Solcá</h6>
                        <MemberRole>Design strategist</MemberRole>
                        <MemberAbout>Around the world that bring together different.</MemberAbout>
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
                        </SocialList>
                    </MemberDescription>
                </MemberCard>
            </MemberInfo>
            <MemberInfo>
                <MemberCard>
                    <MemberImage></MemberImage>
                    <MemberDescription>
                        <h6>Adrían Solcá</h6>
                        <MemberRole>Design strategist</MemberRole>
                        <MemberAbout>Around the world that bring together different.</MemberAbout>
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
                        </SocialList>
                    </MemberDescription>
                </MemberCard>
            </MemberInfo>
            <MemberInfo>
                <MemberCard>
                    <MemberImage></MemberImage>
                    <MemberDescription>
                        <h6>Adrían Solcá</h6>
                        <MemberRole>Design strategist</MemberRole>
                        <MemberAbout>Around the world that bring together different.</MemberAbout>
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
                        </SocialList>
                    </MemberDescription>
                </MemberCard>
            </MemberInfo>
        </section>
    </MembersContainer>
);

export default Members;