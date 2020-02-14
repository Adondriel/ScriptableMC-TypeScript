declare var Java: any;
import CookingRecipe from '../../../org/bukkit/inventory/CookingRecipe.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js'

export default interface SmokingRecipe extends CookingRecipe {
	setInput(input: Material): CookingRecipe;
	setInputChoice(input: RecipeChoice): CookingRecipe;
	getInputChoice(): RecipeChoice;
	getInput(): ItemStack;
	setExperience(experience: number): void;
	getExperience(): number;
	setCookingTime(cookingTime: number): void;
	getCookingTime(): number;
	getGroup(): string;
	setGroup(group: string): void;
	getKey(): NamespacedKey;
	getResult(): ItemStack;
}

export default class SmokingRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.SmokingRecipe');
	}
	constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
	constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
	constructor(...args: any[]) {
		return new SmokingRecipe.$javaClass(...args);
	}
}

