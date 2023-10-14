import styled from "@emotion/styled";
import Section from "../components/Section";
import Footer from "../components/footer";
import TeamCard from "../components/TeamCard";
import { teamMembers, datafake } from "../STORE";
import CardComponent from "../components/CardComponent";
import SearchLanding from "../components/SearchLanding";
import { createPortal } from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import LoginModal from "../components/LoginModal";
import { logout } from "../services/auth-services";
import { RiUserAddLine, RiUserLine, RiUserReceivedLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { TbHome2 } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";
import Button from "../components/Button";

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

const ButtonJoin = styled.div`
  width: 101px;
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

const ButtonProv = styled.button`
  width: 200px;
  height: 50px;
  background-color: #f48fb1;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
const StyledImg = styled.img`
  margin-top: -72px;
  width: 130%;
  object-fit: cover;
`;
const TextDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledP = styled.p`
  width: 823px;
  text-align: center;
  margin-bottom: 32px;
  z-index: 1;
  font-size: ${(props) => props.font};
  line-height: 48px;
  color: ${(props) => (props.color ? props.color : "#373737")};
`;

const LandingPage = () => {
  const [user, setUser] = useState(sessionStorage.getItem("userId"));
  const [role, setRole] = useState(sessionStorage.getItem("userRole"));
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

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

  return (
    <div className="flex flex-column a-center">
      <MenuContainer>
        <Navbarstyled>
          <ContentImg>
            <LogoImg src="src/assets/Logo.png" />
          </ContentImg>
          <StyledMenuV>
            <ButtonFindHome>
              <Icon>{iconlusearch}</Icon>
              FIND A HOME
            </ButtonFindHome>
            {user ? (
              <>
                <ButtonLogout onClick={handleLogOut}>
                  <Icon>{iconBiLogOutCircle}</Icon>
                  LOGOUT
                </ButtonLogout>
                {role === "landlord" && (
                  <>
                    <Button variant="Primary" size="def" icon={iconTbHome2}>
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
                <Button variant="Secundary" size="def" icon={iconRiUserAddLine}>
                  JOIN
                </Button>
                <Button
                  variant="Primary"
                  size="def"
                  onClick={handleClick}
                  icon={iconRiUserReceivedLine}
                >
                  Login
                </Button>
              </>
            )}
          </StyledMenuV>
        </Navbarstyled>
      </MenuContainer>
      <Section isImageSection="true">
        <StyledImg src="src/assets/landing-img.svg" />
        <TextDiv className="flex flex-column a-center gap-md">
          <StyledP font="64px" top="50px">
            Meet your new Home
          </StyledP>
          <p style={{ fontSize: "24px" }}>
            The easiest way to find where you belong
          </p>
        </TextDiv>
        <SearchLanding />
      </Section>
      <Section>
        <p className="mb-md">Find an Apartment you Love</p>
        <StyledP font="36px" top="50px" color="#BF5F82">
          Homes for rent at the best prices
        </StyledP>
        <div className="flex flex-row gap-xl">
          {datafake.map((item, index) => (
            <CardComponent
              key={index}
              img={item.img}
              price={item.price}
              operation={item.operation}
              type={item.type}
              address={item.address}
              bed={item.bed}
              bath={item.bath}
              area={item.area}
              pet={item.pet}
            />
          ))}
        </div>
      </Section>
      <Section color="rgba(244, 143, 177,  0.15)">
        <StyledP
          font="36px"
          mb="32px"
          className="flex flex-column a-center j-center"
        >
          Getting someone to rent your apartment has never been this easy
        </StyledP>
        <ButtonProv>Create an account now</ButtonProv>
      </Section>
      <Section>
        <StyledP font="48px" color="#BF5F82">
          Meet the team
        </StyledP>
        <br />
        <div className="flex flex-row container">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              photo={member.photo}
              name={member.name}
              github={member.github}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </Section>
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
