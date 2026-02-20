document.getElementById("add-money-btn").addEventListener("click", function(){
    const numberInput = document.getElementById("input-account-number")
    const accountNumber = numberInput.value;
    console.log(accountNumber)

    const pinInput = document.getElementById("account-pin")
    const pin = pinInput.value;
    console.log(pin)

    const addMoneyInput = document.getElementById("add-money")
    const inputMoney = addMoneyInput.value;
    console.log(inputMoney)

    if(accountNumber == "01234567890" && pin == "1234" && inputMoney >="10"){
        alert("login success");

        // window.location.replace("/home.html")
        // window.location.assign("./home.html")
    }else{
        alert("Add money failed");
    }


})
