declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockPhysicsEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getSourceBlock(): Block;
	getChangedType(): Material;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockPhysicsEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPhysicsEvent');
	}
	constructor(block: Block, changed: BlockData);
	constructor(block: Block, changed: BlockData, sourceBlock: Block);
	constructor(...args: any[]) {
		return new BlockPhysicsEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockPhysicsEvent.$javaClass.getHandlerList(...args);
	}
}
