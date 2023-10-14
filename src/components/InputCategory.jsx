import React, { useState } from "react";
import styled from "@emotion/styled";

const CategoryInput = styled.div`
  display: flex;
  width: 248px;
  height: 36px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border: none;
  background: white;
  :hover {
    background: #f5e5ec;
  }
  font-size: 16px;
  color: 616161;
`;

const CheckboxCategory = ({ checked, name, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };

  return (
    <CategoryInput>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {name}
    </CategoryInput>
  );
};

export default CheckboxCategory;
