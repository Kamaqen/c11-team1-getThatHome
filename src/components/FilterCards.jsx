import styled from "@emotion/styled";

const PriceCard = styled.div`
    display: ${(props) => (props.visible ? "flex" : "none")};
    margin-top: 4px;
    width: 247px;
    height: 116px;
    border-radius: 8px;
    background: white;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 8px;
    grid-area: 2 / 2 / 3 / 3;
    flex-direction: column;
    justify-content: center;
`;
const PropCard = styled(PriceCard)`
    width: 211px;
    grid-area: 2 / 3 / 3 / 4;
`;
const BedCard = styled(PriceCard)`
    grid-area: 2 / 4 / 3 / 5;
    width: 270px;
    height: 184px;
`;
const MoreCard = styled(PriceCard)`
    grid-area: 2 / 5 / 3 / 6;
    width: 247px;
    height: 168px;
`;

const FilterCards = ({ type, children, visible }) => {
    let SelectedCard;
    switch (type) {
        case "PriceCard":
            SelectedCard = PriceCard;
            break;
        case "PropCard":
            SelectedCard = PropCard;
            break;
        case "BedCard":
            SelectedCard = BedCard;
            break;
        case "MoreCard":
            SelectedCard = MoreCard;
            break;
        default:
            SelectedCard = PriceCard;
    }
    return <SelectedCard visible={visible}>{children}</SelectedCard>;
};

export default FilterCards;
