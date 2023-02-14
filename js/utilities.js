function updateNumber(isIncrease, inputId) {
    const caseNumberField = document.getElementById(inputId);
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updatePrice(elementId, number, price) {
    const element = document.getElementById(elementId);
    const totalPrice = number * price;
    element.innerText = totalPrice;
}

function getCurrentTotal(elementId) {
    const element = document.getElementById(elementId);
    const previousTotalString = element.innerText;
    const previousTotal = parseInt(previousTotalString);

    return previousTotal;
}

function calculateSubTotal(phoneElementId, caseElementId, subTotalId) {
    // calculate sub total
    const currentPhoneTotal = getCurrentTotal(phoneElementId);
    const currentCaseTotal = getCurrentTotal(caseElementId);
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    const subTotalElement = document.getElementById(subTotalId);
    subTotalElement.innerText = currentSubTotal;

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(0);
    const taxAmount = parseFloat(taxAmountString);
    const taxTotal = document.getElementById("tax-total");
    taxTotal.innerText = taxAmount;

    // calculate total payment
    const totalPayment = currentSubTotal + taxAmount;
    const total = document.getElementById("total");
    total.innerText = totalPayment;
}