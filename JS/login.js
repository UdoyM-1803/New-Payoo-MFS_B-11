document.getElementById("login-btn")
    .addEventListener('click', function(event) {
        event.preventDefault();
        
        // Get the Pin and Account Number--------------
        const accountNumber = document.getElementById('account-number').value;
        
        const pinNumber = document.getElementById('pin-number').value;
        // 00000000000000000000000000000000000000000000

        // Convert the pin number to Integer-----------
        const numberPin = parseInt(pinNumber);
        // 0000000000000000000000000000000000000000000

        // Pin & Account number Validation -------------
        if (accountNumber.length  === 11) {
            if (numberPin === 1234) {
                window.location.href = "main.html";
            }
            else {
                alert("Wrong Pin Number");
            }
        }
        else {
            alert("Wrong Submission...!!!");
        }
        // 000000000000000000000000000000000000000000000000
})