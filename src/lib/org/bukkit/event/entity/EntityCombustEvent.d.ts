import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityCombustEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getDuration(): number;
    setCancelled(cancel: boolean): void;
    setDuration(duration: number): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityCombustEvent {
    static get $javaClass(): any;
    constructor(combustee: Entity, duration: number);
    static getHandlerList(): HandlerList;
}