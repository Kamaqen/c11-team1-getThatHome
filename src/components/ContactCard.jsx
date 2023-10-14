import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 258px;
    height: 148px;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    right: calc(20%);
    display: grid;
    place-items: center;
`;

const ContactCard = ({ login }) => {
    return (
        <StyledDiv>
            {login ? (
                <div className="flex flex-column gap-md">
                    <button>Contact Advertiser</button>
                    <p> Add to favorites</p>
                </div>
            ) : (
                <div className="flex flex-column gap-md">
                    <p>Log in or Join to contact the advertiser</p>
                    <button>Login</button>
                </div>
            )}
        </StyledDiv>
    );
};

ContactCard.propTypes = {
    login: PropTypes.string,
};

export default ContactCard;
