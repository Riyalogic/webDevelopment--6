function calculateTip(){
    let billAmount =  document.getElementById("billAmount").value;
    let service =  document.getElementById("service").value;
    let persons =  document.getElementById("persons").value;

    let tip = billAmount * service;

    let total = Number(billAmount) + Number(tip);

    let perPerson = total / persons;

    document.getElementById("result").style.display = "block";
    document.getElementById("amount").innerHTML = "₹" + perPerson.toFixed(2);
}