import * as React from "react";
import { components } from "react-select";

//assets
import { ReactComponent as DropdownIcon } from "../../icons/chevron-down.svg";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIcon />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
