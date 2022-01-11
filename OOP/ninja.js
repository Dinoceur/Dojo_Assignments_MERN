class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 150;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
        return this;
    }

    showStats() {
        this.sayName();
        console.log(`Strength: ${this.strength}`)
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
        return this;
    }

    drinkSake() {
        return this.health > (this.health - 10) ? this.health = this.health : this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();