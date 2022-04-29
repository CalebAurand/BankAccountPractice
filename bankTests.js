let assert = require("assert");
let BankAccount = require("./main.js");
let Transaction = require("./main.js");

//write tests here
//
describe("Constructor Tests", function(){
    it("New Bank Account", function(){
        let B1 = new BankAccount(001, "Charity");
        let expectedBalance = 0;
        // let actualBalance = B1.balance();
        assert.equal(B1.accountNumber, 0001, "account number is not set right");
        assert.equal(B1.owner, "Charity", "owner not set correctly");
    })

        //second test

    // it("initial inputs", function(){
    //     let c1 = new Car(1, 10, 30);
    //     assert.equal(c1.id, 1, "the id is not set correctly");
    //     assert.equal(c1.fuelCapacity, 10, "the capacity is not set correctly");
    //     assert.equal(c1.efficiency, 30, "the fuel efficiency is not set correctly");
    // })
})

/**
 * Unit tests are testing individual pieces of code
 *      like testing individual parts on a car, or a dryer
 * Integration testing or tests, tests larger portions of code that are supposed to work together
 *      like testing the entire car (car inspection), or testing the entire dryer
 */


/*
describe("Add Fuel", function(){
    
    it("add fuel", function(){
        let c = new Car(1, 10, 30);
        assert.equal(c.fuel, 0, "Car should start with 0 fuel");

        c.addFuel(5);
        assert.equal(c.fuel, 5, "Expecting fuel to be 5");

        c.addFuel(2);
        assert.equal(c.fuel, 7, "Expecting fuel to be 7");
    
    });

    it("handle overflow", function(){
        let c = new Car(1, 10, 30);
        c.addFuel(20);
        c.addFuel(3);
        assert.equal(c.fuel, 10, "Cannot over fill the car");
    });

    it("handle negative fuel", function(){
        let c = new Car(1, 10, 30);
        c.addFuel(5);
        c.addFuel(-3);
        assert.equal(c.fuel, 2, "allow siphoning");
        c.addFuel(-3);
        assert.equal(c.fuel, 0, "cannot take out gas you do not have");
    })
})

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