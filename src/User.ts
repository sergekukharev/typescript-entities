class User {
    readonly _id: string;

    constructor(id: string) {
        if (id.trim().length === 0) throw new Error("You should provide User Id");
        this._id = id;
    }

    get id(): string {
        return this._id;
    }
}

export default User;