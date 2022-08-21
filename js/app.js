// step 1. getting calculate button id and add event listener to that button
document.getElementById('btn-calc').addEventListener('click', function () {
    // step 2. getting input income field
    const inputIncomeField = document.getElementById('income-input');
    const inputIncomeFieldString = inputIncomeField.value;
    const inputIncome = parseInt(inputIncomeFieldString);

    // step 3. getting input food field
    const inputFoodField = document.getElementById('food-input');
    const inputFoodFieldString = inputFoodField.value;
    const inputFood = parseInt(inputFoodFieldString);

    // step 3. getting input rent field
    const inputRentField = document.getElementById('rent-input');
    const inputRentFieldString = inputRentField.value;
    const inputRent = parseInt(inputRentFieldString);

    // step 3. getting input clothes field
    const inputClothesField = document.getElementById('clothes-input');
    const inputClothesFieldString = inputClothesField.value;
    const inputClothes = parseInt(inputClothesFieldString);

    const allExpenses = inputFood + inputRent + inputClothes;

    //step 4. getting the total expenses input
    const totalExpensesField = document.getElementById('total-expenses');
    const totalExpensesFieldString = totalExpensesField.innerText;
    const totalExpenses = parseInt(totalExpensesFieldString);

    //step 5. setting the total expenses in total expenses element
    totalExpensesField.innerText = allExpenses;

    const totalBalance = inputIncome - allExpenses;

    //step 6. getting balance input
    const balanceField = document.getElementById('balance');
    const balanceFieldString = balanceField.innerText;
    const balance = parseInt(balanceFieldString);

    //step 7. setting the total balance in balance element
    balanceField.innerText = totalBalance;
})


document.getElementById('btn-save').addEventListener('click', function () {
    const inputIncomeField = document.getElementById('income-input');
    const inputIncomeFieldString = inputIncomeField.value;
    const inputIncome = parseInt(inputIncomeFieldString);

    const saveTwentyPercent = inputIncome * (20 / 100);

    const savingAmountField = document.getElementById('saving-amount');
    const savingAmountFieldString = savingAmountField.innerText;
    const savingAmount = parseInt(savingAmountFieldString);

    savingAmountField.innerText = saveTwentyPercent;

    const balanceField = document.getElementById('balance');
    const balanceFieldString = balanceField.innerText;
    const balance = parseInt(balanceFieldString);


    const remainingBalanceField = document.getElementById('remaining-balance');
    const remainingBalanceFieldString = remainingBalanceField.innerText;
    const remainingBalance = parseInt(remainingBalanceFieldString);

    remainingBalanceField.innerText = balance - savingAmountField.innerText;
})


