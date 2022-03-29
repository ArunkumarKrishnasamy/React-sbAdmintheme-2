import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Users() {
  let userData = useContext(UserContext);

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User Information</h1>
        <Link
          to={"/users/create-user"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create New
          User
        </Link>
      </div>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables.
      </p>
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          DataTables Example
        </h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.users.map((user,index) => {
                return (
                  <tr>
                    <td>{user.name} </td>
                    <td>{user.position}</td>
                    <td>{user.office}</td>
                    <td>{user.age}</td>
                    <td>{user.startdate}</td>
                    <td>{user.salary}</td>
                    <td>
                      {" "}
                      <Link to={`/users/view-user/${index}`}>
                        {" "}
                        <button className="btn btn-primary mx-2"> View</button>
                      </Link>
                      <Link to={`/users/edit-user/${index}`}>
                        {" "}
                        <button className="btn btn-warning me-2"> Edit</button>
                      </Link>
                      <button className="btn btn-danger me-2"> Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
