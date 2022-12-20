import User from "./User";

class Sequence {
    readonly owner: User;
    readonly name: String;

    private _isActive: boolean;
    private _isTrackingOfAttachmentDownloadsEnabled = true;
    private _isTrackingOfLinksEnabled = true;
    private _isTrackingOfOpensEnabled = true;

    constructor(owner: User, name: String) {
        if (name.trim().length === 0) throw new Error('You should provide a sequence name');

        this.owner = owner;
        this.name = name;
        this._isActive = false;

        if (owner.isTrackingOfEmailsEnabled === false) {
            this.disableAllTracking();
        }
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

    get isTrackingOfOpensEnabled(): boolean {
        return this._isTrackingOfOpensEnabled;
    }

    get isTrackingOfLinksEnabled(): boolean {
        return this._isTrackingOfLinksEnabled;
    }

    get isTrackingOfAttachmentDownloadsEnabled() {
        return this._isTrackingOfAttachmentDownloadsEnabled;
    }

    disableAllTracking() {
        this._isTrackingOfOpensEnabled = false;
        this._isTrackingOfLinksEnabled = false;
        this._isTrackingOfAttachmentDownloadsEnabled = false;
    }
}

export default Sequence;