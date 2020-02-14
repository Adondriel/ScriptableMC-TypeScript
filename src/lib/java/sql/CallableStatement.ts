declare var Java: any;
import Blob from '../../java/sql/Blob.js'
import Clob from '../../java/sql/Clob.js'
import Connection from '../../java/sql/Connection.js'
import Date from '../../java/sql/Date.js'
import InputStream from '../../java/io/InputStream.js'
import NClob from '../../java/sql/NClob.js'
import ParameterMetaData from '../../java/sql/ParameterMetaData.js'
import PreparedStatement from '../../java/sql/PreparedStatement.js'
import Reader from '../../java/io/Reader.js'
import Ref from '../../java/sql/Ref.js'
import ResultSet from '../../java/sql/ResultSet.js'
import ResultSetMetaData from '../../java/sql/ResultSetMetaData.js'
import RowId from '../../java/sql/RowId.js'
import SQLType from '../../java/sql/SQLType.js'
import SQLWarning from '../../java/sql/SQLWarning.js'
import SQLXML from '../../java/sql/SQLXML.js'
import Time from '../../java/sql/Time.js'
import Timestamp from '../../java/sql/Timestamp.js'
import _Array from '../../java/sql/Array.js'

export default interface CallableStatement {
	setDate(arg0: string, arg1: Date, arg2: any): void;
	setDate(arg0: string, arg1: Date): void;
	setNull(arg0: string, arg1: number, arg2: string): void;
	setNull(arg0: string, arg1: number): void;
	setBigDecimal(arg0: string, arg1: any): void;
	setString(arg0: string, arg1: string): void;
	setBytes(arg0: string, arg1: Array<number>): void;
	setAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
	setAsciiStream(arg0: string, arg1: InputStream): void;
	setAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
	setBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
	setBinaryStream(arg0: string, arg1: InputStream): void;
	setBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
	setObject(arg0: string, arg1: any, arg2: SQLType): void;
	setObject(arg0: string, arg1: any, arg2: number): void;
	setObject(arg0: string, arg1: any, arg2: number, arg3: number): void;
	setObject(arg0: string, arg1: any): void;
	setObject(arg0: string, arg1: any, arg2: SQLType, arg3: number): void;
	setCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	setCharacterStream(arg0: string, arg1: Reader): void;
	setCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	setBlob(arg0: string, arg1: InputStream, arg2: number): void;
	setBlob(arg0: string, arg1: Blob): void;
	setBlob(arg0: string, arg1: InputStream): void;
	setClob(arg0: string, arg1: Clob): void;
	setClob(arg0: string, arg1: Reader, arg2: number): void;
	setClob(arg0: string, arg1: Reader): void;
	setRowId(arg0: string, arg1: RowId): void;
	setNString(arg0: string, arg1: string): void;
	setNCharacterStream(arg0: string, arg1: Reader): void;
	setNCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	setNClob(arg0: string, arg1: Reader): void;
	setNClob(arg0: string, arg1: NClob): void;
	setNClob(arg0: string, arg1: Reader, arg2: number): void;
	setSQLXML(arg0: string, arg1: SQLXML): void;
	registerOutParameter(arg0: string, arg1: SQLType): void;
	registerOutParameter(arg0: number, arg1: SQLType, arg2: string): void;
	registerOutParameter(arg0: string, arg1: SQLType, arg2: number): void;
	registerOutParameter(arg0: number, arg1: SQLType, arg2: number): void;
	registerOutParameter(arg0: number, arg1: SQLType): void;
	registerOutParameter(arg0: string, arg1: SQLType, arg2: string): void;
	registerOutParameter(arg0: string, arg1: number, arg2: number): void;
	registerOutParameter(arg0: string, arg1: number): void;
	registerOutParameter(arg0: string, arg1: number, arg2: string): void;
	registerOutParameter(arg0: number, arg1: number, arg2: string): void;
	registerOutParameter(arg0: number, arg1: number): void;
	registerOutParameter(arg0: number, arg1: number, arg2: number): void;
	wasNull(): boolean;
	getBigDecimal(arg0: string): any;
	getBigDecimal(arg0: number, arg1: number): any;
	getBigDecimal(arg0: number): any;
	getTimestamp(arg0: number): Timestamp;
	getTimestamp(arg0: string, arg1: any): Timestamp;
	getTimestamp(arg0: number, arg1: any): Timestamp;
	getTimestamp(arg0: string): Timestamp;
	getBlob(arg0: number): Blob;
	getBlob(arg0: string): Blob;
	getClob(arg0: string): Clob;
	getClob(arg0: number): Clob;
	getRowId(arg0: string): RowId;
	getRowId(arg0: number): RowId;
	getNClob(arg0: string): NClob;
	getNClob(arg0: number): NClob;
	getSQLXML(arg0: string): SQLXML;
	getSQLXML(arg0: number): SQLXML;
	getNString(arg0: string): string;
	getNString(arg0: number): string;
	getNCharacterStream(arg0: string): Reader;
	getNCharacterStream(arg0: number): Reader;
	getCharacterStream(arg0: number): Reader;
	getCharacterStream(arg0: string): Reader;
	getString(arg0: string): string;
	getString(arg0: number): string;
	setTime(arg0: string, arg1: Time): void;
	setTime(arg0: string, arg1: Time, arg2: any): void;
	getTime(arg0: string, arg1: any): Time;
	getTime(arg0: number, arg1: any): Time;
	getTime(arg0: number): Time;
	getTime(arg0: string): Time;
	getDate(arg0: number, arg1: any): Date;
	getDate(arg0: string): Date;
	getDate(arg0: string, arg1: any): Date;
	getDate(arg0: number): Date;
	setURL(arg0: string, arg1: any): void;
	getObject(arg0: string, arg1: any): any;
	getObject(arg0: number, arg1: any): any;
	getObject(arg0: string): any;
	getObject(arg0: string, arg1: any): any;
	getObject(arg0: number): any;
	getObject(arg0: number, arg1: any): any;
	getBoolean(arg0: string): boolean;
	getBoolean(arg0: number): boolean;
	getByte(arg0: string): number;
	getByte(arg0: number): number;
	getShort(arg0: string): number;
	getShort(arg0: number): number;
	getInt(arg0: number): number;
	getInt(arg0: string): number;
	getLong(arg0: number): number;
	getLong(arg0: string): number;
	getFloat(arg0: number): number;
	getFloat(arg0: string): number;
	getDouble(arg0: string): number;
	getDouble(arg0: number): number;
	getBytes(arg0: number): Array<number>;
	getBytes(arg0: string): Array<number>;
	getArray(arg0: number): _Array;
	getArray(arg0: string): _Array;
	getURL(arg0: number): any;
	getURL(arg0: string): any;
	setBoolean(arg0: string, arg1: boolean): void;
	setByte(arg0: string, arg1: number): void;
	setShort(arg0: string, arg1: number): void;
	setInt(arg0: string, arg1: number): void;
	setLong(arg0: string, arg1: number): void;
	setFloat(arg0: string, arg1: number): void;
	setDouble(arg0: string, arg1: number): void;
	getRef(arg0: string): Ref;
	getRef(arg0: number): Ref;
	setTimestamp(arg0: string, arg1: Timestamp): void;
	setTimestamp(arg0: string, arg1: Timestamp, arg2: any): void;
	setDate(arg0: number, arg1: Date): void;
	setDate(arg0: number, arg1: Date, arg2: any): void;
	getMetaData(): ResultSetMetaData;
	executeQuery(): ResultSet;
	executeUpdate(): number;
	addBatch(): void;
	executeLargeUpdate(): number;
	setNull(arg0: number, arg1: number): void;
	setNull(arg0: number, arg1: number, arg2: string): void;
	setBigDecimal(arg0: number, arg1: any): void;
	setString(arg0: number, arg1: string): void;
	setBytes(arg0: number, arg1: Array<number>): void;
	setAsciiStream(arg0: number, arg1: InputStream): void;
	setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	setUnicodeStream(arg0: number, arg1: InputStream, arg2: number): void;
	setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	setBinaryStream(arg0: number, arg1: InputStream): void;
	clearParameters(): void;
	setObject(arg0: number, arg1: any): void;
	setObject(arg0: number, arg1: any, arg2: number, arg3: number): void;
	setObject(arg0: number, arg1: any, arg2: SQLType): void;
	setObject(arg0: number, arg1: any, arg2: SQLType, arg3: number): void;
	setObject(arg0: number, arg1: any, arg2: number): void;
	setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	setCharacterStream(arg0: number, arg1: Reader): void;
	setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	setRef(arg0: number, arg1: Ref): void;
	setBlob(arg0: number, arg1: Blob): void;
	setBlob(arg0: number, arg1: InputStream): void;
	setBlob(arg0: number, arg1: InputStream, arg2: number): void;
	setClob(arg0: number, arg1: Reader, arg2: number): void;
	setClob(arg0: number, arg1: Clob): void;
	setClob(arg0: number, arg1: Reader): void;
	setArray(arg0: number, arg1: _Array): void;
	getParameterMetaData(): ParameterMetaData;
	setRowId(arg0: number, arg1: RowId): void;
	setNString(arg0: number, arg1: string): void;
	setNCharacterStream(arg0: number, arg1: Reader): void;
	setNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	setNClob(arg0: number, arg1: Reader): void;
	setNClob(arg0: number, arg1: Reader, arg2: number): void;
	setNClob(arg0: number, arg1: NClob): void;
	setSQLXML(arg0: number, arg1: SQLXML): void;
	setTime(arg0: number, arg1: Time): void;
	setTime(arg0: number, arg1: Time, arg2: any): void;
	setURL(arg0: number, arg1: any): void;
	execute(): boolean;
	setBoolean(arg0: number, arg1: boolean): void;
	setByte(arg0: number, arg1: number): void;
	setShort(arg0: number, arg1: number): void;
	setInt(arg0: number, arg1: number): void;
	setLong(arg0: number, arg1: number): void;
	setFloat(arg0: number, arg1: number): void;
	setDouble(arg0: number, arg1: number): void;
	setTimestamp(arg0: number, arg1: Timestamp): void;
	setTimestamp(arg0: number, arg1: Timestamp, arg2: any): void;
	cancel(): void;
	getWarnings(): SQLWarning;
	clearWarnings(): void;
	executeQuery(arg0: string): ResultSet;
	executeUpdate(arg0: string, arg1: number): number;
	executeUpdate(arg0: string, arg1: Array<number>): number;
	executeUpdate(arg0: string): number;
	executeUpdate(arg0: string, arg1: Array<string>): number;
	getMaxFieldSize(): number;
	setMaxFieldSize(arg0: number): void;
	getMaxRows(): number;
	setMaxRows(arg0: number): void;
	setEscapeProcessing(arg0: boolean): void;
	getQueryTimeout(): number;
	setQueryTimeout(arg0: number): void;
	setCursorName(arg0: string): void;
	getResultSet(): ResultSet;
	getUpdateCount(): number;
	getMoreResults(arg0: number): boolean;
	getMoreResults(): boolean;
	setFetchDirection(arg0: number): void;
	getFetchDirection(): number;
	setFetchSize(arg0: number): void;
	getFetchSize(): number;
	getResultSetConcurrency(): number;
	getResultSetType(): number;
	addBatch(arg0: string): void;
	clearBatch(): void;
	executeBatch(): Array<number>;
	getGeneratedKeys(): ResultSet;
	getResultSetHoldability(): number;
	setPoolable(arg0: boolean): void;
	isPoolable(): boolean;
	closeOnCompletion(): void;
	isCloseOnCompletion(): boolean;
	getLargeUpdateCount(): number;
	setLargeMaxRows(arg0: number): void;
	getLargeMaxRows(): number;
	executeLargeBatch(): Array<number>;
	executeLargeUpdate(arg0: string): number;
	executeLargeUpdate(arg0: string, arg1: Array<number>): number;
	executeLargeUpdate(arg0: string, arg1: number): number;
	executeLargeUpdate(arg0: string, arg1: Array<string>): number;
	getConnection(): Connection;
	isClosed(): boolean;
	execute(arg0: string, arg1: number): boolean;
	execute(arg0: string): boolean;
	execute(arg0: string, arg1: Array<number>): boolean;
	execute(arg0: string, arg1: Array<string>): boolean;
	close(): void;
	isWrapperFor(arg0: any): boolean;
	unwrap(arg0: any): any;
}

export default class CallableStatement {
	public static get $javaClass(): any {
		return Java.type('java.sql.CallableStatement');
	}
	public static get CLOSE_CURRENT_RESULT(): number {
		return CallableStatement.$javaClass.CLOSE_CURRENT_RESULT;
	}
	public static get KEEP_CURRENT_RESULT(): number {
		return CallableStatement.$javaClass.KEEP_CURRENT_RESULT;
	}
	public static get CLOSE_ALL_RESULTS(): number {
		return CallableStatement.$javaClass.CLOSE_ALL_RESULTS;
	}
	public static get SUCCESS_NO_INFO(): number {
		return CallableStatement.$javaClass.SUCCESS_NO_INFO;
	}
	public static get EXECUTE_FAILED(): number {
		return CallableStatement.$javaClass.EXECUTE_FAILED;
	}
	public static get RETURN_GENERATED_KEYS(): number {
		return CallableStatement.$javaClass.RETURN_GENERATED_KEYS;
	}
	public static get NO_GENERATED_KEYS(): number {
		return CallableStatement.$javaClass.NO_GENERATED_KEYS;
	}
}

