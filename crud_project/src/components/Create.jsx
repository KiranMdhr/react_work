import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    await axios
      .post(" https://660f8b4c356b87a55c5196e8.mockapi.io/crud-project", {
        name: name,
        email: email,
        header,
      })
      // navigate("/read");
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
