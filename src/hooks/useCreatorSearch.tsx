import { useState, useEffect, ChangeEventHandler } from "react";
import { CreatorDetail } from "@/types"; // Assuming this import is correct
import { FiltersT } from "../component/SearchFilters";
import { fetchCreators, fetchSemanticSearch, getScript } from "@/utils";
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

  //Fetch creator effect
  useEffect(() => {
    fetchCreatorsWrapper();
  }, []);
  //filter effect
  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleTermChange: ChangeEventHandler = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const fetchCreatorsWrapper = async () => {
    const data = await fetchCreators();
    setAllCreators(data); // Store all creators
    applyFilters(data); // Apply filters right after fetching
  };

  const applyFilters = (creators: CreatorDetail[] = allCreators) => {
    let filtered = creators;
    const filterNotSelected = "default";
    const isFilterGender =
      filters.selectedGender &&
      lowerCase(filters.selectedGender) !== filterNotSelected;
    const isFilterLanguage =
      filters.selectedLanguage &&
      lowerCase(filters.selectedLanguage) !== filterNotSelected;
    const isFilterCountry =
      filters.selectedCountry &&
      lowerCase(filters.selectedCountry) !== filterNotSelected;

    // Apply each filter conditionally
    if (isFilterGender) {
      filtered = filtered.filter(
        (creator) =>
          lowerCase(creator.gender) === lowerCase(filters.selectedGender)
      );
    }
    if (isFilterLanguage) {
      filtered = filtered.filter((creator) =>
        includes(
          lowerCase(creator.language),
          lowerCase(filters.selectedLanguage)
        )
      );
    }
    if (isFilterCountry) {
      filtered = filtered.filter((creator) =>
        includes(
          lowerCase(creator.location),
          lowerCase(filters.selectedCountry)
        )
      );
    }

    setSearchResults(filtered);
  };

  const handleSubmitSearch = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    console.log("searchTerm111", searchTerm);
    if (searchTerm.trim() === "") {
      // setAllCreators(await fetchCreators());
      // applyFilters();
      window.alert("Please enter url");
    } else {
      // const data = await fetchSemanticSearch(searchTerm);
      // setAllCreators(data); // Update allCreators with the search result
      // applyFilters(data); // Apply filters to the search result
      setTranscript(await getScript(searchTerm));
    }
  };

  return {
    searchTerm,
    searchResults,
    filters,
    transcript,
    handleChange: handleTermChange,
    handleFilterChange,
    handleSubmit: handleSubmitSearch,
  };
};
