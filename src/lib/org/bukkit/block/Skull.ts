declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import SkullType from '../../../org/bukkit/SkullType.js'
import TileState from '../../../org/bukkit/block/TileState.js'
import World from '../../../org/bukkit/World.js'

export default interface Skull extends TileState {
	setOwner(arg0: string): boolean;
	getOwner(): string;
	setRotation(arg0: BlockFace): void;
	getRotation(): BlockFace;
	hasOwner(): boolean;
	setOwningPlayer(arg0: OfflinePlayer): void;
	getOwningPlayer(): OfflinePlayer;
	getSkullType(): SkullType;
	setSkullType(arg0: SkullType): void;
	getPersistentDataContainer(): PersistentDataContainer;
	getData(): MaterialData;
	getBlock(): Block;
	getWorld(): World;
	setType(arg0: Material): void;
	setData(arg0: MaterialData): void;
	getChunk(): Chunk;
	getX(): number;
	getY(): number;
	getZ(): number;
	getBlockData(): BlockData;
	setRawData(arg0: number): void;
	getRawData(): number;
	isPlaced(): boolean;
	setBlockData(arg0: BlockData): void;
	getLightLevel(): number;
	update(arg0: boolean, arg1: boolean): boolean;
	update(arg0: boolean): boolean;
	update(): boolean;
	getLocation(arg0: Location): Location;
	getLocation(): Location;
	getType(): Material;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): Array<MetadataValue>;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export default class Skull {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Skull');
	}
}

