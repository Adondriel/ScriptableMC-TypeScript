import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { CraftingInventory } from '../../../../org/bukkit/inventory/CraftingInventory.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { Recipe } from '../../../../org/bukkit/inventory/Recipe.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { InventoryEvent } from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
export interface PrepareItemCraftEvent extends InventoryEvent {
    getHandlers(): HandlerList;
    getInventory(): CraftingInventory;
    getInventory(): Inventory;
    getRecipe(): Recipe;
    isRepair(): boolean;
    getViewers(): any;
    getView(): InventoryView;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PrepareItemCraftEvent {
    static get $javaClass(): any;
    constructor(what: CraftingInventory, view: InventoryView, isRepair: boolean);
    static getHandlerList(): HandlerList;
}