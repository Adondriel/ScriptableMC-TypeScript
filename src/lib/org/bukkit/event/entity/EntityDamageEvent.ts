declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityDamageEvent$DamageCause from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js'
import EntityDamageEvent$DamageModifier from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityDamageEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setDamage(damage: number): void;
	setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
	getDamage(): number;
	getDamage(type: EntityDamageEvent$DamageModifier): number;
	isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
	setCancelled(cancel: boolean): void;
	getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
	getFinalDamage(): number;
	getCause(): EntityDamageEvent$DamageCause;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class EntityDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageEvent');
	}
	constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
	constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
	constructor(...args: any[]) {
		return new EntityDamageEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityDamageEvent.$javaClass.getHandlerList(...args);
	}
}

