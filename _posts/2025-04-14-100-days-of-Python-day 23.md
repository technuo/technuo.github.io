---
layout: post
title: "100 DAYS OF PYTHON-DAY 23"
date: 2025-04-14
tags: [Python100]
---

![[100 DAYS OF PYTHON-DAY23.png]]

# 🐢 Turtle Crossing Game – Breakdown Report

## 🎮 Project Overview

The **Turtle Crossing Game** is a classic arcade-style game built using Python’s `turtle` module. The player controls a turtle attempting to cross a busy road filled with moving cars. The objective is to reach the top of the screen safely. With each successful crossing, the level increases, and car speed increases, making the game more challenging.

---

## 📁 File Structure and Responsibilities

### 1. **`main.py`** – Game Entry Point & Control Flow

**Purpose**:  
This is the central file that initializes the game, sets up the screen, and handles the game loop.

**Responsibilities**:

- Set up the screen size and background.
    
- Initialize the `Player`, `CarManager`, and `Scoreboard`.
    
- Detect key presses for player movement.
    
- Update the game loop:
    
    - Move cars.
        
    - Detect collisions.
        
    - Detect successful crossings.
        
    - Manage level progression.
        

**Example Components**:

- `screen.listen()`, `screen.onkey()`
    
- `while game_is_on:` game loop
    
- `time.sleep()` for pacing
    

---

### 2. **`car_manager.py`** – Car Management System

**Purpose**:  
Handles creation, movement, and removal of cars. As levels increase, car speed should also increase.

**Responsibilities**:

- Randomly generate new cars at intervals.
    
- Move all cars from right to left across the screen.
    
- Delete cars that move off screen.
    
- Adjust car speed based on current level.
    

**Key Elements**:

- Car list (e.g., `self.all_cars`)
    
- Car creation method
    
- Car movement logic
    
- Speed control with `self.car_speed`
    

---

### 3. **`player.py`** – Player (Turtle) Controller

**Purpose**:  
Defines the player's turtle character and its movement logic.

**Responsibilities**:

- Create a turtle at the starting position.
    
- Move turtle upward on key press.
    
- Reset turtle to starting position after reaching the goal.
    
- Optionally include methods to check goal crossing.
    

**Key Features**:

- Movement using `setheading()` and `forward()`
    
- Collision detection via coordinate comparison
    
- Starting position constant
    

---

### 4. **`scoreboard.py`** – Level Tracking and Display

**Purpose**:  
Displays and updates the level (score) as the player progresses.

**Responsibilities**:

- Display current level on screen.
    
- Increment level after a successful crossing.
    
- Clear and update the screen with new level.
    
- Show “Game Over” message if a collision occurs.
    

**Features**:

- Use `turtle.Turtle()` for drawing text
    
- `self.level` variable to track level
    
- `update_scoreboard()`, `increase_level()`, `game_over()` methods
    

---

## 🔁 Game Loop Flow Summary

1. **Initialize screen and objects**
    
2. **Begin game loop**:
    
    - Move cars.
        
    - Detect if new car should be added.
        
    - Check if player collides with any car.
        
    - If player reaches goal:
        
        - Increase level.
            
        - Reset player.
            
        - Increase car speed.
            
3. **Update screen and continue loop**

---

`main.py`

```Python
import time

from turtle import Screen

from player import Player

from car_manager import CarManager

from scoreboard import Scoreboard

  

screen = Screen()

screen.setup(width=600, height=600)

screen.tracer(0)

  

player = Player()

car_manager = CarManager()

scoreboard = Scoreboard()

  

screen.listen()

screen.onkey(player.move_up, "Up")

  

game_is_on = True

while game_is_on:

    time.sleep(0.1)

    screen.update()

  

    car_manager.create_car()

    car_manager.move_cars()

  

    # Detect collision with a car

    for car in car_manager.all_cars:

        if player.distance(car) < 20:

            scoreboard.game_over()

            game_is_on = False

  

    # Detect if player reached the top

    if player.is_at_finish_line():

        player.go_to_start()

        car_manager.level_up()

        scoreboard.increase_level()

  
  

screen.exitonclick()
```

`player.py`

```Python
from turtle import Turtle

  
  

STARTING_POSITION = (0, -280)

MOVE_DISTANCE = 10

FINISH_LINE_Y = 280

  
  

class Player(Turtle):

    def __init__(self):

        super().__init__()

        self.shape("turtle")

        self.color("black")

        self.penup()

        self.setheading(90)

        self.go_to_start()

  

    def move_up(self):

        self.forward(MOVE_DISTANCE)

  

    def go_to_start(self):

        self.goto(STARTING_POSITION)

  

    def is_at_finish_line(self):

        return self.ycor() > FINISH_LINE_Y
```

`car_manager.py`

```Python
from turtle import Turtle

import random

  
  

COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]

STARTING_MOVE_DISTANCE = 5

MOVE_INCREMENT = 10

  
  

class CarManager:

    def __init__(self):

        self.all_cars = []

        self.car_speed = STARTING_MOVE_DISTANCE

  

    def create_car(self):

        random_chance = random.randint(1, 6)

        if random_chance == 1:

            new_car = Turtle("square")

            new_car.color(random.choice(COLORS))

            new_car.penup()

            new_car.shapesize(stretch_wid=1, stretch_len=2)

            random_y = random.randint(-250, 250)

            new_car.goto(300, random_y)

            self.all_cars.append(new_car)

  

    def move_cars(self):

        for car in self.all_cars:

            car.backward(self.car_speed)

  

    def level_up(self):

        self.car_speed += MOVE_INCREMENT
```

`scoreboard.py`

```Python
from turtle import Turtle

  

FONT = ("Courier", 18, "normal")

ALIGNMENT = "left"

  

class Scoreboard(Turtle):

    def __init__(self):

        super().__init__()

        self.level = 1

        self.penup()

        self.hideturtle()

        self.goto(-280, 260)

        self.update_scoreboard()

  

    def update_scoreboard(self):

        self.clear()

        self.write(f"Level: {self.level}", align=ALIGNMENT, font=FONT)

  

    def increase_level(self):

        self.level += 1

        self.update_scoreboard()

  

    def game_over(self):

        self.goto(0, 0)

        self.write("GAME OVER", align="center", font=FONT)
```