declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'

export default interface BlockShearEntityEvent extends BlockEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	setCancelled(cancelled: boolean): void;
	getTool(): ItemStack;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class BlockShearEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockShearEntityEvent');
	}
	constructor(dispenser: Block, sheared: Entity, tool: ItemStack);
	constructor(...args: any[]) {
		return new BlockShearEntityEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockShearEntityEvent.$javaClass.getHandlerList(...args);
	}
}

