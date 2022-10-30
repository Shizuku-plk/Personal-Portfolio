window.addEventListener("load", function() {
    let budgetForm = document.forms["budgetForm"];
    let wages = budgetForm.elements["wages"];

    // highlight the wages field on load
    wages.focus();
    budgetForm.reset();
    // calculate the income total
    budgetForm.elements.onchange = calcIncome;
    // calculate the NEEDS expenses
    budgetForm.elements.onchange = expensesNeeds;

    // add an event listener for every form element
    for (let i = 0; i < budgetForm.elements.length; i++) {
        budgetForm.elements[i].addEventListener("change", calcIncome);
        budgetForm.elements[i].addEventListener("change", expensesNeeds);
    }

    function calcIncome() {
        let wagesValue, otherValue, studentLoansValue, allowanceValue, incomeTotal;
        let incomeMessage = document.getElementById("income-message");

        wagesValue = parseFloat(wages.value);
        otherValue = parseFloat(other.value);
        studentLoansValue = parseFloat(studentLoans.value);
        allowanceValue = parseFloat(allowance.value);

        incomeTotal = wagesValue + otherValue + studentLoansValue + allowanceValue;

        incomeMessage.textContent = "Total:  " + incomeTotal;

        ValidateIncome();
    }

    function expensesNeeds() {
        let rentValue, carPaymentValue, autoInsuranceValue, carMaintenanceValue, gasolineValue,
        groceriesValue, transportationValue, phoneBillValue, internetBillValue, studentLoanValue,
        tuitionValue, booksValue, roomValue, otherValue, expensesTotal;

        let expensesMessage = document.getElementById("expenses-message");

        rentValue = parseFloat(rent.value);
        carPaymentValue = parseFloat(carPayment.value);
        autoInsuranceValue = parseFloat(autoInsurance.value);
        carMaintenanceValue = parseFloat(carMaintenance.value);
        gasolineValue = parseFloat(gasoline.value);
        groceriesValue = parseFloat(groceries.value);
        transportationValue = parseFloat(transportation.value);
        phoneBillValue = parseFloat(phoneBill.value);
        internetBillValue = parseFloat(internetBill.value);
        studentLoanValue = parseFloat(studentLoan.value);
        tuitionValue = parseFloat(tuition.value);
        booksValue = parseFloat(books.value);
        roomValue = parseFloat(room.value);
        otherValue = parseFloat(other.value);

        expensesTotal = rentValue + carPaymentValue + autoInsuranceValue + carMaintenanceValue + gasolineValue + 
        groceriesValue + transportationValue + phoneBillValue + internetBillValue + studentLoanValue + tuitionValue +
        booksValue + roomValue + otherValue;

        expensesMessage.textContent = "Total: " + expensesTotal;

    }
});

function ValidateIncome() {
    let errorMessage = document.getElementById("error-message");
}
