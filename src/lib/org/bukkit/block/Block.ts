declare var Java: any;
import Biome from '../../../org/bukkit/block/Biome.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import BlockState from '../../../org/bukkit/block/BlockState.js'
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Metadatable from '../../../org/bukkit/metadata/Metadatable.js'
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js'
import Vector from '../../../org/bukkit/util/Vector.js'
import World from '../../../org/bukkit/World.js'

export default interface Block extends Metadatable {
	getData(): number;
	getWorld(): World;
	getBoundingBox(): BoundingBox;
	getPistonMoveReaction(): PistonMoveReaction;
	rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult;
	setType(arg0: Material, arg1: boolean): void;
	setType(arg0: Material): void;
	getChunk(): Chunk;
	getX(): number;
	getY(): number;
	getZ(): number;
	getBiome(): Biome;
	setBiome(arg0: Biome): void;
	getTemperature(): number;
	getHumidity(): number;
	getBlockData(): BlockData;
	getRelative(arg0: BlockFace): Block;
	getRelative(arg0: number, arg1: number, arg2: number): Block;
	getRelative(arg0: BlockFace, arg1: number): Block;
	getLightFromSky(): number;
	setBlockData(arg0: BlockData, arg1: boolean): void;
	setBlockData(arg0: BlockData): void;
	getLightLevel(): number;
	getFace(arg0: Block): BlockFace;
	isBlockPowered(): boolean;
	isBlockIndirectlyPowered(): boolean;
	isBlockFacePowered(arg0: BlockFace): boolean;
	isBlockFaceIndirectlyPowered(arg0: BlockFace): boolean;
	getBlockPower(): number;
	getBlockPower(arg0: BlockFace): number;
	isLiquid(): boolean;
	breakNaturally(arg0: ItemStack): boolean;
	breakNaturally(): boolean;
	getDrops(arg0: ItemStack): any;
	getDrops(): any;
	isPassable(): boolean;
	getLightFromBlocks(): number;
	isEmpty(): boolean;
	getLocation(arg0: Location): Location;
	getLocation(): Location;
	getState(): BlockState;
	getType(): Material;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): Array<MetadataValue>;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export default class Block {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Block');
	}
}

