declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface WorldInitEvent extends WorldEvent {
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class WorldInitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldInitEvent');
	}
	constructor(world: World);
	constructor(...args: any[]) {
		return new WorldInitEvent.$javaClass(...args);
	}
}

