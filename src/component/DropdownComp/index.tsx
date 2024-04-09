import { FilterOption } from "@/types";
import React, { ChangeEventHandler } from "react";
import "./index.scss";
import { toString } from "lodash";

type DropdownCompProps = {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: FilterOption[];
};

const DropdownComp: React.FC<DropdownCompProps> = ({
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <>
      <select
        className="dropdownComp"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={"dropdown-filter" + option.value}
            value={option.value}
            id={toString(option.id)}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownComp;
