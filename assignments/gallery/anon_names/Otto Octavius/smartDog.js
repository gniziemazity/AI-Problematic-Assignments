class SmartDog extends Dog {
    constructor(name, age, furrColor, eyeColor) {
        super(name, age, furrColor, eyeColor);
    }
    talk() {
    console.log("Woof! I'm " + this.name + " 🐶");
    return "Woof! I'm " + this.name + " 🐶";
  }
}