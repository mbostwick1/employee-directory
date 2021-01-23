import React from "react";

const Employee = (props) => {
  return (
    <>
      <tr>
        <th>
          <img alt="Employee Photo" src={props.picture.thumbnail} />
        </th>
        <td>
          {props.name.first} {props.name.last}
        </td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
      </tr>
    </>
  );
};

export default Employee;
