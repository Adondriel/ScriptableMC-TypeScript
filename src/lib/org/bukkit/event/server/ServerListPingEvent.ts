declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CachedServerIcon} from '../../../../org/bukkit/util/CachedServerIcon.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface ServerListPingEvent extends ServerEvent {
	getHandlers(): HandlerList;
	getMaxPlayers(): number;
	getMotd(): string;
	getNumPlayers(): number;
	setMaxPlayers(maxPlayers: number): void;
	setServerIcon(icon: CachedServerIcon): void;
	setMotd(motd: string): void;
	getAddress(): any;
	iterator(): any;
	getEventName(): string;
	isAsynchronous(): boolean;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class ServerListPingEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerListPingEvent');
	}
	constructor(address: any, motd: string, numPlayers: number, maxPlayers: number);
	constructor(...args: any[]) {
		return new ServerListPingEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ServerListPingEvent.$javaClass.getHandlerList(...args);
	}
}
