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

    it('has a setting for email tracking and by default it is enabled', () => {
        expect(new User("abcdef").isTrackingOfEmailsEnabled).toBe(true);
    });

    it ('can disable email tracking across its account', () => {
        const user = new User("abcdef");

        user.disableEmailTracking();

        expect(user.isTrackingOfEmailsEnabled).toBe(false);
    })
});