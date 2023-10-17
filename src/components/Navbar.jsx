import styled from "@emotion/styled";
import { useState } from "react";
import { logout } from "../services/auth-services";
import { RiUserAddLine, RiUserLine, RiUserReceivedLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { TbHome2 } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const iconRiUserAddLine = <RiUserAddLine />;
const iconRiUserReceivedLine = <RiUserReceivedLine />;
const iconlusearch = <LuSearch />;
const iconBiLogOutCircle = <BiLogOutCircle />;
const iconBsFillHeartFill = <BsFillHeartFill />;
const userlineIcon = <RiUserLine />;
const iconTbHome2 = <TbHome2 />;

const MenuContainer = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 2;
`;

const Navbarstyled = styled.div`
    display: flex;
    width: 100%;
    height: 72px;
    padding: 0px 120px;
    justify-content: center;
    align-items: center;
    background: var(--White, #fff);
    /* Elevation1 */
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ContentImg = styled.div`
    width: 15%;
`;

const LogoImg = styled.img`
    width: 136px;
    height: 40px;
    object-fit: contain;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    cursor: pointer;
`;

const ButtonFindHome = styled.div`
    width: 169px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #616161;
    background-color: white;
    border-radius: 16px;
    color: var(--Gray, #616161);
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    :hover {
        font-weight: 600;
        color: var(--Primary, #f48fb1);
    }
`;

const Icon = styled.div`
    display: flex;
    font-size: 24px;
    justify-content: center;
    align-items: center;
`;

const StyledMenuV = styled.div`
    width: 85%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

const Navbar = ({ setShowModal, id, role, onLogout }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setShowModal(true);
    };


    return (
        <MenuContainer>
            <Navbarstyled>
                <ContentImg>
                    <LogoImg
                        src="src/assets/Logo.png"
                        onClick={() => navigate("/")}
                    />
                </ContentImg>
                <StyledMenuV>
                    <ButtonFindHome onClick={() => navigate("/list")}>
                        <Icon>{iconlusearch}</Icon>
                        FIND A HOME
                    </ButtonFindHome>
                    {id ? (
                        <>
                            <Button
                                onClick={onLogout}
                                variant="Secundary"
                                size="def"
                                icon={iconBiLogOutCircle}>
                                LOGOUT
                            </Button>
                            {role === "landlord" && (
                                <>
                                    <Button
                                        variant="Primary"
                                        size="def"
                                        icon={iconTbHome2}>
                                        My Properties
                                    </Button>
                                    <Button
                                        variant="Primary"
                                        size="def"
                                        icon={userlineIcon}>
                                        PROFILE
                                    </Button>
                                </>
                            )}
                            {role === "home_seeker" && (
                                <>
                                    <Button
                                        onClick={() =>
                                            navigate("/saved_properties")
                                        }
                                        variant="Primary"
                                        size="def"
                                        icon={iconBsFillHeartFill}>
                                        SAVED PROPERTIES
                                    </Button>
                                    <Button
                                        variant="Primary"
                                        size="def"
                                        icon={userlineIcon}>
                                        PROFILE
                                    </Button>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() => navigate("/signup")}
                                variant="Secundary"
                                size="def"
                                icon={iconRiUserAddLine}>
                                JOIN
                            </Button>
                            <Button
                                variant="Primary"
                                size="def"
                                onClick={handleClick}
                                icon={iconRiUserReceivedLine}>
                                Login
                            </Button>
                        </>
                    )}
                </StyledMenuV>
            </Navbarstyled>
        </MenuContainer>
    );
};

export default Navbar;
