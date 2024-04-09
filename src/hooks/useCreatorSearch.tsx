import { useState, useEffect, ChangeEventHandler } from "react";
import { CreatorDetail } from "@/types"; // Assuming this import is correct
import { FiltersT } from "../component/SearchFilters";
import { getScript } from "@/utils";
import { includes, lowerCase } from "lodash";

export const useCreatorSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCreators, setAllCreators] = useState<CreatorDetail[]>([]);
  const [filteredCreators, setFilteredCreators] = useState<CreatorDetail[]>([]);
  const [searchResults, setSearchResults] = useState<CreatorDetail[]>([]);
  const [filters, setFilters] = useState<FiltersT>({
    selectedGender: "",
    selectedLanguage: "",
    selectedCountry: "",
  });
  const [transcript, setTranscript] = useState("");


  const handleTermChange: ChangeEventHandler = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmitSearch = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      window.alert("Please enter url");
    } else {
      const res = await getScript(searchTerm);
      setTranscript(res.text);
    }
  };

  return {
    searchTerm,
    searchResults,
    filters,
    transcript,
    handleChange: handleTermChange,
    handleSubmit: handleSubmitSearch,
  };
};
