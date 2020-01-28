export class PluginCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.PluginCommand');
    }
    static broadcastCommandMessage(...args) {
        return PluginCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
//# sourceMappingURL=PluginCommand.js.map