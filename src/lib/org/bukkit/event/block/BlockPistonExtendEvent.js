export class BlockPistonExtendEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockPistonExtendEvent');
    }
    constructor(...args) {
        return new BlockPistonExtendEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockPistonExtendEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=BlockPistonExtendEvent.js.map