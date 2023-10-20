import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "./Button";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  createContacted,
  createSaved,
} from "../services/user-properties-services";
import { getAllUsers } from "../services/user-services";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const iconEdit = <FaRegEdit />;
const StyledDiv = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 258px;
  height: 148px;
  border-radius: 8px;
  box-shadow: ${(props) => (props.isLandlord ? "none" : "0px 5px 10px 0px rgba(0, 0, 0, 0.2)")};
  right: calc(20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 64px;
`;
const Icon = styled(AiOutlineHeart)`
  font-size: 24px;
`;
const IconFav = styled(AiFillHeart)`
  font-size: 24px;
  color: #ff4b96;
`;

const ContactCard = ({ role, userId, propertyId }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [contacted, setContacted] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const currentId = Number.parseInt(sessionStorage.getItem("userId"));

  const handleContacted = async () => {
    setContacted(!contacted);
    const contactedProperties =
      JSON.parse(localStorage.getItem("contactedPropertiesData")) || [];
    const alreadyContacted = contactedProperties.find(
      (property) => property.id === propertyId
    );
    if (alreadyContacted) {
      return;
    }
    await createContacted({ property_id: propertyId });
    setContacted(true);
  };

  const handleFavorite = async () => {
    setFavorite(!favorite);
    const savedProperties =
      JSON.parse(localStorage.getItem("savedPropertiesData")) || [];
    const alreadySaved = savedProperties.find(
      (property) => property.id === propertyId
    );
    if (alreadySaved) {
      return;
    }
    await createSaved({ property_id: propertyId });
  };

  useEffect(() => {
    getAllUsers()
      .then((users) => {
        const user = users.find((user) => user.id === userId);
        if (user) {
          setUser(user);
        }
      })
      .catch((error) => {
        console.log("Error al obtener datos del usuario:", error);
      });
  }, []);

  return (
    <StyledDiv isLandlord={role === "landlord"}>
      {currentId ? (
      contacted ? (
        <div className="flex flex-column a-center j-center gap-sm">
          <p className="headline6">Contact information</p>
          <div className="flex flex-column a-center j-center">
            <p className="subtitle2 pink">Email:</p>
            <p className="subtitle2">{user.email}</p>
          </div>
          <div className="flex flex-column a-center j-center">
            <p className="subtitle2 pink">Phone:</p>
            <p className="subtitle2">{user.phone_number}</p>
          </div>
        </div>
      ) : (
        role === "landlord" && currentId !== userId ? (
          // Render an empty card for landlords who are not the property owner
          <div className="empty-card">
            {/* Add any styling or content for the empty card */}
          </div>
        ) : (
          currentId === userId ? (
            <Button variant="Primary" icon={iconEdit} size="def" onClick={()=>navigate(`/edit_property/${propertyId}`)}>Edit Property</Button>
          ) : (
            <div className="flex flex-column a-center j-center gap-md">
              <Button variant="Primary" onClick={handleContacted}>
                Contact Advertiser
              </Button>
              {favorite ? <IconFav /> : <Icon onClick={handleFavorite} />}
              <p> Add to favorites</p>
            </div>
          )
        )
      )
    ) : (
      <div className="flex flex-column gap-md">
        <p>Log in or Join to contact the advertiser</p>
        <Button variant="Primary">Login</Button>
      </div>
    )}
  </StyledDiv>
  );
};

ContactCard.propTypes = {
  login: PropTypes.string,
};

export default ContactCard;
