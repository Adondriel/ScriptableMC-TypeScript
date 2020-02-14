declare var Java: any;
import Clob from '../../java/sql/Clob.js'
import InputStream from '../../java/io/InputStream.js'
import OutputStream from '../../java/io/OutputStream.js'
import Reader from '../../java/io/Reader.js'
import Writer from '../../java/io/Writer.js'

export default interface NClob {
	setString(arg0: number, arg1: string): number;
	setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
	setAsciiStream(arg0: number): OutputStream;
	setCharacterStream(arg0: number): Writer;
	getCharacterStream(arg0: number, arg1: number): Reader;
	getCharacterStream(): Reader;
	getSubString(arg0: number, arg1: number): string;
	getAsciiStream(): InputStream;
	free(): void;
	length(): number;
	position(arg0: string, arg1: number): number;
	position(arg0: Clob, arg1: number): number;
	truncate(arg0: number): void;
}

export default class NClob {
	public static get $javaClass(): any {
		return Java.type('java.sql.NClob');
	}
}

