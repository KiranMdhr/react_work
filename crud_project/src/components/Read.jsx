import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://660f8b4c356b87a55c5196e8.mockapi.io/crud-project")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://660f8b4c356b87a55c5196e8.mockapi.io/crud-project/${id}`)
      .then(() => {
        getData();
      });
  }
  function setLocalStorage(id, name, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData, index) => (
            <tr key={index}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn-success"
                    onClick={() =>
                      setLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                      )
                    }>
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <Link>
                  <button
                    className="btn-danger"
                    onClick={() => handleDelete(eachData.id)}>
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
