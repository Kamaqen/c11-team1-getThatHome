import styled from "@emotion/styled";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const ghIcon = <AiFillGithub />;
const liIcon = <AiOutlineLinkedin />;

const TeamCardWrapper = styled.div`
    width: 240px;
    height: 273px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
const TeamCardObject = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
`;
const TeamCardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TeamCardName = styled.h3`
    font-size: 24px;
    gap: 32px;
`;

const TeamILink = styled.a`
    font-size: 24px;
    margin: 4px;
    padding: 4px;
    :hover {
        color: #f48fb1;
        background: #f5f5f6;
        border-radius: 50%;
        transition: 0.5s ease-in-out;
    }
`;

const TeamCardSocial = styled.div`
    gap: 32px;
`;

const TeamCard = ({ photo, name, github, linkedin }) => {
    return (
        <TeamCardWrapper>
            <TeamCardObject>
                <TeamCardImg src={photo} />
            </TeamCardObject>
            <TeamCardName>{name}</TeamCardName>
            <TeamCardSocial className="flex">
                <TeamILink href={github} target="_blank" rel="noreferrer">
                    {ghIcon}
                </TeamILink>
                <TeamILink href={linkedin} target="_blank" rel="noreferrer">
                    {liIcon}
                </TeamILink>
            </TeamCardSocial>
        </TeamCardWrapper>
    );
};

export default TeamCard;
