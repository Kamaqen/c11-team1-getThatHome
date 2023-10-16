import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 356px;
  padding: 8px;
  border-radius: 8px;
  border: 0px;
  border: 1px solid #f48fb1;
  background: white;
  font-size: 16px;
  color: #373737;
  ::placeholder {
    color: #8e8e8e;
  }
`;
const StyledLabel = styled.label`
  font-family: var(--font-secondary);
  line-height: 12.1px;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 4px;
`;
const InputSignUp = ({
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
    <div className="flex flex-column">
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : ""}
      <StyledInput
        type={type ? type : "text"}
        placeholder={placeholder}
        id={id}
        name={name ? name : id}
        value={value}
        required={required ? "required" : ""}
        onChange={onChange}
      />
    </div>
  );
};

InputSignUp.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputSignUp;
