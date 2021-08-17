function getInputValue(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputAmountText = inputFiled.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input filed
    inputFiled.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;

}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);

    const balanceTotalAmount = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount
            + amount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    //get deposit amount
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        //get current deposit
        updateTotalField('deposit-total', depositAmount);

        //update balance total
        updateBalance(depositAmount, true);
    }

});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    //get withdraw amount
    const withdrawAmount = getInputValue('withdraw-input');

    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {

        //update withdraw total
        updateTotalField('withdraw-total', withdrawAmount);

        //update balance aftar withdraw
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
});