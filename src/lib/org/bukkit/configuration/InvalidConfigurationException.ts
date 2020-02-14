declare var Java: any;
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'

export default interface InvalidConfigurationException {
	printStackTrace(arg0: PrintStream): void;
	printStackTrace(): void;
	printStackTrace(arg0: PrintWriter): void;
	fillInStackTrace(): any;
	getCause(): any;
	initCause(arg0: any): any;
	getMessage(): string;
	getLocalizedMessage(): string;
	getStackTrace(): Array<any>;
	setStackTrace(arg0: Array<any>): void;
	addSuppressed(arg0: any): void;
	getSuppressed(): Array<any>;
}

export default class InvalidConfigurationException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.InvalidConfigurationException');
	}
	constructor(msg: string, cause: any);
	constructor(cause: any);
	constructor(msg: string);
	constructor();
	constructor(...args: any[]) {
		return new InvalidConfigurationException.$javaClass(...args);
	}
}

