const Manager = require("../lib/manager");

describe("getRole ()", () => {
    it("should return 'Manager'" , () => {
        let emp = new Manager("maze",2,"wow@gmail", 68);
        let result = emp.getRole();
        expect(result).toEqual("Manager");
    });
});

describe("get officeNum", () => {
    it("Correct when input numbers for the manager's office number" , () => {
        let emp = new Manager("maze",2,"wow@gmail", 68);
        let result = emp.officeNum;
        expect(result).toEqual(68);
    });

    it("Incorrect when input is not a number", () => {
        const manager = () => new Manager("maze",2,"wow@gmail", "a68");
        const err = new Error ("Office Number needs to be positive integer")
        expect(manager).toThrowError(err); 
    });
    it("Incorrect when input is not a number", () => {
        const manager = () => new Manager("maze",2,"wow@gmail", -13);
        const err = new Error ("Office Number needs to be positive integer")
        expect(manager).toThrowError(err); 
    });
    it("Incorrect when input is not a number", () => {
        const manager = () => new Manager("maze",2,"wow@gmail", "");
        const err = new Error ("Office Number needs to be positive integer")
        expect(manager).toThrowError(err); 
    });
});
