import { useState, useEffect, useRef } from "react";
import { getProperties } from "../services/property-services";
import TeamSection from "../components/landingPage_components/TeamSection";
import GettingSection from "../components/landingPage_components/GettingSection";
import HomesSection from "../components/landingPage_components/HomesSection";
import SearchSection from "../components/landingPage_components/SearchSection";
import styled from "@emotion/styled";

const StyledSection = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

const LandingPage = () => {
    const [data, setData] = useState();

    useEffect(() => {
        if (localStorage.getItem("propertiesData") !== null) {
            setData(JSON.parse(localStorage.getItem("propertiesData")));
        } else {
            getProperties().then((res) => {
                setData(res);
                localStorage.setItem("propertiesData", JSON.stringify(res));
            });
        }
    }, []);

    return (
        <StyledSection>
            <SearchSection />
            <HomesSection data={data} />
            <GettingSection />
            <TeamSection />
        </StyledSection>
    );
};

export default LandingPage;
