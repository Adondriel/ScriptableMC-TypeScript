declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerExpChangeEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getAmount(): number;
	setAmount(amount: number): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PlayerExpChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerExpChangeEvent');
	}
	constructor(player: Player, expAmount: number);
	constructor(...args: any[]) {
		return new PlayerExpChangeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerExpChangeEvent.$javaClass.getHandlerList(...args);
	}
}

