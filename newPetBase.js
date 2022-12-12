//SOME GLOBAL CONSTANTS

//HEADER
const myHeading = document.getElementsByTagName("h1")[0];
const giveMeAName = document.querySelector(".input-and-sumbit-cont")
let chosenName
// let activity1 = 'new-activity-1'//variable for first extra function
// let activity2 = 'new-activity-2'//variable for second extra function

// //PICTURE
// const petPic = document.getElementById("myPetPic") //The pic that appears when a pet is initially chosen

//CONSOLE IMAGE
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");

const b1 = document.getElementById("b1");
let screen = document.getElementById("screen");
const b3 = document.getElementById("b3");

const c1 = document.getElementById("c1");
const c2_munch = document.getElementById("c2-munch");
const c3_slurp = document.getElementById("c3-slurp");
const c4_extra1 = document.getElementById("c4-extra1");
const c5_extra2 = document.getElementById("c5-extra2");
const c6 = document.getElementById("c6");

const d1 = document.getElementById("d1");
const d2_button1 = document.getElementById("d2-button1");
const d3_button2 = document.getElementById("d3-button2");
const d4_button3 = document.getElementById("d4-button3");
const d5_button4 = document.getElementById("d5-button4");
const d6 = document.getElementById("d6");

const e1 = document.getElementById("e1");

//CONSTANTS FOR THE AREAS TO LEFT AND RIGHT OF THE CONSOLE
const leftside = document.getElementById("left-side")
const rightside = document.getElementById("right-side")

//HIDE THE LEFT AND RIGHT SIDE ON START
leftside.style.display = "none"
rightside.style.display = "none"

//'CHOOSE A PET' BUTTONS
const caseyButton = document.getElementById("casey");
const matthewButton = document.getElementById("matthew")
const adamButton = document.getElementById("adam")
const nickButton = document.getElementById("nick")
const shinaButton = document.getElementById("shina")

//CHARACTERISTICS - TYPE, NAME, AGE - THESE IDENTIFY WHERE THE TEXT APPEARS IN THE HTML
const type = document.getElementById("type")
const myNewName = document.getElementById("my-new-name")
const age = document.getElementById("age")

//SCORES - THESE IDENTIFY WHERE THE TEXT APPEARS IN THE HTML
const happiness = document.getElementById("happiness") //SCORE No.1
const cleanliness = document.getElementById("cleanliness") //SCORE No.2
const hunger = document.getElementById("hunger") //SCORE No.3
const thirst = document.getElementById("thirst") //SCORE No.4

let scoreName5; //this is a variable that holds the name of the first score category unique to each pet
let scoreName6; //this is a variable that holds the name of the second score category unique to each pet

//SCORES THAT ARE UNIQUE TO EACH PET - THESE IDENTIFY WHERE THE TEXT APPEARS IN THE HTML
const number5 = document.getElementById("number-5") //SCORE No.4
const number6 = document.getElementById("number-6") //SCORE No.5

//BUTTONS COMMON TO ALL PETS
const feed = document.getElementById("feed")
const drink = document.getElementById("drink")
//BUTTONS UNIQUE TO EACH PET
const extra1 = document.getElementById("extra1")
const extra2 = document.getElementById("extra2")

//SCREEN WRITING/STATISTICS
const stats = document.getElementById("stats")

//HIDE THE STATISTICS
stats.style.display = 'none';

//THE MAIN PCTURES FOR THE CONSOLE
a1.src = "./Images/console/700pxh/tamagochi_A1.png";
a2.src = "./Images/console/700pxh/tamagochi_A2.png"; //This one changes when the pet is chosen
a3.src = "./Images/console/700pxh/tamagochi_A3.png";

b1.src = "./Images/console/700pxh/tamagochi_B1.png";
// b2.src = "./Images/console/700pxh/tamagochi_B2.png"; // This is where the pet pic appears
b3.src = "./Images/console/700pxh/tamagochi_B3.png";

c1.src = "./Images/console/700pxh/tamagochi_C1.png";
c2_munch.src = "./Images/console/700pxh/tamagochi_C2_munch_unlit.png";
c3_slurp.src = "./Images/console/700pxh/tamagochi_C3_slurp_unlit.png";
c4_extra1.src = "./Images/console/700pxh/tamagochi_C4_extra1_unlit.png";
c5_extra2.src = "./Images/console/700pxh/tamagochi_C5_extra2_unlit.png";
c6.src = "./Images/console/700pxh/tamagochi_C6.png";

