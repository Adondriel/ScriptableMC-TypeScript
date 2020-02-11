import Color from '../../../org/bukkit/Color.js';
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js';
export default interface PotionEffectType {
    getName(): string;
    getId(): number;
    getColor(): Color;
    isInstant(): boolean;
    getDurationModifier(): number;
    createEffect(duration: number, amplifier: number): PotionEffect;
}
export default class PotionEffectType {
    static get $javaClass(): any;
    static get SPEED(): PotionEffectType;
    static get SLOW(): PotionEffectType;
    static get FAST_DIGGING(): PotionEffectType;
    static get SLOW_DIGGING(): PotionEffectType;
    static get INCREASE_DAMAGE(): PotionEffectType;
    static get HEAL(): PotionEffectType;
    static get HARM(): PotionEffectType;
    static get JUMP(): PotionEffectType;
    static get CONFUSION(): PotionEffectType;
    static get REGENERATION(): PotionEffectType;
    static get DAMAGE_RESISTANCE(): PotionEffectType;
    static get FIRE_RESISTANCE(): PotionEffectType;
    static get WATER_BREATHING(): PotionEffectType;
    static get INVISIBILITY(): PotionEffectType;
    static get BLINDNESS(): PotionEffectType;
    static get NIGHT_VISION(): PotionEffectType;
    static get HUNGER(): PotionEffectType;
    static get WEAKNESS(): PotionEffectType;
    static get POISON(): PotionEffectType;
    static get WITHER(): PotionEffectType;
    static get HEALTH_BOOST(): PotionEffectType;
    static get ABSORPTION(): PotionEffectType;
    static get SATURATION(): PotionEffectType;
    static get GLOWING(): PotionEffectType;
    static get LEVITATION(): PotionEffectType;
    static get LUCK(): PotionEffectType;
    static get UNLUCK(): PotionEffectType;
    static get SLOW_FALLING(): PotionEffectType;
    static get CONDUIT_POWER(): PotionEffectType;
    static get DOLPHINS_GRACE(): PotionEffectType;
    static get BAD_OMEN(): PotionEffectType;
    static get HERO_OF_THE_VILLAGE(): PotionEffectType;
    static values(): Array<PotionEffectType>;
    static getByName(_name: string): PotionEffectType;
    static getById(id: number): PotionEffectType;
    static stopAcceptingRegistrations(): void;
    static registerPotionEffectType(type: PotionEffectType): void;
}
