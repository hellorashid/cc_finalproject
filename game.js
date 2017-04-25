// This is the framework for the "Risk of Thrones" Game.
console.log("Let the Games Begin!")



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
    }
  }

}

class Player {
  constructor(name) {
    this.name = name;
    this.myKingdoms = [];
    this.totalPower = 0;
  }

  getTotalPower () {
    console.log(this.name, " total kingdom:")
    for (var x of this.myKingdoms) {
      console.log(" -" , x.name, x.power);
    }
    console.log (" -> Total Power: ", this.totalPower);
  }

  addKingdom (newKingdom) {
    this.myKingdoms.push(newKingdom);
    this.totalPower += newKingdom.power;
  }

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

  move (source, destination, number) {
      source.power -= number;
      destination.power += number;
  }

}

// ----- END DEFINTIONS --- //

// Create Kingdoms & Initiate Players
let winterfell = new Kingdom("Winterfell", 10);
let qarth = new Kingdom("Qarth", 10);
let bravos = new Kingdom("Braavos", 10);
let pentos = new Kingdom("Pentos", 10);

let thewall = new Kingdom("The Wall", 5);
let redkeep = new Kingdom("The Red Keep", 12);
let landing = new Kingdom("Kings Landing", 15);


let allKingdoms = [winterfell, qarth, bravos, pentos, thewall, redkeep, landing];

let one = new Player("Lord Stark");
one.addKingdom(winterfell);
one.addKingdom(qarth);
one.addKingdom(bravos);
one.addKingdom(pentos);
one.addKingdom(thewall);

let two = new Player("Tyrion Badass")
two.addKingdom(redkeep);
two.addKingdom(landing);


// Testing
one.getTotalPower();
two.getTotalPower();


one.getTotalPower();
