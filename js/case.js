/* 
    01. add event listener to the case plus button
    02. get the value inside the case number field (input field)
    03. convert the number to an integer
    04. calculate the new case number
    05. set the vakue to the case number field
*/

document.getElementById("btn-case-plus").addEventListener("click", function() {
    const newCaseNumber = updateNumber(true, "case-number-field");
    updatePrice("case-total", newCaseNumber, 59);
    calculateSubTotal("phone-total", "case-total", "sub-total");
});

document.getElementById("btn-case-minus").addEventListener("click", function() {
    const newCaseNumber = updateNumber(false, "case-number-field");
    updatePrice("case-total", newCaseNumber, 59);
    calculateSubTotal("phone-total", "case-total", "sub-total");
});