class Cards {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Cards {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target instanceof Unit ?
        target.resilience -= this.power :
        new Error("Target must be a unit!");
    }
}

class Effect extends Cards {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude
        magnitude > 0 ?
        this.text = `increase target's ${this.stat} by ${this.magnitude}` :
        this.text = `reduce target's ${this.stat} by ${this.magnitude}`;
    }

    play(target) {
        if (target instanceof Unit) {
        if (this.stat.toLowerCase() == "resilience") {
            target.resilience += this.magnitude;
        }
        } else if (this.stat.toLowerCase() == "power") {
        target.power += this.magnitude;
        } else {
        throw new Error("Target must be a unit!");
        }
    }
}


const redNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4);
console.log(redNinja);
console.log(blackNinja);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", +3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "power", +2);
console.log(hardAlgorithm);
console.log(unhandledPromiseRejection);
console.log(pairProgramming);

hardAlgorithm.play(redNinja);
unhandledPromiseRejection.play(redNinja);
pairProgramming.play(redNinja);
redNinja.attack(blackNinja);

console.log(redNinja);
console.log(blackNinja);