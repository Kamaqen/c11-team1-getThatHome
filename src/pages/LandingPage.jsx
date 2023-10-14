import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { RiUserAddLine, RiUserLine, RiUserReceivedLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { TbHome2 } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";
import { createPortal } from "react-dom";
import { getProperties } from "../services/property-services";
import { logout } from "../services/auth-services";

import Section from "../components/Section";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import CardComponent from "../components/CardComponent";
import SearchLanding from "../components/SearchLanding";
import Button from "../components/Button";
import LoginModal from "../components/LoginModal";

import { teamMembers, datafake } from "../STORE";
import TeamSection from "../components/landingPage_components/TeamSection";
import GettingSection from "../components/landingPage_components/GettingSection";
import HomesSection from "../components/landingPage_components/HomesSection";
import SearchSection from "../components/landingPage_components/SearchSection";

const iconRiUserAddLine = <RiUserAddLine />;
const iconRiUserReceivedLine = <RiUserReceivedLine />;
const iconlusearch = <LuSearch />;
const iconBiLogOutCircle = <BiLogOutCircle />;
const iconBsFillHeartFill = <BsFillHeartFill />;
const userlineIcon = <RiUserLine />;
const iconTbHome2 = <TbHome2 />;

const MenuContainer = styled.div`
    width: 100%;
    /* max-height: 72px; */
    display: flex;
    align-items: center;
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
`;

const Icon = styled.div`
    display: flex;
    font-size: 24px;
    justify-content: center;
    align-items: center;
`;

const StyledMenuV = styled.div`
    width: 85%;
    /* width: 414px; */
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    /* Button */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

const ButtonLogout = styled.button`
    width: 130px;
    height: 40px;
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    color: #616161;
    background-color: white;
    border-radius: 16px;
    border: 1px solid var(--Pink, #f48fb1);
    color: var(--Gray, #616161);
    text-align: center;
    box-sizing: border-box;
`;

const ButtonProfile = styled.div`
    width: 129px;
    height: 40px;
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    color: #ffffff;
    background-color: #f48fb1;
    border-radius: 16px;
    background: var(--Pink, #f48fb1);
    color: var(--White, #fff);
    text-align: center;
    box-sizing: border-box;
`;

const ButtonSP = styled.div`
    width: 218px;
    height: 40px;
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    color: #ffffff;
    background-color: #f48fb1;
    border-radius: 16px;
    background: var(--Pink, #f48fb1);
    color: var(--White, #fff);
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
`;

const LandingPage = () => {
    const [user, setUser] = useState(sessionStorage.getItem("userId"));
    const [role, setRole] = useState(sessionStorage.getItem("userRole"));
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);
    const [data, setData] = useState();

    useEffect(() => {
        if (localStorage.getItem("propertiesData") === null) {
            setData(JSON.parse(localStorage.getItem("propertiesData")));
            console.log("si hay data en el local storage");
        } else {
            getProperties().then((res) => {
                console.log(" no hay data en el local storage");
                setData(res);
                localStorage.setItem("propertiesData", JSON.stringify(res));
            });
        }
    }, []);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setShowModal(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleClick = () => {
        setShowModal(true);
    };
    const updateUser = (userId) => {
        setUser(userId);
    };
    const updateRole = (userRole) => {
        setRole(userRole);
    };

    const handleLogOut = () => {
        logout().then(() => {
            setUser(null);
        });
    };

    return (
        <div className="flex flex-column a-center">
            <MenuContainer>
                <Navbarstyled>
                    <ContentImg>
                        <LogoImg src="src/assets/Logo.png" />
                    </ContentImg>
                    <StyledMenuV>
                        <Link
                            to={`/list/${5}`}
                            style={{ textDecoration: "none" }}>
                            <ButtonFindHome>
                                <Icon>{iconlusearch}</Icon>
                                FIND A HOME
                            </ButtonFindHome>
                        </Link>
                        {user ? (
                            <>
                                <ButtonLogout onClick={handleLogOut}>
                                    <Icon>{iconBiLogOutCircle}</Icon>
                                    LOGOUT
                                </ButtonLogout>
                                {role === "landlord" && (
                                    <>
                                        <Button
                                            variant="Primary"
                                            size="def"
                                            icon={iconTbHome2}>
                                            My Properties
                                        </Button>
                                        <ButtonProfile>
                                            <Icon>{userlineIcon}</Icon>
                                            PROFILE
                                        </ButtonProfile>
                                    </>
                                )}
                                {role === "home_seeker" && (
                                    <>
                                        <ButtonSP>
                                            <Icon>{iconBsFillHeartFill}</Icon>
                                            SAVED PROPERTIES
                                        </ButtonSP>
                                        <ButtonProfile>
                                            <Icon>{userlineIcon}</Icon>
                                            PROFILE
                                        </ButtonProfile>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/signup"
                                    style={{ textDecoration: "none" }}>
                                    <Button
                                        variant="Secundary"
                                        size="def"
                                        icon={iconRiUserAddLine}>
                                        JOIN
                                    </Button>
                                </Link>
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
            <SearchSection />
            <HomesSection data={data} />
            <GettingSection />
            <TeamSection />
            {showModal &&
                createPortal(
                    <div ref={modalRef}>
                        <LoginModal
                            onClose={() => {
                                setShowModal(false);
                                updateUser(sessionStorage.getItem("userId"));
                                updateRole(sessionStorage.getItem("userRole"));
                            }}
                        />
                    </div>,
                    document.body
                )}
            <Footer page="home" />
        </div>
    );
};

export default LandingPage;
