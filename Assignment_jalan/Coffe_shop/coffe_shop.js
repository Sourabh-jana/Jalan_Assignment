const promt = require("prompt-sync")();

class Menu {
    constructor() {
        this.menu = {
            Espresso: {
                Milk: 60,
                Cream: 75,
                Latte: 100
            },
            Cappuccino: {
                Milk: 80,
                Cream: 90,
                Latte: 125,
            },
            Latte: {
                Milk: 100,
                Cream: 125,
                Latte: 150,
            },
        }
    }

    printMenu() {
        console.log("\n--------------- Your Menu ---------------")
        console.table(this.menu)
    }
}

class User extends Menu {
    constructor() {
        super();             // to access the properties of parent class
        this.printMenu()     // shows the menu to user
        this.total = 0
        this.bill = {}
    }

    getOrder() {
        let messg = ""
        while (messg.slice(0, 1).toLocaleLowerCase() != "n") {
            let subTotal = 0

            console.log("\nPlease enter the choises -")
            const coffeeType = promt("Your coffee type : ");
            if (!this.menu[`${coffeeType}`]) {
                console.log("Sorry, Please provid the correct options 🥺")
                continue                
            }
            
            let add_ons = []
            let flage = false
            // check for the wrong input
            while(!flage){
                add_ons = promt("Add-ons : ").split(" ");
                add_ons.forEach(item => {
                    if (this.menu[`${coffeeType}`][`${item}`]) {
                        subTotal += this.menu[`${coffeeType}`][`${item}`]
                        flage = true                
                    }
                    else{
                        console.log(" ⭕ Sorry, Please provid the correct option 🥺")
                    }
                })
            }
            
            const num = promt("Number of cups : ")
            // current subTotal
            subTotal *= num

            this.bill[`${num} ${coffeeType} with ${add_ons}`] = `₹ ${subTotal}`
            this.total += subTotal

            messg = promt("Would you like to add more [y/n] : ")
        }
    }

    showBill() {
        console.log("\n--------------- Your Bill ---------------")
        console.table(this.bill)
        console.log("\n\tTotal bill fare is : \t₹", this.total)
        console.log("\n\tThank you 🙏 Visit again !!\n")
    }

}

const user1 = new User();

user1.getOrder();
user1.showBill();































/*
Promt for choises
let messg = ""
while (messg.slice(0, 1).toLocaleLowerCase() != "n") {

    console.log("\n")
    const coffeeType = promt("Please enter Your coffee type : ")
    coffeeTypes.push(coffeeType.toLowerCase())

    const add_on = promt("Please enter add-ons : ")
    add_ons.push(add_on.toLowerCase())

    messg = promt("Would you like to add another cup [y/n] : ")
}
*/


// for (let i = 0; i < coffeeTypes.length; i++) {
//     console.log(coffeeTypes[i], "\t", add_ons[i])
// }