class Employee {
    constructor(name, id, email) {
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Id needs to be positive integer");
        }
        this.id = parseInt(id);
        this.name = name;
        this.email = email;
    }
  
    getName() {
      console.log(`My name is ${this.name}`);
      return this.name;
    }
    getId() {
        console.log(`This is the employee's ${this.id}`);
        return this.id;
      }
    getEmail() {
        console.log(`This is the employee's ${this.email}`);
        return this.email;

    }
    getRole() {
        return 'Employee';
    }
  }

module.exports = Employee;