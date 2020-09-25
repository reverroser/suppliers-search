import React, { useState } from "react";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";

import {
  DropdownContainer,
  DropdownSelect,
  DropdownOptions,
  DropdownOption
} from "./Dropdown.styles";

const Dropdown = ({ label, options, onOptionSelected }) => {
  const [open, setOpen] = useState(false);

  const [optionSelected, setOptionSelected] = useState();

  const closeDropdown = () => setOpen(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOptionClick = option => () => {
    let newOption = option;

    /**
     * If the user selects the same option twice,
     * this works as a toggle so users have a way
     * to undo the selection.
     */
    if (isOptionSelected(option)) {
      newOption = null;
    }

    onOptionSelected(newOption);

    setOptionSelected(newOption);

    closeDropdown();
  };

  const isOptionSelected = option =>
    optionSelected && option.id === optionSelected.id;

  return (
    <OutsideClickHandler onOutsideClick={closeDropdown}>
      <DropdownContainer>
        <DropdownSelect
          isOpen={open}
          onClick={handleClick}
          data-testid={"dropdownSelect"}
        >
          {label}
          <i className="las la-angle-down"></i>
        </DropdownSelect>
        {open ? (
          <DropdownOptions data-testid={"dropdownOptions"}>
            {options.map((option, i) => (
              <DropdownOption
                key={i}
                isActive={isOptionSelected(option)}
                onClick={handleOptionClick(option)}
              >
                {option.icon ? <i className={`la la-${option.icon}`} /> : null}
                {option.name}
              </DropdownOption>
            ))}
          </DropdownOptions>
        ) : null}
      </DropdownContainer>
    </OutsideClickHandler>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onOptionSelected: PropTypes.func
};

Dropdown.defaultProps = {
  label: "Select",
  options: [],
  onOptionSelected: () => {}
};

export default Dropdown;
