import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { CommandSender } from '../../../../org/bukkit/command/CommandSender.js';
import { ServerCommandEvent } from '../../../../org/bukkit/event/server/ServerCommandEvent.js';
export interface RemoteServerCommandEvent extends ServerCommandEvent {
    getHandlers(): HandlerList;
    getCommand(): string;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setCommand(message: string): void;
    getSender(): CommandSender;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class RemoteServerCommandEvent {
    static get $javaClass(): any;
    constructor(sender: CommandSender, command: string);
    static getHandlerList(): HandlerList;
}