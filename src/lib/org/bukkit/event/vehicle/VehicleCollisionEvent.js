export class VehicleCollisionEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleCollisionEvent');
    }
    constructor(...args) {
        return new VehicleCollisionEvent.$javaClass(...args);
    }
}
//# sourceMappingURL=VehicleCollisionEvent.js.map