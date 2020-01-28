import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
import { Recipe } from '../../../org/bukkit/inventory/Recipe.js';
export interface MerchantRecipe extends Recipe {
    getVillagerExperience(): number;
    setVillagerExperience(villagerExperience: number): void;
    hasExperienceReward(): boolean;
    addIngredient(item: ItemStack): void;
    removeIngredient(index: number): void;
    setIngredients(ingredients: any): void;
    getIngredients(): any;
    getUses(): number;
    setUses(uses: number): void;
    getMaxUses(): number;
    setMaxUses(maxUses: number): void;
    setExperienceReward(flag: boolean): void;
    getPriceMultiplier(): number;
    setPriceMultiplier(priceMultiplier: number): void;
    getResult(): ItemStack;
}
export declare class MerchantRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack, maxUses: number);
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
}
