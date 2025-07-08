class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
  poop() {
    console.log(`${this.name} poops.`);
  }
}

const animal = new Animal("Dog");
animal.speak();
animal.poop();

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak();
dog.poop();

class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps.`);
  }
  fly() {
    console.log(`${this.name} flies.`);
  }
}

const bird = new Bird("sparrow");
bird.speak();
bird.poop();
bird.fly();
//-------------------------------------------------------------
class Weapon {
  constructor(attack) {
    this.attack = attack;
  }
  attacks() {
    console.log(`deals ${this.attack} damage`);
  }
}
class Sword extends Weapon {
  constructor(attack, mul) {
    super(attack);
    this.mul = mul;
  }
  attacks() {
    console.log(`swings deals ${this.attack} damage`);
  }
  special() {
    console.log(`use Special deals ${this.attack * this.mul} damage`);
  }
}
class Staff extends Weapon {
  constructor(attack, mana) {
    super(attack);
    this.mana = mana;
  }
  attacks() {
    console.log(`file ball deals ${this.attack} damage`);
    this.mana -= 1;
  }
}
const sword = new Sword(8, 1.3);
const staff = new Staff(5, 15);

sword.attacks();
sword.special();

staff.attacks();
//-------------------------------------------------------------
class Player {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }
  attacks(player) {
    player.health -= this.attack;
    console.log(`${player.name} loses ${this.attack} HP`);
    this.health -= player.defense;
    console.log(`${this.name} loses ${player.defense} HP`);
  }
  log() {
    console.log(
      `${this.name} HP:${this.health} ATT:${this.attack} DEF:${this.defense}`
    );
  }
}

const red = new Player("RED", 6, 3, 2);
const blue = new Player("BLUE", 9, 2, 4);

red.log();
blue.log();

red.attacks(blue);

red.log();
blue.log();
