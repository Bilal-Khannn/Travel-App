const Landing = () => {
  return (
    <div className="bg-gray-200 h-screen">
      {/* Home page  */}
      <div className="flex">
        {/* left side  */}
        <div className="w-1/2 h-scree flex flex-col justify-center items-center">
          <h1 className="font-bold w-1/2" style={{ fontSize: "55px" }}>
            The best way to showcase your project.
          </h1>
          <h1 className="w-1/2">
            Here you can put a short description of your project
          </h1>
        </div>
        {/* right side  */}
        <div className="w-1/2 h-screen flex justify-center items-center">
          <h1 className="font-bold w-1/2" style={{ fontSize: "55px" }}>
            The best way to showcase your project.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
