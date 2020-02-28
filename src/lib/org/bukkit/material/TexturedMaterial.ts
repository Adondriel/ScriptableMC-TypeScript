declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface TexturedMaterial extends MaterialData {
	clone(): any;
	clone(): TexturedMaterial;
	clone(): MaterialData;
	getData(): number;
	getItemType(): Material;
	getMaterial(): Material;
	getTextures(): Array<Material>;
	setData(data: number): void;
	setMaterial(material: Material): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class TexturedMaterial {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.TexturedMaterial');
	}

	constructor(m: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new TexturedMaterial.$javaClass(...args);
	}

}

