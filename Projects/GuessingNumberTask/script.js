 const randomNumber = Math.floor(Math.random() * 10)+1;

document.querySelector(".btn").addEventListener("click", () => {
    const guess = Number(document.getElementById("guess").value);
    if(guess > randomNumber){
        alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
    }
    else if(guess < randomNumber){ 
    alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
    }
    else{
        alert("Congratulations! You guessed the correct number.")
    }
    document.getElementById("guess").value = "";
})