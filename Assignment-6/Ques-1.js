// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  #balance;
  #owner;
  constructor(balance, owner) {
    this.#balance = balance;
    if (owner === "" || owner == null) {
      throw new Error("Invalid input");
    } else {
      this.#owner = owner;
      console.log(`Welcome ${this.#owner}`);
    }
  }
  checkName() {}
  deposit = (amount) => {
    if (amount == null || amount <= 0 || typeof amount === "string") {
      throw new Error("Invalid Amount!!");
    } else {
      this.#balance += amount;
      console.log("Deposit Successfull");
      this.displayBalance(this.#balance);
    }
  };
  withdraw = (amount) => {
    if (amount == null || typeof amount === "string" || amount <= 0) {
      throw new Error("Invalid Amount");
    } else {
      if (amount > this.#balance) {
        console.log("Low Balance!!");
      } else {
        this.#balance -= amount;
        console.log("Withdrawal Successfull");
        this.displayBalance(this.#balance);
      }
    }
  };
  displayBalance = () => {
    console.log(`Current Balance is : ${this.#balance}`);
  };
}

try {
  const Obj1 = new BankAccount(100000, "Vinay");
  Obj1.deposit(1000);
  Obj1.withdraw(100000);
} catch {
  console.log("Invalid input");
}
