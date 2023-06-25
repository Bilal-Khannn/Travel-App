import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginReset } from "../features/login/authSlice";
import { Link } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const checkLogin = () => {
      const login = document.getElementById("login");
      const signup = document.getElementById("signup");
      const logoutbutton = document.getElementById("logoutButton");

      if (user) {
        login.classList.add("hidden");
        signup.classList.add("hidden");
        logoutbutton.classList.remove("hidden");
      } else {
        logoutbutton.classList.add("hidden");
        login.classList.remove("hidden");
        signup.classList.remove("hidden");
      }
    };

    checkLogin();
  }, [user]);

  const handleSignUp = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    dispatch(loginReset());
    localStorage.removeItem("user");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-around p-6 bg-gray-200">
      {/* company logo  */}
      <div className="flex items-center">
        <Link className="text-2xl font-bold" to="/">
          WanderWise
        </Link>
      </div>

      {/* Register/login here   */}
      <div className="flex items-center">
        <button onClick={handleLogIn} id="login">
          Log in
        </button>
        <button
          onClick={handleSignUp}
          id="signup"
          className="ml-5 bg-blue-500 px-5 py-2 text-white rounded-xl"
        >
          Sign up
        </button>
        <button onClick={handleLogout} id="logoutButton">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
