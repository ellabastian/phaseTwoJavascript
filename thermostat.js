class Thermostat {
    constructor() {
        this.temperature = 20;
        this.power_saving_mode = true;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.power_saving_mode === true && this.temperature <= 24) {
            this.temperature += 1;
        }
        else if (this.power_saving_mode === false  && this.temperature <= 31) {
            this.temperature += 1;
        } 
    }

    down() {
        if (this .temperature >= -9) {
            this.temperature -= 1;
        }
    }

    setPowerSavingMode(bool) {
        if (bool === true) {
            this.power_saving_mode = true;
        }
        else if (bool === false) {
            this.power_saving_mode = false;
        }
    }

    reset() {
        this.temperature = 20;
    }

    getEnergyUsage() {
        if (this.temperature < 18) {
            return "Low-usage";
        }
        else if (this.temperature <= 25) {
            return "Medium-usage";
        }
        else {
            return "High-usage";
        }
    }
}

const thermostat = new Thermostat();
// console.log(thermostat)  // get therm attributes psm: T
thermostat.getTemperature()
for (let i = 0; i <10; i++) {
    thermostat.up()
}
thermostat.getTemperature()
thermostat.setPowerSavingMode(false)
console.log(thermostat)
thermostat.setPowerSavingMode(true)
console.log(thermostat)
thermostat.setPowerSavingMode(false)
console.log(thermostat)
thermostat.setPowerSavingMode(true)
console.log(thermostat)
console.log(thermostat) // get therm attributes psm: F
for (let i = 0; i <10; i++) {
    thermostat.up()
}
// console.log(thermostat)
console.log(thermostat.getTemperature())
// console.log()
// console.log()
// console.log()

module.exports = Thermostat;