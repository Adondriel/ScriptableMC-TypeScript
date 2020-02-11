import Block from '../../../org/bukkit/block/Block.js';
import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import Chunk from '../../../org/bukkit/Chunk.js';
import Container from '../../../org/bukkit/block/Container.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import Location from '../../../org/bukkit/Location.js';
import LootTable from '../../../org/bukkit/loot/LootTable.js';
import Lootable from '../../../org/bukkit/loot/Lootable.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import World from '../../../org/bukkit/World.js';
export default interface Hopper extends Container, Lootable {
    getInventory(): Inventory;
    getSnapshotInventory(): Inventory;
    getPersistentDataContainer(): PersistentDataContainer;
    update(arg0: boolean, arg1: boolean): boolean;
    update(): boolean;
    update(arg0: boolean): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getType(): Material;
    setData(arg0: MaterialData): void;
    setType(arg0: Material): void;
    getData(): MaterialData;
    getWorld(): World;
    getBlock(): Block;
    getBlock(): Block;
    getLightLevel(): number;
    setBlockData(arg0: BlockData): void;
    getBlockData(): BlockData;
    getZ(): number;
    getChunk(): Chunk;
    getY(): number;
    getX(): number;
    getRawData(): number;
    setRawData(arg0: number): void;
    isPlaced(): boolean;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    removeMetadata(arg0: string, arg1: Plugin): void;
    getMetadata(arg0: string): Array<MetadataValue>;
    hasMetadata(arg0: string): boolean;
    isLocked(): boolean;
    setLock(arg0: string): void;
    getLock(): string;
    setCustomName(arg0: string): void;
    getCustomName(): string;
    getLootTable(): LootTable;
    getSeed(): number;
    setSeed(arg0: number): void;
    setLootTable(arg0: LootTable): void;
}
export default class Hopper {
    static get $javaClass(): any;
}
