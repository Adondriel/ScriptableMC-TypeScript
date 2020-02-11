import Attribute from '../../../../org/bukkit/attribute/Attribute.js';
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js';
import CustomItemTagContainer from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js';
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js';
import ItemMeta from '../../../../org/bukkit/inventory/meta/ItemMeta.js';
import Multimap from '../../../../com/google/common/collect/Multimap.js';
import OfflinePlayer from '../../../../org/bukkit/OfflinePlayer.js';
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js';
export default interface SkullMeta extends ItemMeta {
    clone(): SkullMeta;
    clone(): ItemMeta;
    clone(): any;
    getOwner(): string;
    setOwner(arg0: string): boolean;
    setOwningPlayer(arg0: OfflinePlayer): boolean;
    hasOwner(): boolean;
    getOwningPlayer(): OfflinePlayer;
    getDisplayName(): string;
    hasEnchant(arg0: Enchantment): boolean;
    getEnchantLevel(arg0: Enchantment): number;
    getEnchants(): any;
    setLore(arg0: Array<any>): void;
    setUnbreakable(arg0: boolean): void;
    removeEnchant(arg0: Enchantment): boolean;
    setVersion(arg0: number): void;
    getLore(): Array<string>;
    setDisplayName(arg0: string): void;
    isUnbreakable(): boolean;
    addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
    hasDisplayName(): boolean;
    hasLocalizedName(): boolean;
    getLocalizedName(): string;
    getItemFlags(): any;
    hasItemFlag(arg0: ItemFlag): boolean;
    hasCustomModelData(): boolean;
    addItemFlags(arg0: Array<ItemFlag>): void;
    removeItemFlags(arg0: Array<ItemFlag>): void;
    setLocalizedName(arg0: string): void;
    hasEnchants(): boolean;
    hasLore(): boolean;
    getCustomModelData(): number;
    setCustomModelData(arg0: any): void;
    hasConflictingEnchant(arg0: Enchantment): boolean;
    hasAttributeModifiers(): boolean;
    getAttributeModifiers(): Multimap;
    getAttributeModifiers(arg0: EquipmentSlot): Multimap;
    getAttributeModifiers(arg0: Attribute): any;
    addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
    removeAttributeModifier(arg0: Attribute): boolean;
    removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
    removeAttributeModifier(arg0: EquipmentSlot): boolean;
    setAttributeModifiers(arg0: Multimap): void;
    getCustomTagContainer(): CustomItemTagContainer;
    serialize(): any;
    getPersistentDataContainer(): PersistentDataContainer;
}
export default class SkullMeta {
    static get $javaClass(): any;
}
