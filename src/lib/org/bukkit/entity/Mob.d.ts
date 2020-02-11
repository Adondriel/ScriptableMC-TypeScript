import Attribute from '../../../org/bukkit/attribute/Attribute.js';
import AttributeInstance from '../../../org/bukkit/attribute/AttributeInstance.js';
import Block from '../../../org/bukkit/block/Block.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js';
import Entity from '../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityEffect from '../../../org/bukkit/EntityEffect.js';
import EntityEquipment from '../../../org/bukkit/inventory/EntityEquipment.js';
import EntityType from '../../../org/bukkit/entity/EntityType.js';
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import Location from '../../../org/bukkit/Location.js';
import LootTable from '../../../org/bukkit/loot/LootTable.js';
import Lootable from '../../../org/bukkit/loot/Lootable.js';
import MemoryKey from '../../../org/bukkit/entity/memory/MemoryKey.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js';
import Player from '../../../org/bukkit/entity/Player.js';
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Pose from '../../../org/bukkit/entity/Pose.js';
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js';
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js';
import Projectile from '../../../org/bukkit/entity/Projectile.js';
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js';
import Server from '../../../org/bukkit/Server.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface Mob extends LivingEntity, Lootable {
    getTarget(): LivingEntity;
    setTarget(arg0: LivingEntity): void;
    setMemory(arg0: MemoryKey, arg1: any): void;
    getMemory(arg0: MemoryKey): any;
    isCollidable(): boolean;
    isRiptiding(): boolean;
    setLastDamage(arg0: number): void;
    getPotionEffect(arg0: PotionEffectType): PotionEffect;
    getCanPickupItems(): boolean;
    setMaximumAir(arg0: number): void;
    hasLineOfSight(arg0: Entity): boolean;
    isGliding(): boolean;
    setAI(arg0: boolean): void;
    setCollidable(arg0: boolean): void;
    getEyeHeight(): number;
    getEyeHeight(arg0: boolean): number;
    getEyeLocation(): Location;
    getRemainingAir(): number;
    getLastDamage(): number;
    getNoDamageTicks(): number;
    isLeashed(): boolean;
    removePotionEffect(arg0: PotionEffectType): void;
    getKiller(): Player;
    setLeashHolder(arg0: Entity): boolean;
    isSwimming(): boolean;
    getMaximumAir(): number;
    setSwimming(arg0: boolean): void;
    hasAI(): boolean;
    getTargetBlock(arg0: any, arg1: number): Block;
    rayTraceBlocks(arg0: number, arg1: FluidCollisionMode): RayTraceResult;
    rayTraceBlocks(arg0: number): RayTraceResult;
    addPotionEffects(arg0: any): boolean;
    getEquipment(): EntityEquipment;
    isSleeping(): boolean;
    setRemainingAir(arg0: number): void;
    addPotionEffect(arg0: PotionEffect): boolean;
    addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean;
    getLeashHolder(): Entity;
    setNoDamageTicks(arg0: number): void;
    hasPotionEffect(arg0: PotionEffectType): boolean;
    setCanPickupItems(arg0: boolean): void;
    getLineOfSight(arg0: any, arg1: number): Array<Block>;
    setGliding(arg0: boolean): void;
    getActivePotionEffects(): any;
    getRemoveWhenFarAway(): boolean;
    setRemoveWhenFarAway(arg0: boolean): void;
    setMaximumNoDamageTicks(arg0: number): void;
    getLastTwoTargetBlocks(arg0: any, arg1: number): Array<Block>;
    getTargetBlockExact(arg0: number): Block;
    getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
    getMaximumNoDamageTicks(): number;
    getAttribute(arg0: Attribute): AttributeInstance;
    damage(arg0: number): void;
    damage(arg0: number, arg1: Entity): void;
    setHealth(arg0: number): void;
    getHealth(): number;
    getMaxHealth(): number;
    setMaxHealth(arg0: number): void;
    resetMaxHealth(): void;
    setAbsorptionAmount(arg0: number): void;
    getAbsorptionAmount(): number;
    remove(): void;
    isEmpty(): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getType(): EntityType;
    getServer(): Server;
    getPose(): Pose;
    getEntityId(): number;
    setGravity(arg0: boolean): void;
    getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
    setFireTicks(arg0: number): void;
    isValid(): boolean;
    setPersistent(arg0: boolean): void;
    getPassengers(): Array<Entity>;
    getFallDistance(): number;
    setLastDamageCause(arg0: EntityDamageEvent): void;
    leaveVehicle(): boolean;
    isGlowing(): boolean;
    isSilent(): boolean;
    setTicksLived(arg0: number): void;
    hasGravity(): boolean;
    setFallDistance(arg0: number): void;
    isInvulnerable(): boolean;
    getVehicle(): Entity;
    setPassenger(arg0: Entity): boolean;
    setInvulnerable(arg0: boolean): void;
    getHeight(): number;
    getPortalCooldown(): number;
    setPortalCooldown(arg0: number): void;
    getMaxFireTicks(): number;
    getScoreboardTags(): any;
    isPersistent(): boolean;
    addScoreboardTag(arg0: string): boolean;
    getFacing(): BlockFace;
    getVelocity(): Vector;
    setVelocity(arg0: Vector): void;
    setRotation(arg0: number, arg1: number): void;
    removePassenger(arg0: Entity): boolean;
    getUniqueId(): string;
    setSilent(arg0: boolean): void;
    getBoundingBox(): BoundingBox;
    teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
    teleport(arg0: Location): boolean;
    teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
    teleport(arg0: Entity): boolean;
    getWorld(): World;
    getFireTicks(): number;
    isOnGround(): boolean;
    addPassenger(arg0: Entity): boolean;
    getTicksLived(): number;
    isDead(): boolean;
    setGlowing(arg0: boolean): void;
    getLastDamageCause(): EntityDamageEvent;
    getPassenger(): Entity;
    isInsideVehicle(): boolean;
    eject(): boolean;
    getWidth(): number;
    playEffect(arg0: EntityEffect): void;
    isCustomNameVisible(): boolean;
    removeScoreboardTag(arg0: string): boolean;
    setCustomNameVisible(arg0: boolean): void;
    getPistonMoveReaction(): PistonMoveReaction;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    removeMetadata(arg0: string, arg1: Plugin): void;
    getMetadata(arg0: string): Array<MetadataValue>;
    hasMetadata(arg0: string): boolean;
    getName(): string;
    sendMessage(arg0: Array<string>): void;
    sendMessage(arg0: string): void;
    recalculatePermissions(): void;
    getEffectivePermissions(): any;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addAttachment(arg0: Plugin): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    isPermissionSet(arg0: Permission): boolean;
    isPermissionSet(arg0: string): boolean;
    removeAttachment(arg0: PermissionAttachment): void;
    hasPermission(arg0: Permission): boolean;
    hasPermission(arg0: string): boolean;
    isOp(): boolean;
    setOp(arg0: boolean): void;
    setCustomName(arg0: string): void;
    getCustomName(): string;
    getPersistentDataContainer(): PersistentDataContainer;
    launchProjectile(arg0: any): Projectile;
    launchProjectile(arg0: any, arg1: Vector): Projectile;
    getLootTable(): LootTable;
    getSeed(): number;
    setSeed(arg0: number): void;
    setLootTable(arg0: LootTable): void;
}
export default class Mob {
    static get $javaClass(): any;
}
