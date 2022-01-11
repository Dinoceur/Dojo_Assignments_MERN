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

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log(`Ninjas don't wish upon a star, they throw them.`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const superSensei = new Sensei("Anzu");
superSensei.speakWisdom();