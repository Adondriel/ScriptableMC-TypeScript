import { Inventory } from '../../../org/bukkit/inventory/Inventory.js';
import { HumanEntity } from '../../../org/bukkit/entity/HumanEntity.js';
import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
import { InventoryType$SlotType } from '../../../org/bukkit/event/inventory/InventoryType$SlotType.js';
import { InventoryView$Property } from '../../../org/bukkit/inventory/InventoryView$Property.js';
import { InventoryType } from '../../../org/bukkit/event/inventory/InventoryType.js';
export interface InventoryView {
    getTitle(): string;
    getInventory(rawSlot: number): Inventory;
    getPlayer(): HumanEntity;
    setItem(slot: number, item: ItemStack): void;
    getItem(slot: number): ItemStack;
    getTopInventory(): Inventory;
    getBottomInventory(): Inventory;
    convertSlot(rawSlot: number): number;
    setCursor(item: ItemStack): void;
    getCursor(): ItemStack;
    countSlots(): number;
    getSlotType(slot: number): InventoryType$SlotType;
    setProperty(prop: InventoryView$Property, value: number): boolean;
    close(): void;
    getType(): InventoryType;
}
export declare class InventoryView {
    static get $javaClass(): any;
    constructor();
    static get OUTSIDE(): number;
}