declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerAnimationType} from '../../../../org/bukkit/event/player/PlayerAnimationType.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getAnimationType(): PlayerAnimationType;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerAnimationEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAnimationEvent');
	}
	constructor(player: Player);
	constructor(...args: any[]) {
		return new PlayerAnimationEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerAnimationEvent.$javaClass.getHandlerList(...args);
	}
}
