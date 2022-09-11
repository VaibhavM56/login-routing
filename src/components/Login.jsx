import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.email === "" || loginData.password === "") {
      alert("enter the data");
    } else {
      console.log(loginData);
    }
  };

  const redirect = () => {
    navigate("/signup");
  };

  return (
    <div className="container border mt-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={loginData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={loginData.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/* 1.method */}
        {/* <h4 style={{ cursor: "pointer" }} onClick={redirect}>
          Don't have an account? SignUp here!
        </h4> */}
        {/* 2.method */}
        <Link to="/signup">
          <h4 style={{ cursor: "pointer" }}>
            Don't have an account? SignUp here!
          </h4>
        </Link>
      </form>
    </div>
  );
};

export default Login;
