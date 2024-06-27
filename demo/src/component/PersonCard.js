import React from "react";

const PersonCard = ({info}) => {
    const {firstName,lastName,email,dasId,phone,jobTitle,country,city} = info

  return (
    <div className="my-4 flex justify-around items-center w-min-[519px] h-[93px]  bg-green-400 rounded-lg">
      <img
        className="h-14 w-14 rounded-full mx-3"
        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
        alt="logo"
      />
      <ul className="mx-6">
        <li>{firstName+" "+lastName}</li>
        <li>{jobTitle}</li>
        <li>{city+","+country}</li>
      </ul>
      <span className="bg-black w-1 h-full  mx-4"></span>
      <ul className="mx-6">
        <li>{email}</li>
        <li>{phone}</li>
        <li>{dasId}</li>
      </ul>
    </div>
  );
};

export default PersonCard;
