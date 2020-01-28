import { Block } from '../../../../org/bukkit/block/Block.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityCombustEvent } from '../../../../org/bukkit/event/entity/EntityCombustEvent.js';
export interface EntityCombustByBlockEvent extends EntityCombustEvent {
    getCombuster(): Block;
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
export declare class EntityCombustByBlockEvent {
    static get $javaClass(): any;
    constructor(combuster: Block, combustee: Entity, duration: number);
    static getHandlerList(): HandlerList;
}