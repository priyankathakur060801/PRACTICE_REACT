import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const navigate = useNavigate();

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users", formData);
      alert(res.data.message);
      console.log(res);
      navigate("/dashboard");
    } catch (err) {
      console.log("hello");
      alert("Errorhello: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div>
      <form method="post" class="w-50 mx-auto" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="username" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handlechange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handlechange}
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default User;
