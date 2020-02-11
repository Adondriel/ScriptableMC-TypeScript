import Blob from '../../java/sql/Blob.js';
import Clob from '../../java/sql/Clob.js';
import Connection from '../../java/sql/Connection.js';
import Date from '../../java/sql/Date.js';
import InputStream from '../../java/io/InputStream.js';
import NClob from '../../java/sql/NClob.js';
import ParameterMetaData from '../../java/sql/ParameterMetaData.js';
import Reader from '../../java/io/Reader.js';
import Ref from '../../java/sql/Ref.js';
import ResultSet from '../../java/sql/ResultSet.js';
import ResultSetMetaData from '../../java/sql/ResultSetMetaData.js';
import RowId from '../../java/sql/RowId.js';
import SQLType from '../../java/sql/SQLType.js';
import SQLWarning from '../../java/sql/SQLWarning.js';
import SQLXML from '../../java/sql/SQLXML.js';
import Time from '../../java/sql/Time.js';
import Timestamp from '../../java/sql/Timestamp.js';
import _Array from '../../java/sql/Array.js';
export default interface CallableStatement {
    getObject(arg0: string): any;
    getObject(arg0: number, arg1: any): any;
    getObject(arg0: string, arg1: any): any;
    getObject(arg0: number): any;
    getObject(arg0: string, arg1: any): any;
    getObject(arg0: number, arg1: any): any;
    getBoolean(arg0: string): boolean;
    getBoolean(arg0: number): boolean;
    getByte(arg0: string): number;
    getByte(arg0: number): number;
    getShort(arg0: number): number;
    getShort(arg0: string): number;
    getInt(arg0: string): number;
    getInt(arg0: number): number;
    getLong(arg0: string): number;
    getLong(arg0: number): number;
    getFloat(arg0: string): number;
    getFloat(arg0: number): number;
    getDouble(arg0: string): number;
    getDouble(arg0: number): number;
    getBytes(arg0: string): Array<number>;
    getBytes(arg0: number): Array<number>;
    setBoolean(arg0: string, arg1: boolean): void;
    setByte(arg0: string, arg1: number): void;
    setShort(arg0: string, arg1: number): void;
    setInt(arg0: string, arg1: number): void;
    setLong(arg0: string, arg1: number): void;
    setFloat(arg0: string, arg1: number): void;
    setDouble(arg0: string, arg1: number): void;
    getRef(arg0: number): Ref;
    getRef(arg0: string): Ref;
    setTimestamp(arg0: string, arg1: Timestamp): void;
    setTimestamp(arg0: string, arg1: Timestamp, arg2: any): void;
    getDate(arg0: string): Date;
    getDate(arg0: number): Date;
    getDate(arg0: string, arg1: any): Date;
    getDate(arg0: number, arg1: any): Date;
    getString(arg0: string): string;
    getString(arg0: number): string;
    getURL(arg0: number): any;
    getURL(arg0: string): any;
    setURL(arg0: string, arg1: any): void;
    getArray(arg0: number): _Array;
    getArray(arg0: string): _Array;
    getTime(arg0: number): Time;
    getTime(arg0: number, arg1: any): Time;
    getTime(arg0: string, arg1: any): Time;
    getTime(arg0: string): Time;
    setTime(arg0: string, arg1: Time, arg2: any): void;
    setTime(arg0: string, arg1: Time): void;
    setNCharacterStream(arg0: string, arg1: Reader): void;
    setNCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
    setDate(arg0: string, arg1: Date): void;
    setDate(arg0: string, arg1: Date, arg2: any): void;
    setClob(arg0: string, arg1: Reader, arg2: number): void;
    setClob(arg0: string, arg1: Clob): void;
    setClob(arg0: string, arg1: Reader): void;
    setRowId(arg0: string, arg1: RowId): void;
    setNString(arg0: string, arg1: string): void;
    setBytes(arg0: string, arg1: Array<number>): void;
    setObject(parameterName: string, x: any, targetSqlType: SQLType, scaleOrLength: number): void;
    setObject(parameterName: string, x: any, targetSqlType: SQLType): void;
    setObject(arg0: string, arg1: any, arg2: number, arg3: number): void;
    setObject(arg0: string, arg1: any, arg2: number): void;
    setObject(arg0: string, arg1: any): void;
    setNull(arg0: string, arg1: number, arg2: string): void;
    setNull(arg0: string, arg1: number): void;
    setAsciiStream(arg0: string, arg1: InputStream): void;
    setAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
    setAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
    setBlob(arg0: string, arg1: Blob): void;
    setBlob(arg0: string, arg1: InputStream, arg2: number): void;
    setBlob(arg0: string, arg1: InputStream): void;
    setBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
    setBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
    setBinaryStream(arg0: string, arg1: InputStream): void;
    setSQLXML(arg0: string, arg1: SQLXML): void;
    setCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
    setCharacterStream(arg0: string, arg1: Reader): void;
    setCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
    setBigDecimal(arg0: string, arg1: any): void;
    setNClob(arg0: string, arg1: NClob): void;
    setNClob(arg0: string, arg1: Reader): void;
    setNClob(arg0: string, arg1: Reader, arg2: number): void;
    setString(arg0: string, arg1: string): void;
    wasNull(): boolean;
    getNClob(arg0: string): NClob;
    getNClob(arg0: number): NClob;
    getTimestamp(arg0: string): Timestamp;
    getTimestamp(arg0: string, arg1: any): Timestamp;
    getTimestamp(arg0: number): Timestamp;
    getTimestamp(arg0: number, arg1: any): Timestamp;
    getSQLXML(arg0: string): SQLXML;
    getSQLXML(arg0: number): SQLXML;
    getBigDecimal(arg0: number, arg1: number): any;
    getBigDecimal(arg0: string): any;
    getBigDecimal(arg0: number): any;
    getClob(arg0: string): Clob;
    getClob(arg0: number): Clob;
    getNString(arg0: number): string;
    getNString(arg0: string): string;
    getRowId(arg0: string): RowId;
    getRowId(arg0: number): RowId;
    getCharacterStream(arg0: string): Reader;
    getCharacterStream(arg0: number): Reader;
    getBlob(arg0: string): Blob;
    getBlob(arg0: number): Blob;
    getNCharacterStream(arg0: string): Reader;
    getNCharacterStream(arg0: number): Reader;
    registerOutParameter(parameterIndex: number, sqlType: SQLType): void;
    registerOutParameter(parameterIndex: number, sqlType: SQLType, scale: number): void;
    registerOutParameter(parameterName: string, sqlType: SQLType, typeName: string): void;
    registerOutParameter(parameterIndex: number, sqlType: SQLType, typeName: string): void;
    registerOutParameter(parameterName: string, sqlType: SQLType, scale: number): void;
    registerOutParameter(parameterName: string, sqlType: SQLType): void;
    registerOutParameter(arg0: number, arg1: number, arg2: number): void;
    registerOutParameter(arg0: number, arg1: number, arg2: string): void;
    registerOutParameter(arg0: string, arg1: number): void;
    registerOutParameter(arg0: string, arg1: number, arg2: number): void;
    registerOutParameter(arg0: string, arg1: number, arg2: string): void;
    registerOutParameter(arg0: number, arg1: number): void;
    execute(): boolean;
    setBoolean(arg0: number, arg1: boolean): void;
    setByte(arg0: number, arg1: number): void;
    setShort(arg0: number, arg1: number): void;
    setInt(arg0: number, arg1: number): void;
    setLong(arg0: number, arg1: number): void;
    setFloat(arg0: number, arg1: number): void;
    setDouble(arg0: number, arg1: number): void;
    setTimestamp(arg0: number, arg1: Timestamp, arg2: any): void;
    setTimestamp(arg0: number, arg1: Timestamp): void;
    setURL(arg0: number, arg1: any): void;
    setArray(arg0: number, arg1: _Array): void;
    setTime(arg0: number, arg1: Time): void;
    setTime(arg0: number, arg1: Time, arg2: any): void;
    setNCharacterStream(arg0: number, arg1: Reader): void;
    setNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
    getParameterMetaData(): ParameterMetaData;
    setDate(arg0: number, arg1: Date): void;
    setDate(arg0: number, arg1: Date, arg2: any): void;
    getMetaData(): ResultSetMetaData;
    addBatch(): void;
    executeLargeUpdate(): number;
    executeQuery(): ResultSet;
    executeUpdate(): number;
    setClob(arg0: number, arg1: Reader): void;
    setClob(arg0: number, arg1: Reader, arg2: number): void;
    setClob(arg0: number, arg1: Clob): void;
    setRowId(arg0: number, arg1: RowId): void;
    setNString(arg0: number, arg1: string): void;
    setBytes(arg0: number, arg1: Array<number>): void;
    clearParameters(): void;
    setObject(parameterIndex: number, x: any, targetSqlType: SQLType, scaleOrLength: number): void;
    setObject(arg0: number, arg1: any, arg2: number, arg3: number): void;
    setObject(arg0: number, arg1: any, arg2: number): void;
    setObject(arg0: number, arg1: any): void;
    setObject(parameterIndex: number, x: any, targetSqlType: SQLType): void;
    setUnicodeStream(arg0: number, arg1: InputStream, arg2: number): void;
    setRef(arg0: number, arg1: Ref): void;
    setNull(arg0: number, arg1: number, arg2: string): void;
    setNull(arg0: number, arg1: number): void;
    setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
    setAsciiStream(arg0: number, arg1: InputStream): void;
    setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
    setBlob(arg0: number, arg1: InputStream): void;
    setBlob(arg0: number, arg1: InputStream, arg2: number): void;
    setBlob(arg0: number, arg1: Blob): void;
    setBinaryStream(arg0: number, arg1: InputStream): void;
    setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
    setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
    setSQLXML(arg0: number, arg1: SQLXML): void;
    setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
    setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
    setCharacterStream(arg0: number, arg1: Reader): void;
    setBigDecimal(arg0: number, arg1: any): void;
    setNClob(arg0: number, arg1: Reader, arg2: number): void;
    setNClob(arg0: number, arg1: Reader): void;
    setNClob(arg0: number, arg1: NClob): void;
    setString(arg0: number, arg1: string): void;
    execute(arg0: string, arg1: number): boolean;
    execute(arg0: string, arg1: Array<number>): boolean;
    execute(arg0: string): boolean;
    execute(arg0: string, arg1: Array<string>): boolean;
    close(): void;
    getConnection(): Connection;
    isClosed(): boolean;
    cancel(): void;
    isCloseOnCompletion(): boolean;
    getLargeUpdateCount(): number;
    getResultSetHoldability(): number;
    setEscapeProcessing(arg0: boolean): void;
    enquoteNCharLiteral(val: string): string;
    getResultSetConcurrency(): number;
    getWarnings(): SQLWarning;
    clearWarnings(): void;
    closeOnCompletion(): void;
    getResultSet(): ResultSet;
    executeBatch(): Array<number>;
    setMaxRows(arg0: number): void;
    getResultSetType(): number;
    getQueryTimeout(): number;
    enquoteLiteral(val: string): string;
    enquoteIdentifier(identifier: string, alwaysQuote: boolean): string;
    getMaxRows(): number;
    setCursorName(arg0: string): void;
    getFetchDirection(): number;
    setQueryTimeout(arg0: number): void;
    getUpdateCount(): number;
    setMaxFieldSize(arg0: number): void;
    addBatch(arg0: string): void;
    getMoreResults(arg0: number): boolean;
    getMoreResults(): boolean;
    getGeneratedKeys(): ResultSet;
    setPoolable(arg0: boolean): void;
    isPoolable(): boolean;
    setLargeMaxRows(max: number): void;
    executeLargeUpdate(sql: string, autoGeneratedKeys: number): number;
    executeLargeUpdate(sql: string, columnNames: Array<string>): number;
    executeLargeUpdate(sql: string, columnIndexes: Array<number>): number;
    executeLargeUpdate(sql: string): number;
    executeLargeBatch(): Array<number>;
    getMaxFieldSize(): number;
    setFetchDirection(arg0: number): void;
    setFetchSize(arg0: number): void;
    isSimpleIdentifier(identifier: string): boolean;
    executeQuery(arg0: string): ResultSet;
    getFetchSize(): number;
    clearBatch(): void;
    getLargeMaxRows(): number;
    executeUpdate(arg0: string): number;
    executeUpdate(arg0: string, arg1: number): number;
    executeUpdate(arg0: string, arg1: Array<number>): number;
    executeUpdate(arg0: string, arg1: Array<string>): number;
    unwrap(arg0: any): any;
    isWrapperFor(arg0: any): boolean;
}
export default class CallableStatement {
    static get $javaClass(): any;
    static get CLOSE_CURRENT_RESULT(): number;
    static get KEEP_CURRENT_RESULT(): number;
    static get CLOSE_ALL_RESULTS(): number;
    static get SUCCESS_NO_INFO(): number;
    static get EXECUTE_FAILED(): number;
    static get RETURN_GENERATED_KEYS(): number;
    static get NO_GENERATED_KEYS(): number;
}
