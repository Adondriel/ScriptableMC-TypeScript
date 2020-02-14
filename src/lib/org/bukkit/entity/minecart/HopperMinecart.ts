declare var Java: any;
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import BoundingBox from '../../../../org/bukkit/util/BoundingBox.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityDamageEvent from '../../../../org/bukkit/event/entity/EntityDamageEvent.js'
import EntityEffect from '../../../../org/bukkit/EntityEffect.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryHolder from '../../../../org/bukkit/inventory/InventoryHolder.js'
import Location from '../../../../org/bukkit/Location.js'
import LootTable from '../../../../org/bukkit/loot/LootTable.js'
import Lootable from '../../../../org/bukkit/loot/Lootable.js'
import MaterialData from '../../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../../org/bukkit/metadata/MetadataValue.js'
import Minecart from '../../../../org/bukkit/entity/Minecart.js'
import Permission from '../../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../../org/bukkit/permissions/PermissionAttachment.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'
import PistonMoveReaction from '../../../../org/bukkit/block/PistonMoveReaction.js'
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import Pose from '../../../../org/bukkit/entity/Pose.js'
import Server from '../../../../org/bukkit/Server.js'
import Vector from '../../../../org/bukkit/util/Vector.js'
import World from '../../../../org/bukkit/World.js'

export default interface HopperMinecart extends Minecart, InventoryHolder, Lootable {
	isEnabled(): boolean;
	setEnabled(arg0: boolean): void;
	setDamage(arg0: number): void;
	getDamage(): number;
	setMaxSpeed(arg0: number): void;
	getMaxSpeed(): number;
	isSlowWhenEmpty(): boolean;
	setSlowWhenEmpty(arg0: boolean): void;
	getFlyingVelocityMod(): Vector;
	setFlyingVelocityMod(arg0: Vector): void;
	getDerailedVelocityMod(): Vector;
	setDerailedVelocityMod(arg0: Vector): void;
	setDisplayBlock(arg0: MaterialData): void;
	getDisplayBlock(): MaterialData;
	setDisplayBlockData(arg0: BlockData): void;
	getDisplayBlockData(): BlockData;
	setDisplayBlockOffset(arg0: number): void;
	getDisplayBlockOffset(): number;
	setVelocity(arg0: Vector): void;
	getVelocity(): Vector;
	isValid(): boolean;
	getServer(): Server;
	getUniqueId(): string;
	playEffect(arg0: EntityEffect): void;
	getWorld(): World;
	getHeight(): number;
	getWidth(): number;
	getBoundingBox(): BoundingBox;
	isOnGround(): boolean;
	setRotation(arg0: number, arg1: number): void;
	teleport(arg0: Location): boolean;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
	getEntityId(): number;
	getFireTicks(): number;
	getMaxFireTicks(): number;
	setFireTicks(arg0: number): void;
	isDead(): boolean;
	isPersistent(): boolean;
	setPersistent(arg0: boolean): void;
	getPassenger(): Entity;
	setPassenger(arg0: Entity): boolean;
	getPassengers(): Array<Entity>;
	addPassenger(arg0: Entity): boolean;
	removePassenger(arg0: Entity): boolean;
	eject(): boolean;
	getFallDistance(): number;
	setFallDistance(arg0: number): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	getLastDamageCause(): EntityDamageEvent;
	getTicksLived(): number;
	setTicksLived(arg0: number): void;
	isInsideVehicle(): boolean;
	leaveVehicle(): boolean;
	getVehicle(): Entity;
	setCustomNameVisible(arg0: boolean): void;
	isCustomNameVisible(): boolean;
	setGlowing(arg0: boolean): void;
	isGlowing(): boolean;
	setInvulnerable(arg0: boolean): void;
	isInvulnerable(): boolean;
	isSilent(): boolean;
	setSilent(arg0: boolean): void;
	hasGravity(): boolean;
	setGravity(arg0: boolean): void;
	getPortalCooldown(): number;
	setPortalCooldown(arg0: number): void;
	getScoreboardTags(): any;
	addScoreboardTag(arg0: string): boolean;
	removeScoreboardTag(arg0: string): boolean;
	getPistonMoveReaction(): PistonMoveReaction;
	getFacing(): BlockFace;
	getPose(): Pose;
	remove(): void;
	isEmpty(): boolean;
	getLocation(arg0: Location): Location;
	getLocation(): Location;
	getType(): EntityType;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): Array<MetadataValue>;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	sendMessage(arg0: string): void;
	sendMessage(arg0: Array<string>): void;
	getName(): string;
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	recalculatePermissions(): void;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin): PermissionAttachment;
	removeAttachment(arg0: PermissionAttachment): void;
	getEffectivePermissions(): any;
	setOp(arg0: boolean): void;
	isOp(): boolean;
	getCustomName(): string;
	setCustomName(arg0: string): void;
	getPersistentDataContainer(): PersistentDataContainer;
	getInventory(): Inventory;
	setSeed(arg0: number): void;
	getLootTable(): LootTable;
	getSeed(): number;
	setLootTable(arg0: LootTable): void;
}

export default class HopperMinecart {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.minecart.HopperMinecart');
	}
}

