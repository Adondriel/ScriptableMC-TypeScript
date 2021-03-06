declare var Java: any;
import BukkitTask from '../../../org/bukkit/scheduler/BukkitTask.js'
import Connection from '../../../java/sql/Connection.js'
import JavaPlugin from '../../../org/bukkit/plugin/java/JavaPlugin.js'
import PreparedStatement from '../../../java/sql/PreparedStatement.js'
import Statement from '../../../java/sql/Statement.js'

export default interface MysqlWrapper {
	close(): any;
	createStatement(): Statement;
	createStatement(resultSetType: number, resultSetConcurrency: number): Statement;
	createStatement(resultSetType: number, resultSetConcurrency: number, resultSetHoldability: number): Statement;
	executeAsync(javaPlugin: JavaPlugin, asyncFunction: any): BukkitTask;
	getBaseConnection(): Connection;
	isClosed(): boolean;
	isReadOnly(): boolean;
	openConnection(): void;
	openConnectionAsync(javaPlugin: JavaPlugin, callback: any): BukkitTask;
	prepareStatement(sql: string): PreparedStatement;
	prepareStatement(sql: string, columnIndexes: Array<number>): PreparedStatement;
	prepareStatement(sql: string, autoGeneratedKeys: number): PreparedStatement;
	prepareStatement(sql: string, resultSetType: number, resultSetConcurrency: number): PreparedStatement;
	prepareStatement(sql: string, resultSetType: number, resultSetConcurrency: number, resultSetHoldability: number): PreparedStatement;
}

export default class MysqlWrapper {
	public static get $javaClass(): any {
		return Java.type('com.smc.utils.MysqlWrapper');
	}

	constructor(host: string, port: number, database: string, username: string, password: string);
	constructor(...args: any[]) {
		return new MysqlWrapper.$javaClass(...args);
	}

	public static openConnectionAsync$default(arg0: MysqlWrapper, arg1: JavaPlugin, arg2: any, arg3: number, arg4: any): BukkitTask;
	public static openConnectionAsync$default(...args: any[]): any {
		return MysqlWrapper.$javaClass.openConnectionAsync$default(...args);
	}

}

