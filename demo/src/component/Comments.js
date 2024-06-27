import React from "react";
import { timeAgo } from "../utils/constants";

const Comments = ({ info }) => {
  const { category, createdDate, id, personId, remark, title } = info;

  // console.log(category, createdDate, id, personId, remark, title)


  return <div className=" px-6 m-4 w-full h-full bg-green-500  text-center rounded-lg">
<h1>{personId}</h1>
<h1>{remark}</h1>
<h1>{timeAgo(createdDate)}</h1>
<h1>{id}</h1>
<h1>{title}</h1>
    
  </div>;
};

export default Comments;
