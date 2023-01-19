//SOME GLOBAL CONSTANTS

//HEADER
const myHeading = document.getElementsByTagName("h1")[0];
const gimmeNameDiv = document.getElementById("gimme-name-div")
const gimmeNameInput = document.querySelector("#gimme-name")
gimmeNameDiv.style.display = 'none'
let chosenName


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
const type = document.getElementById("type");
const myNewName = document.getElementById("my-new-name");
myNewName.style.visibility = 'hidden'; //HIDE THIS TEXT TILL AFTER THE PET HAS BEEN GIVEN A NAME
const age = document.getElementById("age");
age.style.visibility = 'hidden'; //HIDE THIS TEXT TILL AFTER THE PET HAS BEEN GIVEN A NAME

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
// the screen picture comes from the SUB-CLASSES or from the gimmeName() code
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

const quotes = [
    "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    "The wise person does at once what the fool does finally.",
    "We are made wise not by the recollection of our past, but by the responsibility for our future.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
    "Never memorize something that you can look up.", "If we knew what it was we were doing, it would not be called research, would it?",
    "The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.",
    "Time is a drug. Too much of it kills you.",
    "An expert is a person who has made all the mistakes that can be made in a very narrow field.",
    "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
    "That which can be asserted without evidence, can be dismissed without evidence.",
    "Everything must be made as simple as possible. But not simpler.",
    "The good thing about science is that it's true whether or not you believe in it.",
    "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.",
    "If you wish to make an apple pie from scratch, you must first invent the universe.",
    "Any sufficiently advanced technology is indistinguishable from magic.",
    "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",
    "Physics is like sex: sure, it may give some practical results, but that's not why we do it.",
    "Do you know what we call opinion in the absence of evidence? We call it prejudice.",
    "If you try and take a cat apart to see how it works, the first thing you have on your hands is a non-working cat.",
    "We are an impossibility in an impossible universe.",
    "I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail.",
    "Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
    "Be yourself; everyone else is already taken.",
    "You only live once, but if you do it right, once is enough.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
    "I love deadlines. I love the whooshing noise they make as they go by.",
    "I'm not afraid of death; I just don't want to be there when it happens.",
    "Creativity is knowing how to hide your sources.", "The statistics on sanity are that one out of every four people is suffering from a mental illness. Look at your 3 best friends. If they're ok, then it's you.",
    "Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.",
    "All God does is watch us and kill us when we get boring. We must never, ever be boring.",
    "I refuse to answer that question on the grounds that I don't know the answer.",
    "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the heck she is.",
    "Jackdaws can identify individual humans, I don't know how they do it. Only a few animals are capable of this...",
    "Jackdaws are colonial cavity nesters, and will use anything from a hole in a tree to a chimney. Jackdaw nests are usually constructed with sticks to form the outer section of the nest, and lined with wool or hair. You can encourage jackdaws to nest in your garden by putting up tawny owl boxes.",
    "The smallest seal species is the Galapagos Fur Seal (1m in length and 45kg in weight) whilst the largest is the Southern Elephant Seal which weighs a whopping 3,850kgs and measures up to 5m in length!",
    "Seal will dive up to 900m in search for food. Some seals can hold their breath underwater for up to 2 hours! The Northern Elephant seals spend the majority of their time at depth. They are only coming to the surface for a few minutes between dives. Before the dive, the Elephant seal first exhales to empty their lungs. During their long migration trek, these creatures dive for food in this manner.",
    "It is generally agreed that shamanism originated among hunting-and-gathering cultures, and that it persisted within some herding and farming societies after the origins of agriculture. It is often found in conjunction with animism, a belief system in which the world is home to a plethora of spirit-beings that may help or hinder human endeavours.",
    "Shamanic symbolism is presented through dramatic enactment and dance. The shaman, garbed in regalia, lifts his voice in song to the spirits. This song is improvised but contains certain obligatory images and similes, dialogue, and refrains.",
    "The Doggerlanders were slowly flooded out of their seasonal hunting grounds. Water previously locked away in glaciers and ice sheets began to melt, drowning Doggerland. Around 6,000 years ago, the Mesolithic people were forced onto higher ground in what is today England and the Netherlands.",
    "The story of the Mesolithic people and their home of Doggerland are cautionary tales for the consequences of a rapidly rising sea level. Glacial melt forced the Mesolithic people out of their homes and now Doggerland, like the fabled Atlantis, is just a sunken and mostly forgotten Stone Age culture, its only evidence being decayed artifacts and fossils of its people.",
    "Evidence of Doggerlanders&#8217; nomadic presence can be found embedded in the seafloor, where modern fishermen often find ancient bones and tools that date to about 9,000 years ago. These artifacts brought Doggerland&#8217;s submerged history to the attention of British and Dutch archaeologists and paleontologists.",
    "Between the 16th and 17th centuries, a wave of suspicion and superstition surrounding witches led to the executions of thousands across Great Britain. More trials and executions for witchcraft took place in Essex than in any other county in the United Kingdom. A granite stone memorializing these tragic events is now located directly opposite Colchester Castle — a place where more than 200 male and female prisoners awaited trial or execution for witchcraft.",
    "The &#8216;paradox&#8217; is only a conflict between reality and your feeling of what reality &#8216;ought to be&#8217;",
    "If you are not completely confused by quantum mechanics, you do not understand it."]

