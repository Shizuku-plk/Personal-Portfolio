window.addEventListener("load", function() {
    let budgetForm = document.forms["budget-form"];
    let wages = budgetForm.elements["wages"];

    // highlight the wages field on load
    wages.focus();

    // calculate the income total
    calcIncome();

    // add an event listener for every form element
    for (let i = 0; i < budgetForm.elements.length; i++) {
        budgetForm.elements[i].addEventListener("change", calcIncome);
    }

    function calcIncome() {
        let wagesValue = wages.value;
        let otherValue = other.value;
        let studentLoansValue = studentLoans.value;
        let allowanceValue = allowance.value;
        let incomeTotal = parseFloat(wagesValue) + parseFloat(otherValue) + parseFloat(studentLoansValue) + parseFloat(allowanceValue);
        let incomeMessage = document.getElementById("income-message");

        incomeMessage.textContent = incomeTotal;
    }
});