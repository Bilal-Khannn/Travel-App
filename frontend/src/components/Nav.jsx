import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-around p-6 bg-blue-300">
      {/* company logo  */}
      <div>
        <h1>Logo</h1>
      </div>
      {/* Register/login here   */}
      <div className="flex">
        <button onClick={handleSignUp}>Sign up</button>
        <button onClick={handleLogIn}>Log in</button>
      </div>
    </div>
  );
};

export default Nav;