let fishpix = [
    "./images/nickpix/fish_100px.png",
    "./images/nickpix/fish_100px.png",
    "./images/nickpix/fish_100px.png",
    "./images/nickpix/fish_100px.png",
    "./images/nickpix/fish_100px.png",
    "./images/nickpix/fish_100px.png"
]
const formatArray = () => {
    let formatFish = fishpix.map(moreStuff => `<img src=${moreStuff}>`).join('\n');
    rightside.innerHTML = formatFish;
}
const splash = document.getElementById("splash")

const nickGameOver = `<p id="type" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 2.5em; color: #b70505;text-align: center; line-height: 1.2em;'>That's it!</p><p id="type" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 2.5em; color: #b70505;text-align: center; line-height: 1.2em;'>GAME OVER!</p>`

const whoAmI = () => {
    leftside.innerHTML = `<p id="type" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 1.5em; color: #ffffff;'>Well, hello! I'm a ${chosenName.type}.</p><p id="my-new-name" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 1.5em; color: #ffffff;'>You can call me ${chosenName.name}.</p><p id="age" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 1.5em; color: #ffffff;'>I'm ${chosenName.age} years-old.</p>`
    // screen.style.backgroundImage = chosenName.pic1; //CHANGE TO THE START SCREEN FOR CHOSEN PET  
    };

function checkState() {
    // console.log(chosenName.hunger)
    if(fishpix.length == 0) {
        leftside.innerHTML = nickGameOver;
        screen.style.backgroundImage = chosenName.pic4; // DEAD SEAL PIC
    } else if(fishpix.length <= 2) {
        window.setTimeout(() => {
        whoAmI();
        renderData();
        }, 2000);
leftside.innerHTML = `<p id="type" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 2.5em; color: #b70505;text-align: center; line-height: 1.2em;'>HELP!</p><p id="type" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 2.5em; color: #b70505;text-align: center; line-height: 1.2em;'>NEED FISH</p><p id="type" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 2.5em; color: #b70505;text-align: center; line-height: 1.2em;'>MUST DIVE</p>`
    }

    if (chosenName.happiness >= 100) {
        chosenName.happiness = 100;
    }
    if  (chosenName.cleanliness >= 100) {
        chosenName.cleanliness = 100
    }
    if (chosenName.thirst >= 100) {
        chosenName.thirst = 100;
    }
    if (chosenName.happiness <= 40) {
        // image.src = "./images/pikaPunk.jpg"
    }
    if (chosenName.happiness <= 30 || chosenName.hunger <= 10 || chosenName.thirst <= 5 || chosenName.cleanliness <= 30) {
        screen.style.backgroundImage = chosenName.pic3; // SICK SEAL PIC
    }

    if (chosenName.hunger <= 0 || chosenName.thirst <= 0 || chosenName.cleanliness <= 0) {
        leftside.innerHTML = nickGameOver;
        screen.style.backgroundImage = chosenName.pic4; // DEAD SEAL PIC
    }

    if (chosenName.hunger <= 0) {
        chosenName.hunger = 0
    };
    if (chosenName.happiness <= 0) {
        chosenName.happiness = 0
    };
    if (chosenName.thirst <= 0) {
        chosenName.thirst = 0
    // } else if (chosenName.health <= 0) {
    //     chosenName.health = 0;
    };
    if (chosenName.cleanliness <= 0) {
        chosenName.cleanliness = 0;
    };

}


