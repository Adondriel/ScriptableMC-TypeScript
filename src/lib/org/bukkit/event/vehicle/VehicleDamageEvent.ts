declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from '../../../../org/bukkit/event/vehicle/VehicleEvent.js'

export default interface VehicleDamageEvent extends VehicleEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setDamage(damage: number): void;
	getDamage(): number;
	setCancelled(cancel: boolean): void;
	getAttacker(): Entity;
	getVehicle(): Vehicle;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class VehicleDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleDamageEvent');
	}
	constructor(vehicle: Vehicle, attacker: Entity, damage: number);
	constructor(...args: any[]) {
		return new VehicleDamageEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleDamageEvent.$javaClass.getHandlerList(...args);
	}
}

