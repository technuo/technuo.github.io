---
layout: post
title: "100 DAYS OF PYTHON-DAY 22"
date: 2025-04-13
tags: [Python100]
---


![[100 DAYS OF PYTHON-DAY22.png]]

## Pong Game Breakdown report

## 1. **Setup: Create the Game Screen**

- **Purpose**: Initialize the game window.
    
- **Steps**:
    
    - Use `turtle.Screen()` to create a window.
        
    - Set dimensions using `.setup(width, height)`.
        
    - Set title with `.title()`.
        
    - Change background color with `.bgcolor()`.
        
    - Disable animation updates temporarily using `.tracer(0)` for manual screen refreshing (helps smooth movement).
        

---

## 2. **Create the Left and Right Paddles**

- **Purpose**: Control objects to hit the ball.
    
- **Steps**:
    
    - Use `turtle.Turtle()` for each paddle.
        
    - Shape as a rectangle using `.shapesize(stretch_wid, stretch_len)` (e.g., `stretch_wid=5`, `stretch_len=1`).
        
    - Set color, speed (to `0` to stop animation delay), and starting positions (`x = -350` for left, `x = 350` for right).
        

---

## 3. **Move the Paddles**

- **Purpose**: Allow user to control paddles.
    
- **Steps**:
    
    - Define functions to move each paddle up and down (change y-coordinate).
        
    - Use `.listen()` and `.onkeypress()` to bind keys:
        
        - For example: `'w'`/`'s'` for left paddle, `'Up'`/`'Down'` for right paddle.
            

---

## 4. **Create the Ball**

- **Purpose**: The game object that moves and bounces.
    
- **Steps**:
    
    - Create another `turtle.Turtle()` object.
        
    - Use a round shape.
        
    - Set initial `dx` and `dy` values for ball movement direction and speed.
        

---

## 5. **Make the Ball Move**

- **Purpose**: Continuously move the ball in the game loop.
    
- **Steps**:
    
    - Inside the main game loop:
        
        - Update ball’s `x` and `y` using `ball.setx(ball.xcor() + dx)` and similar for `y`.
            

---

## 6. **Detect Collision with Wall and Bounce**

- **Purpose**: Reflect the ball when it hits the top or bottom.
    
- **Steps**:
    
    - Check if `ball.ycor()` exceeds top or bottom bounds (e.g., `y > 290 or y < -290`).
        
    - Reverse `dy` to make it bounce: `ball.dy *= -1`.
        

---

## 7. **Detect Collision with Paddle**

- **Purpose**: Ball should bounce when it hits a paddle.
    
- **Steps**:
    
    - Check if ball is near the paddle (`x` range and `y` overlap).
        
    - If collision occurs, reverse `dx`: `ball.dx *= -1`.
        

---

## 8. **Detect When Paddle Misses**

- **Purpose**: Reset ball and update score when it passes a paddle.
    
- **Steps**:
    
    - If `ball.xcor()` exceeds horizontal bounds (e.g., `x > 390` or `x < -390`), reset to center and reverse direction.
        
    - Track score change accordingly.
        

---

## 9. **Keep and Display Score**

- **Purpose**: Display and update each player's score.
    
- **Steps**:
    
    - Use a new `turtle.Turtle()` object for score display (hide it, `penup()` to avoid drawing).
        
    - Use `.write()` to display score.
        
    - Clear and re-write every time score changes.

---
Full Code
main.py
```Python
from turtle import Screen, Turtle

from paddle import Paddle

from ball import Ball

from scoreboard import Scoreboard

import time

  
  

# screen setup

screen = Screen()

screen.title("Pong Game")

screen.bgcolor("black")

screen.setup(width=800, height=600)

screen.tracer(0) # turns off the screen updates

  

r_paddle = Paddle((350, 0)) # right paddle

l_paddle = Paddle((-350, 0)) # left paddle

  

# paddle A setup

#paddle_a = Turtle()

#paddle_a.shape("square")

#paddle_a.color("white")

# paddle_a.shapesize(stretch_wid=5, stretch_len=1) # paddle width 20, height 100

# paddle_a.penup()

# paddle_a.goto(-350, 0)

  

# paddle B setup

# paddle_b = Turtle()

# paddle_b.shape("square")

# paddle_b.color("white")

# paddle_b.shapesize(stretch_wid=5, stretch_len=1) # paddle width 20, height 100

# paddle_b.penup()

# paddle_b.goto(350, 0)

  

ball = Ball()

scoreboard = Scoreboard()

  

# keyboard bindings

screen.listen()

screen.onkey(l_paddle.go_up, "w")

screen.onkey(l_paddle.go_down, "s")

screen.onkey(r_paddle.go_up, "Up")

screen.onkey(r_paddle.go_down, "Down")

  
  

game_is_on = True

while game_is_on:

    time.sleep(ball.move_speed) # delay for ball movement speed

    screen.update() # update the screen

    # Add game logic here (e.g., ball movement, collision detection)

    ball.move()

    # detect collision with wall

    if ball.ycor() > 280 or ball.ycor() < -280:

        ball.bounce_y()

  

    # detect collision with paddle

    if ball.distance(r_paddle) < 50 and ball.xcor() > 320 or ball.distance(l_paddle) < 50 and ball.xcor() < -320:

        ball.bounce_x()

  

    # detect ball out of bounds

    if ball.xcor() > 380:

        ball.reset_position()

        scoreboard.l_point()

  

    if ball.xcor() < -380:

        ball.reset_position()

        scoreboard.r_point()


screen.exitonclick()
```
paddle.py
```Python
from turtle import Turtle

  

class Paddle(Turtle):

    def __init__(self, position):

        super().__init__()

        self.shape("square")

        self.color("white")

        self.shapesize(stretch_wid=5, stretch_len=1)

        self.penup()

        self.goto(position)

  

    def go_up(self):

        new_y = self.ycor() + 20

        self.goto(self.xcor(), new_y)

    def go_down(self):

        new_y = self.ycor() - 20

        self.goto(self.xcor(), new_y)
```
ball.py
```Python
from turtle import Turtle

  

# ball setup

class Ball(Turtle):

    def __init__(self):

        super().__init__()

        self.shape("circle")

        self.color("white")

        self.penup()

        self.x_move = 10

        self.y_move = 10

        self.speed("fastest")

        self.move_speed = 0.1

  

    def move(self):

        new_x = self.xcor() + self.x_move

        new_y = self.ycor() + self.y_move

        self.goto(new_x, new_y)

  

    def bounce_y(self):

        self.y_move *= -1

  

    def bounce_x(self):

        self.x_move *= -1

        self.move_speed *= 0.9

    def reset_position(self):

        self.goto(0, 0)

        self.move_speed = 0.1

        self.bounce_x()
```
scoreboard.py
```Python
from turtle import Turtle

  

class Scoreboard(Turtle):

  

    def __init__(self):

        super().__init__()

        self.color("white")

        self.penup()

        self.hideturtle()

        self.l_score = 0

        self.r_score = 0

        self.update_score()

    def update_score(self):

        self.clear()

        self.goto(-100, 200)

        self.write(self.l_score, align="center", font=("Courier", 80, "normal"))

        self.goto(100, 200)

        self.write(self.r_score, align="center", font=("Courier", 80, "normal"))

  
  
  

    def l_point(self):

        self.l_score += 1

        self.update_score()

    def r_point(self):

        self.r_score += 1

        self.update_score()
```
