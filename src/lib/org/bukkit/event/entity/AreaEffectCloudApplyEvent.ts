declare var Java: any;
import AreaEffectCloud from '../../../../org/bukkit/entity/AreaEffectCloud.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): AreaEffectCloud;
	setCancelled(cancel: boolean): void;
	getAffectedEntities(): Array<LivingEntity>;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class AreaEffectCloudApplyEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.AreaEffectCloudApplyEvent');
	}
	constructor(entity: AreaEffectCloud, affectedEntities: Array<any>);
	constructor(...args: any[]) {
		return new AreaEffectCloudApplyEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return AreaEffectCloudApplyEvent.$javaClass.getHandlerList(...args);
	}
}