d1.src = "./Images/console/700pxh/tamagochi_D1.png";
d2_button1.src = "./Images/console/700pxh/tamagochi_D2_button1_unlit.png";
d3_button2.src = "./Images/console/700pxh/tamagochi_D3_button2_unlit.png";
d4_button3.src = "./Images/console/700pxh/tamagochi_D4_button3_unlit.png";
d5_button4.src = "./Images/console/700pxh/tamagochi_D5_button4_unlit.png";
d6.src = "./Images/console/700pxh/tamagochi_D6.png";

e1.src = "./Images/console/700pxh/tamagochi_E1.png";

//SOME NICK CONSTANTS
let fishpix = ["./images/nickpix/fish_100px.png", "./images/nickpix/fish_100px.png", "./images/nickpix/fish_100px.png", "./images/nickpix/fish_100px.png", "./images/nickpix/fish_100px.png"]
const formatArray = () => {
    let formatFish = fishpix.map(moreStuff => `<img src=${moreStuff}>`).join('\n');
    rightside.innerHTML = formatFish;
}
const splash = document.getElementById("splash")


class Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, thirst) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.happiness = happiness;
        this.cleanliness = cleanliness;
        this.hunger = hunger;
        this.thirst = thirst;
    }
    giveFood() {
        // con
        this.hunger -= 10;
        this.cleanliness -= 10;
        // pro
        this.happiness += 5;
    }
    giveDrink() {
        // con
        this.hunger -= 50;
        this.cleanliness -= 5;
        // pro
        this.happiness += 30;
    }


}

class FerretPet extends Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, thirst, wriggle, dig) {
        super(type, name, age, happiness, cleanliness, hunger, thirst)
        this.score5 = wriggle //we use a 'score5' in the 'this.' part to call the unique characteristic/activity
        this.score6 = dig //we use 'score6' in the 'this.' part to call the unique characteristic/activity

    }
    addCasey() {
        number5.textContent = `Wriggle: ${chosenName.score5}` //This is where you put your unique characteristics
        number6.textContent = `Dig: ${chosenName.score6}` //This is where you put your unique characteristics
    }
    giveFood() {
        // con
        this.hunger -= 40;
        this.cleanliness -= 40;
        // pro
        this.happiness += 50;
    }
    giveDrink() {
        // con
        this.hunger -= 5;
        this.cleanliness -= 5;
        // pro
        this.happiness += 5;
    }
    extra1() {
        // petPic.src = "./images/ferret.wriggle.gif"
        this.hunger -= 100
    }
    extra2() {

    }
}


class DogPet extends Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, thirst, panting, dribbling) {
        super(type, name, age, happiness, cleanliness, hunger, thirst)
        this.score5 = panting //we use 'score5' in the 'this.' part to call the unique characteristic/activity
        this.score6 = dribbling //we use 'score6' in the 'this.' part to call the unique characteristic/activity
    }
    addMatthew() {
        number5.textContent = `Panting: ${chosenName.score5}` //This is where you put your unique characteristics
        number6.textContent = `Dribbling: ${chosenName.score6}` //This is where you put your unique characteristics
    }
    extra1() {
        // petPic.src = "./images/dribbledog.gif"
    }
    extra2() {

    }
}

class SealPet extends Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, thirst, dive, ask) {
        super(type, name, age, happiness, cleanliness, hunger, thirst)
        this.score5 = dive //we use a 'score5' in the 'this.' part to call the unique characteristic/activity
        this.score6 = ask //we use 'score6' in the 'this.' part to call the unique characteristic/activity

    }
    addNick() {
        number5.textContent = `Wriggle: ${chosenName.score5}` //This is where you put your unique characteristics
        number6.textContent = `Dig: ${chosenName.score6}` //This is where you put your unique characteristics
    }
    giveFood() {
        // con
        this.hunger -= 40;
        this.cleanliness -= 40;
        // pro
        this.happiness += 50;
    }
    giveDrink() {
        // con
        this.hunger -= 5;
        this.cleanliness -= 5;
        // pro
        this.happiness += 5;
    }

    //DIVE:  - BACKGROUND IMAGE: Photo by <a href="https://unsplash.com/@hisarahlee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Lee</a> on <a href="https://unsplash.com/s/photos/underwater?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    extra1() {
        document.querySelector("body").setAttribute('style', 'background-image: url("./images/nickpix/underwater.jpg");background-size:cover;');
        splash.play();
        fishpix.push("./images/nickpix/fish_100px.png");
        formatArray()

        // petPic.src = "./images/ferret.wriggle.gif"
        this.hunger -= 100
    }
    extra2() {

    }
}


