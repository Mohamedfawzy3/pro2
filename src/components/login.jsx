import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const getInfo = (e) => {
    const { name, value } = e.target;
    setUser((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user)
  };
  let data;
  const validation = async () => {
    try {
      const res = await axios.get("http://localhost:2000/all");
      setUsers(res.data);
      data = res.data;
      const existingUser = data.find((u) => u.name === user.name);
      if (existingUser) {
        
      } else {
        
        alert("You don't have an account, Sign up first >>");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
  };

  return (
    <div>
      <h3 className="text-center mt-5">Login page</h3>
      <form
        className="gy-2 gx-3 align-items-center col-9 col-md-8 col-lg-7 m-auto"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={user.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email" 
            onChange={getInfo} 
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={user.password}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password" 
            onChange={getInfo} 
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p>
          <Link className="link-opacity-50-hover" to="/signup">
            Don't have an account?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;