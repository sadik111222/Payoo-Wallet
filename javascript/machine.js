function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out");
    const transferMoney = document.getElementById("transfer-money");
    const getBonus = document.getElementById("get-bonus");
    const payBill = document.getElementById("pay-bill");

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden")

    const selected = document.getElementById(id);
    selected.classList.remove("hidden")

}