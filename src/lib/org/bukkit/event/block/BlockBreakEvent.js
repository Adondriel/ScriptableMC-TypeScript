export class BlockBreakEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockBreakEvent');
    }
    constructor(...args) {
        return new BlockBreakEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockBreakEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=BlockBreakEvent.js.map