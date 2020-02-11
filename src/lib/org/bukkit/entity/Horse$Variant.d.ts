export default interface Horse$Variant {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Horse$Variant {
    static get $javaClass(): any;
    static get HORSE(): Horse$Variant;
    static get DONKEY(): Horse$Variant;
    static get MULE(): Horse$Variant;
    static get UNDEAD_HORSE(): Horse$Variant;
    static get SKELETON_HORSE(): Horse$Variant;
    static get LLAMA(): Horse$Variant;
}
