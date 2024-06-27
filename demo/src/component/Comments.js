import React, { useState } from "react";
import { timeAgo } from "../utils/constants";

const Comments = ({ info }) => {
  const { category, createdDate, id, personId, remark, title } = info;

  const [isUpdate, setIsUpdate] = useState(-1);

  // console.log(category, createdDate, id, personId, remark, title)
  const handleDelete = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Development");

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.people.halimi.io/api/Persons/" + personId + "/remarks/" + id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
  };

  const handleUpdate = () => {
    setIsUpdate(id);
    console.log(id);
    console.log(isUpdate);
  };

  return (
    <div className="bg-teal-400 p-4 rounded-lg shadow-md my-4 w-full">
      <div className="flex justify-between items-center text-sm mb-2 w-full">
        <span>{timeAgo(createdDate)}</span>
        <span className="font-bold">{title}</span>
        <span>{category}</span>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-inner w-full">
        {isUpdate === id ? (
          <Edit info={info} />
        ) : (
          <p className="text-sm ">{remark}</p>
        )}
      </div>
      {isUpdate !== id && (
        <div className="flex justify-between mt-4 w-full">
          <button
            onClick={handleUpdate}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export const Edit = ({ info }) => {
  const [mesage, setMessage] = useState();
  const { remark, personId, id, category, title } = info;

  // setMessage(remark)

  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Development");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      remark: mesage,
      category: category,
      title: title,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://api.people.halimi.io/api/Persons/" + personId + "/remarks/" + id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => window.location.reload())
      // .then(()=>console.log(mesage))
      .catch((error) => console.error(error));
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="remark"
        >
          Remark
        </label>
        <textarea
          id="remark"
          name="remark"
          value={mesage || remark}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Comments;
