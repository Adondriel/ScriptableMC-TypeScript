import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
export default interface PlayerInventory extends Inventory {
    setItemInHand(arg0: ItemStack): void;
    getItemInHand(): ItemStack;
    getHolder(): InventoryHolder;
    getHolder(): HumanEntity;
    setItem(arg0: number, arg1: ItemStack): void;
    getHelmet(): ItemStack;
    getChestplate(): ItemStack;
    setChestplate(arg0: ItemStack): void;
    getLeggings(): ItemStack;
    setLeggings(arg0: ItemStack): void;
    setHelmet(arg0: ItemStack): void;
    getItemInMainHand(): ItemStack;
    setItemInMainHand(arg0: ItemStack): void;
    getItemInOffHand(): ItemStack;
    setItemInOffHand(arg0: ItemStack): void;
    getArmorContents(): Array<ItemStack>;
    setArmorContents(arg0: Array<ItemStack>): void;
    getBoots(): ItemStack;
    setBoots(arg0: ItemStack): void;
    getExtraContents(): Array<ItemStack>;
    getHeldItemSlot(): number;
    setHeldItemSlot(arg0: number): void;
    setExtraContents(arg0: Array<ItemStack>): void;
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
    setContents(arg0: Array<ItemStack>): void;
    getMaxStackSize(): number;
    containsAtLeast(arg0: ItemStack, arg1: number): boolean;
    setMaxStackSize(arg0: number): void;
    addItem(arg0: Array<ItemStack>): any;
    getContents(): Array<ItemStack>;
    getStorageContents(): Array<ItemStack>;
    getViewers(): Array<HumanEntity>;
    removeItem(arg0: Array<ItemStack>): any;
    firstEmpty(): number;
    getItem(arg0: number): ItemStack;
    setStorageContents(arg0: Array<ItemStack>): void;
    spliterator(): any;
    forEach(action: any): void;
}
export default class PlayerInventory {
    static get $javaClass(): any;
}
