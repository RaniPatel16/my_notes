class Bank {
    private static totalBankHoldingAmount: number = 0
    private static totalAccountHolder: number = 0

    constructor(
        public id: number,
        public name: string,
        public amount: number
    ) {
        Bank.totalBankHoldingAmount += amount
        Bank.totalAccountHolder++
    }

    credit(amount: number) {
        Bank.totalBankHoldingAmount += amount
        this.amount += amount
    }

    debit(amount: number) {
        Bank.totalBankHoldingAmount -= amount
        this.amount -= amount
    }

    getAccountInfo() {
        console.log(`Name: ${this.name}\nMy_Balance: ${this.amount}\n`)
    }

    static bankDetail() {
        console.log(`Total Acounts: ${Bank.totalAccountHolder}\nTotal Amount: ${Bank.totalBankHoldingAmount}`)
    }
}


// Inheritance
class AdminBank extends Bank {

    constructor(
        id: number,
        name: string,
        amount: number,
        private age: number
    ) {
        super(id, name, amount)
    }

    manageBank(): void {
        console.log("Managing bank")
    }

    credit(amount: number) {
        super.credit(amount)
        console.log("Admin credit operation")
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


// AdminBank objects
const b3 = new AdminBank(3, " nita", 7000, 20)

b3.getAccountInfo()

b3.credit(2000)

b3.getAccountInfo()

b3.manageBank()

Bank.bankDetail()