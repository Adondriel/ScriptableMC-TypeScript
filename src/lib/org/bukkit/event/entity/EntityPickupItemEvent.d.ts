import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Item } from '../../../../org/bukkit/entity/Item.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityPickupItemEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getRemaining(): number;
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getItem(): Item;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityPickupItemEvent {
    static get $javaClass(): any;
    constructor(entity: LivingEntity, item: Item, remaining: number);
    static getHandlerList(): HandlerList;
}
