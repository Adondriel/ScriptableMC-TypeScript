import Block from '../../../org/bukkit/block/Block.js';
import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import BlockInventoryHolder from '../../../org/bukkit/inventory/BlockInventoryHolder.js';
import Chunk from '../../../org/bukkit/Chunk.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import TileState from '../../../org/bukkit/block/TileState.js';
import World from '../../../org/bukkit/World.js';
export default interface Lectern extends TileState, BlockInventoryHolder {
    getInventory(): Inventory;
    getPage(): number;
    getSnapshotInventory(): Inventory;
    setPage(arg0: number): void;
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
}
export default class Lectern {
    static get $javaClass(): any;
}
