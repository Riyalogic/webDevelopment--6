document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullname = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const qualification = document.getElementById("qualification").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const pin = document.getElementById("pin").value.trim();
    const gender = document.querySelector(
      "input[name='gender']:checked",
    )?.value;

    const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    const registrationData = {
      FullName: fullname,
      Email: email,
      Phone: phone,
      DateOfBirth: dob,
      Qualification: qualification,
      Marks: marks,
      Course: course,
      Address: address,
      City: city,
      Pin: pin,
      Gender: gender,
      Timing: timings,
    };
    validateData(registrationData)
      ? (console.log("Registration Data:", registrationData),
        alert("Registration successful! Check console for details."))
      : alert("Registration unsuccessfull! Enter valid Data.");
  });

// ResetButton
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });

function validateData(data) {
  document.querySelectorAll(".manualError").forEach((item) => {
    item.innerText = "";
  });

  let isValid = true;

  console.log(data);

  //Full Name
  if (!data.FullName) {
    document.getElementById("fullNameError").innerText = "Full Name Required";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.FullName)) {
    document.getElementById("fullNameError").innerText =
      "Only alphabets and spaces are allowed";
    isValid = false;
  }

  // Email
  if (!/^[A-Za-z\d\.\_]+@(gmail.com|outlook.com|ricr.in)$/.test(data.Email)) {
    document.getElementById("emailError").innerText =
      "Only standard Email format allowed with gmail.com";
    isValid = false;
  }

  //Phone
  if (!/^[6-9]\d{9}$/.test(data.Phone)) {
    document.getElementById("phoneError").innerText =
      "Only Indian mobile numbers allowed";
    isValid = false;
  }

  //pin
  if (!/^\d{6}$/.test(data.pin)) {
    document.getElementById("pinError").innerText = "Pin code is Required";
    isValid = false;
  }

  //city
  if (!/^[A-Za-z\s]+$/.test(data.city)) {
    document.getElementById("cityError").innerText = "Only alphabet allowed"
    isValid = false;
  }

  //gender
  if (!data.Gender) {
    document.getElementById("genderError").innerText = "Please select gender";
    isValid = false;
  }

  //Qualification
  if (!data.Qualification) {
    document.getElementById("qualificationError").innerText = "Select qualification";
    isValid = false;
  }

  //Marks
  // if (!data.Marks) {
  //   document.getElementById("marksError").innerText = "Enter valid percentage or grade";
  //   isValid = false
  // }

  //course
  if(!data.Course){
  document.getElementById("courseError").innerText = "Select preferred course";
  isValid = false;
  }

  //Address
  if(!data.Address){
    document.getElementById("addressError").innerText = "Address is required";
    isValid = false;
  }

  return isValid;
}
