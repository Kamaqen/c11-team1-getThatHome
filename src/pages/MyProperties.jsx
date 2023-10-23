import { useEffect, useState } from "react";
import { ActiveProperties } from "../components/MyProperties_components/ActiveProperties";
import { ClosedProperties } from "../components/MyProperties_components/ClosedProperties";
import Button from "../components/Button";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Tab from "../components/Tab";
import Section from "../components/Section";
import { getProperties } from "../services/property-services";

const iconFiPlusCircle = <FiPlusCircle />;

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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 1130px;
`;

const MenuTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MyProperties = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  const handleCloseProperty = async () => {
    const updatedProperties = await getProperties();
    setData(updatedProperties);
  };

  useEffect(() => {
    const current_id = sessionStorage.getItem("userId");
    const fetchProperties = async () => {
      const properties = await getProperties();
      const filteredProperties = properties.filter(
        (property) => property.user_id === Number.parseInt(current_id)
      );
      console.log(filteredProperties);
      setData(filteredProperties);
    };
    fetchProperties();
  }, []);

  return (
    <Section align="flex-start">
      <div className="flex flex-column a-start">
        <Button
          onClick={() => navigate("/create_property")}
          variant="Primary"
          size="def"
          icon={iconFiPlusCircle}
        >
          new property
        </Button>
        <MenuTabs>
          <Tab
            variant={active ? "Active" : "Inactive"}
            onClick={() => setActive(true)}
          >
            active
          </Tab>
          <Tab
            variant={active ? "Inactive" : "Active"}
            onClick={() => setActive(false)}
          >
            closed
          </Tab>
        </MenuTabs>
        <StyledDiv>
          {active ? (
            <ActiveProperties
              data={data}
              onClose={() => handleCloseProperty()}
            />
          ) : (
            <ClosedProperties
              data={data}
              onClose={() => handleCloseProperty()}
            />
          )}
        </StyledDiv>
      </div>
    </Section>
  );
};
