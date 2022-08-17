// step-1 add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function() {
    //    step-2 get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field')

    const newDepositAmountString = depositField.value
    const newDepositAmount = parseFloat(newDepositAmountString)


    // step-7 clear the deposit field
    depositField.value = ''

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid Number')
        return
    }

    // step-3 get the deposit total
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step-4 add numbers to set the total

    const currentDepositTotal = previousDepositTotal + newDepositAmount

    depositTotalElement.innerText = currentDepositTotal

    //  step-5 get balance current total

    const balanceElement = document.getElementById('balance-total')

    const previousBalanceTotalString = balanceElement.innerText

    const previousBalance = parseFloat(previousBalanceTotalString)

    const currentBalanceTotal = previousBalance + newDepositAmount

    balanceElement.innerText = currentBalanceTotal



})