//each constant has 8 entries: Type, name, age, happiness, cleanliness, hunger plus two extra
const MatthewPet = new DogPet("dog", "", "23", 50, 50, 50, 50, 30, 80)
const AdamPet = new Cyberpet("cat", "", "27", 50, 50, 55, 52, 50, 64)
const ShinaPet = new Cyberpet("mouse", "", "32", 50, 50, 50, 50, 50, 50)
const NickPet = new SealPet("seal", "", "580", 50, 50, 50, 50, 50, 50)
const CaseyPet = new FerretPet("Ferret", "Niffler", "10", 50, 50, 50, 50, 50, 50)

//We use the petArray below as a means of capturing the pet in each of the buttons (caseypet, matthewpet, etc...)
let petArray = [CaseyPet, MatthewPet, AdamPet, ShinaPet, NickPet]

//renderData() is initailly called when choosing a pet and then each time that you press one of the yellow buttons. 
const renderData = () => {
    type.textContent = `type: ${chosenName.type}`;
    myNewName.textContent = `name: ${chosenName.name}`;
    age.textContent = `age: ${chosenName.age}`;
    happiness.textContent = `happiness: ${chosenName.happiness}`;
    cleanliness.textContent = `cleanliness: ${chosenName.cleanliness}`
    hunger.textContent = `hunger: ${chosenName.hunger}`
    thirst.textContent = `thirst: ${chosenName.thirst}`
    number5.textContent = `${scoreName5}: ${chosenName.score5}`;
    number6.textContent = `${scoreName6}: ${chosenName.score6}`;
}

//CASEY BUTTON
// IMAGE SIZE FOR PICTURES IS 352px WIDE by 220px HIGH
caseyButton.addEventListener("click", () => {
    a2.src = "./Images/console/700pxh/tamagochi_A2_casey.png"; //Name on top of console
    c4_extra1.src = "./images/console/700pxh/tamagochi_C4_wriggle_unlit.png";
    c5_extra2.src = "./images/console/700pxh/tamagochi_C5_dig_unlit.png"
    document.getElementById("screen").setAttribute('style', 'background-color:black');

    // b2.src = "./images/ferret_1.png"
    chosenName = petArray[0]
    CaseyPet.addCasey();// new code
    scoreName5 = 'wriggle';
    scoreName6 = 'dig';
    stats.style.display = 'block'; // SHOW THE STATS
    type.style.color = 'red';
    type.style.fontFamily = 'monospace'
    renderData();
})

//MATTHEW BUTTON
// IMAGE SIZE FOR PICTURES IS 352px WIDE by 220px HIGH
matthewButton.addEventListener("click", () => {
    chosenName = petArray[1]
    a2.src = "./Images/console/700pxh/tamagochi_A2_matthew.png"; //Name on top 
    MatthewPet.addMatthew(); // Casey's code!!!! Yay!
    scoreName5 = 'panting'
    scoreName6 = 'dribbling'
    stats.style.display = 'block'; // SHOW THE STATS
    renderData();
})

//ADAM BUTTON
// IMAGE SIZE FOR PICTURES IS 352px WIDE by 220px HIGH
adamButton.addEventListener("click", () => {
    chosenName = petArray[2]
    a2.src = "./Images/console/700pxh/tamagochi_A2_adam.png"; //Name on top 
    AdamPet.addAdam(); // Casey's code!!!! Yay!
    scoreName5 = ''
    scoreName6 = ''
    stats.style.display = 'block'; // SHOW THE STATS
    renderData();
})

