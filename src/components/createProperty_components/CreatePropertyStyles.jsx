import styled from '@emotion/styled';
import Radiobox from '../Radiobox';

export const RadioBoxGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;
export const StyledLabel = styled.label`
  font-family: var(--font-secondary);
  line-height: 12.1px;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 4px;
`;
export const InputPropertyFormContainer = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: -32px;
  margin-left: 96px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--LightGray, #8E8E8E);
`
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 356px;
  gap: 10px;
`
export const SquareRadioInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #f48fb1;
  width: 16px;
  height: 16px;
  border-radius: 0;
  outline: none;
  &:checked {
    background-color: #F48FB1;
  }
`;
