import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import BoundingBox from '../../../../org/bukkit/util/BoundingBox.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityEffect from '../../../../org/bukkit/EntityEffect.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import Location from '../../../../org/bukkit/Location.js';
import MaterialData from '../../../../org/bukkit/material/MaterialData.js';
import MetadataValue from '../../../../org/bukkit/metadata/MetadataValue.js';
import Minecart from '../../../../org/bukkit/entity/Minecart.js';
import Permission from '../../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../../org/bukkit/permissions/PermissionAttachment.js';
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js';
import PistonMoveReaction from '../../../../org/bukkit/block/PistonMoveReaction.js';
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import Pose from '../../../../org/bukkit/entity/Pose.js';
import Server from '../../../../org/bukkit/Server.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
import World from '../../../../org/bukkit/World.js';
export default interface RideableMinecart extends Minecart {
    getDamage(): number;
    setDamage(arg0: number): void;
    getDisplayBlock(): MaterialData;
    isSlowWhenEmpty(): boolean;
    setDisplayBlock(arg0: MaterialData): void;
    setSlowWhenEmpty(arg0: boolean): void;
    getDisplayBlockOffset(): number;
    setDisplayBlockOffset(arg0: number): void;
    setFlyingVelocityMod(arg0: Vector): void;
    getFlyingVelocityMod(): Vector;
    getDisplayBlockData(): BlockData;
    setDisplayBlockData(arg0: BlockData): void;
    setDerailedVelocityMod(arg0: Vector): void;
    getDerailedVelocityMod(): Vector;
    getMaxSpeed(): number;
    setMaxSpeed(arg0: number): void;
    getVelocity(): Vector;
    setVelocity(arg0: Vector): void;
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
}
export default class RideableMinecart {
    static get $javaClass(): any;
}
