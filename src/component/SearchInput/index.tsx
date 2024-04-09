import React from "react";
import "./index.scss";
import { ChangeHandler } from "@/types";
import CustomButton from "@/src/component/Button";

type SearchInputType = {
  placeholder?: string;
  onChange: ChangeHandler;
  searchTerm: string;
  handleSubmit: (event: any) => Promise<void>;
};

const SearchInput = ({
  placeholder = "Input youtube video url ... ",
  onChange,
  handleSubmit,
  searchTerm: value,
}: SearchInputType) => {
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className="search-input-container">
      <input
        value={value}
        type="text"
        className="search-input"
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={handleKeyPress}
      />
      <CustomButton text="Get the Email content" style={{ width: 250, marginLeft: 5 }} onClick={handleSubmit} />
    </div>
  );
};

export default SearchInput;
