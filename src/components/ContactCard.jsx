import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { createSavedProperty } from "../services/user-properties-services";
import { useParams } from "react-router-dom";

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
  margin-left: 64px;
`;

const ContactCard = ({ login }) => {
  const { id } = useParams();
  async function handleSaved() {
    try {
      await createSavedProperty({ property_id: Number.parseInt(id) });
    } catch (error) {
      console.error("Error al manejar favoritos:", error.message);
    }
  }
  return (
    <StyledDiv>
      {login ? (
        <div className="flex flex-column gap-md">
          <button>Contact Advertiser</button>
          <p onClick={handleSaved}> Add to favorites</p>
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
