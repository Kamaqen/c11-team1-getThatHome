import styled from "@emotion/styled";

const Tabcontainer = styled.div`
  display: inline-flex;
  padding: 0px 4px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 0px 4px;
  height: auto;
  width: auto;
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  color: ${(
    props // Text inside the button
  ) =>
    props.variant === "Active"
      ? "#373737"
      : props.variant === "Inactive"
      ? "#8E8E8E"
      : "#373737"};
  &:hover {
    color: "#61616126";
  }
`;

const StyledRectangle = styled.div`
  height: 2px;
  align-self: stretch;
  background-color: ${(props) =>
    props.variant === "Active"
      ? "#F48FB1"
      : props.variant === "Inactive"
      ? "#BDBDBD"
      : "#F48FB1"};
  &:hover {
    background-color: "#BF5F82";
  }
`;

const Tab = ({ children, ...props }) => {
  return (
    <Tabcontainer {...props}>
      {children}
      <StyledRectangle {...props} />
    </Tabcontainer>
  );
};

export default Tab;
