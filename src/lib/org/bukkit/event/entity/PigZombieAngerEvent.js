export class PigZombieAngerEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PigZombieAngerEvent');
    }
    constructor(...args) {
        return new PigZombieAngerEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PigZombieAngerEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=PigZombieAngerEvent.js.map