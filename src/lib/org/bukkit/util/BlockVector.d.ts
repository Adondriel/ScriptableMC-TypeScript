import Location from '../../../org/bukkit/Location.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface BlockVector extends Vector {
    clone(): Vector;
    clone(): any;
    clone(): BlockVector;
    add(vec: Vector): Vector;
    length(): number;
    dot(other: Vector): number;
    copy(vec: Vector): Vector;
    zero(): Vector;
    normalize(): Vector;
    distance(o: Vector): number;
    divide(vec: Vector): Vector;
    multiply(vec: Vector): Vector;
    multiply(m: number): Vector;
    multiply(m: number): Vector;
    multiply(m: number): Vector;
    isNormalized(): boolean;
    serialize(): any;
    midpoint(other: Vector): Vector;
    angle(other: Vector): number;
    getMidpoint(other: Vector): Vector;
    crossProduct(o: Vector): Vector;
    isInSphere(origin: Vector, radius: number): boolean;
    toBlockVector(): BlockVector;
    rotateAroundX(angle: number): Vector;
    rotateAroundAxis(axis: Vector, angle: number): Vector;
    toLocation(world: World): Location;
    toLocation(world: World, yaw: number, pitch: number): Location;
    getCrossProduct(o: Vector): Vector;
    isInAABB(min: Vector, max: Vector): boolean;
    rotateAroundZ(angle: number): Vector;
    rotateAroundY(angle: number): Vector;
    rotateAroundNonUnitAxis(axis: Vector, angle: number): Vector;
    distanceSquared(o: Vector): number;
    lengthSquared(): number;
    getBlockZ(): number;
    setX(x: number): Vector;
    setX(x: number): Vector;
    setX(x: number): Vector;
    getZ(): number;
    setZ(z: number): Vector;
    setZ(z: number): Vector;
    setZ(z: number): Vector;
    getBlockX(): number;
    getY(): number;
    checkFinite(): void;
    subtract(vec: Vector): Vector;
    setY(y: number): Vector;
    setY(y: number): Vector;
    setY(y: number): Vector;
    getX(): number;
    getBlockY(): number;
}
export default class BlockVector {
    static get $javaClass(): any;
    constructor(x: number, y: number, z: number);
    constructor(x: number, y: number, z: number);
    constructor(x: number, y: number, z: number);
    constructor(vec: Vector);
    constructor();
    static deserialize(args: any): BlockVector;
    static deserialize(args: any): Vector;
    static getMaximum(v1: Vector, v2: Vector): Vector;
    static getRandom(): Vector;
    static getEpsilon(): number;
    static getMinimum(v1: Vector, v2: Vector): Vector;
}
