import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Vector } from '../../../../org/bukkit/util/Vector.js';
import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerInteractEntityEvent } from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js';
export interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
    getHandlers(): HandlerList;
    getClickedPosition(): Vector;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getHand(): EquipmentSlot;
    getRightClicked(): Entity;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerInteractAtEntityEvent {
    static get $javaClass(): any;
    constructor(who: Player, clickedEntity: Entity, position: Vector, hand: EquipmentSlot);
    constructor(who: Player, clickedEntity: Entity, position: Vector);
    static getHandlerList(): HandlerList;
}