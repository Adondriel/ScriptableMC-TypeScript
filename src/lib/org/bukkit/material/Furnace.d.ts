import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import DirectionalContainer from '../../../org/bukkit/material/DirectionalContainer.js';
import FurnaceAndDispenser from '../../../org/bukkit/material/FurnaceAndDispenser.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Furnace extends FurnaceAndDispenser {
    clone(): MaterialData;
    clone(): any;
    clone(): DirectionalContainer;
    clone(): FurnaceAndDispenser;
    clone(): Furnace;
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Furnace {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(direction: BlockFace);
    constructor();
}
