import { Color } from '../../../org/bukkit/Color.js';
import { LivingEntity } from '../../../org/bukkit/entity/LivingEntity.js';
import { PotionEffectType } from '../../../org/bukkit/potion/PotionEffectType.js';
import { ConfigurationSerializable } from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export interface PotionEffect extends ConfigurationSerializable {
    serialize(): any;
    getColor(): Color;
    getAmplifier(): number;
    getDuration(): number;
    isAmbient(): boolean;
    hasParticles(): boolean;
    hasIcon(): boolean;
    apply(entity: LivingEntity): boolean;
    getType(): PotionEffectType;
}
export declare class PotionEffect {
    static get $javaClass(): any;
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean);
    constructor(map: any);
    constructor(type: PotionEffectType, duration: number, amplifier: number);
}