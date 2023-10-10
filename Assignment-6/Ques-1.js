// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  #balance;
  #owner;
  constructor(balance, owner) {
    this.#balance = balance;
    this.#owner = owner;
    console.log(`Welcome ${this.#owner}`);
  }
  deposit = (amount) => {
    if (amount <= 0) {
      console.log("Invalid Amount!!");
    } else {
      this.#balance += amount;
      console.log("Deposit Successfull");
      this.displayBalance(this.#balance);
    }
  };
  withdraw = (amount) => {
    if (amount > this.#balance) {
      console.log("Low Balance!!");
    } else {
      this.#balance -= amount;
      console.log("Withdrawal Successfull");
      this.displayBalance(this.#balance);
    }
  };
  displayBalance = () => {
    console.log(`Current Balance is : ${this.#balance}`);
  };
}

const Obj1 = new BankAccount(100000, "Vinay");
Obj1.deposit(122);
Obj1.withdraw(100000);
