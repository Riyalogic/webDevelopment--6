function submit(){
    const FullName = document.getElementById("fullName").value;
    const Number = document.getElementById("phone").value;
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;

    // console.log(FullName);
    // console.log(Number);
    // console.log(Email);
    // console.log(Password);

    document.querySelectorAll(".error").forEach((elememt) => {
        elememt.innerText
    });
    
    if (!/^[A-Za-z\s]+$/.test(FullName)) {
        document.getElementById("nameError").innerText = "Invalid Full Name"
    }

    if (!/^[6-9]\d{9}$/.test(Number)) {
        document.getElementById("phoneError").innerText = "Invalid Phone Number"
    }
    if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(Email)) {
        document.getElementById("emailError").innerText = "Invalid Email"
    }
    
}