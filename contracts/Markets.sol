pragma solidity ^0.4.18;

contract Markets {

    struct Market {
      uint poolBalance;
      bytes32 riskMetric; 
      uint[] requestIndexes;
    }

    struct Request {
      address debtors;
      address creditors;
      uint amount;
      bytes32 interest;
    }

    mapping (uint => Request) requests;

    Market[] public markets; 

    function createMarket(bytes32 _riskMetric) {
      uint[] memory _requestIndexes;
      markets.push(Market(0, _riskMetric, _requestIndexes));
    }


    // function getDebtors(uint marketIndex) returns (uint) {
    //   return markets[marketIndex].debtors;
    // }

    // function getCreditors(uint marketIndex) returns (uint) {
    //     return markets[marketIndex].creditors;
    //     //
    // }

    function createLoan(uint marketIndex) payable {
      
    }


    //this function needs to be permissioned intelligently..
    function incrementPoolBalance (address from, uint marketId, uint amount) returns (bool) {
        //receive coins from someone adding to the lending pool, 
        //making sure to record their contribution on-chain

        //add this to the total pool balance

       //CHECK for exceptions

        //make sure contributor has sufficient funds

        //decrement contributor wallet balance 
        //increment pool 
        // Market[poolBalance] = 0; 

        // Market[poolBalance]++;



        //return true if completed successfully
    }

    // eventDefaultOccured(address borrower, address lender, Market[contract] specifiedMarket );

    //event emitted in the event that a default occurs 
    //needs to contain references to the borrower, lender, and the specific contract that was defaulted upon 

    function handleDefault(address borrower, address lender) returns (bool) {


        //return money to lender 

        //check before doing this 
        //ensure default has occured --> event listener? 
        // Market[poolBalance]--;

       // defaultAmount = Markets[Requests].amountBorrowed
        //decrement pool balance and move coins to the lender address 
        // if (Market[poolBalance] >= defaultAmount) {
            //send the default amount 



        // }
        // else {
        //     //forfeit the entire pool 

        //     //Post PC: 
        //     //
        // }



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