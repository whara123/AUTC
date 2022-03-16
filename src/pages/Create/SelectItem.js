import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function SelectItem({ name, btnType, onClick }) {
  return (
    <SelectList>
      <SelectItemButton type={btnType} value={name} onClick={onClick}>
        {name}
      </SelectItemButton>
    </SelectList>
  );
}

const SelectList = styled.li`
  padding: 5px;
`;

const SelectItemButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: none;
  &:hover {
    background: #c6edc8;
  }
`;

SelectItem.propTypes = {
  name: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