//SET THE TIMER GOING - THESE VALUES ARE TRUE FOR ALL PETS
const timingFunction = () => {
    window.setTimeout(() => {
        chosenName.happiness -= Math.floor(Math.random() * 3);
        chosenName.cleanliness -= Math.floor(Math.random() * 2);
        chosenName.hunger -= Math.floor(Math.random() * 2);
        chosenName.thirst -= Math.floor(Math.random() * 2);
        checkState();
        renderData();
        timingFunction();
    }, 2000);
}

//SET THE AGE TIMER GOING - THESE VALUES ARE TRUE FOR ALL PETS
const timingFunctionAge = () => {
    window.setTimeout(() => {
        chosenName.age += 1;
        // checkState();
        // renderData();
        timingFunctionAge();
    }, 16000); //AGE WILL INCREASE BY 1 YEAR EVERY 16 SECONDS - WE DON'T USE THE RENDER DATA IN HERE AS IT IS COINCIDES WITH EVERY 4th PASS OF timingFunction()
}




// PET NAME STUFF
const nameButtonSubmit = document.getElementById("name-button-submit")


const gimmeName = () => {
    screen.setAttribute('style', 'background-image:url("./images/console/700pxh/tamagochi_B2_gimme-name-trans.png"); background-color:#f5d629');
    gimmeNameDiv.style.display = 'block';
}

nameButtonSubmit.addEventListener("click", () => {
    chosenName.name = gimmeNameInput.value; //APPLIES THE NAME
    stats.style.display = 'block'; // SHOW THE STATS
    gimmeNameDiv.style.display = 'none'; //REMOVE THE GIMMENAME SCREEN
    screen.style.backgroundImage = chosenName.pic1; //CHANGE TO THE START SCREEN FOR CHOSEN PET
    screen.style.backgroundColor = '#191b49'
    myNewName.setAttribute('style', 'display:block;'); //BRINGS UP THE "MY NAME IS..." TEXT IN LEFT BOX
    renderData()
    age.setAttribute('style', 'display:block;'); //BRINGS UP THE "MY AGE IS..." TEXT IN LEFT BOX

    timingFunction(); //STARTS THE TIMER THAT CHANGES THE HAPPINESS, CLEANLINESS, HUNGER AND THIRST STATS ON A REGULAR BASIS
    timingFunctionAge(); //STARTS THE TIMER THAT CHANGES THE AGE STATS ON A REGULAR BASIS

})


class Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, thirst, pic1, pic2, pic3, pic4) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.happiness = happiness;
        this.cleanliness = cleanliness;
        this.hunger = hunger;
        this.thirst = thirst;
        //added a number of pictures to the base pet to be used for the different states
        this.pic1 = pic1;
        this.pic2 = pic2;
        this.pic3 = pic3;
        this.pic4 = pic4;
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
    constructor(type, name, age, happiness, cleanliness, hunger, thirst, pic1, pic2, pic3, pic4, wriggle, dig) {
        super(type, name, age, happiness, cleanliness, hunger, thirst, pic1, pic2, pic3, pic4)
        this.score5 = wriggle //we use a 'score5' in the 'this.' part to call the unique characteristic/activity
        this.score6 = dig //we use 'score6' in the 'this.' part to call the unique characteristic/activity

    }
    addCasey() {
        number5.textContent = `Wriggle: ${chosenName.score5}` //This is where you put your unique characteristics
        number6.textContent = `Dig: ${chosenName.score6}` //This is where you put your unique characteristics
    }
    giveFood() {
        // con
        this.hunger += 5;
        this.cleanliness += 3;
        // pro
        this.happiness += 5;
    }
    giveDrink() {
        // con
        // this.hunger -= 5;
        this.thirst += 5;
        this.cleanliness -= 5;
        // pro
        this.happiness += 5;
    }
    extra1() {
        const ferretDance = () => {
            screen.style.backgroundImage = 'url("./images/caseypix/ferretwriggle2.gif';
            window.setTimeout(() => {
                screen.style.backgroundImage = 'url("./images/caseypix/tamagochi_B2_ferret.png';

            }, 3000);
        }
        ferretDance()

        this.hunger += 5
    }
    extra2() {
        this.thirst += 5
        const ferretDig = () => {
            screen.style.backgroundImage = 'url("./images/caseypix/ferret-ferret-lancer2.gif';
            window.setTimeout(() => {
                screen.style.backgroundImage = 'url("./images/caseypix/tamagochi_B2_ferret.png';

            }, 3000);
        }
        ferretDig()

    }
}


