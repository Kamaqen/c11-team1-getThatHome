import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Tab from "../components/Tab";
import Favorites from "../components/SavedProperties_components.jsx/Favorites";
import Contacted from "../components/SavedProperties_components.jsx/Contacted";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";

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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 1130px;
`;

const SavedProperties = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const current_id = sessionStorage.getItem("userId");
      const storedData = localStorage.getItem("savedPropertiesData");

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const filteredData = parsedData.filter(
          (property) => property.user_id === Number.parseInt(current_id)
        );

        setData(filteredData);
      }
    };

    fetchData();
  }, []);

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
