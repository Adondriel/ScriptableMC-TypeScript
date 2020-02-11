import Attribute from '../../../../org/bukkit/attribute/Attribute.js';
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js';
import CustomItemTagContainer from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js';
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js';
import ItemMeta from '../../../../org/bukkit/inventory/meta/ItemMeta.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Multimap from '../../../../com/google/common/collect/Multimap.js';
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js';
export default interface CrossbowMeta extends ItemMeta {
    getChargedProjectiles(): Array<ItemStack>;
    setChargedProjectiles(arg0: Array<any>): void;
    hasChargedProjectiles(): boolean;
    addChargedProjectile(arg0: ItemStack): void;
    clone(): ItemMeta;
    clone(): any;
    getDisplayName(): string;
    setLore(arg0: Array<any>): void;
    setDisplayName(arg0: string): void;
    isUnbreakable(): boolean;
    setUnbreakable(arg0: boolean): void;
    addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
    getLore(): Array<string>;
    removeEnchant(arg0: Enchantment): boolean;
    getEnchants(): any;
    setVersion(arg0: number): void;
    hasEnchant(arg0: Enchantment): boolean;
    getEnchantLevel(arg0: Enchantment): number;
    hasAttributeModifiers(): boolean;
    setAttributeModifiers(arg0: Multimap): void;
    removeAttributeModifier(arg0: EquipmentSlot): boolean;
    removeAttributeModifier(arg0: Attribute): boolean;
    removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
    hasConflictingEnchant(arg0: Enchantment): boolean;
    getAttributeModifiers(): Multimap;
    getAttributeModifiers(arg0: Attribute): any;
    getAttributeModifiers(arg0: EquipmentSlot): Multimap;
    addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
    getCustomTagContainer(): CustomItemTagContainer;
    hasLore(): boolean;
    getItemFlags(): any;
    hasEnchants(): boolean;
    setLocalizedName(arg0: string): void;
    hasLocalizedName(): boolean;
    hasItemFlag(arg0: ItemFlag): boolean;
    hasDisplayName(): boolean;
    getLocalizedName(): string;
    addItemFlags(arg0: Array<ItemFlag>): void;
    getCustomModelData(): number;
    hasCustomModelData(): boolean;
    setCustomModelData(arg0: any): void;
    removeItemFlags(arg0: Array<ItemFlag>): void;
    serialize(): any;
    getPersistentDataContainer(): PersistentDataContainer;
}
export default class CrossbowMeta {
    static get $javaClass(): any;
}
