import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerChannelEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getChannel(): string;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerChannelEvent {
    static get $javaClass(): any;
    constructor(player: Player, channel: string);
    static getHandlerList(): HandlerList;
}
