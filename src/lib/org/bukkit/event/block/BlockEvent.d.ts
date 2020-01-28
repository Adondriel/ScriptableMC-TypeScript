import { Block } from '../../../../org/bukkit/block/Block.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface BlockEvent extends Event {
    getBlock(): Block;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block);
}