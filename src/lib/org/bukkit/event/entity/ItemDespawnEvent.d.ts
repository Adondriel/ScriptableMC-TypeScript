import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Item } from '../../../../org/bukkit/entity/Item.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface ItemDespawnEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): Item;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLocation(): Location;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ItemDespawnEvent {
    static get $javaClass(): any;
    constructor(despawnee: Item, loc: Location);
    static getHandlerList(): HandlerList;
}