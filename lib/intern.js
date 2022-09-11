const Empolyee = require('./empolyee');

class Intern extends Empolyee {
    constructor(name,id,email,school) {
        super(name, id, email);
        if (school === "" || school === undefined || school === null) {
            throw new Error("No school was entered");
        }

        this.school = school;
    }
    getSchool() {
        console.log(`This is the empolyee's GitHub username: ${this.school}`);
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}


module.exports = Intern;
