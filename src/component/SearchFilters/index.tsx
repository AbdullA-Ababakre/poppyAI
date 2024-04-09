import React from "react";
import DropdownComp from "../DropdownComp";
import { countryOptions, genderOptions, languageOptions } from "@/constants";
import "./index.scss";

export type FiltersT = {
  selectedGender: string;
  selectedLanguage: string;
  selectedCountry: string;
};

type Props = {
  filters: FiltersT;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SearchFilters = ({ filters, onChange }: Props) => {
  return (
    <div className="directory-search-filters--container">
      <DropdownComp
        name="selectedLanguage"
        value={filters.selectedLanguage}
        onChange={onChange}
        options={languageOptions}
      />
      <DropdownComp
        name="selectedCountry"
        value={filters.selectedCountry}
        onChange={onChange}
        options={countryOptions}
      />
      <DropdownComp
        name="selectedGender"
        value={filters.selectedGender}
        onChange={onChange}
        options={genderOptions}
      />
    </div>
  );
};