class DogPet extends Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, thirst, pic1, pic2, pic3, pic4, panting, dribbling) {
        super(type, name, age, happiness, cleanliness, hunger, thirst, pic1, pic2, pic3, pic4)
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
    constructor(type, name, age, happiness, cleanliness, hunger, thirst, pic1, pic2, pic3, pic4, dive, ask) {
        super(type, name, age, happiness, cleanliness, hunger, thirst, pic1, pic2, pic3, pic4)
        this.score5 = dive //we use a 'score5' in the 'this.' part to call the unique characteristic/activity
        this.score6 = ask //we use 'score6' in the 'this.' part to call the unique characteristic/activity

    }
    addNick() {
        number5.textContent = `Wriggle: ${chosenName.score5}` //This is where you put your unique characteristics
        number6.textContent = `Dig: ${chosenName.score6}` //This is where you put your unique characteristics
    }
    giveFood() {
        fishpix.pop()
        formatArray()
        // con
        this.hunger += Math.floor(Math.random() * 4);
        this.cleanliness += Math.floor(Math.random() * 3);
        // pro
        this.happiness += Math.floor(Math.random() * 3);
    }
    giveDrink() {
        // con
        console.log(thirst)
        this.thirst += 5;
        this.cleanliness -= 2;
        // pro
        this.happiness += 5;
    }

    //DIVE:  - BACKGROUND IMAGE: Photo by <a href="https://unsplash.com/@hisarahlee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Lee</a> on <a href="https://unsplash.com/s/photos/underwater?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    extra1() {
        chosenName.score5 ++
        chosenName.cleanliness  += Math.floor(Math.random() * 8);

        splash.play();
        screen.style.backgroundImage = chosenName.pic2;
        setTimeout(function () { 
            screen.style.backgroundImage = chosenName.pic1; 
            checkState()
        }, 3000);
        let myCatch = Math.floor(Math.random() * 3) + 1; // No. of fish caught
        // if (myCatch + fishpix.length > 10){
        //     myCatch = 10 - fishpix.length
        // }
        // console.log(`My catch is ${myCatch}\nNumber of fish = ${fishpix.length}`)
        
        let rate = [
            (Math.floor(Math.random() * 800)) + 200, // Time between catches
            (Math.floor(Math.random() * 800)) + 200,
            (Math.floor(Math.random() * 800)) + 200,
        ]
        let count = 0;

