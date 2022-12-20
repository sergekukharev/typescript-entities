class User {
    readonly _id: string;
    private _isTrackingOfEmailsEnabled = true;
    constructor(id: string) {
        if (id.trim().length === 0) throw new Error("You should provide User Id");
        this._id = id;
    }

    get id(): string {
        return this._id;
    }

    get isTrackingOfEmailsEnabled(): boolean {
        return this._isTrackingOfEmailsEnabled;
    }

    disableEmailTracking() {
        // Maybe this should cause some Domain Event that will be consumed by Sequence service and update settings
        // of all sequences that belong to this user. Or maybe not. At least we have control over it.

        this._isTrackingOfEmailsEnabled = false;
    }
}

export default User;