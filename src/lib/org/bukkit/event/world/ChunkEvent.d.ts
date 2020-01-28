import { Chunk } from '../../../../org/bukkit/Chunk.js';
import { World } from '../../../../org/bukkit/World.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { WorldEvent } from '../../../../org/bukkit/event/world/WorldEvent.js';
export interface ChunkEvent extends WorldEvent {
    getChunk(): Chunk;
    getWorld(): World;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ChunkEvent {
    static get $javaClass(): any;
}