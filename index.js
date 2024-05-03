const submitBtn = document.querySelector("#notify");
const emailInput = document.getElementById("email");
const emailResult = document.getElementById("error-result");

submitBtn.addEventListener("click", ()=>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    if(emailInput.value === ""){
        emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
        emailResult.style.display = "block";
    }
    else if(!regex.test(emailInput.value)){
        emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
        emailResult.style.display = "block";
    }
})