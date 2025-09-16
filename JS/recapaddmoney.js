document.getElementById('add-money-btn')
    .addEventListener('click', function(event) {
        event.preventDefault();


        // Get the PIN and Amount and converted them into integer and float -----------------------------
        const amount = document.getElementById('add-money-amount').value;
        const numAmount = parseFloat(amount);

        const pin = document.getElementById('add-money-pin').value;
        const numberPin = parseInt(pin);
        // 00000000000000000000000000000000000000000000000


        // Get the Available Balance and converted it into float -------------------------------------------
        const currentBalance = document.getElementById('add-money-balance').innerText;
        const numCurrentBalance = parseFloat(currentBalance);
        // 00000000000000000000000000000000000000000000000


        // Validate the PIN number and Amount 
        if (numAmount && numberPin) {
            if (numberPin === 1234) {
                const newBalance = numCurrentBalance + numAmount;
                document.getElementById('add-money-balance').innerText = newBalance;
            }
            else {
                alert("Wrong Validation....!!!!")
            }
        }
        else {
            alert("Unable to Perform...!!!!");
        }
        // 0000000000000000000000000000000000000000000000
})