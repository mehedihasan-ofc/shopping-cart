/* 
    01. add event listener to the phone plus button
    02. get the value inside the phone number field (input field)
    03. convert the number to an integer
    04. calculate the new phone number
    05. set the vakue to the phone number field
*/

document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const newCaseNumber = updateNumber(true, "phone-number-field");
    updatePrice("phone-total", newCaseNumber, 1219);
    calculateSubTotal("phone-total", "case-total", "sub-total");
});

document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const newCaseNumber = updateNumber(false, "phone-number-field");
    updatePrice("phone-total", newCaseNumber, 1219);
    calculateSubTotal("phone-total", "case-total", "sub-total");
});