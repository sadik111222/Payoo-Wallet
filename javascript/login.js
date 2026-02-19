document.getElementById("login-btn").addEventListener("click", function(){
    const numberInput = document.getElementById("input-number")
    const contractNumber = numberInput.value;
    console.log(contractNumber)

    const pinInput = document.getElementById("input-pin")
    const pin = pinInput.value;
    console.log(pin)

    if(contractNumber == "01234567890" && pin == "1234"){
        alert("login success");

        // window.location.replace("/home.html")
        window.location.assign("/home.html")
    }else{
        alert("login failed");
    }
    

})
