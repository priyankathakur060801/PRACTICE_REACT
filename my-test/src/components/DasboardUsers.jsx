import React, { useEffect, useState } from "react";
import API from "../api/axios";

const DasboardUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async() => {
      try {
         const res = await API.get('/users/user');
        console.log(res.data.users);
         setUsers(res.data.users);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  
  },[]);


  return (
    <div>
      <div class="container mt-5">
        <h2 class="mb-4 text-center">All Users</h2>

        <table class="table table-bordered table-hover shadow">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr>
                <td>{key+1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DasboardUsers;
