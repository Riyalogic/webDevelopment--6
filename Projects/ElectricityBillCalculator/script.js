function calculateBill(){
    let units = Number(document.getElementById("units").value);
    let slab1Units = 0;
    let slab2Units = 0;
    let slab3Units = 0;
    let slab4Units = 0;

    let slab1Charge = 0;
    let slab2Charge = 0;
    let slab3Charge = 0;
    let slab4Charge = 0;

    if(units >0){
        slab1Units = Math.min(units,50);
        slab1Charge = slab1Units * 0.50;
    }

      if(units >50){
        slab2Units = Math.min(units - 50,150);
        slab2Charge = slab2Units * 0.75;
    }

      if(units >200){
        slab3Units = Math.min(units - 200,250);
        slab3Charge = slab3Units * 1.20;
    }

      if(units >450){
        slab4Units = units - 450;
        slab4Charge = slab4Units * 1.50;
    }

    let subtotal = slab1Charge + slab2Charge + slab3Charge + slab4Charge;

    let surcharge = subtotal*0.20;

    let total = subtotal + surcharge;
}

    // document.getElementById("result").style.display = "block";
    // document.getElementById("slab1").innerHTML = 'First 50 Units : $(slab1)'
//     let amount = 0;
//     if(units <=50){
//         amount = units*0.50;
//     }
//     else if(units <= 200){
//         amount = (50*0.50) + ((units - 50)*0.75);
//     }
//     else if(units <= 450){
//         amount = (50*0.50) + ((units - 50)*0.75) + ((units - 200)*1.20);
//     }
//     else{
//         amount = (50*0.50) + ((units - 50)*0.75) + ((units - 200)*1.20) + ((units - 450)*1.50);
//     }
//     let surcharge = amount * 0.20;
//     let total = amount + surcharge;
//     document.getElementById("subtotal").innerHTML = "Subtotal: ₹" + amount.toFixed(2);
//     document.getElementById("surcharge").innerHTML = "Surcharge: ₹" + surcharge.toFixed(2);
//     document.getElementById("total").innerHTML = "Grand Total: ₹" + total.toFixed(2);
// }
// function resetBill(){
//     document.getElementById("units").value;
//     document.getElementById("result").style.display = "none";
// }