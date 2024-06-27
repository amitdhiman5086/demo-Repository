import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { filterpersonDataByID } from "../utils/fiterPerson";
// import { HardCodedData } from "../utils/constants";

// import Comments from "./Comments";
import CommentList from "./CommentList";
import { LoadingSpinner } from "../utils/Loading";

const CommentAndNotes = () => {
  const [person, setPerson] = useState([]);
  const { dasId } = useParams();

  // console.log(dasId);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Development");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const getData = async () => {
    try {
      const data = await fetch(
        "https://api.people.halimi.io/api/Persons/" + dasId,
        requestOptions
      );
      const json = await data.json();
      // console.log(json);
      setPerson(json);
      console.log(person.personRemarks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [dasId]);

  return person?.personRemarks?.length == 0 || person.length == 0 ? (
    <LoadingSpinner />
  ) : (
    <div>
      <CommentList key={person.id} info={person.personRemarks} />
    </div>
  );
};

export default CommentAndNotes;
