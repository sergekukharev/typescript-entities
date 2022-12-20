class DomainError extends Error {
    constructor(message: string) {
        super();
        this.message = message;
        this.name = "DomainError";
    }
}

export default DomainError;