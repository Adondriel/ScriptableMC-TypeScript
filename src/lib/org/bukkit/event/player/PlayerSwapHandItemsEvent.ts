declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerSwapHandItemsEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getOffHandItem(): ItemStack;
	getMainHandItem(): ItemStack;
	setOffHandItem(offHandItem: ItemStack): void;
	setMainHandItem(mainHandItem: ItemStack): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerSwapHandItemsEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerSwapHandItemsEvent');
	}
	constructor(player: Player, mainHandItem: ItemStack, offHandItem: ItemStack);
	constructor(...args: any[]) {
		return new PlayerSwapHandItemsEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerSwapHandItemsEvent.$javaClass.getHandlerList(...args);
	}
}
