import AnaloguePowerable from '../../../../../org/bukkit/block/data/AnaloguePowerable.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface DaylightDetector extends AnaloguePowerable {
    setInverted(arg0: boolean): void;
    isInverted(): boolean;
    setPower(arg0: number): void;
    getMaximumPower(): number;
    getPower(): number;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class DaylightDetector {
    static get $javaClass(): any;
}
