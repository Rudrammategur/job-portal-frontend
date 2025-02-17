import { useState, useContext } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await loginUser(form);
    login(data);
    navigate("/jobs");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input type="email" placeholder="Email" className="block w-full p-2 mb-2 border" 
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="block w-full p-2 mb-2 border" 
        onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
}
