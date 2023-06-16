import { AiOutlineCloseCircle } from "react-icons/ai";

const ForgotPassword = () => {
  const showDialog = () => {
    const dialog = document.getElementById("forgotpassDialog");

    dialog.showModal();
  };
  const closeDialog = () => {
    const dialog = document.getElementById("forgotpassDialog");

    dialog.close();
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button onClick={showDialog} className="underline">
        Reset
      </button>
      <dialog id="forgotpassDialog" className="border rounded-3xl relative">
        <form className="flex flex-col p-6">
          <h1 className="text-xl px-4 pb-6 font-bold">Reset Password</h1>

          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* Error text */}
          <p className="mb-2 text-red-500" id="errortext"></p>
          <div>
            <button
              onSubmit={handleForm}
              className="bg-emerald-500 text-white font-semibold py-2 px-4 rounded-md mr-2 transition delay-100 hover:bg-emerald-400"
            >
              Reset
            </button>
          </div>
        </form>

        <button onClick={closeDialog}>
          <AiOutlineCloseCircle className="text-gray-400 text-3xl absolute top-3 right-3" />
        </button>
      </dialog>
    </>
  );
};

export default ForgotPassword;
