export interface InventoryListener {
    accept(t: any): void;
    getType(): any;
}
export declare class InventoryListener {
    static get $javaClass(): any;
    constructor(type: any, consumer: any);
}
