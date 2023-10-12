import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiBuildings } from "react-icons/pi";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { RiCoinsLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CardContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
    background: white;
    color: #373737;
    width: 300px;
    height: 337px;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;
const CardImgObject = styled.div`
    width: 300px;
    height: 200px;
    overflow: hidden;
`;
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const IconTextContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: ${(props) => (props.text ? props.text : "16px")};
    & svg {
        margin-right: 8px;
    }
`;
const CardTag = styled.div`
    width: 120px;
    height: 28px;
    background: #f48fb1;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
`;
const CardFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #bf5f82;
    height: ${(props) => (props.footer ? "47px" : "7px")};
`;
const StyledLink = styled.a`
    text-transform: uppercase;
    color: white;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    font-size: 14px;
`;

const CardComponent = ({
    img,
    price,
    operation,
    type,
    address,
    bed,
    bath,
    area,
    pet,
    footer,
}) => {
    return (
        <CardContainer className="flex flex-column gap-sm">
            <CardImgObject>
                <CardImg src={img} />
            </CardImgObject>
            <CardTag className="flex a-center j-center">
                <RiCoinsLine /> For {operation}
            </CardTag>
            <div className="flex j-between margin-md">
                <IconTextContainer
                    className="flex j-center a-center"
                    text="24px">
                    <RiMoneyDollarCircleLine /> {price.toLocaleString()}
                </IconTextContainer>
                <IconTextContainer className="flex j-center a-center">
                    <PiBuildings /> {type}
                </IconTextContainer>
            </div>
            <p className="margin-md mb-md">{address}</p>
            <div className="flex gap-md margin-md">
                <IconTextContainer>
                    <BiBed /> {bed}
                </IconTextContainer>
                <IconTextContainer>
                    <BiBath /> {bath}
                </IconTextContainer>
                <IconTextContainer>
                    <BiArea /> {area}
                </IconTextContainer>
                <IconTextContainer>{pet && <MdPets />}</IconTextContainer>
            </div>
            <CardFooter footer={footer}>
                {footer && (
                    <>
                        <StyledLink>
                            <BiEdit /> Edit
                        </StyledLink>
                        <StyledLink>
                            <AiOutlineCloseCircle /> Close
                        </StyledLink>
                    </>
                )}
            </CardFooter>
        </CardContainer>
    );
};

CardComponent.propTypes = {
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    operation: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    bed: PropTypes.number.isRequired,
    bath: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    pet: PropTypes.bool,
    footer: PropTypes.bool,
};

export default CardComponent;
