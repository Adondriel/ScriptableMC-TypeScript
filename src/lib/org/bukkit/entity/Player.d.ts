import Advancement from '../../../org/bukkit/advancement/Advancement.js';
import AdvancementProgress from '../../../org/bukkit/advancement/AdvancementProgress.js';
import Attribute from '../../../org/bukkit/attribute/Attribute.js';
import AttributeInstance from '../../../org/bukkit/attribute/AttributeInstance.js';
import Block from '../../../org/bukkit/block/Block.js';
import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js';
import Conversable from '../../../org/bukkit/conversations/Conversable.js';
import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationAbandonedEvent from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js';
import DyeColor from '../../../org/bukkit/DyeColor.js';
import Effect from '../../../org/bukkit/Effect.js';
import Entity from '../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityEffect from '../../../org/bukkit/EntityEffect.js';
import EntityEquipment from '../../../org/bukkit/inventory/EntityEquipment.js';
import EntityType from '../../../org/bukkit/entity/EntityType.js';
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js';
import GameMode from '../../../org/bukkit/GameMode.js';
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import Instrument from '../../../org/bukkit/Instrument.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import InventoryView from '../../../org/bukkit/inventory/InventoryView.js';
import InventoryView$Property from '../../../org/bukkit/inventory/InventoryView$Property.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import MainHand from '../../../org/bukkit/inventory/MainHand.js';
import MapView from '../../../org/bukkit/map/MapView.js';
import Material from '../../../org/bukkit/Material.js';
import MemoryKey from '../../../org/bukkit/entity/memory/MemoryKey.js';
import Merchant from '../../../org/bukkit/inventory/Merchant.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Note from '../../../org/bukkit/Note.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import Particle from '../../../org/bukkit/Particle.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js';
import PlayerInventory from '../../../org/bukkit/inventory/PlayerInventory.js';
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import PluginMessageRecipient from '../../../org/bukkit/plugin/messaging/PluginMessageRecipient.js';
import Pose from '../../../org/bukkit/entity/Pose.js';
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js';
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js';
import Projectile from '../../../org/bukkit/entity/Projectile.js';
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js';
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js';
import Server from '../../../org/bukkit/Server.js';
import Sound from '../../../org/bukkit/Sound.js';
import SoundCategory from '../../../org/bukkit/SoundCategory.js';
import Statistic from '../../../org/bukkit/Statistic.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import Villager from '../../../org/bukkit/entity/Villager.js';
import WeatherType from '../../../org/bukkit/WeatherType.js';
import World from '../../../org/bukkit/World.js';
export default interface Player extends HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient {
    getAddress(): any;
    getDisplayName(): string;
    getPlayerListHeader(): string;
    getPlayerListFooter(): string;
    setPlayerListHeader(arg0: string): void;
    setPlayerListFooter(arg0: string): void;
    setPlayerListHeaderFooter(arg0: string, arg1: string): void;
    getPlayerTimeOffset(): number;
    isPlayerTimeRelative(): boolean;
    sendExperienceChange(arg0: number): void;
    sendExperienceChange(arg0: number, arg1: number): void;
    getAdvancementProgress(arg0: Advancement): AdvancementProgress;
    getClientViewDistance(): number;
    getPlayerListName(): string;
    setPlayerListName(arg0: string): void;
    setCompassTarget(arg0: Location): void;
    kickPlayer(arg0: string): void;
    chat(arg0: string): void;
    performCommand(arg0: string): boolean;
    isSneaking(): boolean;
    setSneaking(arg0: boolean): void;
    isSprinting(): boolean;
    loadData(): void;
    playSound(arg0: Location, arg1: string, arg2: number, arg3: number): void;
    playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void;
    playSound(arg0: Location, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void;
    playSound(arg0: Location, arg1: Sound, arg2: number, arg3: number): void;
    setSleepingIgnored(arg0: boolean): void;
    setDisplayName(arg0: string): void;
    stopSound(arg0: string, arg1: SoundCategory): void;
    stopSound(arg0: Sound, arg1: SoundCategory): void;
    stopSound(arg0: Sound): void;
    stopSound(arg0: string): void;
    isSleepingIgnored(): boolean;
    playEffect(arg0: Location, arg1: Effect, arg2: any): void;
    playEffect(arg0: Location, arg1: Effect, arg2: number): void;
    setSprinting(arg0: boolean): void;
    sendBlockChange(arg0: Location, arg1: BlockData): void;
    sendBlockChange(arg0: Location, arg1: Material, arg2: number): void;
    getCompassTarget(): Location;
    sendRawMessage(arg0: string): void;
    saveData(): void;
    sendChunkChange(arg0: Location, arg1: number, arg2: number, arg3: number, arg4: Array<number>): boolean;
    playNote(arg0: Location, arg1: number, arg2: number): void;
    playNote(arg0: Location, arg1: Instrument, arg2: Note): void;
    sendSignChange(arg0: Location, arg1: Array<string>): void;
    sendSignChange(arg0: Location, arg1: Array<string>, arg2: DyeColor): void;
    resetPlayerWeather(): void;
    setFlying(arg0: boolean): void;
    resetPlayerTime(): void;
    setWalkSpeed(arg0: number): void;
    setHealthScaled(arg0: boolean): void;
    setPlayerWeather(arg0: WeatherType): void;
    getExp(): number;
    getLevel(): number;
    getTotalExperience(): number;
    getFoodLevel(): number;
    getAllowFlight(): boolean;
    setAllowFlight(arg0: boolean): void;
    getHealthScale(): number;
    getSpectatorTarget(): Entity;
    setSpectatorTarget(arg0: Entity): void;
    getStatistic(arg0: Statistic, arg1: Material): number;
    getStatistic(arg0: Statistic, arg1: EntityType): number;
    getStatistic(arg0: Statistic): number;
    isFlying(): boolean;
    incrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
    incrementStatistic(arg0: Statistic, arg1: number): void;
    incrementStatistic(arg0: Statistic, arg1: EntityType): void;
    incrementStatistic(arg0: Statistic): void;
    incrementStatistic(arg0: Statistic, arg1: Material): void;
    incrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
    setFoodLevel(arg0: number): void;
    getFlySpeed(): number;
    getScoreboard(): Scoreboard;
    updateInventory(): void;
    setScoreboard(arg0: Scoreboard): void;
    isHealthScaled(): boolean;
    sendTitle(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): void;
    sendTitle(arg0: string, arg1: string): void;
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any): void;
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: any): void;
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number): void;
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: any): void;
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: any): void;
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: any): void;
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    spawnParticle(arg0: Particle, arg1: Location, arg2: number): void;
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number): void;
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: any): void;
    updateCommands(): void;
    openBook(arg0: ItemStack): void;
    getWalkSpeed(): number;
    setHealthScale(arg0: number): void;
    giveExpLevels(arg0: number): void;
    setLevel(arg0: number): void;
    setStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
    setStatistic(arg0: Statistic, arg1: number): void;
    setStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
    decrementStatistic(arg0: Statistic, arg1: number): void;
    decrementStatistic(arg0: Statistic, arg1: EntityType): void;
    decrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
    decrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
    decrementStatistic(arg0: Statistic, arg1: Material): void;
    decrementStatistic(arg0: Statistic): void;
    setPlayerTime(arg0: number, arg1: boolean): void;
    getSaturation(): number;
    showPlayer(arg0: Plugin, arg1: Player): void;
    showPlayer(arg0: Player): void;
    setTexturePack(arg0: string): void;
    setExhaustion(arg0: number): void;
    setResourcePack(arg0: string, arg1: Array<number>): void;
    setResourcePack(arg0: string): void;
    getLocale(): string;
    giveExp(arg0: number): void;
    canSee(arg0: Player): boolean;
    getExhaustion(): number;
    sendMap(arg0: MapView): void;
    setExp(arg0: number): void;
    hidePlayer(arg0: Player): void;
    hidePlayer(arg0: Plugin, arg1: Player): void;
    getPlayerTime(): number;
    setTotalExperience(arg0: number): void;
    setFlySpeed(arg0: number): void;
    getPlayerWeather(): WeatherType;
    setSaturation(arg0: number): void;
    resetTitle(): void;
    getName(): string;
    getName(): string;
    sleep(arg0: Location, arg1: boolean): boolean;
    closeInventory(): void;
    getOpenInventory(): InventoryView;
    getInventory(): Inventory;
    getInventory(): PlayerInventory;
    getBedSpawnLocation(): Location;
    getBedSpawnLocation(): Location;
    setWindowProperty(arg0: InventoryView$Property, arg1: number): boolean;
    openInventory(arg0: InventoryView): void;
    openInventory(arg0: Inventory): InventoryView;
    openWorkbench(arg0: Location, arg1: boolean): InventoryView;
    getEnderChest(): Inventory;
    getMainHand(): MainHand;
    getGameMode(): GameMode;
    getCooldown(arg0: Material): number;
    hasCooldown(arg0: Material): boolean;
    openMerchant(arg0: Villager, arg1: boolean): InventoryView;
    openMerchant(arg0: Merchant, arg1: boolean): InventoryView;
    getItemOnCursor(): ItemStack;
    discoverRecipe(arg0: NamespacedKey): boolean;
    isHandRaised(): boolean;
    getBedLocation(): Location;
    openEnchanting(arg0: Location, arg1: boolean): InventoryView;
    setItemOnCursor(arg0: ItemStack): void;
    isBlocking(): boolean;
    getItemInHand(): ItemStack;
    setItemInHand(arg0: ItemStack): void;
    undiscoverRecipe(arg0: NamespacedKey): boolean;
    setCooldown(arg0: Material, arg1: number): void;
    setGameMode(arg0: GameMode): void;
    getSleepTicks(): number;
    discoverRecipes(arg0: any): number;
    undiscoverRecipes(arg0: any): number;
    getExpToLevel(): number;
    wakeup(arg0: boolean): void;
    setBedSpawnLocation(arg0: Location, arg1: boolean): void;
    setBedSpawnLocation(arg0: Location): void;
    getShoulderEntityRight(): Entity;
    setShoulderEntityLeft(arg0: Entity): void;
    getShoulderEntityLeft(): Entity;
    setShoulderEntityRight(arg0: Entity): void;
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
    abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
    abandonConversation(arg0: Conversation): void;
    acceptConversationInput(arg0: string): void;
    isConversing(): boolean;
    beginConversation(arg0: Conversation): boolean;
    isOnline(): boolean;
    hasPlayedBefore(): boolean;
    isBanned(): boolean;
    getPlayer(): Player;
    isWhitelisted(): boolean;
    getLastPlayed(): number;
    setWhitelisted(arg0: boolean): void;
    getFirstPlayed(): number;
    serialize(): any;
    getListeningPluginChannels(): any;
    sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
}
export default class Player {
    static get $javaClass(): any;
}
