export class PlayerFishEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerFishEvent');
    }
    constructor(...args) {
        return new PlayerFishEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerFishEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=PlayerFishEvent.js.map