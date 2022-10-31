import turtle

#screen

wind = turtle.Screen()
wind.title("Ping Pong by Abod")
wind.setup(width=800 , height=600)
wind.bgcolor("black")
wind.tracer(0)

#object1

madrab1 = turtle.Turtle()
madrab1.speed(0)
madrab1.shape("square")
madrab1.color("green")
madrab1.shapesize(stretch_wid=5, stretch_len=1)
madrab1.penup()
madrab1.goto(-350,0)

#object2

madrab2 = turtle.Turtle()
madrab2.speed(0)
madrab2.shape("square")
madrab2.color("orange")
madrab2.shapesize(stretch_wid=5, stretch_len=1)
madrab2.penup()
madrab2.goto(350,0)

#ball

ball = turtle.Turtle()
ball.speed(7)
ball.shape("square")
ball.color("white")
ball.penup()
ball.goto(0,0)
ball.dx = 0.20
ball.dy = 0.20

#score
score1 = 0
score2 = 0
score = turtle.Turtle()
score.speed(0)
score.color("white")
score.penup()
score.goto(0,260)
score.hideturtle()
score.write("Player Green : 0 - Player Orange : 0", align="center", font=("Courier", 24, "normal"))

#function1

def madrab1_up():
    y = madrab1.ycor()
    y+=20
    madrab1.sety(y)

def madrab1_down():
    y = madrab1.ycor()
    y-=20
    madrab1.sety(y)   

#function2

def madrab2_up():
    y = madrab2.ycor()
    y+=20
    madrab2.sety(y)

def madrab2_down():
    y = madrab2.ycor()
    y-=20
    madrab2.sety(y) 

#move for all

wind.listen()

#move1

wind.onkeypress(madrab1_up,"w")
wind.onkeypress(madrab1_down,"s")

#move2

wind.onkeypress(madrab2_up,"Up")
wind.onkeypress(madrab2_down,"Down")

#game loop

while True:
    wind.update()
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)

    if ball.ycor() > 290:
        ball.sety(290)
        ball.dy *= -1

    if ball.xcor() > 390:
        ball.goto(0,0)  
        ball.dx *= -1
        score1 += 1
        score.clear()
        score.write("Player Green : {} - Player Orange : {}".format(score1, score2), align="center", font=("Courier", 24, "normal"))

    
    if ball.ycor() < -290:
        ball.sety(-290)
        ball.dy *= -1

    if ball.xcor() < -390:
        ball.goto(0,0)  
        ball.dx *= -1 
        score2 += 1   
        score.clear()
        score.write("Player Green : {} - Player Orange : {}".format(score1, score2), align="center", font=("Courier", 24, "normal"))

    if (ball.xcor() > 340 and ball.xcor() < 350) and (ball.ycor() < madrab2.ycor() + 50 and ball.ycor() > madrab2.ycor() - 50):
        ball.setx(340)
        ball.dx *= -1     
    
    if (ball.xcor() < -340 and ball.xcor() > -350) and (ball.ycor() < madrab1.ycor() + 50 and ball.ycor() > madrab1.ycor() - 50):
        ball.setx(-340)
        ball.dx *= -1  
        



