import styled from "@emotion/styled";
import PropTypes from "prop-types";

//Input for address
const StyledInput = styled.input`
  box-sizing: border-box;
  width: 600px;
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

export const InputPropertyFormAddress = ({
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

InputPropertyFormAddress.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

//input for pricing

const StyledInputPricing = styled.input`
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

export const InputPropertyFormPricing = ({
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
      <StyledInputPricing
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

InputPropertyFormPricing.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

//Input para facilities
const StyledInputFacilities = styled.input`
  box-sizing: border-box;
  width: 120px;
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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`

export const InputPropertyFormFacilities = ({
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
    <StyledDiv>
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : ""}
      <StyledInputFacilities
        type={type ? type : "text"}
        placeholder={placeholder}
        id={id}
        name={name ? name : id}
        value={value}
        required={required ? "required" : ""}
        onChange={onChange}
      />
    </StyledDiv>
  );
};

InputPropertyFormFacilities.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

//Para el textBoxArea
const StyledInputTextBox = styled.input`
  box-sizing: border-box;
  width: 600px;
  min-height: 76px;
  padding: 8px;
  border-radius: 8px;
  border: 0px;
  border: 1px solid #f48fb1;
  background: white;
  font-size: 16px;
  resize: vertical;
  color: #373737;
  ::placeholder {
    color: #8e8e8e;
  }
`;

export const InputPropertyFormTextBox = ({
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
      <StyledInputTextBox
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

InputPropertyFormTextBox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};