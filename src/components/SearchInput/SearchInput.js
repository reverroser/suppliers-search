import React, { useState } from "react";
import PropTypes from "prop-types";

import { SearchInputContainer } from "./SearchInput.styles";

const SearchInput = ({ onSearchChange }) => {
  const [hasFocus, setHasFocus] = useState(false);

  const handleBlur = () => {
    setHasFocus(false);
  };

  const handleChange = e => {
    const { value } = e.target;
    onSearchChange(value, e);
  };

  const handleFocus = () => {
    setHasFocus(true);
  };

  return (
    <SearchInputContainer hasFocus={hasFocus} data-testid="searchInput">
      <i className="las la-search" />
      <input
        placeholder="Search"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </SearchInputContainer>
  );
};

SearchInput.propTypes = {
  onSearchChange: PropTypes.func
};

SearchInput.defaultProps = {
  onSearchChange: () => {}
};

export default SearchInput;
