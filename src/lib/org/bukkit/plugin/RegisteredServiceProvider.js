export class RegisteredServiceProvider {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.RegisteredServiceProvider');
    }
    constructor(...args) {
        return new RegisteredServiceProvider.$javaClass(...args);
    }
}
//# sourceMappingURL=RegisteredServiceProvider.js.map