        let interval = setInterval(() => {
            console.log(`my catch = ${myCatch}, rate is ${rate}`)
            count += 1;
            if (count === myCatch) {
                clearInterval(interval);
            }

            // display the current time
            let dateTime = new Date();
            let time = dateTime.toLocaleTimeString();
            // console.log(time);
            fishpix.push("./images/nickpix/fish_100px.png");
            formatArray()
            this.happiness += 3;
            this.cleanliness += 3;
            happiness.textContent = `happiness: ${chosenName.happiness}`;
            cleanliness.textContent = `cleanliness: ${chosenName.cleanliness}`;

        }, rate[count]); // Time between catches);


    }

    //ASK BUTTON
    extra2() {
        chosenName.score6 ++
        chosenName.cleanliness  += Math.floor(Math.random() * 4);
        const askQuestion = () => {
            let askPic = Math.floor(Math.random() * 3)
            console.log(askPic)
            switch (askPic) {
                case 0:
                    screen.style.backgroundImage = 'url("./images/nickpix/lecture01.jpg")';
                    break;
                case 1:
                    screen.style.backgroundImage = 'url("./images/nickpix/lecture02.jpg")';
                    break;
                case 2:
                    screen.style.backgroundImage = 'url("./images/nickpix/lecture03.jpg")';
                    break;
                default:
                    screen.style.backgroundImage = 'url("./images/nickpix/lecture01.jpg")';
            }
            let i = Math.floor(Math.random() * 50); // CHOOSE A QUOTE
    
            leftside.innerHTML = `<p id="type" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 1.5em; color: #ffffff;'>Well, hello! I'm a ${chosenName.type}.</p><p id="my-new-name" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 1.5em; color: #ffffff;'>You can call me ${chosenName.name}.</p><p id="age" class="my-text" style='font-family:"Irish Grover", cursive;font-size: 1.5em; color: #ffffff;'>I'm ${chosenName.age} years-old.</p><p>&nbsp;</p><p style='font-family:"Cutive Mono", monospace;font-size: 1em; line-height: 1em; color: #ffffff;'>"Now, here's a thought..."</p><p>&nbsp;</p><p style='font-family:"Cutive Mono", monospace;font-size: 1em; line-height: 1em; color: #ffffff;'>"${quotes[i]}"</p>`  


            window.setTimeout(() => {
                whoAmI();
                screen.style.backgroundImage = chosenName.pic1; //CHANGE TO THE START SCREEN FOR CHOSEN PET 
                checkState(); 
                

            }, 5000); // 8 SECONDS TO READ THE TEXT
        }
        askQuestion()
        
    }
}


//each constant has 8 entries: Type, name, age, happiness, cleanliness, hunger, thirst, FOUR picture spaces,plus two extra
const CaseyPet = new FerretPet("ferret", "", 10, 50, 50, 50, 50, 'url("./images/caseypix/tamagochi_B2_ferret.png")', '', 'url("./images/caseypix/ferretwriggle2.gif', '', 50, 50)
const MatthewPet = new DogPet("troll", "", 23, 50, 50, 50, 50, 'url("./images/console/700pxh/troll1.png")', '', '', '', 30, 80)
const AdamPet = new Cyberpet("monkey", "", 27, 50, 50, 55, 52, 'url("./images/console/700pxh/monkey1.png")', '', '', '', 50, 64)
const ShinaPet = new Cyberpet("snail", "", 32, 50, 50, 50, 50, 'url("./images/console/700pxh/snail1.png")', '', '', '', 50, 50)
const NickPet = new SealPet("seal", "", 580, 50, 50, 50, 50, 'url("./images/nickpix/seal_start.jpg")', 'url("./images/nickpix/seal-swimming.jpg")', 'url("./images/nickpix/sick-seal.png")', 'url("./images/nickpix/dead-seal.jpg")', 0, 0)

//We use the petArray below as a means of capturing the pet in each of the buttons (caseypet, matthewpet, etc...)
let petArray = [CaseyPet, MatthewPet, AdamPet, ShinaPet, NickPet]

