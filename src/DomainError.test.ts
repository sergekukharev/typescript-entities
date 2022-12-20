import DomainError from "./DomainError";

describe('DomainError', () => {
    it('is of Error type', () => {
        expect(new DomainError("test")).toBeInstanceOf(Error);
    });

    it('has an error message', () => {
        expect(new DomainError("test").message).toBe("test");
    });

    it('has DomainError as a name', () => {
        expect(new DomainError("test").name).toBe("DomainError");
    });
});