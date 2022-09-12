const Employee = require('./employee');

class Manager extends Employee {
    constructor(name,id,email,officeNum) {
        super(name, id, email);
        this.officeNum = parseInt(officeNum);

        // console.log(typeof officeNum)
        if (typeof this.officeNum !== "number" || isNaN(this.officeNum) || this.officeNum < 0) {
            throw new Error("Office Number needs to be positive integer");
          }
        
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;