const Empolyee = require('./empolyee');

class Manager extends Empolyee {
    constructor(name,id,email,officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
}