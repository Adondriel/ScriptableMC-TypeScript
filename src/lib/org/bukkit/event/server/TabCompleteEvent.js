export class TabCompleteEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.TabCompleteEvent');
    }
    constructor(...args) {
        return new TabCompleteEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return TabCompleteEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=TabCompleteEvent.js.map