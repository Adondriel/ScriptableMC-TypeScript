export class PluginDescriptionFile {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginDescriptionFile');
    }
    constructor(...args) {
        return new PluginDescriptionFile.$javaClass(...args);
    }
}
//# sourceMappingURL=PluginDescriptionFile.js.map