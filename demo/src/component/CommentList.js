import React, { useContext } from "react";
import Comments from "./Comments";
import { CommentContext } from "./Body";
import { filterpersonComment } from "../utils/fiterPerson";
import NewComment from "./NewComment";

const CommentList = ({ info }) => {
  const { searchComment, setSearchComment } = useContext(CommentContext);

  const data = filterpersonComment(searchComment,info)

  const personId = data?.[0].personId;
  return (data == null ) ? <h1>No Comment Found</h1> : (
    <div className="flex flex-col w-full">
    <NewComment personId={personId} />
    <div className="h-auto  flex items-center justify-center flex-col-reverse">
      {data.map((personRemarks) => (
        <Comments key={personRemarks.id} info={personRemarks} />
      ))}
    </div>
    </div>
  );
};

export default CommentList;
