import { Color } from '../../org/bukkit/Color.js';
export interface DyeColor {
    getColor(): Color;
    getFireworkColor(): Color;
    getWoolData(): number;
    getDyeData(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class DyeColor {
    static get $javaClass(): any;
    static get WHITE(): DyeColor;
    static get ORANGE(): DyeColor;
    static get MAGENTA(): DyeColor;
    static get LIGHT_BLUE(): DyeColor;
    static get YELLOW(): DyeColor;
    static get LIME(): DyeColor;
    static get PINK(): DyeColor;
    static get GRAY(): DyeColor;
    static get LIGHT_GRAY(): DyeColor;
    static get CYAN(): DyeColor;
    static get PURPLE(): DyeColor;
    static get BLUE(): DyeColor;
    static get BROWN(): DyeColor;
    static get GREEN(): DyeColor;
    static get RED(): DyeColor;
    static get BLACK(): DyeColor;
}