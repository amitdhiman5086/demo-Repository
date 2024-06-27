import React, { useContext } from "react";
import Comments from "./Comments";
import { CommentContext } from "./Body";
import { filterpersonComment } from "../utils/fiterPerson";

const CommentList = ({ info }) => {
  const { searchComment, setSearchComment } = useContext(CommentContext);

  const data = filterpersonComment(searchComment,info)

  // console.log(searchComment);
  return (data == null ) ? <h1>No Comment Found</h1> : (
    <div>
      {data.map((personRemarks) => (
        <Comments key={personRemarks.id} info={personRemarks} />
      ))}
    </div>
  );
};

export default CommentList;
