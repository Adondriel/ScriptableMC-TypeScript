export class ServerEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerEvent');
    }
    constructor(...args) {
        return new ServerEvent.$javaClass(...args);
    }
}
//# sourceMappingURL=ServerEvent.js.map