import React, { createContext, useEffect, useState } from "react";
import FunctionalComponent from "./FunctionalComponent";

import PersonCard from "./PersonCard";
import { Link, Outlet } from "react-router-dom";
// import { PERSON_API } from "../utils/constants";


export const CommentContext = createContext() ;


const Body = () => {

  const [searchComment,setSearchComment] = useState("")

  const [allperson, setAllPerson] = useState([]);
  const [filterperson, setFilterPerson] = useState([]);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Development");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const getData = async () => {
    const data = await fetch(
      "https://api.people.halimi.io/api/Persons",
      requestOptions
    );
    const json = await data.json();

    // console.log(json);
    setAllPerson(json);

    setFilterPerson(json);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleFilterData = (data) => {
    setFilterPerson(data);

    // console.log(filterperson);
  };

  return (!filterperson) ? null : (
    <>
      <div className="flex justify-center items-center ">
      <CommentContext.Provider value={{searchComment,setSearchComment}} >
      <FunctionalComponent
          allperson={allperson}
          handleFilterData={handleFilterData}
        />
       </CommentContext.Provider>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center ">
          <div className="flex flex-col ">
            {filterperson.map((item) => (
              <Link key={item.id}  to={"/person/" + item.id}>
                <PersonCard key={item.id} info={item} />
              </Link>
            ))}
          </div>
        </div>
       <CommentContext.Provider value={{searchComment,setSearchComment}} >
       <Outlet />
       </CommentContext.Provider>
      </div>
    </>
  );
};

export default Body;
