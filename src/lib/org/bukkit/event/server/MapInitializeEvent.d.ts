import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import MapView from '../../../../org/bukkit/map/MapView.js';
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js';
export default interface MapInitializeEvent extends ServerEvent {
    getMap(): MapView;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class MapInitializeEvent {
    static get $javaClass(): any;
    constructor(mapView: MapView);
    static getHandlerList(): HandlerList;
}
