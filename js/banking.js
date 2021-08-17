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

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
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

    //get current deposit
    updateTotalField('deposit-total', depositAmount);

    //update balance total
    updateBalance(depositAmount, true);
});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    //get withdraw amount
    const withdrawAmount = getInputValue('withdraw-input');

    //update withdraw total
    updateTotalField('withdraw-total', withdrawAmount);

    //update balance aftar withdraw
    updateBalance(withdrawAmount, false);
});