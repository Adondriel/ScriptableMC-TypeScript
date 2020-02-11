import Block from '../../../../org/bukkit/block/Block.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerBedEnterEvent$BedEnterResult from '../../../../org/bukkit/event/player/PlayerBedEnterEvent$BedEnterResult.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    useBed(): Event$Result;
    getBedEnterResult(): PlayerBedEnterEvent$BedEnterResult;
    setUseBed(useBed: Event$Result): void;
    getBed(): Block;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerBedEnterEvent {
    static get $javaClass(): any;
    constructor(who: Player, bed: Block);
    constructor(who: Player, bed: Block, bedEnterResult: PlayerBedEnterEvent$BedEnterResult);
    static getHandlerList(): HandlerList;
}
