---
layout: post
title: "100 DAYS OF PYTHON-DAY 21"
date: 2025-04-12
tags: [Python100]
---


![[100 DAYS OF PYTHON-DAY21.png]]

## The Snake Game part 2
main.py
```Python
from turtle import Screen

from snake import Snake

from food import Food

from scoreboard import Scoreboard

import time

  

screen = Screen()

screen.setup(width=600, height=600)

screen.bgcolor("black")

screen.title("My Snake Game")

screen.tracer(0)

  

snake = Snake()

food = Food()

scoreboard = Scoreboard()

  

screen.listen()

screen.onkey(snake.up, "Up")

screen.onkey(snake.down, "Down")

screen.onkey(snake.left, "Left")

screen.onkey(snake.right, "Right")

  

game_is_on = True

while game_is_on:

    screen.update()

    time.sleep(0.1)

    snake.move()

  

    # Detect collision with food

    if snake.head.distance(food) < 15:

        food.refresh()

        scoreboard.increase_score()

  

    # Detect collision with wall

    if snake.head.xcor() > 290 or snake.head.xcor() < -290 or snake.head.ycor() > 290 or snake.head.ycor() < -290:

        game_is_on = False

        scoreboard.game_over()

    # Detect collision with tail

    for segment in snake.segments[1:]:

        if snake.head.distance(segment) < 10:

            game_is_on = False

            scoreboard.game_over()

# End the game

  
  

screen.exitonclick()
```

scoreboard.py
```Python
from turtle import Turtle

ALIGNMENT = "center"

FONT = ("Courier", 24, "normal")

  
  

class Scoreboard(Turtle):

    def __init__(self):

        super().__init__()

        self.score = 0

        self.color("white")

        self.penup()

        self.hideturtle()

        self.goto(0, 260)

        self.update_scoreboard()

  

    def update_scoreboard(self):

        self.write(f"Score: {self.score}", align=ALIGNMENT, font=FONT)

  

    def game_over(self):

        self.goto(0, 0)

        self.write("Game Over", align=ALIGNMENT, font=FONT)

  

    def increase_score(self):

        self.score += 1

        self.clear()

        self.update_scoreboard()
```

food.py
```Python
from turtle import Turtle

import random

  

class Food(Turtle):

  

    def __init__(self):

        super().__init__()

        self.shape("circle")

        self.penup()

        self.shapesize(stretch_len=0.5, stretch_wid=0.5)

        self.color("blue")

        self.speed("fastest")

        self.refresh()

  

    def refresh(self):

        random_x = random.randint(-280, 280)

        random_y = random.randint(-280, 280)

        self.goto(random_x, random_y)
```

snake.py
```Python
from turtle import Turtle

STARTING_POSITIONS = [(0, 0), (-20, 0), (-40, 0)]

MOVE_DISTANCE = 20

UP = 90

DOWN = 270

LEFT = 180

RIGHT = 0

  
  

class Snake:

  

    def __init__(self):

        self.segments = []

        self.create_snake()

        self.head = self.segments[0]

  

    def create_snake(self):

        for position in STARTING_POSITIONS:

            new_segment = Turtle("square")

            new_segment.color("white")

            new_segment.penup()

            new_segment.goto(position)

            self.segments.append(new_segment)

  

    def move(self):

        for seg_num in range(len(self.segments) - 1, 0, -1):

            new_x = self.segments[seg_num - 1].xcor()

            new_y = self.segments[seg_num - 1].ycor()

            self.segments[seg_num].goto(new_x, new_y)

        self.head.forward(MOVE_DISTANCE)

  

    def up(self):

        if self.head.heading() != DOWN:

            self.head.setheading(UP)

  

    def down(self):

        if self.head.heading() != UP:

            self.head.setheading(DOWN)

  

    def left(self):

        if self.head.heading() != RIGHT:

            self.head.setheading(LEFT)

  

    def right(self):

        if self.head.heading() != LEFT:

            self.head.setheading(RIGHT)
```
