const Thermostat = require("./thermostat")

describe('Thermostat', () => {
    const thermostat = new Thermostat();
    it('Shows that initial temperature of thermostat is 20', () => {
        expect((thermostat.getTemperature())).toEqual(20);
    });
    it('When we increase the temperature by 2 it shows that new temperature of thermostat is 22', () => {
        thermostat.up();
        thermostat.up();
        expect((thermostat.getTemperature())).toEqual(22);
    });
    it('When we decrease the temperature by 1 it shows that new temperature of thermostat is 21', () => {
        thermostat.down();
        expect((thermostat.getTemperature())).toEqual(21);
        expect((thermostat.getEnergyUsage())).toEqual("Medium-usage")
    });
    it('When we switch on Power Saving Mode and then add 10 to the temperature our temperature doesn\'t increase above the max temperature of 25', () => {
        thermostat.setPowerSavingMode(true);
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up(); 
        }
        expect(thermostat.getTemperature()).toBe(25);
    });
    xit('When we switch off Power Saving Mode and add 1 to the temperature, it should now increase above the max temperature to 26', () => {
        thermostat.setPowerSavingMode(false);
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(26);
        expect((thermostat.getEnergyUsage())).toEqual("High-usage")
    });
    it('When we call Reset it resets the thermostat back to the initial temperature of 20', () => {
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20);
    });
})