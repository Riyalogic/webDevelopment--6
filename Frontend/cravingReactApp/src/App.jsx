import logo from "./assets/cravinglogo.png"

const App = () => {
  return (
    <>
      {/* <div className=" bg-green-200 text-amber-800 p-3">App</div>
      <button className="bg-blue-400 p-3 border border-blue-800">submit</button> */}

      <div className=" p-3 bg-orange-600 text-white flex gap-5 ">
        <img src={logo} alt="bg image" />
        <div>
          <button className=" hover:bg-orange-700 text-white justify-end items-end rounded">Login</button>
          <button className=" hover:bg-orange-700 text-white justify-end items-end rounded">Register</button>
        </div>

      </div>
    </>
  );
};

export default App;