//renderData() is initailly called when choosing a pet and then each time that you press one of the yellow buttons. 
const renderData = () => {
    type.textContent = `Well, hello! I'm a ${chosenName.type}.`;
    myNewName.textContent = `You can call me ${chosenName.name}.`;
    age.textContent = `I'm ${chosenName.age} years-old!`;
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


    //GET THE CORRECT NAME
    chosenName = petArray[0]
    //RUN THE NAME FUNCTION
    gimmeName()

    //CHANGE BACKGROUND
    document.querySelector("body").setAttribute('style', 'background-color: #4d2885');

    //PUT BACKGROUNDS ON BUTTONS
    const buttonStyle =
        caseyButton.setAttribute('style', 'background-color:#6236a5; color: white;')
    matthewButton.setAttribute('style', 'background-color:#6236a5; color: white;')
    adamButton.setAttribute('style', 'background-color:#6236a5; color: white;')
    nickButton.setAttribute('style', 'background-color:#6236a5; color: white;')
    shinaButton.setAttribute('style', 'background-color:#6236a5; color: white;')

    //SHOW LEFT AND RIGHT SIDE
    leftside.setAttribute('style', 'display: "block"; line-height: 1em;')
    rightside.setAttribute('style', 'display: "block";border:0px')

    a2.src = "./images/console/700pxh/tamagochi_A2_casey.png"; //Name on top of console
    c4_extra1.src = "./images/console/700pxh/tamagochi_C4_wriggle_unlit.png"; //put name on wriggle button
    c5_extra2.src = "./images/console/700pxh/tamagochi_C5_dig_unlit.png"  //put name on dig button

    chosenName = petArray[0]
    CaseyPet.addCasey();// new code
    scoreName5 = 'wriggle';
    scoreName6 = 'dig';
    stats.style.display = 'block'; // SHOW THE STATS

    renderData();
})

//MATTHEW BUTTON
// IMAGE SIZE FOR PICTURES IS 352px WIDE by 220px HIGH
matthewButton.addEventListener("click", () => {
    chosenName = petArray[1]
    //RUN THE NAME FUNCTION
    gimmeName()

    //CHANGE BACKGROUND
    document.querySelector("body").setAttribute('style', 'background-color: #6e1f28');

    //PUT BACKGROUNDS ON BUTTONS
    const buttonStyle =
        caseyButton.setAttribute('style', 'background-color:#570f17; color: white;')
    matthewButton.setAttribute('style', 'background-color:#570f17; color: white;')
    adamButton.setAttribute('style', 'background-color:#570f17; color: white;')
    nickButton.setAttribute('style', 'background-color:#570f17; color: white;')
    shinaButton.setAttribute('style', 'background-color:#570f17; color: white;')

    //SHOW LEFT AND RIGHT SIDE
    leftside.setAttribute('style', 'display: "block"; line-height: 1em;')
    rightside.setAttribute('style', 'display: "block";border:0px')


    a2.src = "./Images/console/700pxh/tamagochi_A2_matthew.png"; //Name on top 
    c4_extra1.src = "./images/console/700pxh/tamagochi_C4_growl_unlit.png"; //put name on growl button
    c5_extra2.src = "./images/console/700pxh/tamagochi_C5_stomp_unlit.png"  //put name on stomp button

    MatthewPet.addMatthew(); // Casey's code!!!! Yay!
    scoreName5 = 'growling'
    scoreName6 = 'stomping'
    stats.style.display = 'block'; // SHOW THE STATS
    renderData();
})

//ADAM BUTTON
// IMAGE SIZE FOR PICTURES IS 352px WIDE by 220px HIGH
adamButton.addEventListener("click", () => {
    chosenName = petArray[2]
    type.style.display = 'none';
    screen.style.backgroundImage = 'url("./images/console/700pxh/monkey1.png")'
    //CHANGE BACKGROUND
    document.querySelector("body").setAttribute('style', 'background-color: #dec225');

    //PUT BACKGROUNDS ON BUTTONS
    const buttonStyle =
    caseyButton.setAttribute('style', 'background-color:#de9f25; color: white;')
    matthewButton.setAttribute('style', 'background-color:#de9f25; color: white;')
    adamButton.setAttribute('style', 'background-color:#de9f25; color: white;')
    nickButton.setAttribute('style', 'background-color:#de9f25; color: white;')
    shinaButton.setAttribute('style', 'background-color:#de9f25; color: white;')

    //SHOW LEFT AND RIGHT SIDE
    leftside.setAttribute('style', 'display: "block"; line-height: 1em;')
    rightside.setAttribute('style', 'display: "block";border:0px')

    a2.src = "./Images/console/700pxh/tamagochi_A2_adam.png"; //Name on top 
    // AdamPet.addAdam(); // Casey's code!!!! Yay!
    scoreName5 = 'climb'
    scoreName6 = 'scratch'
    stats.style.display = 'block'; // SHOW THE STATS
    // renderData();
})

