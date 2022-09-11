class Empolyee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      console.log(`My name is ${this.name}`);
      return this.name;
    }
    getId() {
        console.log(`This is the empolyee's ${this.id}`);
        return this.id;
      }
    getEmail() {
        console.log(`This is the empolyee's ${this.email}`);
        return this.email;

    }
    getRole() {
        return 'Empolyee';
    }
  }

  module.exports = Empolyee