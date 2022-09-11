const Empolyee = require('./empolyee');

class Engineer extends Empolyee {
    constructor(name,id,email,GHusername) {
        super(name, id, email);
        if (GHusername === "" || GHusername === undefined || GHusername === null) {
            throw new Error("GitHub username was not entered");
        }
        this.GHusername = GHusername;
    }
    getGitHub() {
        console.log(`This is the empolyee's GitHub username: ${this.GHusername}`);
        return this.GHusername;
    }
    getRole() {
        return 'Engineer';
    }
}


module.exports = Engineer;
