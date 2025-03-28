---
layout: portfolio
title: To connect a Raspberry Pi with an Arduino and remotely control an LED and take photos via Telegram
---

To connect a **Raspberry Pi** with an **Arduino** and remotely control an LED and take photos via **Telegram**, follow these steps:

---

### **1. Hardware Preparation**

- **Raspberry Pi**
- **Arduino** UNO
- **LED** (connected to the Arduino)
- **Camera** (Raspberry Pi Camera or USB camera)

---

### **2. Install Required Software and Libraries**

On Raspberry Pi, install the necessary libraries:
```bash
pip install pyserial telepot picamera

```
---

### **3. Connect Raspberry Pi and Arduino**

Connect the Arduino to the Raspberry Pi using a **USB cable** or **GPIO serial** and use the `pyserial` library for communication.

---

### **4. Set Up the Telegram Bot**

1. Search for **BotFather** on Telegram and create a new bot to obtain a **Bot Token**.
2. Use this token in your Python script to interact with Telegram.

---

### **5. Write the Python Script**
```Python
import serial
import telepot
from telepot.loop import MessageLoop
import time
from picamera import PiCamera

# Connect to Arduino (adjust the port as needed)
arduino = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
camera = PiCamera()

# Telegram Bot Token
TOKEN = 'nuo BotToken'
bot = telepot.Bot(TOKEN)

def handle_message(msg):
    chat_id = msg['chat']['id']
    command = msg['text'].lower()

    if command == "on":
        arduino.write(b'1')  # Send '1' to turn on the LED
        bot.sendMessage(chat_id, "LED is ON")
    elif command == "off":
        arduino.write(b'0')  # Send '0' to turn off the LED
        bot.sendMessage(chat_id, "LED is OFF")
    elif command == "photo":
        bot.sendMessage(chat_id, "Taking a photo...")
        camera.capture('/home/pi/photo.jpg')
        bot.sendPhoto(chat_id, photo=open('/home/pi/photo.jpg', 'rb'))

# Listen for incoming messages
MessageLoop(bot, handle_message).run_as_thread()

while True:
    time.sleep(10)  # Keep the script running

```
---

### **6. Write the Arduino Code**
```cpp
void setup() {
  pinMode(13, OUTPUT);  // Set up LED pin
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char command = Serial.read();
    if (command == '1') {
      digitalWrite(13, HIGH);  // Turn on LED
    } else if (command == '0') {
      digitalWrite(13, LOW);   // Turn off LED
    }
  }
}

```
---

### **7. Run the Python Script**

Execute the script on the Raspberry Pi:
```bash
python nuo_script.py

```
---

### **8. Control via Telegram**

Now, we can send the following commands to our Telegram bot:

- **`on`**: Turns on the LED
- **`off`**: Turns off the LED
- **`photo`**: Captures a photo and sends it back

This completes the setup for **Raspberry Pi connecting to Arduino and controlling LED and camera via Telegram**!