//insurance 

//take an input of amount and add that to the total so far = 

//in event that a contract defaults, take from the insurance pool 

//contract for the market 
pragma solidity ^0.4.18;

//generalize for N markets 

contract Markets {

    //

    function getDebtors(uint marketIndex) returns (uint) {
        return markets[marketIndex].debtors;

    }

    function getCreditors(uint marketIndex) returns (uint) {
        return markets[marketIndex].creditors;
        //
    }


    struct Market {
       // address marketAddress; TODO: store in mapping
        

        //uint marketId; 
        uint debtors;
        uint creditors; 

        uint poolBalance;
        uint riskMetric; 
        

    }

    struct Request {

        uint borrowerId; 
        uint lenderId; 
        //borrower
        //lender 
        //contract reference --> address 
        address contractReference;



        //interest in the amount 
    }

    //post-POC questions: what's cheaper? storing 2D arrays in contract storage/memory or initiating new contracts



    //only done for POC -- needs to be revisited (storage too expensive)
    //needs a decentralized ledger of markets 
    Market[] public markets; 


    //4) multiple markets within contract as array of market structs 
    //each market will have details on timestamps involved (time variable t determines the time over which a lender gets his money back in the event of a default)



    //this function needs to be permissioned intelligently..
    function incrementPoolBalance (address from, uint marketId, uint amount) returns (boolean) {
        //receive coins from someone adding to the lending pool, 
        //making sure to record their contribution on-chain

        //add this to the total pool balance

       //CHECK for exceptions

        //make sure contributor has sufficient funds

        //decrement contributor wallet balance 
        //increment pool 
        Market[poolBalance] = 0; 

        Market[poolBalance]++;



        //return true if completed successfully
    }

    eventDefaultOccured(address borrower, address lender, Market[contract] specifiedMarket );

    //event emitted in the event that a default occurs 
    //needs to contain references to the borrower, lender, and the specific contract that was defaulted upon 

    function handleDefault(borrower, lender, contract) returns (true) {


        //return money to lender 

        //check before doing this 
        //ensure default has occured --> event listener? 
        Market[poolBalance]--;

       // defaultAmount = Markets[Requests].amountBorrowed
        //decrement pool balance and move coins to the lender address 
        if (Market[poolBalance] >= defaultAmount) {
            //send the default amount 



        }
        else {
            //forfeit the entire pool 

            //Post PC: 
            //
        }



        //decrement the borrower's trustworthiness metric with respect to the lender 
        // borrower.trustworthiness[lender]--



        //emit an event saying that this default was occured, and handled, and the trustworthiness scores were adjusted accordingly 
        //this is important for transparency 


    }




    //1) lender puts money into insurance pool (comes from tx costs)

    //2) all lenders share the pool 



    //3) in the event of a default, lender gets money back equal to the value of the contract not including insurance and fees. 

// -- 
    








}