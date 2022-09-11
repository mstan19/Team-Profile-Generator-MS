const Engineer = require("../lib/engineer");

describe("getGHusername ()", () => {
    it("should get the person's GitHub" , () => {
        let newEngineer = new Engineer("maze",2,"wow@gmail", "mstan19");
        let result = newEngineer.getGitHub();
        expect(result).toEqual("mstan19");
    });
});

describe("getRole ()", () => {
    it("should return 'Engineer'" , () => {
        let emp = new Engineer("maze",2,"wow@gmail", 68);
        let result = emp.getRole();
        expect(result).toEqual("Engineer");
    });
});
