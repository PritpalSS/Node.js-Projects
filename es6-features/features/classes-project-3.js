// Create BankAccount class
// Allow constructor function to take balance. default to zero if not num
// Deposit (amount)
// Withdrawal (amount)
// PrintBalance () -> You're account balance is $100

class BankAccount{

	constructor (balance){
		this.balance = typeof balance === 'number' ? balance : 0; 
	}

	set balance (val){
		this._balance = val;
		this.balanceUpdatedAt = new Date();
	}

	get balance (){
		return this._balance;
	}

	deposit (amount){
		
		if(typeof amount === 'number'){
			this.balance += amount;
			return true;
		} else {
			console.log('Amount must be a number');
			return false;
		}
		
	}

	withdrawal (amount){
		if(typeof amount === 'number'){
			this.balance -= amount;
			return this.balance;
		} else {
			console.log('Amount must be a number');
			return false;
		}
	}

	printBalance (){
		console.log(`Youre account balance is $${this.balance}! Last updated at ${this.balanceUpdatedAt}.`);
	}

}

// SavingAccounts class that extends BankAccount
// Override withdrawal to print message that you can't
// Override deposit to print message call parent deposit method
class SavingAccounts extends BankAccount{

	deposit (amount){		
		if(super.deposit(amount)){
			console.log(`Congratz! You saved $${amount}`);
		}
	}

	withdrawal (){
		console.log('You are not able to remove funds from your savings account');
	}
}


var savingsAccount = new SavingAccounts(500);
savingsAccount.deposit(100);
savingsAccount.printBalance();
savingsAccount.withdrawal(25);
savingsAccount.printBalance();

/*var account = new BankAccount(100);
account.deposit(100);
account.withdrawal(10);
account.printBalance();  //190

var account = new BankAccount(')£9df');
account.deposit('launda');
account.withdrawal(true);
account.printBalance();*/
