import { useState } from "react";
import { ActiveProperties } from "../components/MyProperties_components/ActiveProperties";
import { ClosedProperties } from "../components/MyProperties_components/ClosedProperties";
import Button from "../components/Button";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const iconFiPlusCircle = <FiPlusCircle />;

const MainBackground = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  display: flex;
  padding: 0px 120px;
  align-items: flex-start;
  gap: 10px;
`;

const MainContainer = styled.div`
  margin-top: 72px;
  display: flex;
  width: 100%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const MenuTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Tab = styled.div`
  display: flex;
  padding: 0px 4px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const Rectangle = styled.div`
  height: 2px;
  align-self: stretch;
  background: var(--Pink, #f48fb1);
  margin: 0px 24px;
`;

export const MyProperties = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  return (
    <MainBackground>
      <MainContainer>
        <Button
          onClick={() => navigate("/create_property")}
          variant="Primary"
          size="def"
          icon={iconFiPlusCircle}
        >
          new property
        </Button>
        <MenuTabs>
          <Tab>
            <Button variant="Ghost" size="def">
              active
            </Button>
            <Rectangle />
          </Tab>
          <Tab>
            <Button variant="Ghost" size="def">
              closed
            </Button>
            <Rectangle />
          </Tab>
        </MenuTabs>
        {active ? <ActiveProperties /> : <ClosedProperties />}
      </MainContainer>
    </MainBackground>
  );
};
