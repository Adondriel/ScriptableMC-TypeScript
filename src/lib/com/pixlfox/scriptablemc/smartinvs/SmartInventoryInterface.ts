declare var Java: any;
import {SmartInventory$Builder} from '../../../../fr/minuskube/inv/SmartInventory$Builder.js'
import {SmartInventoryProvider} from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartInventoryProvider.js'
import {SmartItemBuilder} from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartItemBuilder.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {ClickableItem} from '../../../../fr/minuskube/inv/ClickableItem.js'

export interface SmartInventoryInterface {
	builder(): SmartInventory$Builder;
	provider(scriptableObject: any): SmartInventoryProvider;
	itemBuilder(itemStack: ItemStack): SmartItemBuilder;
	clickableItem(item: ItemStack, consumer: any): ClickableItem;
	clickableItem(item: ItemStack): ClickableItem;
}

export class SmartInventoryInterface {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.smartinvs.SmartInventoryInterface');
	}
	constructor();
	constructor(...args: any[]) {
		return new SmartInventoryInterface.$javaClass(...args);
	}
}
