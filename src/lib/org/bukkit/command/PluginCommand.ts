declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import CommandExecutor from '../../../org/bukkit/command/CommandExecutor.js'
import CommandMap from '../../../org/bukkit/command/CommandMap.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import Location from '../../../org/bukkit/Location.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import PluginIdentifiableCommand from '../../../org/bukkit/command/PluginIdentifiableCommand.js'
import TabCompleter from '../../../org/bukkit/command/TabCompleter.js'

export default interface PluginCommand extends Command, PluginIdentifiableCommand {
	getPlugin(): Plugin;
	setExecutor(executor: CommandExecutor): void;
	getExecutor(): CommandExecutor;
	setTabCompleter(completer: TabCompleter): void;
	getTabCompleter(): TabCompleter;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
	unregister(commandMap: CommandMap): boolean;
	testPermission(target: CommandSender): boolean;
	getDescription(): string;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
	testPermissionSilent(target: CommandSender): boolean;
	getLabel(): string;
	setLabel(_name: string): boolean;
	getAliases(): Array<string>;
	getPermissionMessage(): string;
	getUsage(): string;
	setAliases(aliases: Array<any>): Command;
	setDescription(description: string): Command;
	setPermissionMessage(permissionMessage: string): Command;
	setUsage(usage: string): Command;
	register(commandMap: CommandMap): boolean;
	getName(): string;
	isRegistered(): boolean;
	setName(_name: string): boolean;
	setPermission(permission: string): void;
	getPermission(): string;
}

export default class PluginCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginCommand');
	}
	public static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
	public static broadcastCommandMessage(source: CommandSender, message: string): void;
	public static broadcastCommandMessage(...args: any[]): any {
		return PluginCommand.$javaClass.broadcastCommandMessage(...args);
	}
}

