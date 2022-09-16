{{Thermostat}} Class Design Recipe

1. Describe the Problem
Put or write the user story here. Add any clarifying notes you might have.

> The Thermostat starts with an initial temperature of 20 degrees
> You can increase the temperature with an up method
> You can decrease the temperature with a down method
> The minimum possible temperature is 10 degrees
> The Power saving mode is on by default but it can also be turned off
> If power saving mode is on, the maximum temperature is 25 degrees
> If power saving mode is off, the maximum temperature is 32 degrees
> You can reset the temperature to 20 with a reset method
> You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

2. Design the Class Interface
Include the initializer and public methods with all parameters and return values.

class Thermostat
    constructor() {
        this.temperature = 20;
        this.power_saving_mode = true;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.power_saving_mode = true && this.temperature <= 24) {
            this.temperature += 1;
        }
        else if (this.power_saving_mode = false && this.temperature <= 31)   {
            this.temperature += 1;
        }  
    }

    down() {
        if (this .temperature >= -9) {
            this.temperature -= 1;
        }
    }

    reset() {
        this.temperature = 20;
    }

    setPowerSavingMode(bool) {
        if (bool === true) {
            this.power_saving_mode = true;
        }
        else if (bool === false) {
            this.power_saving_mode = false;
        }
    }

    getEnergyUsage() {
        if (this.temperature < 18) {
            return "low-usage"
        }
        else if (this.temperature <= 25) {
            return "medium-usage"
        }
        else {
            return "high-usage"
        }
    }

3. Create Examples as Tests
Make a list of examples of how the class will behave in different situations.

<!-- Initial temp 20 -->
>const thermostat = new Thermostat();
>expect(thermostat.getTemperature()).toBe(20)


<!-- New temp 22 -->
>thermostat.up();
>thermostat.up();
>expect(thermostat.getTemperature()).toBe(22) 


<!-- new temp 21 -->
>thermostat.down();
>expect(thermostat.getTemperature()).toBe(21)


<!-- Add 10 to temp shows that power saving mode is on and temp doesn't increase above max -->
>thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25
>for (let i = 0 ; i < 10 ; i++) {
  thermostat.up(); }
>expect(thermostat.getTemperature()).toBe(25) //(max temp reached)


<!-- power saving mode now off and temp increases above 25 -->
>thermostat.setPowerSavingMode(false); //max temp is no more 25
>thermostat.up();
>expect(thermostat.getTemperature()).toBe(26) // should now return 26


<!-- Reset puts temp back o 20 -->
>thermostat.reset();
>expect(thermostat.getTemperature()).toBe(20) // should be back to 20


Encode each example as a test. You can add to the above list as you go.

4. Implement the Behaviour
After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour.