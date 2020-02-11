import Color from '../../../org/bukkit/Color.js';
import Configuration from '../../../org/bukkit/configuration/Configuration.js';
import ConfigurationOptions from '../../../org/bukkit/configuration/ConfigurationOptions.js';
import ConfigurationSection from '../../../org/bukkit/configuration/ConfigurationSection.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import MemoryConfigurationOptions from '../../../org/bukkit/configuration/MemoryConfigurationOptions.js';
import MemorySection from '../../../org/bukkit/configuration/MemorySection.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import Vector from '../../../org/bukkit/util/Vector.js';
export default interface MemoryConfiguration extends MemorySection, Configuration {
    getParent(): ConfigurationSection;
    options(): ConfigurationOptions;
    options(): MemoryConfigurationOptions;
    addDefault(path: string, value: any): void;
    addDefaults(defaults: any): void;
    addDefaults(defaults: Configuration): void;
    getDefaults(): Configuration;
    setDefaults(defaults: Configuration): void;
    get(path: string, def: any): any;
    get(path: string): any;
    getObject(path: string, clazz: any, def: any): any;
    getObject(path: string, clazz: any): any;
    getBoolean(path: string): boolean;
    getBoolean(path: string, def: boolean): boolean;
    getInt(path: string): number;
    getInt(path: string, def: number): number;
    getLong(path: string, def: number): number;
    getLong(path: string): number;
    getDouble(path: string, def: number): number;
    getDouble(path: string): number;
    getName(): string;
    contains(path: string, ignoreDefault: boolean): boolean;
    contains(path: string): boolean;
    set(path: string, value: any): void;
    getLocation(path: string): Location;
    getLocation(path: string, def: Location): Location;
    isSet(path: string): boolean;
    getRoot(): Configuration;
    getKeys(deep: boolean): any;
    getString(path: string, def: string): string;
    getString(path: string): string;
    getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
    getOfflinePlayer(path: string): OfflinePlayer;
    getBooleanList(path: string): Array<boolean>;
    getLongList(path: string): Array<number>;
    isOfflinePlayer(path: string): boolean;
    getIntegerList(path: string): Array<any>;
    getFloatList(path: string): Array<number>;
    getDoubleList(path: string): Array<number>;
    isVector(path: string): boolean;
    getValues(deep: boolean): any;
    getMapList(path: string): Array<any>;
    isItemStack(path: string): boolean;
    isInt(path: string): boolean;
    isDouble(path: string): boolean;
    getCharacterList(path: string): Array<any>;
    getCurrentPath(): string;
    isList(path: string): boolean;
    getByteList(path: string): Array<number>;
    getList(path: string, def: Array<any>): Array<any>;
    getList(path: string): Array<any>;
    getColor(path: string): Color;
    getColor(path: string, def: Color): Color;
    getShortList(path: string): Array<number>;
    isColor(path: string): boolean;
    getDefaultSection(): ConfigurationSection;
    getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
    getSerializable(path: string, clazz: any): ConfigurationSerializable;
    isLocation(path: string): boolean;
    isLong(path: string): boolean;
    getStringList(path: string): Array<string>;
    createSection(path: string, map: any): ConfigurationSection;
    createSection(path: string): ConfigurationSection;
    getVector(path: string): Vector;
    getVector(path: string, def: Vector): Vector;
    getItemStack(path: string): ItemStack;
    getItemStack(path: string, def: ItemStack): ItemStack;
    isString(path: string): boolean;
    isBoolean(path: string): boolean;
    getConfigurationSection(path: string): ConfigurationSection;
    isConfigurationSection(path: string): boolean;
}
export default class MemoryConfiguration {
    static get $javaClass(): any;
    constructor();
    constructor(defaults: Configuration);
    static createPath(section: ConfigurationSection, key: string, relativeTo: ConfigurationSection): string;
    static createPath(section: ConfigurationSection, key: string): string;
}
