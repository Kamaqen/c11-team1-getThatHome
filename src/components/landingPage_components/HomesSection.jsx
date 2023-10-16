import Section from "../Section";
import { Link } from "react-router-dom";
import CardComponent from "../CardComponent";
import { datafake } from "../../STORE";

const HomesSection = ({ data }) => {
    const threeFirst = data ? data.slice(0, 3) : datafake.slice(0, 3);
    return (
        <Section>
            <p className="mb-md">Find an Apartment you Love</p>
            <p className="headline4 pink mb-md">
                Homes for rent at the best prices
            </p>
            <div className="flex flex-row gap-xl">
                {threeFirst.map((item, index) => (
                    <Link
                        key={index}
                        to={`/property_details/${item.id}`}
                        style={{ textDecoration: "none" }}>
                        <CardComponent
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
    );
};

export default HomesSection;
