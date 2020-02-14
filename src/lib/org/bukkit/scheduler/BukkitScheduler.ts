declare var Java: any;
import BukkitRunnable from '../../../org/bukkit/scheduler/BukkitRunnable.js'
import BukkitTask from '../../../org/bukkit/scheduler/BukkitTask.js'
import BukkitWorker from '../../../org/bukkit/scheduler/BukkitWorker.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface BukkitScheduler {
	isQueued(arg0: number): boolean;
	runTaskAsynchronously(arg0: Plugin, arg1: any): BukkitTask;
	runTaskAsynchronously(arg0: Plugin, arg1: any): void;
	runTaskAsynchronously(arg0: Plugin, arg1: BukkitRunnable): BukkitTask;
	cancelTask(arg0: number): void;
	callSyncMethod(arg0: Plugin, arg1: any): any;
	cancelTasks(arg0: Plugin): void;
	isCurrentlyRunning(arg0: number): boolean;
	getActiveWorkers(): Array<BukkitWorker>;
	getPendingTasks(): Array<BukkitTask>;
	runTask(arg0: Plugin, arg1: any): void;
	runTask(arg0: Plugin, arg1: BukkitRunnable): BukkitTask;
	runTask(arg0: Plugin, arg1: any): BukkitTask;
	runTaskLater(arg0: Plugin, arg1: BukkitRunnable, arg2: number): BukkitTask;
	runTaskLater(arg0: Plugin, arg1: any, arg2: number): BukkitTask;
	runTaskLater(arg0: Plugin, arg1: any, arg2: number): void;
	runTaskLaterAsynchronously(arg0: Plugin, arg1: any, arg2: number): BukkitTask;
	runTaskLaterAsynchronously(arg0: Plugin, arg1: any, arg2: number): void;
	runTaskLaterAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: number): BukkitTask;
	runTaskTimer(arg0: Plugin, arg1: any, arg2: number, arg3: number): void;
	runTaskTimer(arg0: Plugin, arg1: any, arg2: number, arg3: number): BukkitTask;
	runTaskTimer(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): BukkitTask;
	runTaskTimerAsynchronously(arg0: Plugin, arg1: any, arg2: number, arg3: number): void;
	runTaskTimerAsynchronously(arg0: Plugin, arg1: any, arg2: number, arg3: number): BukkitTask;
	runTaskTimerAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): BukkitTask;
	scheduleSyncDelayedTask(arg0: Plugin, arg1: any, arg2: number): number;
	scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable): number;
	scheduleSyncDelayedTask(arg0: Plugin, arg1: any): number;
	scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable, arg2: number): number;
	scheduleSyncRepeatingTask(arg0: Plugin, arg1: any, arg2: number, arg3: number): number;
	scheduleSyncRepeatingTask(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): number;
	scheduleAsyncDelayedTask(arg0: Plugin, arg1: any): number;
	scheduleAsyncDelayedTask(arg0: Plugin, arg1: any, arg2: number): number;
	scheduleAsyncRepeatingTask(arg0: Plugin, arg1: any, arg2: number, arg3: number): number;
}

export default class BukkitScheduler {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitScheduler');
	}
}

