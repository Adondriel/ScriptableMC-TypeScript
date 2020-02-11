import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
export default interface GrindstoneInventory extends Inventory {
    remove(arg0: Material): void;
    remove(arg0: ItemStack): void;
    clear(): void;
    clear(arg0: number): void;
    contains(arg0: Material): boolean;
    contains(arg0: ItemStack, arg1: number): boolean;
    contains(arg0: Material, arg1: number): boolean;
    contains(arg0: ItemStack): boolean;
    iterator(): any;
    iterator(): any;
    iterator(arg0: number): any;
    first(arg0: ItemStack): number;
    first(arg0: Material): number;
    getLocation(): Location;
    getType(): InventoryType;
    getSize(): number;
    all(arg0: Material): any;
    all(arg0: ItemStack): any;
    getMaxStackSize(): number;
    setContents(arg0: Array<ItemStack>): void;
    setMaxStackSize(arg0: number): void;
    getItem(arg0: number): ItemStack;
    addItem(arg0: Array<ItemStack>): any;
    removeItem(arg0: Array<ItemStack>): any;
    getContents(): Array<ItemStack>;
    getStorageContents(): Array<ItemStack>;
    setItem(arg0: number, arg1: ItemStack): void;
    setStorageContents(arg0: Array<ItemStack>): void;
    containsAtLeast(arg0: ItemStack, arg1: number): boolean;
    firstEmpty(): number;
    getHolder(): InventoryHolder;
    getViewers(): Array<HumanEntity>;
    spliterator(): any;
    forEach(action: any): void;
}
export default class GrindstoneInventory {
    static get $javaClass(): any;
}
