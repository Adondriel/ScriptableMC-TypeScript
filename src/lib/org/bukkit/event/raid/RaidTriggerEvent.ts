declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import Raid from '../../../../org/bukkit/Raid.js'
import RaidEvent from '../../../../org/bukkit/event/raid/RaidEvent.js'
import World from '../../../../org/bukkit/World.js'

export default interface RaidTriggerEvent extends RaidEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	setCancelled(cancel: boolean): void;
	getRaid(): Raid;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class RaidTriggerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidTriggerEvent');
	}
	constructor(raid: Raid, world: World, player: Player);
	constructor(...args: any[]) {
		return new RaidTriggerEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RaidTriggerEvent.$javaClass.getHandlerList(...args);
	}
}

