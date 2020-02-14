declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityPotionEffectEvent$Action from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Action.js'
import EntityPotionEffectEvent$Cause from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Cause.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import PotionEffect from '../../../../org/bukkit/potion/PotionEffect.js'
import PotionEffectType from '../../../../org/bukkit/potion/PotionEffectType.js'

export default interface EntityPotionEffectEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getAction(): EntityPotionEffectEvent$Action;
	getNewEffect(): PotionEffect;
	getOldEffect(): PotionEffect;
	getModifiedType(): PotionEffectType;
	isOverride(): boolean;
	setOverride(override: boolean): void;
	getCause(): EntityPotionEffectEvent$Cause;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class EntityPotionEffectEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent');
	}
	constructor(livingEntity: LivingEntity, oldEffect: PotionEffect, newEffect: PotionEffect, cause: EntityPotionEffectEvent$Cause, action: EntityPotionEffectEvent$Action, override: boolean);
	constructor(...args: any[]) {
		return new EntityPotionEffectEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityPotionEffectEvent.$javaClass.getHandlerList(...args);
	}
}

