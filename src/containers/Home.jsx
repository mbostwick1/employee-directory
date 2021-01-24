import React, { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import Employee from "../components/Employee/Employee";
import API from "../utils/API";
import "./Home.css";

const Home = () => {
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState("");

  //   api call to populate init load
  useEffect(() => {
    API.getEmployee()
      .then((res) => {
        setEmployee(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // filter search results
  const handleInputChange = (event) => {
    let value = event.target.value;
    setSearch(value);
  };

  //   sort results
  const handleSortEmployee = () => {
    const sortEmployee = [...employee];
    const sortedEmployee = sortEmployee.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return employee.direction === "ascending" ? 1 : -1;
      } else if (a.name.last > b.name.last) {
        return employee.direction === "descending" ? -1 : 1;
      }
      return 0;
    });
    setEmployee(sortedEmployee);
  };

  return (
    <>
      {/* HEADER */}
      <section className="hero is-danger has-text-centered" id="header">
        <div className="container">
          <h1 className="title" id="headline">Employee Directory</h1>
          <h2 className="subtitle">
            Use the search field below to filter through employees and click
            name to sort alphabetically
          </h2>
          {/* SEARCH */}
          <div className="container" id="search">
            <Search onChange={handleInputChange} value={search} />
          </div>
        </div>
      </section>

      {/* EMPLOYEE TABLE */}
      <section className="hero has-text-centered" id="employee">
        <div className="table-container">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Photo</th>
                <th onClick={handleSortEmployee} id="nameSort">
                  Name
                </th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employee
                .filter(
                  (employee) =>
                    employee.name.first
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    employee.name.last
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    employee.phone.includes(search) ||
                    employee.email.toLowerCase().includes(search.toLowerCase())
                )
                .map((employee) => (
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
