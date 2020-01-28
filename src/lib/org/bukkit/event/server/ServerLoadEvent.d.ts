import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ServerLoadEvent$LoadType } from '../../../../org/bukkit/event/server/ServerLoadEvent$LoadType.js';
import { ServerEvent } from '../../../../org/bukkit/event/server/ServerEvent.js';
export interface ServerLoadEvent extends ServerEvent {
    getHandlers(): HandlerList;
    getType(): ServerLoadEvent$LoadType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ServerLoadEvent {
    static get $javaClass(): any;
    constructor(type: ServerLoadEvent$LoadType);
    static getHandlerList(): HandlerList;
}