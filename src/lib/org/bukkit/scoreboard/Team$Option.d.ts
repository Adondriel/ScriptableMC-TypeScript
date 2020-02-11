export default interface Team$Option {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Team$Option {
    static get $javaClass(): any;
    static get NAME_TAG_VISIBILITY(): Team$Option;
    static get DEATH_MESSAGE_VISIBILITY(): Team$Option;
    static get COLLISION_RULE(): Team$Option;
}
