import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js';
export default interface Ladder extends SimpleAttachableMaterialData {
    clone(): SimpleAttachableMaterialData;
    clone(): any;
    clone(): MaterialData;
    clone(): Ladder;
    setFacingDirection(face: BlockFace): void;
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Ladder {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
