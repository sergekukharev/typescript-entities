import Sequence from "./Sequence";
import User from "./User";

interface SequenceRepositoryInterface {
    get:(id: string) => Sequence;
    listByOwner:(owner: User) => Array<Sequence>;
    save:(sequence: Sequence) => void;
}