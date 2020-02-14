declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerChatEvent extends PlayerEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	setMessage(message: string): void;
	setFormat(format: string): void;
	getRecipients(): any;
	getFormat(): string;
	setPlayer(player: Player): void;
	getMessage(): string;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PlayerChatEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChatEvent');
	}
	constructor(player: Player, message: string, format: string, recipients: any);
	constructor(player: Player, message: string);
	constructor(...args: any[]) {
		return new PlayerChatEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerChatEvent.$javaClass.getHandlerList(...args);
	}
}

