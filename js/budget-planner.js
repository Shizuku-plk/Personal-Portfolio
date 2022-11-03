"use strict";
window.addEventListener("load", function() {
    let budgetForm = document.forms["budgetForm"];
    let wages = budgetForm.elements["wages"];

    // highlight the wages field on load
    wages.focus();
    budgetForm.reset();
});
let incomeButton = document.getElementById("incomeButton");
let expensesButton = document.getElementById("expensesButton");
let wantsButton = document.getElementById("wantsButton");
let savingsButton = document.getElementById("savingsButton");

// call the calcIncome function 
incomeButton.onclick = calcIncome;
// call the expensesNeeds function
expensesButton.onclick = expensesNeeds;
// call the wants function
wantsButton.onclick = wants;
savingsButton.onclick = savings;
// function to calculate the income
function calcIncome() {
    let wagesValue, otherValue, studentLoansValue, allowanceValue, incomeTotal, expensesPercent, wantsPercent, savingsPercent;
    let incomeMessage = document.getElementById("income-message");
    let incomeEndTotals = document.getElementById("income-totals");
    let expensesPercentTotal = document.getElementById("expenses-percent");
    let wantsPercentTotal = document.getElementById("wants-percent");
    let savingsPercentTotal = document.getElementById("savings-percent");

    wagesValue = parseFloat(wages.value);
    otherValue = parseFloat(other.value);
    studentLoansValue = parseFloat(studentLoans.value);
    allowanceValue = parseFloat(allowance.value);

    incomeTotal = wagesValue + otherValue + studentLoansValue + allowanceValue;
    expensesPercent = incomeTotal * 0.5;
    wantsPercent = incomeTotal * 0.3;
    savingsPercent = incomeTotal * 0.2;

    if (isNaN(wagesValue) || isNaN(otherValue) || isNaN(studentLoansValue) || isNaN(allowanceValue)) {
        incomeMessage.textContent = "Enter a valid input";
    } else {
        incomeMessage.textContent = "Total: $" + incomeTotal;
    }

    incomeEndTotals.textContent = "Income: $" + incomeTotal;
    expensesPercentTotal.textContent = "Save: $" + expensesPercent + " for your needs";
    wantsPercentTotal.textContent = "Save: $" + wantsPercent + "  for your wants";
    savingsPercentTotal.textContent = "Save: $" + savingsPercent + " for your savings";
}

// function to calculate the expenses
function expensesNeeds() {
    let rentValue, carPaymentValue, autoInsuranceValue, carMaintenanceValue, gasolineValue,
    groceriesValue, transportationValue, phoneBillValue, internetBillValue, studentLoanValue,
    tuitionValue, booksValue, roomValue, otherValue, expensesTotal;

    let expensesMessage = document.getElementById("expenses-message");
    let expensesEndTotals = document.getElementById("expenses-totals");

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
    otherValue = parseFloat(otherE.value);

    expensesTotal = rentValue + carPaymentValue + autoInsuranceValue + carMaintenanceValue + gasolineValue + 
    groceriesValue + transportationValue + phoneBillValue + internetBillValue + studentLoanValue + tuitionValue +
    booksValue + roomValue + otherValue;

    if (isNaN(rentValue) || isNaN(carPaymentValue) || isNaN(autoInsuranceValue) || isNaN(carMaintenanceValue)
    || isNaN(gasolineValue) || isNaN(groceriesValue) || isNaN(transportationValue) || isNaN(phoneBillValue)
    || isNaN(internetBillValue) || isNaN(studentLoanValue) || isNaN(tuitionValue) || isNaN(booksValue)
    || isNaN(roomValue) || isNaN(otherValue)) {
        expensesMessage.textContent = "Enter a valid input";
    } else {
        expensesMessage.textContent = "Total: $" + expensesTotal;
    }
    expensesEndTotals.textContent = "Needs: $" + expensesTotal;
}

// function to calculate the wants
function wants() {
    let clothingValue, diningValue, mealsValue, alcoholValue, movieValue, gymValue, travelValue, streamingvalue,
    homeValue, sportsValue, otherValue, wantsTotal;

    let wantsMessage = document.getElementById("wants-message");
    let wantsEndTotals = document.getElementById("wants-totals");
    
    clothingValue = parseFloat(clothing.value);
    diningValue = parseFloat(dining.value);
    mealsValue = parseFloat(meals.value);
    alcoholValue = parseFloat(alcohol.value);
    movieValue = parseFloat(movie.value);
    gymValue = parseFloat(gym.value);
    travelValue = parseFloat(travel.value);
    streamingvalue = parseFloat(streaming.value);
    homeValue = parseFloat(home.value);
    sportsValue = parseFloat(sports.value);
    otherValue = parseFloat(otherW.value);

    wantsTotal = clothingValue + diningValue + mealsValue + alcoholValue + movieValue + 
    gymValue + travelValue + streamingvalue + homeValue + sportsValue + otherValue;

    if (isNaN(clothingValue) || isNaN(diningValue) || isNaN(mealsValue) || isNaN(alcoholValue)
    || isNaN(movieValue) || isNaN(gymValue) || isNaN(travelValue) || isNaN(streamingvalue)
    || isNaN(homeValue) || isNaN(sportsValue) || isNaN(homeValue) || isNaN(otherValue)) {
        wantsMessage.textContent = "Enter a valid input";
    } else {
        wantsMessage.textContent = "Total: $" + wantsTotal;
    }
    wantsEndTotals.textContent = "Wants: $" + wantsTotal;
}

function savings() {
    let savingValue, emergencyValue, four1kValue, iraValue, investmentsValue, otherValue, savingsTotal;

    let savingsMessage = document.getElementById("savings-message");
    let savingsEndTotals = document.getElementById("savings-totals");

    savingValue = parseFloat(saving.value);
    emergencyValue = parseFloat(emergency.value);
    four1kValue = parseFloat(four1k.value);
    iraValue = parseFloat(ira.value);
    investmentsValue = parseFloat(investments.value);
    otherValue = parseFloat(otherS.value);

    savingsTotal = savingValue + emergencyValue + four1kValue + iraValue + investmentsValue + otherValue;

    if (isNaN(savingValue) || isNaN(emergencyValue) || isNaN(four1kValue) || isNaN(iraValue) || isNaN(investmentsValue)
    || isNaN(otherValue)) {
        savingsMessage.textContent = "Enter a valid input";
    } else {
        savingsMessage.textContent = "Total: $" + savingsTotal;
    }
    savingsEndTotals.textContent = "Savings: $" + savingsTotal;
}