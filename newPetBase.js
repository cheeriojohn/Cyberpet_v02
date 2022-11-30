////Some global constants

//HEADER
const myHeading = document.getElementsByTagName("h1")[0];
const giveMeAName = document.querySelector(".input-and-sumbit-cont")
let chosenName

//Picture
const petPic = document.getElementById("myPetPic")

//CONSOLE IMAGE
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");



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
const feed = document.getElementById("feed")

//Console Images
a1.src = "./Images/tamagochi_A1.png";
a2.src = "./Images/tamagochi_A2.png";
a3.src = "./Images/tamagochi_A3.png";

b1.src = "./Images/tamagochi_B1.png";
b2.src = "./Images/tamagochi_B2.png";
b3.src = "./Images/tamagochi_B3.png";

c1.src = "./Images/tamagochi_C1.png";
c2.src = "./Images/tamagochi_C2.png";
c3.src = "./Images/tamagochi_C3.png";

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
    giveFood() {
  // con
  this.hunger -= 40;
  this.cleanliness -= 40;
  // pro
  this.happiness += 50;
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
a2.src = "./Images/tamagochi_A2_casey.png";
    chosenName = petArray[0]
    CaseyPet.addCasey();// new code
    console.log(chosenName)
    renderData();
})

//MATTHEW BUTTON
matthewButton.addEventListener("click", () => {
    chosenName = petArray[1]
    a2.src = "./Images/tamagochi_A2_matthew.png";
    MatthewPet.addMatthew(); // Casey's code!!!! Yay!
    console.log(chosenName)
    renderData();
})

//Interaction buttons
feed.addEventListener("click", () => {
    chosenName.giveFood();
    // checkCondition();
    flag = true;
    renderData();
})


play.addEventListener("click", () => {
    chosenName.extra1();
})
