import styled from "@emotion/styled";
import { Icon } from "../../Button";
import { RiUserAddLine, RiUserLine, RiUserReceivedLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { TbHome2 } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";

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

const LogoImg = styled.img`
  width: 136px;
  height: 40px;
  object-fit: contain;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
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

const StyledMenuS = styled.div`
  width: 85%;
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

const StyledMenuL = styled.div`
  width: 85%;
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

const ButtonLogin = styled.div`
  width: 112px;
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

const ButtonLogout = styled.div`
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

const ButtonMP = styled.div`
  width: 191px;
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

const ContentImg = styled.div`
  width: 15%;
`;

const Navbar = () => {
  return (
    <div>
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
            <ButtonJoin>
              <Icon>{iconRiUserAddLine}</Icon>
              JOIN
            </ButtonJoin>
            <ButtonLogin>
              <Icon>{iconRiUserReceivedLine}</Icon>
              LOGIN
            </ButtonLogin>
          </StyledMenuV>
        </Navbarstyled>
      </MenuContainer>
      <div>Visit</div>
      <MenuContainer>
        <Navbarstyled>
          <ContentImg>
            <LogoImg src="src/assets/Logo.png" />
          </ContentImg>
          <StyledMenuS>
            <ButtonFindHome>
              <Icon>{iconlusearch}</Icon>
              FIND A HOME
            </ButtonFindHome>
            <ButtonLogout>
              <Icon>{iconBiLogOutCircle}</Icon>
              LOGOUT
            </ButtonLogout>
            <ButtonSP>
              <Icon>{iconBsFillHeartFill}</Icon>
              SAVED PROPERTIES
            </ButtonSP>
            <ButtonProfile>
              <Icon>{userlineIcon}</Icon>
              PROFILE
            </ButtonProfile>
          </StyledMenuS>
        </Navbarstyled>
      </MenuContainer>
      <div>Seeker</div>
      <MenuContainer>
        <Navbarstyled>
          <ContentImg>
            <LogoImg src="src/assets/Logo.png" />
          </ContentImg>
          <StyledMenuL>
            <ButtonFindHome>
              <Icon>{iconlusearch}</Icon>
              FIND A HOME
            </ButtonFindHome>
            <ButtonLogout>
              <Icon>{iconBiLogOutCircle}</Icon>
              LOGOUT
            </ButtonLogout>
            <ButtonMP>
              <Icon>{iconTbHome2}</Icon>
              MY PROPERTIES
            </ButtonMP>
            <ButtonProfile>
              <Icon>{userlineIcon}</Icon>
              PROFILE
            </ButtonProfile>
          </StyledMenuL>
        </Navbarstyled>
      </MenuContainer>
      <div>Landlord</div>
    </div>
  );
};

export default Navbar;
