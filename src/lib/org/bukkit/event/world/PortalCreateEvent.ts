declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {PortalCreateEvent$CreateReason} from '../../../../org/bukkit/event/world/PortalCreateEvent$CreateReason.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface PortalCreateEvent extends WorldEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getReason(): PortalCreateEvent$CreateReason;
	getBlocks(): any;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PortalCreateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.PortalCreateEvent');
	}
	constructor(blocks: any, world: World, entity: Entity, reason: PortalCreateEvent$CreateReason);
	constructor(blocks: any, world: World, reason: PortalCreateEvent$CreateReason);
	constructor(...args: any[]) {
		return new PortalCreateEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PortalCreateEvent.$javaClass.getHandlerList(...args);
	}
}
