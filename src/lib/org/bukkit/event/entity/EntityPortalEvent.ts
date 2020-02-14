declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityTeleportEvent from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'

export default interface EntityPortalEvent extends EntityTeleportEvent {
	getHandlers(): HandlerList;
	getSearchRadius(): number;
	setSearchRadius(searchRadius: number): void;
	getFrom(): Location;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getTo(): Location;
	setFrom(from: Location): void;
	setTo(to: Location): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class EntityPortalEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPortalEvent');
	}
	constructor(entity: Entity, from: Location, to: Location, searchRadius: number);
	constructor(entity: Entity, from: Location, to: Location);
	constructor(...args: any[]) {
		return new EntityPortalEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityPortalEvent.$javaClass.getHandlerList(...args);
	}
}

