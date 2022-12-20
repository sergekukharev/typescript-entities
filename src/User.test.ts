import User from "./User";

describe('User class', () => {
    it('has an id', ()=> {
        expect(new User("abcdef").id).toBe("abcdef");
    });

    it('must have non-empty id', () => {
        expect(() => new User("").id).toThrowError("You should provide User Id");
        expect(() => new User(" ").id).toThrowError("You should provide User Id");
        expect(() => new User(`\t`).id).toThrowError("You should provide User Id");
    })
});