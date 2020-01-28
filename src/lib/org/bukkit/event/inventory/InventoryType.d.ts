export interface InventoryType {
    isCreatable(): boolean;
    getDefaultSize(): number;
    getDefaultTitle(): string;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class InventoryType {
    static get $javaClass(): any;
    static get CHEST(): InventoryType;
    static get DISPENSER(): InventoryType;
    static get DROPPER(): InventoryType;
    static get FURNACE(): InventoryType;
    static get WORKBENCH(): InventoryType;
    static get CRAFTING(): InventoryType;
    static get ENCHANTING(): InventoryType;
    static get BREWING(): InventoryType;
    static get PLAYER(): InventoryType;
    static get CREATIVE(): InventoryType;
    static get MERCHANT(): InventoryType;
    static get ENDER_CHEST(): InventoryType;
    static get ANVIL(): InventoryType;
    static get BEACON(): InventoryType;
    static get HOPPER(): InventoryType;
    static get SHULKER_BOX(): InventoryType;
    static get BARREL(): InventoryType;
    static get BLAST_FURNACE(): InventoryType;
    static get LECTERN(): InventoryType;
    static get SMOKER(): InventoryType;
    static get LOOM(): InventoryType;
    static get CARTOGRAPHY(): InventoryType;
    static get GRINDSTONE(): InventoryType;
    static get STONECUTTER(): InventoryType;
}
