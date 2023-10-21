import styled from "@emotion/styled";

const Styledradiobox = styled.div`
  display: flex;
  width: 50px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0px 4px;
  border-radius: 8px 0px 0px 8px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  background: ${(props) =>
    props.variant === "Inactive"
      ? "#FFFFFF"
      : props.variant === "Active"
      ? "#F48FB1"
      : "#FFFFFF"};

  color: ${(props) =>
    props.variant === "Active"
      ? "#373737"
      : props.variant === "Inactive"
      ? "#8E8E8E"
      : "#373737"};
  cursor: pointer;
`;

const Radiobox = ({ children, ...props }) => {
  return <Styledradiobox {...props}>{children}</Styledradiobox>;
};

export default Radiobox;