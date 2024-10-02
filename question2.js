let accountBalance = 200.09;  

// Task 1
function deposit(amount) {
    if (amount > 0) {
        accountBalance += amount;
        console.log(`Deposit complete -- you have added $${amount} to your account.`);
    } else {
        console.log("Unable to deposit. Remember, deposit amount must be positive.");
    }
}

// Task 2
function withdraw(amount) {
    if (amount > 0 && amount <= accountBalance) {
        accountBalance -= amount;
        console.log(`Withdrawal successful! You have withdrawn $${amount} from your account.`);
    } else if (amount > accountBalance) {
        console.log("Insufficient balance to withdraw this amount.");
    } else {
        console.log("Unable to withdraw. Remember, withdrawal amount must be positive.");
    }
}

// Task 3
function checkBalance() {
    console.log(`Your current balance is $${accountBalance}.`);
}

deposit(-10);
deposit(100.30); 
checkBalance();  
withdraw(500);
withdraw(-10);
withdraw(50);
checkBalance(); 
