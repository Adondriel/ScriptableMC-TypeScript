export class Conversation {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.Conversation');
    }
    constructor(...args) {
        return new Conversation.$javaClass(...args);
    }
}
//# sourceMappingURL=Conversation.js.map