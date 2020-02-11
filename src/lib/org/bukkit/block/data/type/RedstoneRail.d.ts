import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
import Rail from '../../../../../org/bukkit/block/data/Rail.js';
import Rail$Shape from '../../../../../org/bukkit/block/data/Rail$Shape.js';
export default interface RedstoneRail extends Powerable, Rail {
    setPowered(arg0: boolean): void;
    isPowered(): boolean;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getShapes(): any;
    setShape(arg0: Rail$Shape): void;
    getShape(): Rail$Shape;
}
export default class RedstoneRail {
    static get $javaClass(): any;
}
