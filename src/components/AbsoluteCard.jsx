import PropTypes from "prop-types";
import styled from "@emotion/styled";

const AbsoluteDiv = styled.div`
    width: 226px;
    height: 148px;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 64px;
    right: calc(20%);
    display: grid;
    place-items: center;
`;

const AbsoluteCard = ({ login }) => {
    return (
        <AbsoluteDiv>
            {login ? (
                <div className="flex flex-column gap-md">
                    <button>Contact Advertiser</button>
                    <p> Add to favorites</p>
                </div>
            ) : (
                <div>
                    <p>Log in or Join to contact the advertiser</p>
                    <button>Login</button>
                </div>
            )}
        </AbsoluteDiv>
    );
};

AbsoluteCard.propTypes = {
    login: PropTypes.bool,
};

export default AbsoluteCard;
