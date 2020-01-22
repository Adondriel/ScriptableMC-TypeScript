declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerInteractEntityEvent} from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js'

export interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
	getHandlers(): HandlerList;
	getClickedPosition(): Vector;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getRightClicked(): Entity;
	getHand(): EquipmentSlot;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerInteractAtEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractAtEntityEvent');
	}
	constructor(who: Player, clickedEntity: Entity, position: Vector, hand: EquipmentSlot);
	constructor(who: Player, clickedEntity: Entity, position: Vector);
	constructor(...args: any[]) {
		return new PlayerInteractAtEntityEvent.$javaClass(...args);
	}
}

