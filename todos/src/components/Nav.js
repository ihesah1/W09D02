import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  {LogOut} from '../reducer/action'

const Nav = () => {
  const dispatch = useDispatch()

  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const todos = () => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    } else {
      alert("you have to login first");
    }
  };
  const adminPage = () => {
    if (localStorage.getItem("token")) {
      navigate("/admin");
    } else {
      alert("you have to login first");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("role") == "admin") {
      setRole("admin");
    }
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <div className='Nav'>
      <h1>Home</h1>
      {!loggedIn ? (
        <>
          <button>
            <Link to="login" style={{ color: "black", textDecoration: "none" }}>
              Login
            </Link>
          </button>
          <button>
            <Link
              to="signUp"
              style={{ color: "black", textDecoration: "none" }}
            >
              Sign up
            </Link>
          </button>
          <button onClick={todos}>Todos</button>
        </>
      ) : (
        <>
          {role == "admin" ? (
            <>
              <button onClick={adminPage}>Admin Page</button>
            </>
          ) : (
            <>
              <button onClick={todos}>Todos</button>
            </>
          )}

          <button
            onClick={() => {
              dispatch(LogOut())
              setLoggedIn(false);
            }}
          >
            Log out
          </button>
        </>
      )}
    </div>
  );
};

export default Nav;