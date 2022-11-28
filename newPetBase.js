////Some global constants

//HEADER
const myHeading = document.getElementsByTagName("h1")[0];
const giveMeAName = document.querySelector(".input-and-sumbit-cont")
let chosenName

//Picture
const petPic = document.getElementById("myPetPic")

//choice buttons
const caseyButton = document.getElementById("casey");
const matthewButton = document.getElementById("matthew")

//CHARACTERISTICS
const type = document.getElementById("type")
const myNewName = document.getElementById("my-new-name")
const age = document.getElementById("age")

//SCORES
const happiness = document.getElementById("happiness")
const cleanliness = document.getElementById("cleanliness")
const hunger = document.getElementById("hunger")
const number3 = document.getElementById("number-3")
const number4 = document.getElementById("number-4")

//BUTTONS
const play = document.getElementById("play")


class Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.happiness = happiness;
        this.cleanliness = cleanliness;
        this.hunger = hunger;
    }
    giveFood() {
        // con
        this.hunger -= 10;
        this.cleanliness -= 10;
        // pro
        this.happiness += 5;
    }
    

}

class FerretPet extends Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, wriggle, dig) {
        super(type, name, age, happiness, cleanliness, hunger)
        this.wriggle = wriggle
        this.dig = dig

     }
    addCasey() {
        number3.textContent = `Wriggle: ${chosenName.wriggle}`
        number4.textContent = `Dig: ${chosenName.dig}`
    }
    extra1() {
        petPic.src = "./images/ferret.wriggle.gif"
    }
    }


class DogPet extends Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, panting, dribbling) {
        super(type, name, age, happiness, cleanliness, hunger)
        this.panting = panting
        this.dribbling = dribbling
    }
    addMatthew() {
        number3.textContent = `Panting: ${chosenName.panting}`
        number4.textContent = `Dribbling: ${chosenName.dribbling}`
    }
    extra1() {
        petPic.src = "./images/dribbledog.gif"
    }
}

const MatthewPet = new DogPet("dog", "", "23", 50, 50, 50, 30, 80)
const AdamPet = new Cyberpet("cat", "", "27", 50, 55, 52)
const ShinaPet = new Cyberpet("mouse", "", "32", 50, 50, 50)
const NickPet = new Cyberpet("hamster", "", "580", 50, 50, 50)
const CaseyPet = new FerretPet("Ferret", "Niffler", "10", 50, 50, 50, 50, 50)

let petArray = [CaseyPet, MatthewPet, AdamPet, ShinaPet, NickPet]


const renderData = () => {
    type.textContent = `Type: ${chosenName.type}`;
    myNewName.textContent = `Name: ${chosenName.name}`;
    age.textContent = `Age: ${chosenName.age}`;
    happiness.textContent = `Happiness: ${chosenName.happiness}`;
    cleanliness.textContent = `Cleanliness: ${chosenName.cleanliness}`
    hunger.textContent = `Hunger: ${chosenName.hunger}`
}

//CASEY BUTTON
caseyButton.addEventListener("click", () => {
petPic.src = "./images/ferret_1.png"
    chosenName = petArray[0]
    CaseyPet.addCasey();// new code
    console.log(chosenName)
    renderData();
})

//MATTHEW BUTTON
matthewButton.addEventListener("click", () => {
    chosenName = petArray[1]
    MatthewPet.addMatthew(); // Casey's code!!!! Yay!
    console.log(chosenName)
    renderData();
})

//Interaction buttons
play.addEventListener("click", () => {
    chosenName.extra1();
})
