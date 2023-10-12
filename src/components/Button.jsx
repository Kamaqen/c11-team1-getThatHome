import styled from "@emotion/styled";
import { RiArrowDownSLine, RiUserLine } from "react-icons/ri";

export const Icon = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: center;
  align-items: center;
`;

export const Blayout = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase;
  text-align: center;
  display: inline-flex;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  padding: ${(props) =>
    props.size === "def"
      ? "8px 16px 8px 16px"
      : props.size === "lg"
      ? "16px 24px 16px 24px"
      : props.size === "sm"
      ? "4px 8px 4px 8px"
      : "8px"};
  height: ${(props) =>
    props.size === "def"
      ? "40px"
      : props.size === "lg"
      ? "56px"
      : props.size === "sm"
      ? "32px"
      : "0px"};
  width: ${(props) =>
    props.size === "def"
      ? "161px"
      : props.size === "lg"
      ? "177px"
      : props.size === "sm"
      ? "145px"
      : "0px"};
  color: ${(
    props // Text inside the button
  ) =>
    props.variant === "Primary"
      ? "#FFFFFF"
      : props.variant === "Secundary"
      ? "#616161"
      : props.variant === "Disabled"
      ? "#8e8e8e"
      : props.variant === "Ghost"
      ? "#616161"
      : "#FFFFFF"};
  border: ${(props) =>
    props.variant === "Secundary" ? "1px solid #F48FB1" : "0px solid #BF5F82"};
  background-color: ${(props) =>
    props.variant === "Primary"
      ? "#F48FB1"
      : props.variant === "Secundary"
      ? "#FFFFFF"
      : props.variant === "Disabled"
      ? "#61616126"
      : props.variant === "Ghost"
      ? "#FFFFFF"
      : "#F48FB1"};
  &:hover {
    background-color: ${(props) =>
      props.variant === "Primary"
        ? "#BF5F82"
        : props.variant === "Secundary"
        ? "#f48fb126"
        : props.variant === "Disabled"
        ? "#61616126"
        : props.variant === "Ghost"
        ? "#F48FB126"
        : "#000000"};
  }
`;

const Button = ({ type, children, ...props }) => {
  let SelectedButton;
  switch (type) {
    case "Primary":
      SelectedButton = Primary;
      break;
    case "Secundary":
      SelectedButton = Secundary;
      break;
    case "Disabled":
      SelectedButton = Disabled;
      break;
    case "Ghost":
      SelectedButton = Ghost;
      break;
    default:
      SelectedButton = Primary;
  }

  return (
    <Blayout>
      <Icon>
        <RiUserLine />
      </Icon>
      {children}
      <Icon>
        <RiArrowDownSLine />
      </Icon>
    </Blayout>
  );
};

export default Button;
