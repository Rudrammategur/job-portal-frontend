import { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "seeker" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input type="text" placeholder="Name" className="block w-full p-2 mb-2 border" 
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" className="block w-full p-2 mb-2 border" 
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="block w-full p-2 mb-2 border" 
        onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select className="block w-full p-2 mb-2 border"
        onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="seeker">Job Seeker</option>
        <option value="recruiter">Recruiter</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
}
