import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginReset,
} from "../features/login/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateRegister = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(loginReset());

    const err = document.getElementById("error");

    if (!email || !password) {
      err.textContent = "Please fill all the fields!";
      return;
    } else {
      err.textContent = "";
    }

    const url = "http://localhost:5000/api/users/login";

    //make login request to backend
    try {
      dispatch(loginRequest());
      const res = await axios.post(url, {
        email: email,
        password: password,
      });
      err.textContent = "";
      dispatch(loginSuccess(res.data));
      localStorage.setItem("user", res.data);
      console.log(res.data);
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
      err.textContent = error.response.data.message;
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="border p-8 rounded-xl bg-white shadow-xl w-1/2">
        <h1 className="text-3xl font-bold mb-6">Log in</h1>
        <form id="login-form" className="flex flex-col" onSubmit={handleLogin}>
          <label htmlFor="email" className="text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <label htmlFor="error" id="error" className="text-red-500"></label>

          <button
            type="submit"
            className="px-4 py-2 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition delay-75"
          >
            Log in
          </button>
        </form>

        <div className="text-blue-500 font-semibold mt-4 flex justify-center">
          Forgot Password?
        </div>

        <div className="border border-gray-200 mt-4"></div>

        <div className="flex flex-col mt-4 justify-center items-center">
          <p>Don't have an account?</p>
          <button
            className="text-blue-500 font-semibold mt-2"
            onClick={navigateRegister}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
