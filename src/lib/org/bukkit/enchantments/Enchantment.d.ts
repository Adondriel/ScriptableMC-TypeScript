import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
import { NamespacedKey } from '../../../org/bukkit/NamespacedKey.js';
import { EnchantmentTarget } from '../../../org/bukkit/enchantments/EnchantmentTarget.js';
import { Keyed } from '../../../org/bukkit/Keyed.js';
export interface Enchantment extends Keyed {
    getStartLevel(): number;
    getMaxLevel(): number;
    canEnchantItem(arg0: ItemStack): boolean;
    getItemTarget(): EnchantmentTarget;
    isTreasure(): boolean;
    isCursed(): boolean;
    conflictsWith(arg0: Enchantment): boolean;
    getName(): string;
    getKey(): NamespacedKey;
}
export declare class Enchantment {
    static get $javaClass(): any;
    constructor(key: NamespacedKey);
    static get PROTECTION_ENVIRONMENTAL(): Enchantment;
    static get PROTECTION_FIRE(): Enchantment;
    static get PROTECTION_FALL(): Enchantment;
    static get PROTECTION_EXPLOSIONS(): Enchantment;
    static get PROTECTION_PROJECTILE(): Enchantment;
    static get OXYGEN(): Enchantment;
    static get WATER_WORKER(): Enchantment;
    static get THORNS(): Enchantment;
    static get DEPTH_STRIDER(): Enchantment;
    static get FROST_WALKER(): Enchantment;
    static get BINDING_CURSE(): Enchantment;
    static get DAMAGE_ALL(): Enchantment;
    static get DAMAGE_UNDEAD(): Enchantment;
    static get DAMAGE_ARTHROPODS(): Enchantment;
    static get KNOCKBACK(): Enchantment;
    static get FIRE_ASPECT(): Enchantment;
    static get LOOT_BONUS_MOBS(): Enchantment;
    static get SWEEPING_EDGE(): Enchantment;
    static get DIG_SPEED(): Enchantment;
    static get SILK_TOUCH(): Enchantment;
    static get DURABILITY(): Enchantment;
    static get LOOT_BONUS_BLOCKS(): Enchantment;
    static get ARROW_DAMAGE(): Enchantment;
    static get ARROW_KNOCKBACK(): Enchantment;
    static get ARROW_FIRE(): Enchantment;
    static get ARROW_INFINITE(): Enchantment;
    static get LUCK(): Enchantment;
    static get LURE(): Enchantment;
    static get LOYALTY(): Enchantment;
    static get IMPALING(): Enchantment;
    static get RIPTIDE(): Enchantment;
    static get CHANNELING(): Enchantment;
    static get MULTISHOT(): Enchantment;
    static get QUICK_CHARGE(): Enchantment;
    static get PIERCING(): Enchantment;
    static get MENDING(): Enchantment;
    static get VANISHING_CURSE(): Enchantment;
    static getByName(_name: string): Enchantment;
    static getByKey(key: NamespacedKey): Enchantment;
    static stopAcceptingRegistrations(): void;
    static registerEnchantment(enchantment: Enchantment): void;
    static isAcceptingRegistrations(): boolean;
    static values(): Array<Enchantment>;
}
