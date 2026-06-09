import logo from "./assets/cravinglogo.png"

const App = () => {
  return (
    <>
      {/* <div className=" bg-green-200 text-amber-800 p-3">App</div>
      <button className="bg-blue-400 p-3 border border-blue-800">submit</button> */}

      <div className=" p-3 bg-orange-600 flex text-white justify-between items-end">
        <div className=" w-20">
        <img src={logo} alt="bg image" />
        </div>
        <div className=" bg-[url('/bgImage.jpg')] bg-cover h-screen w-full justify-center items-center">

        </div>
        <div>
          <button className=" hover:focus-within:outline-2 focus-within:outline-amber-50  text-white  gap-2 fs-5 px-4 p-2 rounded ">Login</button>
          <button className=" bg-amber-50 hover:bg-orange-500  text-orange-500  rounded fs-5 px-4 p-2">Register</button>
        </div>

      </div>
    </>
  );
};

export default App;
