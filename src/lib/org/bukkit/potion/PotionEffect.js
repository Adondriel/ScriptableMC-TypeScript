export class PotionEffect {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.PotionEffect');
    }
    constructor(...args) {
        return new PotionEffect.$javaClass(...args);
    }
}
//# sourceMappingURL=PotionEffect.js.map