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

    if(accountNumber == "01234567890" && pin == "1234"){
        alert("Add money success");

        // window.location.replace("/home.html")
        // window.location.assign("./home.html")
    }else{
        alert("Add money failed");
    }


})

let balance = 5000;
document.getElementById("add-money-btn").addEventListener("click", function(){

    const amount = parseFloat(document.getElementById("add-amount").value);

    if(isNaN(amount) || amount <= 0){
        alert("Enter valid amount");
        return;
    }

    balance += amount;

    document.getElementById("balance").innerText = "$" + balance;

    alert("Money added successfully");
});


