import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { RiArrowDownSLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { Icon } from "./Button";


const arrowdownIcon = <RiArrowDownSLine />;
const lusearchIcon = <LuSearch />;

const LusearchIcon = styled.div`
  border: none;
  outline: none;
  color: #8e8e8e;
  :hover {
    color: #616161;
  }
  :focus-within {
    color: #616161;
  }
`;

const ArrowdownIconInput = styled.div`
  border: none;
  outline: none;
  color: #8e8e8e;
  :hover {
    color: #616161;
  }
  :focus-within {
    color: #616161;
  }
`;

const BorderInput = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 356px;
  height: 40px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 0px;
  border: 1px solid #f48fb1;
  background: white;
  font-size: 16px;
  color: #373737;
  :hover {
    border: 1px solid #bf5f82;
  }
  :focus-within {
    border: 1px solid #bf5f82;
  }
  ::placeholder {
    color: #8e8e8e;
  }
`;

const StyledInput = styled.input`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 284px;
  letter-spacing: 0.5px;
  border: none;
  outline: none;
`;

const StyledTypography = styled.input`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
`;

const StyledLabel = styled.label`
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Input = ({
  label,
  id,
  name,
  placeholder = "",
  type,
  required = false,
  value,
  onChange,
}) => {
  return (
    <BorderInput>
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : ""}
      <LusearchIcon>
        <Icon>{lusearchIcon}</Icon>
      </LusearchIcon>
      <StyledInput
        type={type ? type : "text"}
        placeholder={placeholder}
        id={id}
        name={name ? name : id}
        value={value}
        required={required ? "required" : ""}
        onChange={onChange}
      />
      <ArrowdownIconInput>
        <Icon>{arrowdownIcon}</Icon>
      </ArrowdownIconInput>
    </BorderInput>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