//SHINA BUTTON
// IMAGE SIZE FOR PICTURES IS 352px WIDE by 220px HIGH
// shinaButton.addEventListener("click", () => {
//     chosenName = petArray[3]
//     // a2.src = ""; //Name on top 
//     ShinaPet.addShina(); // Casey's code!!!! Yay!
//     scoreName5 = ''
//     scoreName6 = ''
// stats.style.display = 'block'; // SHOW THE STATS
//     renderData();
// })

// NICK BUTTON
// IMAGE SIZE FOR PICTURES IS 352px WIDE by 220px HIGH

nickButton.addEventListener("click", () => {
    //GET THE CORRECT NAME
    chosenName = petArray[4]

    //CHANGE BACKGROUND
    document.querySelector("body").setAttribute('style', 'background-image: url("./images/nickpix/paper.jpg");background-size:cover;');

    //PUT BACKGROUNDS ON BUTTONS
    caseyButton.setAttribute('style', 'background-color:rgba(137, 123, 112, .75)')
    matthewButton.setAttribute('style', 'background-color:rgba(137, 123, 112, .75)')
    adamButton.setAttribute('style', 'background-color:rgba(137, 123, 112, .75)')
    nickButton.setAttribute('style', 'background-color:rgba(137, 123, 112, .75)')
    shinaButton.setAttribute('style', 'background-color:rgba(137, 123, 112, .75)')

    //SHOW LEFT AND RIGHT SIDE
    leftside.setAttribute('style', 'display: "block"; border: solid rgba(137, 123, 112, 1) 1px; border-radius: 25px; background-color: rgba(161, 152, 145, .5); padding: 20px; line-height: 1em;')
    rightside.setAttribute('style', 'display: "block"; border: solid rgba(137, 123, 112, 1) 1px; border-radius: 25px; background-color: rgba(161, 152, 145, .5); padding: 20px; text-align: center')

    //FONTS ON LEFT SIDE
    type.setAttribute('style','font-family:"Open Sans";font-size: 1.2em; line-height: 0.4em');
    myNewName.setAttribute('style','font-family:"Open Sans";font-size: 1.2em; line-height: 0.4em');
    age.setAttribute('style','font-family:"Open Sans";font-size: 1.2em; line-height: 0.4em');

    //PLACE NAME IMAGE AT TOP OF CONSOLE
    a2.src = "./Images/console/700pxh/tamagochi_A2_nick.png"; //Name on top 

    //PUT IMAGE ON SCREEN
    document.getElementById("screen").setAttribute('style', 'background-image:url("./images/console/700pxh/tamagochi_B2_nick1.png")');

    //ENTER FISH ON RIGHT SIDE
    // document.getElementById("right-side").setAttribute('style', 'border: none;background-color: rgba(137, 123, 112, .5); border-radius: 25px')
    rightside.innerHTML = fishpix;
    formatArray()

    //CHANGE BUTTON LABELS
    c4_extra1.src = "./images/console/700pxh/tamagochi_C4_dive_unlit.png";
    c5_extra2.src = "./images/console/700pxh/tamagochi_C5_ask_unlit.png";

    // paras.classList.add('my-new-text')
    NickPet.addNick(); // Casey's code!!!! Yay!
    scoreName5 = 'dive'
    scoreName6 = 'ask'

    //DISPLAY STATS IN THEIR LOCATIONS
    stats.style.display = 'block'; // SHOW THE STATS

    //RENDER THE DATA
    renderData();
})

//INTERACTION BUTTONS

// MUNCH BUTTON
d2_button1.addEventListener("mouseenter", () => {
    c2_munch.src = "./images/console/700pxh/tamagochi_C2_munch_lit.png"
})
d2_button1.addEventListener("mouseleave", () => {
    c2_munch.src = "./images/console/700pxh/tamagochi_C2_munch_unlit.png"
    d2_button1.src = "./images/console/700pxh/tamagochi_D2_button1_unlit.png"
})
d2_button1.addEventListener("mousedown", () => {
    d2_button1.src = "./images/console/700pxh/tamagochi_D2_button1_lit.png"

    chosenName.giveFood();
    // checkCondition();
    // flag = true;
    renderData();
})
d2_button1.addEventListener("mouseup", () => {
    d2_button1.src = "./images/console/700pxh/tamagochi_D2_button1_unlit.png"
})

