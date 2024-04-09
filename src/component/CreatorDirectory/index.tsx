import React from "react";
import "./index.scss";
import Loading from "@/src/pages/loading";
import dynamic from "next/dynamic";
import { useCreatorSearch } from "@/src/hooks/useCreatorSearch";
import { divide } from "lodash";
const SearchInput = dynamic(() => import("../SearchInput"));


function CreatorDirectory() {
  const {
    handleChange,
    searchTerm,
    handleSubmit,
    transcript
  } = useCreatorSearch();
  console.log("transcript11",transcript);

  return (
    <div className="creatorDirectoryPage">
      <div className="creatorDirectoryPageHeaderSearchContainer">
        <SearchInput
          onChange={handleChange}
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
        />
      </div>
      {!transcript && <Loading></Loading>}
      {transcript && <div>{transcript}</div>}
    </div>
  );
}

export default CreatorDirectory;
