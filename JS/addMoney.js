document.getElementById('add-money-btn')
    .addEventListener('click', function(event) {
        event.preventDefault();


        // Get the add money amount and convert it into integer---------------------------------------
        const amount = document.getElementById('add-money-amount').value;
        const numAmount = parseFloat(amount);
        // 00000000000000000000000000000000000000000000


        // Get the Main balance/Current balance----------
        const currentBalance = document.getElementById('add-money-balance').innerText;
        const numCurrentBalance = parseFloat(currentBalance);
        // 0000000000000000000000000000000000000000000000


        // Get the PIN number and convert it into integer and validate the PIN number --------------------
        const pin = document.getElementById('add-money-pin').value;
        const numberPin = parseInt(pin);

        if (numberPin === 1234) {
            const newBalance = numCurrentBalance + numAmount;
            document.getElementById('add-money-balance').innerText = newBalance;
        }
        else {
            alert("Unable to Perform");
        }
        // 000000000000000000000000000000000000000000000000
})