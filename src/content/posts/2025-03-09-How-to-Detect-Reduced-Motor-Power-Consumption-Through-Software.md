After optimizing motor control algorithms, we need to **monitor power consumption in real time** to verify the effectiveness of the optimization and further refine control strategies. Below are several **software-based** methods to detect motor power consumption reduction:

---

## **1. Real-Time Power Monitoring Using a Current Sensor**

Motor power consumption is mainly determined by **voltage (V) and current (I)**, calculated as:

P=V×IP = V \times I

By integrating a **current sensor (such as INA219 or ACS712)** into the motor circuit, an MCU can continuously measure current data and compute power consumption.

### **Example: Monitoring Motor Power with INA219 (Raspberry Pi / ESP32)**

```python
from ina219 import INA219

ina = INA219(shunt_ohms=0.1)  # Depends on the sensor's shunt resistor
ina.configure()

def get_power():
    voltage = ina.voltage()  # Read voltage
    current = ina.current()  # Read current (mA)
    power = voltage * (current / 1000)  # Convert to watts
    return power

while True:
    power_usage = get_power()
    print(f"Motor Power Consumption: {power_usage:.2f} W")
```

🔹 **Optimization Points:**

- Record power consumption before and after optimization and compare the reduction.
- Check if software adjustments (e.g., lower PWM, reduced CPU frequency) effectively decrease power usage.

---

## **2. Retrieving Data from Motor Controllers (VESC / FOC Controllers)**

If using a VESC (open-source BLDC motor controller), power consumption data can be retrieved via UART or CAN bus.

### **Example: Monitoring Power with VESC**

```python
from vesc_py import VESC

vesc = VESC(serial_port='/dev/ttyUSB0')

def get_motor_power():
    voltage = vesc.get_input_voltage()  # Get input voltage
    current = vesc.get_motor_current()  # Get motor current
    power = voltage * current  # Compute power
    return power

while True:
    print(f"Motor Power Consumption: {get_motor_power():.2f} W")
```

🔹 **Optimization Points:**

- Record power variations at different PWM settings and loads.
- After optimization, check if power consumption decreases (e.g., reduced current, optimized torque control).

---

## **3. Measuring PWM and Current in MCU**

In embedded systems (e.g., STM32), direct measurement of PWM duty cycle and motor current enables power tracking.

### **Example: STM32 Monitoring PWM & Current**

```c
float get_motor_power() {
    float voltage = read_motor_voltage(); // Read voltage
    float current = read_motor_current(); // Read current
    return voltage * current;  // Compute power
}

void log_power_data() {
    while (1) {
        float power = get_motor_power();
        printf("Motor Power: %.2f W\n", power);
        HAL_Delay(1000);
    }
}
```

🔹 **Optimization Points:**

- Verify that power consumption decreases when entering low-power modes (e.g., Deep Sleep).
- Check if reduced PWM duty cycle results in lower current draw, confirming software control effectiveness.

---

## **4. Monitoring CPU Load & Frequency Adjustment Impact**

While optimizing motor control, we may reduce MCU/CPU operating frequency (using DVFS technology). Monitoring CPU load and frequency ensures the optimization is applied correctly.

### **Example: Monitoring CPU Frequency on Raspberry Pi**

```python
def get_cpu_freq():
    with open("/sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq", "r") as f:
        return int(f.read()) / 1000  # Convert to MHz

print(f"Current CPU Frequency: {get_cpu_freq()} MHz")
```

🔹 **Optimization Points:**

- Verify that CPU frequency automatically decreases under low motor load, reducing excess power consumption.

---

## **5. Data Logging & Analyzing Power Reduction Trends**

Power consumption data before and after optimization can be recorded and plotted for visual analysis.

### **Example: Plotting Power Consumption with Matplotlib**

```python
import matplotlib.pyplot as plt
import time

power_data = []

def monitor_power():
    for _ in range(100):
        power = get_power()  # Collect motor power data
        power_data.append(power)
        time.sleep(0.5)

    plt.plot(power_data)
    plt.xlabel("Time (s)")
    plt.ylabel("Power (W)")
    plt.title("Motor Power Consumption Over Time")
    plt.show()

monitor_power()
```

🔹 **Optimization Points:**

- Visually analyze power trends at different loads and PWM settings.
- Ensure the optimized power consumption curve is lower than the pre-optimized one.

---

## **Summary**

|**Method**|**Principle**|**Use Case**|
|---|---|---|
|**Measuring Power with Current Sensor**|Uses INA219 / ACS712 to measure voltage & current|Works with any motor, requires external sensor|
|**Retrieving Data from VESC**|Reads voltage & current via UART/CAN|Works with VESC-based systems|
|**Monitoring PWM & Current in MCU**|Reads PWM duty cycle and current to compute power|Works with MCU-controlled motors|
|**Monitoring CPU Load & Frequency**|Tracks CPU frequency to verify DVFS adjustments|Useful for embedded Linux systems|
|**Data Logging & Analysis**|Records power data and visualizes trends|Ideal for long-term testing and optimization|

🚀 **These methods help validate software-based power optimization strategies, ensuring energy savings are effectively achieved!**