import React, { useState, useEffect, ChangeEventHandler } from "react";
import { supabaseClient } from "@/utils/supabaseClient";
import "./index.scss";
import { CreatorDetail } from "@/types";
import { Suspense } from "react";
import Loading from "@/src/pages/loading";
import dynamic from "next/dynamic";
import { SearchFilters } from "../SearchFilters";
import { useCreatorSearch } from "@/src/hooks/useCreatorSearch";
const CreatorCard = dynamic(() => import("../CreatorCard"));
const SearchInput = dynamic(() => import("../SearchInput"));


function CreatorDirectory() {
  const {
    handleChange,
    searchTerm,
    handleSubmit,
    handleFilterChange,
    transcript
  } = useCreatorSearch();

  return (
    <div className="creatorDirectoryPage">
      <div className="creatorDirectoryPageHeaderSearchContainer">
        <SearchInput
          onChange={handleChange}
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
        />
      </div>
      <div>Transcript111:{transcript}</div>
    </div>
  );
}

export default CreatorDirectory;
