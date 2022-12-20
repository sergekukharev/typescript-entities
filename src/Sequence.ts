import User from "./User";

class Sequence {
    readonly owner: User;
    readonly name: String;
    private _isActive: boolean;
    constructor(owner: User, name: String) {
        if (name.trim().length === 0) throw new Error('You should provide a sequence name');

        this.owner = owner;
        this.name = name;
        this._isActive = false;
    }

    activate(): void {
        this._isActive = true;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    countRecipients(): number {
        return 0;
    }
}

export default Sequence;