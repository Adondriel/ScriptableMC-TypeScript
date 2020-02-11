import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface Hopper extends MaterialData, Directional, Redstone {
    clone(): Hopper;
    clone(): MaterialData;
    clone(): any;
    isActive(): boolean;
    getFacing(): BlockFace;
    isPowered(): boolean;
    setActive(isActive: boolean): void;
    setFacingDirection(face: BlockFace): void;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Hopper {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(facingDirection: BlockFace, isActive: boolean);
    constructor(facingDirection: BlockFace);
    constructor();
    constructor(type: Material);
}
