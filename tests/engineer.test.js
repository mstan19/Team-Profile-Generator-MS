const Engineer = require("../lib/engineer");

describe("getGitHub ()", () => {
    it("should get the person's GitHub" , () => {
        let newEngineer = new Engineer("maze",2,"wow@gmail", "mstan19");
        let result = newEngineer.getGitHub();
        expect(result).toEqual("mstan19");
    });
    it("Incorrect when GitHub is not entered ", () => {
        const errEngineer = () => new Engineer("maze",2,"wow@gmail", "");
        const err = new Error ("GitHub username was not entered")
        expect(errEngineer).toThrowError(err); 
    });
    it("Incorrect when GitHub returns undefined ", () => {
        const errEngineer = () => new Engineer("maze",2,"wow@gmail", undefined);
        const err = new Error ("GitHub username was not entered")
        expect(errEngineer).toThrowError(err); 
    });
    it("Incorrect when GitHub returns null ", () => {
        const errEngineer = () => new Engineer("maze",2,"wow@gmail", null);
        const err = new Error ("GitHub username was not entered")
        expect(errEngineer).toThrowError(err); 
    });
});

describe("getRole ()", () => {
    it("should return 'Engineer'" , () => {
        let emp = new Engineer("maze",2,"wow@gmail", 68);
        let result = emp.getRole();
        expect(result).toEqual("Engineer");
    });
});
