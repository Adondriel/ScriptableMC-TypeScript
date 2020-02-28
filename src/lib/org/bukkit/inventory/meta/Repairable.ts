declare var Java: any;

export default interface Repairable {
	clone(): any;
	clone(): Repairable;
	getRepairCost(): number;
	hasRepairCost(): boolean;
	setRepairCost(arg0: number): void;
}

export default class Repairable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.Repairable');
	}

}

