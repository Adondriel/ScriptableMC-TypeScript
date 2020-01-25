declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface LeavesDecayEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class LeavesDecayEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.LeavesDecayEvent');
	}
	constructor(block: Block);
	constructor(...args: any[]) {
		return new LeavesDecayEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return LeavesDecayEvent.$javaClass.getHandlerList(...args);
	}
}
