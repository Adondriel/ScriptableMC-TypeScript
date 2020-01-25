declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Location} from '../../../org/bukkit/Location.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface PlayerInventory extends Inventory {
	getItemInHand(): ItemStack;
	setItemInHand(arg0: ItemStack): void;
	setItem(arg0: number, arg1: ItemStack): void;
	getHolder(): InventoryHolder;
	getHolder(): HumanEntity;
	getItemInMainHand(): ItemStack;
	getArmorContents(): Array<ItemStack>;
	getExtraContents(): Array<ItemStack>;
	getHelmet(): ItemStack;
	getChestplate(): ItemStack;
	getLeggings(): ItemStack;
	getBoots(): ItemStack;
	setArmorContents(arg0: Array<ItemStack>): void;
	setExtraContents(arg0: Array<ItemStack>): void;
	setHelmet(arg0: ItemStack): void;
	setChestplate(arg0: ItemStack): void;
	setLeggings(arg0: ItemStack): void;
	setBoots(arg0: ItemStack): void;
	setItemInMainHand(arg0: ItemStack): void;
	getItemInOffHand(): ItemStack;
	setItemInOffHand(arg0: ItemStack): void;
	getHeldItemSlot(): number;
	setHeldItemSlot(arg0: number): void;
	setContents(arg0: Array<ItemStack>): void;
	getMaxStackSize(): number;
	getStorageContents(): Array<ItemStack>;
	setMaxStackSize(arg0: number): void;
	getItem(arg0: number): ItemStack;
	addItem(arg0: Array<ItemStack>): any;
	removeItem(arg0: Array<ItemStack>): any;
	getContents(): Array<ItemStack>;
	setStorageContents(arg0: Array<ItemStack>): void;
	containsAtLeast(arg0: ItemStack, arg1: number): boolean;
	firstEmpty(): number;
	getViewers(): any;
	remove(arg0: ItemStack): void;
	remove(arg0: Material): void;
	clear(): void;
	clear(arg0: number): void;
	contains(arg0: ItemStack, arg1: number): boolean;
	contains(arg0: Material): boolean;
	contains(arg0: Material, arg1: number): boolean;
	contains(arg0: ItemStack): boolean;
	iterator(): any;
	iterator(arg0: number): any;
	iterator(): any;
	getLocation(): Location;
	first(arg0: ItemStack): number;
	first(arg0: Material): number;
	getType(): InventoryType;
	getSize(): number;
	all(arg0: ItemStack): any;
	all(arg0: Material): any;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class PlayerInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.PlayerInventory');
	}
}
