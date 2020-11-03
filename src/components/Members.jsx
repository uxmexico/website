import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faFacebookSquare,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

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
`;

const MemberImage = styled.div`
    background-image: ${(props) => `url('${props.src}');`};
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

const MemberDescription = styled.div`
    text-align: center;
`;

const MemberRole = styled.p`
    text-transform: uppercase;
    color: #999999;
    font-size: 12px;
`;

const MemberAbout = styled.p`
    font-size: 14px;
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

const MemberInfo = styled.article`
    display: flex;
    justify-content: center;
    align-items: baseline;
`;
const Members = () => {
    const data = useStaticQuery(graphql`
        query allAuthors {
            allWpUser {
                nodes {
                    id
                    name
                    description
                    userProfile {
                        headline
                        linkedin
                        twitter
                        facebook
                    }
                    avatar {
                        url
                        foundAvatar
                    }
                }
            }
        }
    `);

    return (
        <MembersContainer>
            <h2 className="titleSection">Detrás de UX México</h2>

            <section className="grid-mm">
                {data.allWpUser.nodes.map((author) => {
                    const {
                        id,
                        avatar,
                        name,
                        description,
                        userProfile: { headline, twitter, linkedin, facebook },
                    } = author;

                    const hasSocial = twitter || linkedin || facebook;

                    return (
                        <MemberInfo key={id}>
                            <MemberCard>
                                <MemberImage
                                    src={
                                        avatar?.url ??
                                        'https://fakeimg.pl/400x300/009578/fff/'
                                    }
                                />
                                <MemberDescription>
                                    <h6>{name}</h6>
                                    <MemberRole>{headline}</MemberRole>
                                    <MemberAbout
                                        dangerouslySetInnerHTML={{
                                            __html: description,
                                        }}
                                    />
                                    {hasSocial && (
                                        <SocialList>
                                            {linkedin && (
                                                <SocialItem>
                                                    <a
                                                        className="socialLink"
                                                        href={linkedin}
                                                        title="Linkedin"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faLinkedin}
                                                        />
                                                    </a>
                                                </SocialItem>
                                            )}
                                            {twitter && (
                                                <SocialItem>
                                                    <a
                                                        className="socialLink"
                                                        href={twitter}
                                                        title="Twitter"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faTwitterSquare
                                                            }
                                                        />
                                                    </a>
                                                </SocialItem>
                                            )}
                                            {facebook && (
                                                <SocialItem>
                                                    <a
                                                        className="socialLink"
                                                        href={facebook}
                                                        title="Facebook"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faFacebookSquare
                                                            }
                                                        />
                                                    </a>
                                                </SocialItem>
                                            )}
                                        </SocialList>
                                    )}
                                </MemberDescription>
                            </MemberCard>
                        </MemberInfo>
                    );
                })}
            </section>
        </MembersContainer>
    );
};

export default Members;
