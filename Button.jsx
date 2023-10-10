import React from "react";
import styled from "@emotion/styled";
import { RiArrowDownSLine, RiUserLine } from "react-icons/ri";

const IconRiUserLine = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const IconRiArrowDownSLine = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const ButtonComponent = styled.button`
  width: 161px;
  height: 40px;
  top: 8px;
  left: 8px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border-radius: 1rem;
  padding: 0
    ${(props) =>
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
      : "40px"};
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border: ${(props) =>
    props.variant === "secondary" ? "1px solid #F48FB1" : "1px #F48FB1"};
  color: ${(props) =>
    props.variant === "primary"
      ? "#FFFFFF"
      : props.variant === "secondary"
      ? "#616161"
      : props.variant === "disabled"
      ? "#8E8E8E"
      : props.variant === "ghost"
      ? "#616161"
      : "#FFFFFF"};
  background-color: ${(props) =>
    props.variant === "primary"
      ? "#F48FB1"
      : props.variant === "secondary"
      ? "#FFFFFF"
      : props.variant === "disabled"
      ? "#61616126"
      : props.variant === "ghost"
      ? "#FFFFFF"
      : "#F48FB1"};
  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "#BF5F82"
        : props.variant === "secondary"
        ? "#F48FB1"
        : props.variant === "disabled"
        ? "#61616126"
        : props.variant === "ghost"
        ? "#F48FB1"
        : "#000000"};
  }
`;

const Button = ({ type, variant, className, id, onClick, size, children }) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
      size={size}
    >
      <IconRiUserLine>
        <RiUserLine />
      </IconRiUserLine>
      {children}
      <IconRiArrowDownSLine>
        <RiArrowDownSLine />
      </IconRiArrowDownSLine>
    </ButtonComponent>
  );
};

export default Button;
