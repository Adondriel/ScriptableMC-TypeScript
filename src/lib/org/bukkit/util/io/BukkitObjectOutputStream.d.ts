import ObjectOutputStream from '../../../../java/io/ObjectOutputStream.js';
import ObjectOutputStream$PutField from '../../../../java/io/ObjectOutputStream$PutField.js';
import OutputStream from '../../../../java/io/OutputStream.js';
import SerializablePermission from '../../../../java/io/SerializablePermission.js';
export default interface BukkitObjectOutputStream extends ObjectOutputStream {
    write(buf: Array<number>, off: number, len: number): void;
    write(buf: Array<number>): void;
    write(val: number): void;
    writeObject(obj: any): void;
    defaultWriteObject(): void;
    flush(): void;
    close(): void;
    writeInt(val: number): void;
    putFields(): ObjectOutputStream$PutField;
    writeFields(): void;
    reset(): void;
    writeBytes(str: string): void;
    writeUTF(str: string): void;
    writeFloat(val: number): void;
    writeBoolean(val: boolean): void;
    writeByte(val: number): void;
    writeShort(val: number): void;
    writeLong(val: number): void;
    writeDouble(val: number): void;
    writeChars(str: string): void;
    writeChar(val: number): void;
    useProtocolVersion(version: number): void;
    writeUnshared(obj: any): void;
}
export default class BukkitObjectOutputStream {
    static get $javaClass(): any;
    constructor(out: OutputStream);
    static get STREAM_MAGIC(): number;
    static get STREAM_VERSION(): number;
    static get TC_BASE(): number;
    static get TC_NULL(): number;
    static get TC_REFERENCE(): number;
    static get TC_CLASSDESC(): number;
    static get TC_OBJECT(): number;
    static get TC_STRING(): number;
    static get TC_ARRAY(): number;
    static get TC_CLASS(): number;
    static get TC_BLOCKDATA(): number;
    static get TC_ENDBLOCKDATA(): number;
    static get TC_RESET(): number;
    static get TC_BLOCKDATALONG(): number;
    static get TC_EXCEPTION(): number;
    static get TC_LONGSTRING(): number;
    static get TC_PROXYCLASSDESC(): number;
    static get TC_ENUM(): number;
    static get TC_MAX(): number;
    static get baseWireHandle(): number;
    static get SC_WRITE_METHOD(): number;
    static get SC_BLOCK_DATA(): number;
    static get SC_SERIALIZABLE(): number;
    static get SC_EXTERNALIZABLE(): number;
    static get SC_ENUM(): number;
    static get SUBSTITUTION_PERMISSION(): SerializablePermission;
    static get SUBCLASS_IMPLEMENTATION_PERMISSION(): SerializablePermission;
    static get SERIAL_FILTER_PERMISSION(): SerializablePermission;
    static get PROTOCOL_VERSION_1(): number;
    static get PROTOCOL_VERSION_2(): number;
    static nullOutputStream(): OutputStream;
}
