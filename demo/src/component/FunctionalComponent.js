import React, { useContext, useEffect, useState } from "react";

import { filterpersonData } from "../utils/fiterPerson";
import { CommentContext } from "./Body";
import { Link } from "react-router-dom";

const FunctionalComponent = (probs) => {
  const { searchComment, setSearchComment } = useContext(CommentContext);
  const [searchName, setSearchName] = useState("");

  // const [search, setSearch] = useState("");

  const { allperson, handleFilterData } = probs;

  useEffect(() => {
    const data = filterpersonData(searchName, allperson);
    handleFilterData(data);
  }, [searchName]);

  return (
    <div className="my-10 flex justify-between ">
      <input
        className="mx-2 border border-gray-500  rounded-lg"
        type="text"
        placeholder="Search Name"
        value={searchName}
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
      />
      <input
        className="mx-2 border border-gray-500 rounded-lg "
        type="text"
        placeholder="Search Comment"
        value={searchComment || ""}
        onChange={(e) => {
          setSearchComment(e.target.value);
        }}
      />
      <input
        className="mx-2 border border-gray-500 rounded-lg "
        type="text"
        placeholder="Filter"
      />
      <Link to= "/addperson" > <button className="mx-2 border border-gray-500  rounded-lg">
        Add Person
      </button></Link>
    </div>
  );
};

export default FunctionalComponent;
