declare var Java: any;
import ChunkGenerator from '../../../org/bukkit/generator/ChunkGenerator.js'
import Command from '../../../org/bukkit/command/Command.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import File from '../../../java/io/File.js'
import FileConfiguration from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import InputStream from '../../../java/io/InputStream.js'
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import PluginLoader from '../../../org/bukkit/plugin/PluginLoader.js'
import Server from '../../../org/bukkit/Server.js'
import TabExecutor from '../../../org/bukkit/command/TabExecutor.js'

export default interface Plugin extends TabExecutor {
	getLogger(): any;
	getServer(): Server;
	onLoad(): void;
	onEnable(): void;
	onDisable(): void;
	isEnabled(): boolean;
	getDescription(): PluginDescriptionFile;
	getDataFolder(): File;
	getPluginLoader(): PluginLoader;
	getConfig(): FileConfiguration;
	reloadConfig(): void;
	saveConfig(): void;
	saveDefaultConfig(): void;
	saveResource(arg0: string, arg1: boolean): void;
	getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator;
	isNaggable(): boolean;
	setNaggable(arg0: boolean): void;
	getName(): string;
	getResource(arg0: string): InputStream;
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): Array<string>;
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}

export default class Plugin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.Plugin');
	}
}

