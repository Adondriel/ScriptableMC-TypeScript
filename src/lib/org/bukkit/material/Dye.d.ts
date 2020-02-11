import Colorable from '../../../org/bukkit/material/Colorable.js';
import DyeColor from '../../../org/bukkit/DyeColor.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Dye extends MaterialData, Colorable {
    clone(): Dye;
    clone(): MaterialData;
    clone(): any;
    getColor(): DyeColor;
    setColor(color: DyeColor): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Dye {
    static get $javaClass(): any;
    constructor(color: DyeColor);
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
