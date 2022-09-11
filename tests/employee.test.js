const Empolyee = require("../lib/empolyee");

describe("getName ()", () => {
    it("should get the person's name" , () => {
        let newEmp = new Empolyee("maze",2,"wow@gmail");
        let result = newEmp.getName();
        expect(result).toEqual("maze");
    });
});

describe("getId ()", () => {
    it("should get the person's id" , () => {
        let newEmp = new Empolyee("maze",2,"wow@gmail");
        let result = newEmp.getId();
        expect(result).toEqual(2);
    });
});

describe("getEmail ()", () => {
    it("should get the person's email" , () => {
        let newEmp = new Empolyee("maze",2,"wow@gmail");
        let result = newEmp.getEmail();
        expect(result).toEqual("wow@gmail");
    });
});

describe("getRole ()", () => {
    it("should return 'empolyee'" , () => {
        let emp = new Empolyee();
        let result = emp.getRole();
        expect(result).toEqual("Empolyee");
    });
});
