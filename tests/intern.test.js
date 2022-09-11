const Intern = require("../lib/intern");

describe("getSchool ()", () => {
    it("should get the person's GitHub" , () => {
        let newIntern = new Intern("maze",2,"wow@gmail", "Georgia Tech");
        let result = newIntern.getSchool();
        expect(result).toEqual("Georgia Tech");
    });
    it("Incorrect when school is not entered ", () => {
        const errIntern = () => new Intern("maze",2,"wow@gmail", "");
        const err = new Error ("No school was entered")
        expect(errIntern).toThrowError(err); 
    });
    it("Incorrect when school returns undefined ", () => {
        const errIntern = () => new Intern("maze",2,"wow@gmail", undefined);
        const err = new Error ("No school was entered")
        expect(errIntern).toThrowError(err); 
    });
    it("Incorrect when school returns null ", () => {
        const errIntern = () => new Intern("maze",2,"wow@gmail", null);
        const err = new Error ("No school was entered")
        expect(errIntern).toThrowError(err); 
    });
});

describe("getRole ()", () => {
    it("should return 'Intern'" , () => {
        let emp = new Intern("maze",2,"wow@gmail", "Georgia Tech");
        let result = emp.getRole();
        expect(result).toEqual("Intern");
    });
});