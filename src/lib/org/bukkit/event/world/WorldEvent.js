export class WorldEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldEvent');
    }
    constructor(...args) {
        return new WorldEvent.$javaClass(...args);
    }
}
//# sourceMappingURL=WorldEvent.js.map