import Section from "../Section";
import { Link } from "react-router-dom";
import CardComponent from "../CardComponent";
import { datafake } from "../../STORE";

const HomesSection = () => {
    return (
        <Section>
            <p className="mb-md">Find an Apartment you Love</p>
            <p className="headline4 pink mb-md">
                Homes for rent at the best prices
            </p>
            <div className="flex flex-row gap-xl">
                {datafake.map((item, index) => (
                    <Link
                        key={index}
                        to={`/property_details/${item.id}`}
                        style={{ textDecoration: "none" }}>
                        <CardComponent
                            img={item.img}
                            price={item.price}
                            operation={item.operation}
                            type={item.type}
                            address={item.address}
                            bed={item.bed}
                            bath={item.bath}
                            area={item.area}
                            pet={item.pet}
                        />
                    </Link>
                ))}
            </div>
        </Section>
    );
};

export default HomesSection;
