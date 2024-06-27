// import React from 'react'

// const AddPerson = () => {
//   return (
//     <div className='w-1/3 h-fit bg-green-700 rounded-lg m-4'>

//     </div>
//   )
// }

// export default AddPerson

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../utils/Loading";

const AddPerson = () => {
  const [isLoading, setIsLoading] = useState(false);
  const nevigate = useNavigate();
  const nevigate2 = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dasId: "",
    phone: "",
    jobTitle: "",
    country: "",
    city: "",
    gender: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };
  const handleClose = (e) => {
    nevigate2("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    //Form Validation From NetFlix

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Development");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      isMale: JSON.parse(formData.gender),
      firstName: formData.firstname,
      lastName: formData.lastname,
      email: formData.email,
      dasId: formData.dasId,
      phone: formData.phone,
      jobTitle: formData.jobTitle,
      country: formData.country,
      city: formData.city,
      isActive: true,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://api.people.halimi.io/api/Persons?Authorization=Development",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => setIsLoading(false))
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="bg-teal-500 p-8 rounded-lg w-96 m-4 h-fit">
      <h2 className="text-white text-center mb-6">
        Add New Engineer to Digital Experience
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {[
          "firstname",
          "lastname",
          "email",
          "dasId",
          "phone",
          "jobTitle",
          "country",
          "city",
        ].map((field) => (
          <input
            required
            key={field}
            className="mb-4 p-2 rounded-lg"
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
          />
        ))}

        <div className="flex items-center mb-4">
          <input
            type="radio"
            name="gender"
            value="true"
            checked={formData.gender === "true"}
            onChange={handleGenderChange}
          />
          <label className="text-white mx-2">Male</label>
          <input
            type="radio"
            name="gender"
            value="false"
            checked={formData.gender === "false"}
            onChange={handleGenderChange}
          />
          <label className="text-white mx-2">Female</label>
        </div>

        <button
          onSubmit={handleSubmit}
          className="p-2 bg-gray-400 rounded-lg text-white"
          type="submit"
        >
          Submit
        </button>
        <button
          onClick={handleClose}
          className="p-2 my-2 bg-gray-400 rounded-lg text-white"
          type="submit"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddPerson;
