import Section from "../Section";
import TeamCard from "../TeamCard";
import { teamMembers } from "../../STORE";

const TeamSection = () => {
    return (
        <Section>
            <p className="headline3 pink">Meet the team</p>
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
    );
};

export default TeamSection;