//SLURP BUTTON
d3_button2.addEventListener("mouseenter", () => {
    c3_slurp.src = "./images/console/700pxh/tamagochi_C3_slurp_lit.png"
})
d3_button2.addEventListener("mouseleave", () => {
    c3_slurp.src = "./images/console/700pxh/tamagochi_C3_slurp_unlit.png"
    d3_button2.src = "./images/console/700pxh/tamagochi_D3_button2_unlit.png"
})
d3_button2.addEventListener("mousedown", () => {
    d3_button2.src = "./images/console/700pxh/tamagochi_D3_button2_lit.png"
    chosenName.giveDrink()
    renderData();
})
d3_button2.addEventListener("mouseup", () => {
    d3_button2.src = "./images/console/700pxh/tamagochi_D3_button2_unlit.png"
})

//EXTRA1 BUTTON - WE NEED TO USE IF/ELSE TO GIVE THE CORRECT MOUSEOVER PIX
d4_button3.addEventListener("mouseenter", () => {
    if (chosenName == petArray[0]) {
        c4_extra1.src = "./images/console/700pxh/tamagochi_C4_wriggle_lit.png"
    } else if (chosenName == petArray[4]) {
        c4_extra1.src = "./images/console/700pxh/tamagochi_C4_dive_lit.png"
    } else {
        c4_extra1.src = "./images/console/700pxh/tamagochi_C4_extra1_lit.png"
    }
})
d4_button3.addEventListener("mouseleave", () => {
    if (chosenName == petArray[0]) {
        c4_extra1.src = "./images/console/700pxh/tamagochi_C4_wriggle_unlit.png"
        d4_button3.src = "./images/console/700pxh/tamagochi_D4_button3_unlit.png"
    } else if (chosenName == petArray[4]) {
        c4_extra1.src = "./images/console/700pxh/tamagochi_C4_dive_unlit.png"
        d4_button3.src = "./images/console/700pxh/tamagochi_D4_button3_unlit.png"
    }
    else {
        c4_extra1.src = "./images/console/700pxh/tamagochi_C4_extra1_unlit.png"
        d4_button3.src = "./images/console/700pxh/tamagochi_D4_button3_unlit.png"
    }
})
d4_button3.addEventListener("mousedown", () => { //NO CHANGE NECESSARY HERE
    d4_button3.src = "./images/console/700pxh/tamagochi_D4_button3_lit.png"
    chosenName.extra1();
    renderData();
})
d4_button3.addEventListener("mouseup", () => { //NO CHANGE NECESSARY HERE
    d4_button3.src = "./images/console/700pxh/tamagochi_D4_button3_unlit.png"
})


//EXTRA2 BUTTON - WE NEED TO USE IF/ELSE TO GIVE THE CORRECT MOUSEOVER PIX
d5_button4.addEventListener("mouseenter", () => {
    if (chosenName == petArray[0]) {
        c5_extra2.src = "./images/console/700pxh/tamagochi_C5_dig_lit.png"
    } else if (chosenName == petArray[4]) {
        c5_extra2.src = "./images/console/700pxh/tamagochi_C5_ask_lit.png"
    } else {
        c5_extra2.src = "./images/console/700pxh/tamagochi_C5_extra2_lit.png"
    }
})

d5_button4.addEventListener("mouseleave", () => {
    if (chosenName == petArray[0]) {
        c5_extra2.src = "./images/console/700pxh/tamagochi_C5_dig_unlit.png"
        d5_button4.src = "./images/console/700pxh/tamagochi_D5_button4_unlit.png"
    } else if (chosenName == petArray[4]) {
        c5_extra2.src = "./images/console/700pxh/tamagochi_C5_ask_unlit.png"
        d5_button4.src = "./images/console/700pxh/tamagochi_D5_button4_unlit.png"
    }
    else {
        c5_extra2.src = "./images/console/700pxh/tamagochi_C5_extra2_unlit.png"
        d5_button4.src = "./images/console/700pxh/tamagochi_D5_button4_unlit.png"
    }
})

d5_button4.addEventListener("mousedown", () => {
    d5_button4.src = "./images/console/700pxh/tamagochi_D5_button4_lit.png"
    chosenName.extra2();
    renderData();
})
d5_button4.addEventListener("mouseup", () => {
    d5_button4.src = "./images/console/700pxh/tamagochi_D5_button4_unlit.png"
})