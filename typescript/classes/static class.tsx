// // new account object -> id, name, amount
// // class level -> total bank amount

// class Bank {

//     static totalBankAmount: number = 0;
//   static totalAccount:number=0;
//     constructor(
//         public id: number,
//         public name: string,
//         public amount: number
//     ) { Bank.totalBankAmount += amount;
//       Bank.totalAccount++
//       }
  

//     credit(amount: number) {
//         this.amount += amount;
//         Bank.totalBankAmount += amount;
//     }

//     debit(amount: number) {
//         this.amount -= amount;
//         Bank.totalBankAmount -= amount;
//     }

//     getAccountInfo() {
//         console.log( `Name: ${this.name}\nMy_Balance: ${this.amount}`  );
//     }

//     static getTotalBankAmount() {
//         console.log(
//             `Total Bank Amount: ${Bank.totalBankAmount}`
//         );
//     }
// }


// const b1 = new Bank(1, "harpal", 5000);
// const b2 = new Bank(2, "zeel", 6000);
// const b3 = new Bank(3, "Rani", 4000);


// b1.getAccountInfo();
// b2.getAccountInfo();
// b3.getAccountInfo();


// // Credit
// b1.credit(2000);

// // Debit
// b2.debit(1500);


// b1.getAccountInfo();
// b2.getAccountInfo();
// b3.getAccountInfo();


// // Static 
// Bank.getTotalBankAmount();
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
// written by sir 

// new account/object => id, name, amount  | credit and debit
// class level \ Bank Amount

class Bank {
    private static totalBankHoldingAmount: number = 0
    private static totalAccountHolder:number = 0

    constructor(
        public id:number,
        public name:string,
        public amount: number
    ){
        Bank.totalBankHoldingAmount += amount
        Bank.totalAccountHolder++
    }

    credit(amount:number) {
        Bank.totalBankHoldingAmount += amount
        this.amount += amount
    }
    debit(amount:number) {
        Bank.totalBankHoldingAmount -= amount
        this.amount -= amount
    }

    getAccountInfo(){
        console.log(`Name: ${this.name}\nMy_Balance: ${this.amount}\n`)
    }

    static bankDetail() {
        console.log(`Total Acounts: ${Bank.totalAccountHolder}\nTotal Amount: ${Bank.totalBankHoldingAmount}`)
    }

}

const b1 = new Bank(1, "Rani", 5000)
const b2 = new Bank(1, "Zeel", 6000)

b1.getAccountInfo()
b2.getAccountInfo()

b1.credit(2000)
b2.credit(1500)

b1.getAccountInfo()
b2.getAccountInfo()

b1.debit(4000)
b2.debit(1200)

b1.getAccountInfo()
b2.getAccountInfo()


Bank.bankDetail()


--------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------