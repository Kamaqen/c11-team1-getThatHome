import { useState } from "react";
import styled from "@emotion/styled";
import Tab from "../components/Tab";
import Favorites from "../components/SavedProperties_components.jsx/Favorites";
import Contacted from "../components/SavedProperties_components.jsx/Contacted";
import Section from "../components/Section";

const MenuTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 1130px;
`;

const SavedProperties = () => {
  const [active, setActive] = useState(true);

  return (
    <Section align="flex-start">
      <div className="flex flex-column a-start">
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
        <StyledDiv>{active ? <Favorites /> : <Contacted />}</StyledDiv>
      </div>
    </Section>
  );
};

export default SavedProperties;
