// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode.toLowerCase()}.json";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };



// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
  
//   // Updated URL structure
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  
//   let response = await fetch(URL);
//   let data = await response.json();
//   let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]; 
  
//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };


// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });


const country = [
  {
    countryCode: "IN",
    countryName: "India",
    currencyCode: "INR",
  },
  {
    countryCode: "US",
    countryName: "USA",
    currencyCode: "USD",
  },
];

function loadSelectOption() {
  const Country1 = document.getElementById("country1");

  country.forEach((country) => {
    const OP = document.createElement("option");

    OP.value = country.countryCode + "_" + country.currencyCode;

    OP.innerText = country.countryName;

    Country1.appendChild(OP);
  });
}

loadSelectOption();

async function FetchFlag1() {
  const code = document.getElementById("country1").value;
  console.log(code);

  const countryCode = code.split("_")[0];
  const currencyCode = code.split("_")[1];

  //   console.log(countryCode, currencyCode);

  document.getElementById("country1Flag").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;

  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode.toLowerCase()}.json`,
  );

  const data = await response.json();

  console.log(data);
}