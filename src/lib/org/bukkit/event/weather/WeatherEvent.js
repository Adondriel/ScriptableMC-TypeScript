export class WeatherEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.WeatherEvent');
    }
    constructor(...args) {
        return new WeatherEvent.$javaClass(...args);
    }
}
//# sourceMappingURL=WeatherEvent.js.map