declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Vector from '../../../../org/bukkit/util/Vector.js'

export default interface BlockDispenseEvent extends BlockEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setVelocity(vel: Vector): void;
	getVelocity(): Vector;
	getItem(): ItemStack;
	setItem(item: ItemStack): void;
	setCancelled(cancel: boolean): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class BlockDispenseEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDispenseEvent');
	}
	constructor(block: Block, dispensed: ItemStack, velocity: Vector);
	constructor(...args: any[]) {
		return new BlockDispenseEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockDispenseEvent.$javaClass.getHandlerList(...args);
	}
}

