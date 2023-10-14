import Section from "../Section";
import { Link } from "react-router-dom";
import Button from "../Button";

const GettingSection = () => {
    return (
        <Section color="rgba(244, 143, 177,  0.15)">
            <p className="headline4 mb-xl text-center">
                Getting someone to rent your apartment has
                <br /> never been this easy
            </p>
            <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button variant="Primary">Create an account now</Button>
            </Link>
        </Section>
    );
};

export default GettingSection;
