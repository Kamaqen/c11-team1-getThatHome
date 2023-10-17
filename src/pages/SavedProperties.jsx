import { useState } from "react";
import styled from "@emotion/styled";
import Tab from "../components/Tab";
import Favorites from "../components/SavedProperties_components.jsx/Favorites";
import Contacted from "../components/SavedProperties_components.jsx/Contacted";

const MainBackground = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
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

const SavedProperties = () => {
  const [active, setActive] = useState(true);

  return (
    <MainBackground>
      <MainContainer>
        <MenuTabs>
          <Tab
            variant={active ? "Active" : "Inactive"}
            onClick={() => setActive(true)}
          >
            favorites
          </Tab>
          <Tab
            variant={active ? "Inactive" : "Active"}
            onClick={() => setActive(false)}
          >
            contacted
          </Tab>
        </MenuTabs>
        {active ? <Favorites /> : <Contacted />}
      </MainContainer>
    </MainBackground>
  );
};

export default SavedProperties;
