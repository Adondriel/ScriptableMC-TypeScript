declare var Java: any;
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityCombustEvent} from '../../../../org/bukkit/event/entity/EntityCombustEvent.js'

export interface EntityCombustByBlockEvent extends EntityCombustEvent {
	getCombuster(): Block;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	getDuration(): number;
	setCancelled(cancel: boolean): void;
	setDuration(duration: number): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityCombustByBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustByBlockEvent');
	}
	constructor(combuster: Block, combustee: Entity, duration: number);
	constructor(...args: any[]) {
		return new EntityCombustByBlockEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityCombustByBlockEvent.$javaClass.getHandlerList(...args);
	}
}
