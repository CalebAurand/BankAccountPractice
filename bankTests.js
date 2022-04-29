let assert = require("assert");
let { BankAccount, Transaction } = require("./main.js");
// let Transaction = require("./main.js");

//write tests here
//
describe("Constructor Tests", function(){
    it("New Bank Account Inputs", function(){
        let B1 = new BankAccount(001, "Charity");
        let expectedBalance = 0;
        let actualBalance = B1.balance();
        assert.equal(B1.accountNumber, 0001, "account number is not set right");
        assert.equal(B1.owner, "Charity", "owner not set correctly");
        assert.equal(expectedBalance, actualBalance, "transactions array is not set up correctly");
    })

        //second test
    it("New Transaction Initial Inputs", function(){
        let t1 = new Transaction(50, "Larry");
        console.log("t1 amount is ", t1.amount);
        assert.equal(t1.amount, 50, "amount of transaction not set correctly");
        console.log("t1 amount is ", t1.amount);
        assert.equal(t1.payee, "Larry", "Payee not set correctly");
    })
})

/**
 * Unit tests are testing individual pieces of code
 *      like testing individual parts on a car, or a dryer
 * Integration testing or tests, tests larger portions of code that are supposed to work together
 *      like testing the entire car (car inspection), or testing the entire dryer
 */



describe("Transaction Tests", function(){
    
    it("charge negative amounts", function(){
        let b = new BankAccount(1, "Bill");
        b.charge("Walmart", -25);
        assert.equal(b.transactions.length, 1, "Transactions array length should be 1 here");
        // console.log("transactions length is ", b.transactions.length);
        assert.equal(b.transactions[0].amount, -25, "charge amount set incorrectly");
        // console.log("first charge amount is ", b.transactions[0].amount);

        b.charge("BestBuy", -56);
        assert.equal(b.transactions[1].amount, -56, "charge amount set incorrectly to array");
        // console.log("second charge amount is ", b.transactions[1].amount);

    });

    it("deposit positive amounts", function(){
        let b = new BankAccount(1, "Bill");
        b.deposit(75);
        b.deposit(1025);
        assert.equal(b.transactions[0].amount, 75, "deposit amount set incorrectly to array");
        assert.equal(b.transactions[1].amount, 1025, "deposit amount set incorrectly to array");
    });

    it("produce transactions sum", function(){
        let b = new BankAccount(5, "John");
        b.deposit(75);
        b.deposit(1025);
        b.charge("BestBuy", -56);
        b.charge("Walmart", -25);
        assert.equal(b.balance(), 1019, "sum not calculated correctly");
        b.charge("Dentist", -600);
        assert.equal(b.balance(), 419, "sum not calculated correctly after run twice");
    })
})

/****** 
describe("Driving", function(){

    it("test1", function(){
        let c = new Car(1, 10, 30);
        assert.equal(c.odometer, 0, "car has not been driven yet");

        c.drive(30);
        assert.equal(c.odometer, 0, "Because we cannot go with no fuel");

        c.addFuel(10);
        c.drive(30);

        assert.equal(c.odometer, 30, "odometer should measure 30 miles");
        assert.equal(c.fuel, 9, "used 1 gallon to drive 30 miles");
    });

    it("test2", function(){
        let c = new Car(1, 10, 30);
        c.addFuel(1);
        c.drive(100);
        assert.equal(c.odometer, 30, "can only go 30 miles on 1 gallon of gas");
        assert.equal(c.fuel, 0);
    })

    it("test3", function(){
        let c = new Car(1, 10, 30);
        c.addFuel(1);
        c.drive(-30);
        assert.equal(c.odometer, 0, "we cannot drive negative numbers, should be 0")
    })
})

describe("Drive Distance", function(){
    it("test1", function(){
        let c = new Car(1, 10, 30);
        assert.equal(c.drivingDistance(), 0);
    })

    it("test2", function(){
        let c = new Car(1, 10, 30);
        c.addFuel(2);
        assert.equal(c.drivingDistance(), 60);
    })

    it("test3", function(){
        let c = new Car(1, 10, 15);
        c.addFuel(1);
        assert.equal(c.drivingDistance(), 15);
    })
})
*/