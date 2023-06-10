import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "../main";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";

export const ProfileDetails = ({ user }) => {
  return (
    <div className="profileDetails">
      <p>
        <b>Name - </b>
        <h1>{user?.name}</h1>
      </p>

      <b>Email - </b>
      <p className="email">{user?.email}</p>
      <b>Description-</b>
      <p className="lorem">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        laudantium iusto, dolorum sit facere est laboriosam, a incidunt sequi ad
        ex neque eligendi mollitia necessitatibus, voluptatem fugiat? Odit,
        incidunt obcaecati.
      </p>
    </div>
  );
};

const profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return loading ? <Loader /> : <ProfileDetails user={user} />;
};

export default profile;
