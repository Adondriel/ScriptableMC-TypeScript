export interface Multiset {
    setCount(arg0: any, arg1: number): number;
    setCount(arg0: any, arg1: number, arg2: number): boolean;
    elementSet(): any;
    add(arg0: any): boolean;
    add(arg0: any, arg1: number): number;
    remove(arg0: any): boolean;
    remove(arg0: any, arg1: number): number;
    count(arg0: any): number;
    contains(arg0: any): boolean;
    size(): number;
    iterator(): any;
    spliterator(): any;
    entrySet(): any;
    forEach(action: any): void;
    containsAll(arg0: any): boolean;
    removeAll(arg0: any): boolean;
    retainAll(arg0: any): boolean;
    forEachEntry(action: any): void;
    clear(): void;
    isEmpty(): boolean;
    toArray(arg0: Array<any>): Array<any>;
    toArray(): Array<any>;
    addAll(arg0: any): boolean;
    stream(): any;
    removeIf(arg0: any): boolean;
    parallelStream(): any;
}
export declare class Multiset {
    static get $javaClass(): any;
}