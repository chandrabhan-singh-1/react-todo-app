import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../main";
import axios from "axios";
import { toast } from "react-hot-toast";

import logo from "../assets/todo_icon_3.png";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  // console.log(data);

  const logoutHandler = async (e) => {
    try {
      setLoading(true);
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success("Logged out Successfully!");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="header">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
            <h2>To-do App</h2>
          </Link>
        </div>
        <article>
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          {isAuthenticated ? (
            <button disabled={loading} onClick={logoutHandler} className="btn">
              Logout
            </button>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </article>
      </nav>
    </>
  );
};

export default Header;
