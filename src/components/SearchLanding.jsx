import styled from "@emotion/styled";
import SelectLanding from "./SelectLanding";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const StyledDiv = styled.div`
    border-radius: 8px;
    border-right: 1px solid #e1e2e1;
    text-align: center;
    position: absolute;
    top: 320px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 72px;
    background: #ffffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const SearchLanding = () => {
    const [filter, setFilter] = useState({
        price: [],
        property_type: [],
        bedrooms: "",
        bathrooms: "",
        pet_friendly: false,
        operation_type: "",
    });

    const handleSelectChange = (type, value) => {
        if (type === "type") {
            setFilter((prevFilter) => ({
                ...prevFilter,
                property_type:
                    value === "An appartment" ? ["apartment"] : ["house"],
            }));
        } else if (type === "operation") {
            setFilter((prevFilter) => ({
                ...prevFilter,
                operation_type: value === "Rent" ? "rent" : "sale",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("filter", JSON.stringify(filter));
    };
    return (
        <StyledDiv className="flex flex-row j-around a-center ">
            <form onSubmit={handleSubmit} className="flex gap-md">
                <SelectLanding
                    type="type"
                    label="I’m Looking for"
                    options={["An appartment", "An House"]}
                    onSelectChange={(value) =>
                        handleSelectChange("type", value)
                    }
                />
                <SelectLanding
                    type="operation"
                    label="I want To"
                    options={["Rent", "Buy"]}
                    onSelectChange={(value) =>
                        handleSelectChange("operation", value)
                    }
                />
                <SelectLanding
                    type="address"
                    label="Where"
                    options={["Favorite district"]}
                />
                <Link to="/list" style={{ textDecoration: "none" }}>
                    <Button type="submit" variant="Primary">
                        Search
                    </Button>
                </Link>
            </form>
        </StyledDiv>
    );
};

export default SearchLanding;
