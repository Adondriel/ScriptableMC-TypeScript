import { ConfigurationOptions } from '../../../org/bukkit/configuration/ConfigurationOptions.js';
import { OfflinePlayer } from '../../../org/bukkit/OfflinePlayer.js';
import { ConfigurationSection } from '../../../org/bukkit/configuration/ConfigurationSection.js';
import { ConfigurationSerializable } from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import { Vector } from '../../../org/bukkit/util/Vector.js';
import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
import { Color } from '../../../org/bukkit/Color.js';
import { Location } from '../../../org/bukkit/Location.js';
export interface Configuration extends ConfigurationSection {
    options(): ConfigurationOptions;
    setDefaults(arg0: Configuration): void;
    getDefaults(): Configuration;
    addDefaults(arg0: Configuration): void;
    addDefaults(arg0: any): void;
    addDefault(arg0: string, arg1: any): void;
    getString(arg0: string, arg1: string): string;
    getString(arg0: string): string;
    getValues(arg0: boolean): any;
    isString(arg0: string): boolean;
    isBoolean(arg0: string): boolean;
    getOfflinePlayer(arg0: string, arg1: OfflinePlayer): OfflinePlayer;
    getOfflinePlayer(arg0: string): OfflinePlayer;
    getCurrentPath(): string;
    createSection(arg0: string, arg1: any): ConfigurationSection;
    createSection(arg0: string): ConfigurationSection;
    isInt(arg0: string): boolean;
    isDouble(arg0: string): boolean;
    isLong(arg0: string): boolean;
    getList(arg0: string): any;
    getList(arg0: string, arg1: any): any;
    isList(arg0: string): boolean;
    getStringList(arg0: string): any;
    getIntegerList(arg0: string): any;
    getBooleanList(arg0: string): any;
    getDoubleList(arg0: string): any;
    getFloatList(arg0: string): any;
    getLongList(arg0: string): any;
    getByteList(arg0: string): any;
    getCharacterList(arg0: string): any;
    getShortList(arg0: string): any;
    getMapList(arg0: string): any;
    getSerializable(arg0: string, arg1: any, arg2: ConfigurationSerializable): ConfigurationSerializable;
    getSerializable(arg0: string, arg1: any): ConfigurationSerializable;
    getVector(arg0: string): Vector;
    getVector(arg0: string, arg1: Vector): Vector;
    isVector(arg0: string): boolean;
    isOfflinePlayer(arg0: string): boolean;
    getItemStack(arg0: string, arg1: ItemStack): ItemStack;
    getItemStack(arg0: string): ItemStack;
    isItemStack(arg0: string): boolean;
    getColor(arg0: string, arg1: Color): Color;
    getColor(arg0: string): Color;
    isColor(arg0: string): boolean;
    isLocation(arg0: string): boolean;
    getConfigurationSection(arg0: string): ConfigurationSection;
    isConfigurationSection(arg0: string): boolean;
    getDefaultSection(): ConfigurationSection;
    get(arg0: string, arg1: any): any;
    get(arg0: string): any;
    getObject(arg0: string, arg1: any): any;
    getObject(arg0: string, arg1: any, arg2: any): any;
    getBoolean(arg0: string, arg1: boolean): boolean;
    getBoolean(arg0: string): boolean;
    getInt(arg0: string): number;
    getInt(arg0: string, arg1: number): number;
    getLong(arg0: string): number;
    getLong(arg0: string, arg1: number): number;
    getDouble(arg0: string, arg1: number): number;
    getDouble(arg0: string): number;
    getName(): string;
    contains(arg0: string): boolean;
    contains(arg0: string, arg1: boolean): boolean;
    getParent(): ConfigurationSection;
    getLocation(arg0: string): Location;
    getLocation(arg0: string, arg1: Location): Location;
    isSet(arg0: string): boolean;
    set(arg0: string, arg1: any): void;
    getRoot(): Configuration;
    getKeys(arg0: boolean): any;
}
export declare class Configuration {
    static get $javaClass(): any;
}
