import Block from '../../../org/bukkit/block/Block.js';
import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import Chunk from '../../../org/bukkit/Chunk.js';
import Container from '../../../org/bukkit/block/Container.js';
import FurnaceInventory from '../../../org/bukkit/inventory/FurnaceInventory.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import World from '../../../org/bukkit/World.js';
export default interface Furnace extends Container {
    getInventory(): Inventory;
    getInventory(): FurnaceInventory;
    getCookTimeTotal(): number;
    setBurnTime(arg0: number): void;
    getBurnTime(): number;
    setCookTimeTotal(arg0: number): void;
    getCookTime(): number;
    setCookTime(arg0: number): void;
    getSnapshotInventory(): FurnaceInventory;
    getSnapshotInventory(): Inventory;
    getPersistentDataContainer(): PersistentDataContainer;
    update(arg0: boolean): boolean;
    update(arg0: boolean, arg1: boolean): boolean;
    update(): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getType(): Material;
    getWorld(): World;
    getBlock(): Block;
    getBlock(): Block;
    getLightLevel(): number;
    setBlockData(arg0: BlockData): void;
    getChunk(): Chunk;
    getX(): number;
    getY(): number;
    getZ(): number;
    setData(arg0: MaterialData): void;
    getData(): MaterialData;
    setType(arg0: Material): void;
    getBlockData(): BlockData;
    setRawData(arg0: number): void;
    getRawData(): number;
    isPlaced(): boolean;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    getMetadata(arg0: string): Array<MetadataValue>;
    removeMetadata(arg0: string, arg1: Plugin): void;
    hasMetadata(arg0: string): boolean;
    isLocked(): boolean;
    setLock(arg0: string): void;
    getLock(): string;
    setCustomName(arg0: string): void;
    getCustomName(): string;
}
export default class Furnace {
    static get $javaClass(): any;
}
