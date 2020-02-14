declare var Java: any;
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ServerCommandEvent from '../../../../org/bukkit/event/server/ServerCommandEvent.js'

export default interface RemoteServerCommandEvent extends ServerCommandEvent {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	getSender(): CommandSender;
	getCommand(): string;
	setCancelled(cancel: boolean): void;
	setCommand(message: string): void;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class RemoteServerCommandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.RemoteServerCommandEvent');
	}
	constructor(sender: CommandSender, command: string);
	constructor(...args: any[]) {
		return new RemoteServerCommandEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RemoteServerCommandEvent.$javaClass.getHandlerList(...args);
	}
}

