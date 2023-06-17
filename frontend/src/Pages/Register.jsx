import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  registerReset,
} from "../features/register/registerSlice";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //Register new user
  const handleRegister = async (e) => {
    e.preventDefault();

    //reset the state
    dispatch(registerReset());

    // throw error if some field is left empty
    if (!name || !email || !pass) {
      const error = document.getElementById("error");
      error.textContent = "Please fill all the fields!";
      return;
    } else {
      const error = document.getElementById("error");
      error.textContent = "";
    }

    //dispatch request action
    dispatch(registerRequest());

    //url of api for user registration
    const url = "http://localhost:5000/api/users/register";

    try {
      //post api request for user registration
      const res = await axios.post(url, {
        name: name,
        email: email,
        password: pass,
      });
      console.log(res.data);
      dispatch(registerSuccess(res.data));
    } catch (error) {
      console.log(error.response.data.message);
      dispatch(registerFailure(error.response.data.message));
    }
  };

  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="border p-8 rounded-xl bg-white shadow-xl w-1/2">
        <h1 className="text-3xl font-bold mb-6">Sign up</h1>
        <form
          id="login-form"
          className="flex flex-col"
          onSubmit={handleRegister}
        >
          <label htmlFor="name" className="text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="email" className="text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPass(e.target.value)}
              placeholder="Your password"
              className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <label htmlFor="error" id="error" className="text-red-500"></label>

          <button
            type="submit"
            className="px-4 py-2 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition delay-75"
          >
            Sign up
          </button>
        </form>

        <div className="flex flex-col mt-4 justify-center items-center">
          <p>Already have an account?</p>
          <button
            className="text-blue-500 font-semibold mt-2"
            onClick={navigateLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
