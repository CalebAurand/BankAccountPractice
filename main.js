/**Homework assignment for this week is Bank Account
 * Homework is due Thursday 4/28/2022
 * 
 * simulating a bank account and transactions
 * 
 *Today students will apply their knowledge of object-oriented programming to create two classes: one that can be used to represent a bank account and another to represent the transactions the bank account holds.

BankAccount class - This class represents a bank account.

The class should have the following fields:

accountNumber - String representing the account number
owner - String representing the owner of the account
transactions - An array of transactions representing the history of all transactions associated with this account
The constructor should take in the following input:

accountNumber - The account Number
owner - The name of the person who owns this account
NOTE: When an account is created, you should initialize the transactions array to be an empty array

The class should have the following 3 methods:

balance() - This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array.
deposit(amt) - This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.
NOTE: You should not be able to deposit a negative amount

charge(payee, amt) - This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.
NOTE: You should not be able to charge an amount that would make your balance dip below 0

Transaction class - This class represents a single transaction in a bank account.

The class should have the following fields:

date - The date of the transaction
amount - The amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
payee - The description or payee on the transaction
The constructor should take in the following input:

amount - The amount on the transaction
payee - The payee or description on the transaction
NOTE: The date is not passed into the constructor. The constructor should set the date to be the current date automatically.
 

*/

class BankAccount {
    //number: the ID number of the account
    accountNumber;

    //string: the name of the owner of the account
    owner;

    //array: array of transaction objects
    transactions;


    /**
     * 
     * @param {number} accountNumber - The account number of the account
     * @param {string} owner - Name of the owner of the account
     */
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }


    /**
     * This method does not take any input, and returns the current balance on the account. 
     * The balance is computed by summing up the amounts in the transactions array.
     */
    balance(){
       // should access objects in the transactions array
       // should access all of the objects
       // should return a sum of all the transactions amounts
       let sum = 0;
       this.transactions.forEach(function(tr){
           sum = sum + tr.amount;
       });
    //    console.log(sum);
       return sum;
    };

    /**
     * This method takes in a single input, the deposit amount. This method should 
     * create a new transaction representing the deposit, and add it to the transactions array.
     * @param {number} amt 
     */
    deposit(amt){
        let deposit = new Transaction(amt, this.owner);
        this.transactions.push(deposit);

    };

    /**
     * This method takes in the payee and amount, creates a new transaction 
     * with the payee and amount, and adds the transaction to the transaction array.
     * @param {string} payee 
     * @param {number} amt 
     */
    charge(payee, amt){
        let charge = new Transaction(amt, payee);
        this.transactions.push(charge);
    };
};

class Transaction {
    //date: the date of the transaction
    date;

    //number: The amount of the transaction. Positive amounts are money 
    //going into the account (deposit, refund). Negative amounts are 
    //money coming out of the account (a charge or debit).
    amount;

    //string: the description or payee on the account
    payee;


    /**
     * 
     * @param {number} amount - The amount of the transaction
     * @param {string} payee - Name or description on the transaction
     */
    constructor(amount, payee){
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }

};

module.exports = BankAccount, Transaction; // attempting to export the BankAccount and Transaction classes

let tr1 = new Transaction(50, "Sharon spend money");
// console.log(tr1);
let tr2 = new Transaction(-60, "Aldi");
// console.log(tr2);

//try to find sum of 2 transactions
// function findSum(num1, num2){
//     sum = num1 + num2;
//     return sum;
// };
console.log(tr1.amount); // testing access to tr1's transaction amount
// console.log(findSum(tr1.amount, tr2.amount)); //testing finding sum of the two transactions should be -10

let check1 = new BankAccount(4411, "Bob");
let save1 = new BankAccount(1234, "Larry");
//create three new transactions for each account
check1.deposit(1000);
check1.charge("WalMart", -35);
check1.deposit(25);
check1.charge("BestBuy", -800);

console.log(check1.balance()); // $190
check1.charge("Hilton", -175);
console.log(check1.balance()); // should print balance sum to console = $15

console.log(check1.transactions); // should print the array of transaction objects