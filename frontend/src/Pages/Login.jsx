import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="border p-8 rounded-xl bg-white shadow-xl w-1/2">
        <h1 className="text-3xl font-bold mb-6">Log in</h1>
        <form id="login-form" className="flex flex-col">
          <label htmlFor="name" className="text-lg mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Your username"
            className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onSubmit={handleLogin}
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
            onClick={handleRegister}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
