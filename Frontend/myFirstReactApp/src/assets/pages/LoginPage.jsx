import { useState } from "react";

function LoginPage(){
    const [userName,setUserName] = useState("";
    const [city,setCity] = useState("";)
    
    return(
    <>
    <input type="text" name="userName" />
    <br />
    <div>my User Name is {userName}</div>
    </>
    );
}

export default LoginPage