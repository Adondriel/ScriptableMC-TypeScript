declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockBurnEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getIgnitingBlock(): Block;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockBurnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockBurnEvent');
	}
	constructor(block: Block);
	constructor(block: Block, ignitingBlock: Block);
	constructor(...args: any[]) {
		return new BlockBurnEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockBurnEvent.$javaClass.getHandlerList(...args);
	}
}
