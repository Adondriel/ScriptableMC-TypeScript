declare var Java: any;
import {ProjectileSource} from '../../../org/bukkit/projectiles/ProjectileSource.js'
import {Color} from '../../../org/bukkit/Color.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {PotionData} from '../../../org/bukkit/potion/PotionData.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {Particle} from '../../../org/bukkit/Particle.js'
import {Location} from '../../../org/bukkit/Location.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Pose} from '../../../org/bukkit/entity/Pose.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface AreaEffectCloud extends Entity {
	getSource(): ProjectileSource;
	hasCustomEffects(): boolean;
	setColor(color: Color): void;
	getCustomEffects(): any;
	removeCustomEffect(type: PotionEffectType): boolean;
	setBasePotionData(data: PotionData): void;
	getBasePotionData(): PotionData;
	addCustomEffect(effect: PotionEffect, overwrite: boolean): boolean;
	hasCustomEffect(type: PotionEffectType): boolean;
	clearCustomEffects(): void;
	getColor(): Color;
	getDuration(): number;
	getWaitTime(): number;
	setWaitTime(waitTime: number): void;
	setRadiusOnUse(radius: number): void;
	getRadiusPerTick(): number;
	setRadiusPerTick(radius: number): void;
	getDurationOnUse(): number;
	getRadiusOnUse(): number;
	getParticle(): Particle;
	setParticle(particle: Particle, data: any): void;
	setParticle(particle: Particle): void;
	setDurationOnUse(duration: number): void;
	getRadius(): number;
	setRadius(radius: number): void;
	setDuration(duration: number): void;
	getReapplicationDelay(): number;
	setReapplicationDelay(delay: number): void;
	setSource(source: ProjectileSource): void;
	remove(): void;
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): EntityType;
	getServer(): Server;
	isValid(): boolean;
	getWorld(): World;
	playEffect(type: EntityEffect): void;
	getBoundingBox(): BoundingBox;
	getPassenger(): Entity;
	getHeight(): number;
	setVelocity(velocity: Vector): void;
	getEntityId(): number;
	getLastDamageCause(): EntityDamageEvent;
	getTicksLived(): number;
	setRotation(yaw: number, pitch: number): void;
	removePassenger(passenger: Entity): boolean;
	getUniqueId(): string;
	getVelocity(): Vector;
	addPassenger(passenger: Entity): boolean;
	leaveVehicle(): boolean;
	isDead(): boolean;
	isOnGround(): boolean;
	setPersistent(persistent: boolean): void;
	getFireTicks(): number;
	eject(): boolean;
	getVehicle(): Entity;
	setGlowing(flag: boolean): void;
	isGlowing(): boolean;
	getPassengers(): any;
	isPersistent(): boolean;
	setFallDistance(distance: number): void;
	setInvulnerable(flag: boolean): void;
	setPassenger(passenger: Entity): boolean;
	teleport(location: Location): boolean;
	teleport(location: Location, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(destination: Entity): boolean;
	teleport(destination: Entity, cause: PlayerTeleportEvent$TeleportCause): boolean;
	getWidth(): number;
	getNearbyEntities(x: number, y: number, z: number): any;
	setFireTicks(ticks: number): void;
	getMaxFireTicks(): number;
	getFallDistance(): number;
	setLastDamageCause(event: EntityDamageEvent): void;
	setTicksLived(value: number): void;
	isInsideVehicle(): boolean;
	addScoreboardTag(tag: string): boolean;
	setSilent(flag: boolean): void;
	setGravity(gravity: boolean): void;
	hasGravity(): boolean;
	getScoreboardTags(): any;
	getFacing(): BlockFace;
	getPose(): Pose;
	isSilent(): boolean;
	setPortalCooldown(cooldown: number): void;
	getPortalCooldown(): number;
	isInvulnerable(): boolean;
	getPistonMoveReaction(): PistonMoveReaction;
	setCustomNameVisible(flag: boolean): void;
	isCustomNameVisible(): boolean;
	removeScoreboardTag(tag: string): boolean;
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	getName(): string;
	sendMessage(messages: Array<string>): void;
	sendMessage(message: string): void;
	hasPermission(_name: string): boolean;
	hasPermission(perm: Permission): boolean;
	removeAttachment(attachment: PermissionAttachment): void;
	isPermissionSet(_name: string): boolean;
	isPermissionSet(perm: Permission): boolean;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	recalculatePermissions(): void;
	getEffectivePermissions(): any;
	isOp(): boolean;
	setOp(value: boolean): void;
	setCustomName(_name: string): void;
	getCustomName(): string;
	getPersistentDataContainer(): PersistentDataContainer;
}

export class AreaEffectCloud {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AreaEffectCloud');
	}
}

