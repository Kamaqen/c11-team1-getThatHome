import styled from "@emotion/styled";
import { RiArrowDownSLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";

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
    width: ${(props) => (props.width ? props.width : "100%")};
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
    width: ${(props) => (props.width ? props.width : "100%")};
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
    font-family: var(--font-secondary);
    line-height: 12.1px;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 4px;
`;

const TextInput = styled.div`
    display: flex;
    width: 600px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

const Input = ({
    icon1,
    label,
    id,
    name,
    placeholder = "",
    type,
    required = false,
    value,
    onChange,
    icon2,
    width,
}) => {
    return (
        <>
            <TextInput>
                {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : ""}
                <BorderInput width={width}>
                    <LusearchIcon>
                        <div>{icon1 ? icon1 : lusearchIcon}</div>
                    </LusearchIcon>
                    <StyledInput
                        width={width}
                        type={type ? type : "text"}
                        placeholder={placeholder}
                        id={id}
                        name={name ? name : id}
                        value={value}
                        required={required ? "required" : ""}
                        onChange={onChange}
                    />
                    <ArrowdownIconInput>
                        {icon2 && <div>{arrowdownIcon}</div>}
                    </ArrowdownIconInput>
                </BorderInput>
            </TextInput>
        </>
    );
};

export default Input;