//SHINA BUTTON
// IMAGE SIZE FOR PICTURES IS 352px WIDE by 220px HIGH
shinaButton.addEventListener("click", () => {
    chosenName = petArray[3]
    type.style.display = 'none';
    screen.style.backgroundImage = 'url("./images/console/700pxh/snail1.png")'
    //CHANGE BACKGROUND
    document.querySelector("body").setAttribute('style', 'background-color: #2e3591');

    //PUT BACKGROUNDS ON BUTTONS
    const buttonStyle =
    caseyButton.setAttribute('style', 'background-color:#3e48c0; color: white;')
    matthewButton.setAttribute('style', 'background-color:#3e48c0; color: white;')
    adamButton.setAttribute('style', 'background-color:#3e48c0; color: white;')
    nickButton.setAttribute('style', 'background-color:#3e48c0; color: white;')
    shinaButton.setAttribute('style', 'background-color:#3e48c0; color: white;')

    //SHOW LEFT AND RIGHT SIDE
    leftside.setAttribute('style', 'display: "block"; line-height: 1em;')
    rightside.setAttribute('style', 'display: "block";border:0px')
    // a2.src = ""; //Name on top 
    ShinaPet.addShina(); // Casey's code!!!! Yay!
    scoreName5 = ''
    scoreName6 = ''
stats.style.display = 'block'; // SHOW THE STATS
    // renderData();
})

// NICK BUTTON
// IMAGE SIZE FOR PICTURES IS 352px WIDE by 220px HIGH

nickButton.addEventListener("click", () => {
    //GET THE CORRECT NAME
    chosenName = petArray[4]

    //RUN THE NAME FUNCTION
    gimmeName()

    //CHANGE BACKGROUND
    // document.querySelector("body").setAttribute('style', 'background-image: url("./images/nickpix/paper.jpg");background-size:cover;');
    document.querySelector("body").setAttribute('style', 'background-color: #2E84DB');


    //PUT BACKGROUNDS ON BUTTONS
    const buttonStyle =
        caseyButton.setAttribute('style', 'background-color:#2f7cca')
    matthewButton.setAttribute('style', 'background-color:#2f7cca')
    adamButton.setAttribute('style', 'background-color:#2f7cca')
    nickButton.setAttribute('style', 'background-color:#2f7cca')
    shinaButton.setAttribute('style', 'background-color:#2f7cca')

    //left side inner html
    // leftside.innerHTML = '<p id="type" class="my-text">type</p>\n<p id="my-new-name" class="my-text">name</p>\n<p id="age" class="my-text">age</p>'

    //SHOW LEFT AND RIGHT SIDE
    leftside.setAttribute('style', 'display: "block"; border: solid rgba(137, 123, 112, 1) 1px; border-radius: 25px; background-color: rgba(161, 152, 145, .5); padding: 20px; line-height: 1em;')
    rightside.setAttribute('style', 'display: "block"; border: solid rgba(137, 123, 112, 1) 1px; border-radius: 25px; background-color: rgba(161, 152, 145, .5); padding: 20px; text-align: center;')

    //FONTS ON LEFT SIDE
    myNewName.setAttribute('style', 'visibility:hidden;');
    age.setAttribute('style', 'visibility:hidden;');

    //PLACE NAME IMAGE AT TOP OF CONSOLE
    a2.src = "./Images/console/700pxh/tamagochi_A2_nick.png"; //Name on top 

    //PUT IMAGE ON SCREEN
    // document.getElementById("screen").setAttribute('style', 'background-image:url("./images/console/700pxh/tamagochi_B2_nick1.png")');

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
    checkState();
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
    } else if (chosenName == petArray[1]) {
        c4_extra1.src = "./images/console/700pxh/tamagochi_C4_growl_lit.png"
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
    } else if (chosenName == petArray[1]) {
        c4_extra1.src = "./images/console/700pxh/tamagochi_C4_growl_unlit.png"
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
    } else if (chosenName == petArray[1]) {
        c5_extra2.src = "./images/console/700pxh/tamagochi_C5_stomp_lit.png"
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
    } else if (chosenName == petArray[1]) {
        c5_extra2.src = "./images/console/700pxh/tamagochi_C5_stomp_unlit.png"
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




