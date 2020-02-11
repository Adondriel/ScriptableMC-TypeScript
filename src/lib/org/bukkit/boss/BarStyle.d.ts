export default interface BarStyle {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class BarStyle {
    static get $javaClass(): any;
    static get SOLID(): BarStyle;
    static get SEGMENTED_6(): BarStyle;
    static get SEGMENTED_10(): BarStyle;
    static get SEGMENTED_12(): BarStyle;
    static get SEGMENTED_20(): BarStyle;
}
