const Features = (props) => {
  return (
    <div className="flex flex-col w-1/3">
      <img src={props.image} className="w-2/3" style={{ margin: "0 auto" }} />
      <h1 className="text-center font-bold mt-5 text-xl">{props.heading}</h1>
      <h1 className="mx-auto mt-5 w-3/4">{props.desc}</h1>
    </div>
  );
};

export default Features;
