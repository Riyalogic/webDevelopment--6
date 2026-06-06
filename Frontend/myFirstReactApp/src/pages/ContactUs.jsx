import { useState } from "react";
function ContactUs() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
      <div className="container d-flex justify-content-center">
      <div className=" border p-3 w-50 mt-5 bg-light shadow rounded">
        <h1 className=" text-center">Contact Us</h1>
        <br />
        <form >
          <input type="text" name="userName" placeholder="Enter Your Full Name" className=" form-control" value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <br />
           <input type="text" name="email" placeholder="Enter Your Email" className=" form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
           <br />
           <input type="number" name="phoneNumber" placeholder="Enter Your Phone Number" className=" form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
           <br />
           <button></button>
        </form>

      </div>
      </div>
    </>
  );
}

export default ContactUs;
