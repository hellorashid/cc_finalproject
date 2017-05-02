// This is the framework for the "Risk of Thrones" Game.
console.log("Winter is Coming!")

// Kingdom Class
class Kingdom {
  constructor(name = '', power = 0){
    // Default Power is Zero
    this.power = power;
    this.name = name;
    this.color = '';
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
  constructor(name, color) {
    this.name = name;
    this.myKingdoms = [];
    this.totalPower = 0;
    this.totalKingdoms = {};
    this.color = "#F0F1F5";
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
// let winterfell = new Kingdom("Winterfell", 10);
// let qarth = new Kingdom("Qarth", 12);
// let bravos = new Kingdom("Braavos", 15);
// let pentos = new Kingdom("Pentos", 9);
// let thewall = new Kingdom("The Wall", 5);
// let redkeep = new Kingdom("The Red Keep", 12);
// let landing = new Kingdom("Kings Landing", 15);

let hillcrest = new Kingdom("Hillcrest", 10);
let mounthope = new Kingdom("Mount Hope", 10);
let bushwick = new Kingdom("Bushwick", 10);
let statenIsland = new Kingdom("Staten Island", 10);
let flushing = new Kingdom("Flushing", 10);
let bayside = new Kingdom("Bayside", 10);
let georgetown = new Kingdom("Georgetown", 10);
let ozonepark = new Kingdom("Ozone Park", 10);
let eastny = new Kingdom("East New York", 10);
let astoria = new Kingdom("Astoria", 10);
let sunnyside = new Kingdom("Sunnyside", 10);
let williamsburg = new Kingdom("Williamsburg", 10);
let sheepsheadbay = new Kingdom("Sheepsheadbay", 10);
let edgewater = new Kingdom("Edgewater", 10);
let soundview = new Kingdom("Soundview", 10);
let bayridge = new Kingdom("Bay Ridge", 10);
let sunsetpark = new Kingdom("Sunset Park", 10);
let bensonhurst = new Kingdom("Bensonhurst", 10);
let riverdale = new Kingdom("Riverdale", 10);
let parkslope = new Kingdom("Park Slope", 10);
let jackson = new Kingdom("Jackson Heights", 10);
let downtownbrooklyn = new Kingdom("Downtown Brooklyn", 10);
let washington = new Kingdom("Washinton Heights", 10);
let motthaven = new Kingdom("Motthaven", 10);
let huntspoint = new Kingdom("Huntspoint", 10);
let concourse = new Kingdom("Concourse", 10);
let upperwest = new Kingdom("Upper West Side", 10);
let chelsea = new Kingdom("Chelsea", 10);
let chinatown = new Kingdom("Chinatown", 10);
let uppereast = new Kingdom("Upper East Side", 10);
let manhattanville = new Kingdom("Manhattanville", 10);
let eastharlem = new Kingdom("East Harlem", 10);
let soho = new Kingdom("soho", 10);
let murrayhill = new Kingdom("Murray Hill", 10);
let centralharlem = new Kingdom("Central Harlem", 10);
let fidi = new Kingdom("Financial District", 10);
let queensvillage = new Kingdom("Queens Village", 10);
let williamsbridge = new Kingdom("Williamsbridge", 10);
let eastflatbush = new Kingdom("East Flatbush", 10);
let flatbush = new Kingdom("Flatbush", 10);
let brownsville = new Kingdom("Brownsville", 10);
let jamaica = new Kingdom("Jamaica", 10);
let richmondhill = new Kingdom("Richmond Hill", 10);
let ridgewood = new Kingdom("Ridgewood", 10);
let elmhurst = new Kingdom("Elmhurst", 10);
let bedstuy = new Kingdom("Bedford Stuyvesant", 10);
let boroughpark = new Kingdom("Borough Park", 10);
let pelham = new Kingdom("Pelham Parkway", 10);
let claremont = new Kingdom("Claremont", 10);
let midtown = new Kingdom("Midtown", 10);
let crownheights = new Kingdom("Crown Heights", 10);
let belmont = new Kingdom("Belmont", 10);
let foresthills = new Kingdom("Forest Hills", 10);
let coney = new Kingdom("Coney Island", 10);
let bedford = new Kingdom("Bedform Park", 10);

//Create Array of All Kingdoms
let allKingdoms = [statenIsland, flushing, bayside, georgetown, ozonepark, eastny, astoria,sunnyside, williamsburg, sheepsheadbay, edgewater,soundview, bayridge, sunsetpark, bensonhurst, riverdale, parkslope, jackson, downtownbrooklyn, washington, motthaven, huntspoint, concourse, upperwest, chelsea,chinatown, uppereast, manhattanville, eastharlem, soho, murrayhill, centralharlem , fidi, queensvillage, williamsbridge, eastflatbush, flatbush, brownsville, jamaica, richmondhill, ridgewood, elmhurst, bedstuy, boroughpark, pelham,claremont, bushwick, midtown, crownheights, belmont,foresthills,coney,bedford];


// Creating Players & adding dummy data
let one = new Player("Player One", '#66CC99');
let two = new Player("Player Two", '#44BBFF')
let three = new Player("Player Three", '#FC575E')

let players = [one, two, three];


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (kingdom of allKingdoms) {
  let rand = getRandom(0,(players.length -1));
  kingdom.color = players[rand].color;
  players[rand].addKingdom(kingdom);
}

// Testing
// one.getTotalPower();
// two.getTotalPower();
// one.getTotalPower();
console.log("Winter is Here!");
