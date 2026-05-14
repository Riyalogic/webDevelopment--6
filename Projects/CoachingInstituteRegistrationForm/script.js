document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullname = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const qualification = document.getElementById("qualification").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;
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
      "FullName": fullname,
      "Email": email,
      "Phone": phone,
      "DateOfBirth": dob,
      "Qualification": qualification,
      "marks": marks,
      "Course": course,
      "Address": address,
      "City": city,
      "Pin": pin,
      "Gender": gender,
      "Timing": timings,
    };

    const isValid = validateData(registrationData);

    if (isValid) {
      console.log("Registration Data:", registrationData);
      alert("Registration successful! check console");
    }
    // console.log(gndr);
    // console.log(timings);
  });

// ResetButton
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });

function validateData() {}