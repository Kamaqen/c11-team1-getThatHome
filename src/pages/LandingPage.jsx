import styled from "@emotion/styled";
import Section from "../components/Section";
import Footer from "../components/footer";
import TeamCard from "../components/TeamCard";
import { teamMembers, datafake } from "../STORE";
import CardComponent from "../components/CardComponent";
import SearchLanding from "../components/SearchLanding";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import LoginModal from "../components/LoginModal";
import { Link } from "react-router-dom";
import { getProperties } from "../services/property-services";

const NavBarProv = styled.div`
    position: relative;
    top: 0px;
    height: 72px;
    width: 100%;
    margin: auto;
    background-color: #f48fb1;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
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
    const [data, setData] = useState();
    const [showModal, setShowModal] = useState(false);

    const threeFirst = data?.slice(0, 3);

    useEffect(() => {
        getProperties().then((res) => setData(res));
        localStorage.setItem("properties", JSON.stringify(data));
    }, []);

    const handleClick = () => {
        setShowModal(true);
    };
    return (
        <div className="flex flex-column a-center">
            <NavBarProv>
                <button onClick={handleClick}>Login</button>
            </NavBarProv>
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
                    {threeFirst?.map((item) => (
                        <Link
                            to={`/property_details/${item.id}`}
                            key={item.id}
                            style={{ textDecoration: "none" }}>
                            <CardComponent
                                key={item.id}
                                img={item.urls[0]}
                                price={item.rent_value}
                                operation={item.operation_type}
                                type={item.property_type}
                                address={item.address}
                                bed={item.bedrooms}
                                bath={item.bathrooms}
                                area={item.area}
                                pet={item.pet_friendly}
                            />
                        </Link>
                    ))}
                </div>
            </Section>
            <Section color="rgba(244, 143, 177,  0.15)">
                <StyledP
                    font="36px"
                    mb="32px"
                    className="flex flex-column a-center j-center">
                    Getting someone to rent your apartment has never been this
                    easy
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
                    <LoginModal onClose={() => setShowModal(false)} />,
                    document.body
                )}
            <Footer page="home" />
        </div>
    );
};

export default LandingPage;
