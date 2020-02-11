import HelpTopic from '../../../org/bukkit/help/HelpTopic.js';
import HelpTopicFactory from '../../../org/bukkit/help/HelpTopicFactory.js';
export default interface HelpMap {
    clear(): void;
    getHelpTopics(): any;
    addTopic(arg0: HelpTopic): void;
    getHelpTopic(arg0: string): HelpTopic;
    getIgnoredPlugins(): Array<string>;
    registerHelpTopicFactory(arg0: any, arg1: HelpTopicFactory): void;
}
export default class HelpMap {
    static get $javaClass(): any;
}
