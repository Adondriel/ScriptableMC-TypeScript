import Color from '../../../org/bukkit/Color.js';
import ConfigurationOptions from '../../../org/bukkit/configuration/ConfigurationOptions.js';
import ConfigurationSection from '../../../org/bukkit/configuration/ConfigurationSection.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import Vector from '../../../org/bukkit/util/Vector.js';
export default interface Configuration extends ConfigurationSection {
    options(): ConfigurationOptions;
    setDefaults(arg0: Configuration): void;
    addDefault(arg0: string, arg1: any): void;
    getDefaults(): Configuration;
    addDefaults(arg0: any): void;
    addDefaults(arg0: Configuration): void;
    get(arg0: string, arg1: any): any;
    get(arg0: string): any;
    getObject(arg0: string, arg1: any, arg2: any): any;
    getObject(arg0: string, arg1: any): any;
    getBoolean(arg0: string, arg1: boolean): boolean;
    getBoolean(arg0: string): boolean;
    getInt(arg0: string): number;
    getInt(arg0: string, arg1: number): number;
    getLong(arg0: string): number;
    getLong(arg0: string, arg1: number): number;
    getDouble(arg0: string): number;
    getDouble(arg0: string, arg1: number): number;
    getName(): string;
    contains(arg0: string): boolean;
    contains(arg0: string, arg1: boolean): boolean;
    getParent(): ConfigurationSection;
    set(arg0: string, arg1: any): void;
    getLocation(arg0: string): Location;
    getLocation(arg0: string, arg1: Location): Location;
    isSet(arg0: string): boolean;
    getRoot(): Configuration;
    getKeys(arg0: boolean): any;
    getString(arg0: string, arg1: string): string;
    getString(arg0: string): string;
    getFloatList(arg0: string): Array<number>;
    isBoolean(arg0: string): boolean;
    isString(arg0: string): boolean;
    getOfflinePlayer(arg0: string, arg1: OfflinePlayer): OfflinePlayer;
    getOfflinePlayer(arg0: string): OfflinePlayer;
    getStringList(arg0: string): Array<string>;
    getIntegerList(arg0: string): Array<any>;
    getBooleanList(arg0: string): Array<boolean>;
    getValues(arg0: boolean): any;
    getCurrentPath(): string;
    createSection(arg0: string, arg1: any): ConfigurationSection;
    createSection(arg0: string): ConfigurationSection;
    isInt(arg0: string): boolean;
    isDouble(arg0: string): boolean;
    isLong(arg0: string): boolean;
    getList(arg0: string, arg1: Array<any>): Array<any>;
    getList(arg0: string): Array<any>;
    isList(arg0: string): boolean;
    getDoubleList(arg0: string): Array<number>;
    getConfigurationSection(arg0: string): ConfigurationSection;
    isConfigurationSection(arg0: string): boolean;
    isOfflinePlayer(arg0: string): boolean;
    getItemStack(arg0: string, arg1: ItemStack): ItemStack;
    getItemStack(arg0: string): ItemStack;
    getLongList(arg0: string): Array<number>;
    getShortList(arg0: string): Array<number>;
    getVector(arg0: string, arg1: Vector): Vector;
    getVector(arg0: string): Vector;
    getColor(arg0: string): Color;
    getColor(arg0: string, arg1: Color): Color;
    getDefaultSection(): ConfigurationSection;
    isVector(arg0: string): boolean;
    getByteList(arg0: string): Array<number>;
    isLocation(arg0: string): boolean;
    isItemStack(arg0: string): boolean;
    getCharacterList(arg0: string): Array<any>;
    isColor(arg0: string): boolean;
    getMapList(arg0: string): Array<any>;
    getSerializable(arg0: string, arg1: any, arg2: ConfigurationSerializable): ConfigurationSerializable;
    getSerializable(arg0: string, arg1: any): ConfigurationSerializable;
}
export default class Configuration {
    static get $javaClass(): any;
}
