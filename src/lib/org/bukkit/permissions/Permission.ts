declare var Java: any;
import PermissionDefault from '../../../org/bukkit/permissions/PermissionDefault.js'

export default interface Permission {
	getDescription(): string;
	setDescription(value: string): void;
	recalculatePermissibles(): void;
	getChildren(): any;
	getPermissibles(): any;
	addParent(perm: Permission, value: boolean): void;
	addParent(_name: string, value: boolean): Permission;
	getName(): string;
	getDefault(): PermissionDefault;
	setDefault(value: PermissionDefault): void;
}

export default class Permission {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.Permission');
	}
	constructor(_name: string, defaultValue: PermissionDefault);
	constructor(_name: string, description: string);
	constructor(_name: string);
	constructor(_name: string, description: string, defaultValue: PermissionDefault, children: any);
	constructor(_name: string, defaultValue: PermissionDefault, children: any);
	constructor(_name: string, description: string, children: any);
	constructor(_name: string, children: any);
	constructor(_name: string, description: string, defaultValue: PermissionDefault);
	constructor(...args: any[]) {
		return new Permission.$javaClass(...args);
	}
	public static get DEFAULT_PERMISSION(): PermissionDefault {
		return Permission.$javaClass.DEFAULT_PERMISSION;
	}
	public static loadPermissions(data: any, error: string, def: PermissionDefault): Array<Permission>;
	public static loadPermissions(...args: any[]): any {
		return Permission.$javaClass.loadPermissions(...args);
	}
	public static loadPermission(_name: string, data: any): Permission;
	public static loadPermission(_name: string, data: any, def: PermissionDefault, output: Array<any>): Permission;
	public static loadPermission(...args: any[]): any {
		return Permission.$javaClass.loadPermission(...args);
	}
}

