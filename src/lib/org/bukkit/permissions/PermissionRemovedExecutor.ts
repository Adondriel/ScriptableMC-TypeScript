declare var Java: any;
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'

export interface PermissionRemovedExecutor {
	attachmentRemoved(arg0: PermissionAttachment): void;
}

export class PermissionRemovedExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionRemovedExecutor');
	}
}
