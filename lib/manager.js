const Empolyee = require('./empolyee');

class Manager extends Empolyee {
    constructor(name,id,email,officeNum) {
        super(name, id, email);
        
        // console.log(typeof officeNum)
        if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
            throw new Error("Office Number needs to be positive integer");
          }
        this.officeNum = parseInt(officeNum);
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;