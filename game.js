// This is the framework for the "Risk of Thrones" Game.
console.log("Winter is Coming!")

// Kingdom Class
class Kingdom {
  constructor(name = '', power = 0){
    // Default Power is Zero
    this.power = power;
    this.name = name;
  };

  // Returns the Power of Kingdom
  getPower () {
    console.log(this.power)
    return this.power;
  }

  // Attack Function: Takes in the Defending Kingdom as argument.
  attack (defender) {
    if (this.power > defender.power) {
        console.log(this.name , " beat ", defender.name)
        defender.power -= 2;
    } else if (this.power < defender.power) {
        console.log(defender.name, " beat ", this.name);
        this.power -= 2;
    } else {
      console.log("Tie: ", this.name, defender.name);
        this.power -=1;
        defender.power-=1;
    }
  }
}

// Defines Player
class Player {
  constructor(name) {
    this.name = name;
    this.myKingdoms = [];
    this.totalPower = 0;
    this.totalKingdoms = {};
  }

  // Returns Total Power for player
  getTotalPower () {
    console.log(this.name, " total kingdom:")
    for (var x of this.myKingdoms) {
      console.log(" -" , x.name, x.power);
    }
    console.log (" -> Total Power: ", this.totalPower);
  }

  // Adds new kingdom to players array
  addKingdom (newKingdom) {
    this.myKingdoms.push(newKingdom);
    this.totalPower += newKingdom.power;
    //this.totalPower.newKingdom.name = newKingdom;
    this.totalKingdoms[newKingdom.name] = newKingdom;

  }

  // Removes kingdom from array --- BUG --
  removeKingdom (oldKingdom) {
    let target = 100;
    for (var x in this.myKingdoms) {
      if (oldKingdom.name == this.myKingdoms[x].name) {
          target = x;
      }
    }
    this.totalPower -= oldKingdom.power;
    this.myKingdoms = this.myKingdoms.splice(0,target);
    //return target;
    //console.log(target);
  }

  // Moves kingdom from one player to another -- BUG --
  move (source, destination, number) {
      source.power -= number;
      destination.power += number;
  }
}
// ----- END DEFINTIONS --- //

// Create Kingdoms & Initiate Players
let winterfell = new Kingdom("Winterfell", 10);
let qarth = new Kingdom("Qarth", 12);
let bravos = new Kingdom("Braavos", 15);
let pentos = new Kingdom("Pentos", 9);

let thewall = new Kingdom("The Wall", 5);
let redkeep = new Kingdom("The Red Keep", 12);
let landing = new Kingdom("Kings Landing", 15);

//Create Array of All Kingdoms
let allKingdoms = [winterfell, qarth, bravos, pentos, thewall, redkeep, landing];



// Creating Players & adding dummy data
let one = new Player("Lord Stark");
one.addKingdom(winterfell);
one.addKingdom(qarth);
one.addKingdom(bravos);
one.addKingdom(thewall);

let two = new Player("Lord Tyrion")
two.addKingdom(redkeep);
two.addKingdom(landing);
two.addKingdom(pentos);


// Testing
// one.getTotalPower();
// two.getTotalPower();
// one.getTotalPower();
console.log("Winter is Here!");
