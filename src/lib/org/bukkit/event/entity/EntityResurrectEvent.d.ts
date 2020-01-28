import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityResurrectEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): LivingEntity;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityResurrectEvent {
    static get $javaClass(): any;
    constructor(what: LivingEntity);
    static getHandlerList(): HandlerList;
}