export class PlayerSwapHandItemsEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerSwapHandItemsEvent');
    }
    constructor(...args) {
        return new PlayerSwapHandItemsEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerSwapHandItemsEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=PlayerSwapHandItemsEvent.js.map