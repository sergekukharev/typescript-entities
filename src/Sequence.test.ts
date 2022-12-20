import User from "./User";
import Sequence from "./Sequence";

const owner = new User("ownerId");

describe('Sequence', () => {
    it ('has a name and an owner', () => {
        const sequence = new Sequence(owner, 'Test Sequence');

        expect(sequence.owner).toBe<User>(owner);
        expect(sequence.name).toBe('Test Sequence');
    });

    it ('must have a non-empty name', () => {
        expect(() => new Sequence(owner, '')).toThrowError('You should provide a sequence name');
        expect(() => new Sequence(owner, '   ')).toThrowError('You should provide a sequence name');
        expect(() => new Sequence(owner, `\t`)).toThrowError('You should provide a sequence name');
    });

    it('has no recipients by default', () => {
        expect(new Sequence(owner, 'Test Sequence').countRecipients()).toBe(0);
    });

    it ('is disabled by default', () => {
        const sequence = new Sequence(owner, 'Test Sequence');

        expect(sequence.isActive).toBe(false);
    });

    it ('can be active without any recipients', () => {
        const sequence = new Sequence(owner, 'Test Sequence');
        sequence.activate();

        expect(sequence.isActive).toBe(true);
        expect(sequence.countRecipients()).toBe(0);
    });

    it ('has tracking enabled by default, including: opening emails, clicking on links, and downloading attachments', () => {
        const sequence = new Sequence(owner, 'Test Sequence');

        expect(sequence.isTrackingOfOpensEnabled).toBe(true);
        expect(sequence.isTrackingOfLinksEnabled).toBe(true);
        expect(sequence.isTrackingOfAttachmentDownloadsEnabled).toBe(true);
    })

    it ('can disable all tracking at once', () => {
        const sequence = new Sequence(owner, 'Test Sequence');

        sequence.disableAllTracking();

        expect(sequence.isTrackingOfOpensEnabled).toBe(false);
        expect(sequence.isTrackingOfLinksEnabled).toBe(false);
        expect(sequence.isTrackingOfAttachmentDownloadsEnabled).toBe(false);
    })
});
