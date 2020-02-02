import Ageable from '../../../../../org/bukkit/block/data/Ageable.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../../org/bukkit/Material.js';
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js';
export default interface Fire extends Ageable, MultipleFacing {
    setAge(arg0: number): void;
    getAge(): number;
    getMaximumAge(): number;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getFaces(): any;
    hasFace(arg0: BlockFace): boolean;
    setFace(arg0: BlockFace, arg1: boolean): void;
    getAllowedFaces(): any;
}
export default class Fire {
    static get $javaClass(): any;
}