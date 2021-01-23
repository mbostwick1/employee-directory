import React, { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import Employee from "../components/Employee/Employee";
import API from "../utils/API";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    API.getEmployee()
      .then((res) => {
        setEmployee(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* HEADER */}
      <section className="hero is-danger has-text-centered">
        <div className="container">
          <h1 className="title">Employee Directory</h1>
          <h2 className="subtitle">
            Use the search below to filter through employees
          </h2>
        </div>
      </section>

      {/* SEARCH */}
      <section className="hero has-text-centered">
        <div className="container">
          <Search />
        </div>
      </section>

      {/* EMPLOYEE TABLE */}
      <section className="hero has-text-centered">
        <div className="table-container">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((employee) => (
                <Employee
                  name={employee.name}
                  phone={employee.phone}
                  email={employee.email}
                  picture={employee.picture}
                  key={employee.login.uuid}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Home;
