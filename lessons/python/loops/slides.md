---
title: Data Science and Machine Learning 1 - Python - Loops
theme: ../../../shared/theme
fonts:
    sans: 'IBM Plex Serif'
    mono: 'IBM Plex Mono'
monaco: true
info: |
  Class Number: BIGD103
  Instructor: Mr. Peticolas
transition: slide-left
vite:
  configFile: '../../../shared/vite.config.ts'
addons:
  - slidev-addon-python-runner

layout: cover
---

# Loops

Making Code Repeat

---

## Why Do We Need Loops?

Imagine calculating tips for 100 restaurant bills (for simplicity, let's say each bill is $25 with a 20% tip):

```python {monaco-run} {autorun: false}
total = 0
total = total + (25 * 1.20)  # Bill 1
print(f"Total after Bill 1: {total}")

total = total + (25 * 1.20)  # Bill 2
print(f"Total after Bill 2: {total}")

total = total + (25 * 1.20)  # Bill 3
print(f"Total after Bill 3: {total}")

# ... 97 more times?!
```

Loops let us repeat code efficiently!

---

## The `while` Loop

Repeats code while a condition is True:

```python {monaco-run} {autorun: false}
count = 1
while count <= 5:
    print(f"Count is {count}")
    count = count + 1

print("Done!")
```

Note how in this example:
- The loop runs as long as `count <= 5` evaluates to `True`
- We update `count` inside the loop to eventually stop it

---

## `while` Loop Structure

```python {monaco-run} {autorun: false}
while condition:
    # Code to repeat
    # Must eventually make condition False!
```

The loop keeps running as long as the condition is `True`

```python {monaco-run} {autorun: false}
temperature = 100
while temperature > 75:
    print(f"Temperature is {temperature}°F - still too hot!")
    temperature = temperature - 5

print(f"Finally cooled down to {temperature}°F")
```

---
layout: two-cols-header-2
---

## `while` Loop vs `if`

::left::

Repeats code **while** a condition is True:

```python {monaco-run} {autorun: false}
count = 1
while count <= 5:
    print(f"Count is {count}")
    count = count + 1

print(f"Count is now {count}")
print("Done!")
```

::right::

Executes once **if** the condition is True:

```python {monaco-run} {autorun: false}
count = 1
if count <= 5:
    print(f"Count is {count}")
    count = count + 1

print(f"Count is now {count}")
print("Done!")
```

---
layout: three-cols-header
---

## Counting with `while`

We can use `while` to count up or down:

::left::

1 to 5 (exit when 6)

```python {monaco-run} {autorun: false}
print("Counting up starting from 1:")
number = 1
while number <= 5:
    print(f"Number is {number}")
    number = number + 1
print(f"Number is now {number}")
```

::middle::

0 to 4 (exit when 5)

```python {monaco-run} {autorun: false}
print("Counting up starting from 0:")
number = 0
while number < 5:
    print(f"Number is {number}")
    number = number + 1
print(f"Number is now {number}")
```

**This is the most common.**

We call this a "zero-based" count.

::right::

5 to 1 (exit when 0)

```python {monaco-run} {autorun: false}
print("Counting down from 5:")
countdown = 5
while countdown > 0:
    print(f"{countdown}...")
    countdown = countdown - 1
print("Blast off! 🚀")
```

---
layout: two-cols-header-2
---

## Summing Bills with `while`

::left::

```python {monaco-run} {autorun: false}
total = 0
total = total + (25 * 1.20)  # Bill 1
print(f"Total after Bill 1: {total}")

total = total + (25 * 1.20)  # Bill 2
print(f"Total after Bill 2: {total}")

total = total + (25 * 1.20)  # Bill 3
print(f"Total after Bill 3: {total}")

print("Done!")
```

::right::

```python {monaco-run} {autorun: false}
bill_count = 1
total = 0
while bill_count <= 3:
    bill = 25 * 1.20  # 20% tip
    total = total + bill
    print(f"Total after Bill {bill_count}: {total:.2f}")
    bill_count = bill_count + 1

print("Done!")
```

---

## Accumulating with `while`

Keep a running total:

```python {monaco-run} {autorun: false}
total = 0
count = 1

while count <= 5:
    bill = 20  # Each bill is $20
    tip = bill * 0.20
    total = total + bill + tip
    print(f"Bill {count}: Total so far = ${total:.2f}")
    count = count + 1

print(f"Final total: ${total:.2f}")
```

---

## Infinite Loops - Be Careful!

If the condition never becomes False:

```python
# DON'T RUN THIS!
x = 1
while x > 0:
    print("Help, I'm stuck!")
    # x never changes, so this runs forever!
```

**Always make sure something in your loop will eventually make the condition False!**

---

## Breaking Out Early with `break`

Sometimes we want to exit a loop before the condition is False:

```python {monaco-run} {autorun: false}
number = 1
while number <= 100:
    if number % 7 == 0:
        print(f"Found a number divisible by 7: {number}")
        break  # Exit the loop immediately
    print(f"Rechecking with {number}...") # This doesn't run after break
    number = number + 1

print("Done searching!")
```

---

## Input Validation with `while` and `if`/`elif`/`else` and `break`

Sometimes you want a user to give you a specific input, like "yes" or "no".

We can use a `while` loop to keep asking until they meet some criteria, which we will enforce with `if` statements:

```python
while True:
    answer = input("Do you like Python? (yes/no): ")
    if answer == "yes":
        print("Great choice!")
        break
    elif answer == "no":
        print("Give it a chance!")
        break
    print("Please type 'yes' or 'no'")
```

This loops forever until we `break` out!

---

## Input Validation with `while`

We can expand upon this to support other kinds of input validation, like checking if a number is within a range:

```python
age = -1  # Start with invalid value

while True:
    age = int(input("Enter your age (0-150): "))
    if age > 0 and age < 150:
        break
    print("That's not a valid age! Try again.")

print(f"Thanks! You are {age} years old.")
```

---

## Password Example with Attempts

Limit the number of tries:

```python
password = "secret123"
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    guess = input("Enter password: ")
    attempts = attempts + 1
    
    if guess == password:
        print("Access granted!")
        break
    else:
        remaining = max_attempts - attempts
        if remaining > 0:
            print(f"Wrong! {remaining} attempts left.")
        else:
            print("Sorry, no more attempts. Access denied.")
            break
```

---
layout: header-link
---

# Exercise
[bigd103.link/while-loop-calculator](https://bigd103.link/while-loop-calculator)

---
layout: image
image: image.png
backgroundSize: contain
---

---
layout: two-cols-header-2
---

## The `for` Loop - A Better Way to Count

::left::

Remember counting with `while`?

```python {monaco-run} {autorun: false}
# With while loop
count = 0
while count < 5:
    print(f"Count is {count}")
    count = count + 1
```

::right::

The `for` loop makes this much easier:

```python {monaco-run} {autorun: false}
# With for loop
for count in range(5):
    print(f"Count is {count}")
```

Same result, less code!

---

## Understanding `range()`

`range()` creates a sequence of numbers:

```python {monaco-run} {autorun: false}
for num in range(5):
    print(num)

for num in range(1, 6):
    print(num)
```

**Note:** `range(n)` goes from 0 to n-1!

---

## `range()` with Start and Stop

```python {monaco-run} {autorun: false}
for num in range(5):
for i in range(3, 8):
    print(i)  # Prints: 3, 4, 5, 6, 7

for bill in range(10, 51, 10):
    total = bill * 1.20  # 20% tip
    print(f"Bill: ${bill}, Total: ${total:.2f}")
```

---

## Loop Variable Names

The loop variable can be any name:

```python {monaco-run} {autorun: false}
# Common: i, j, k for simple counters
for i in range(3):
    print(f"Loop {i}")

# Descriptive names are better!
for student_number in range(1, 31):
    print(f"Welcome, Student {student_number}")

for day in range(1, 8):
    print(f"Day {day} of the week")
```

---

## For Loops with Calculations

```python {monaco-run} {autorun: false}
# Calculate squares
for num in range(1, 6):
    square = num ** 2
    print(f"{num} squared is {square}")

# Running total (accumulator pattern)
total = 0
for price in [10, 25, 15, 30]:
    total = total + price
    print(f"Added ${price}, total is now ${total}")
```

---

## Loops with Conditionals

Combining loops with if statements:

```python {monaco-run} {autorun: false}
# Print only even numbers
for num in range(10):
    if num % 2 == 0:
        print(f"{num} is even")
    else:
        print(f"{num} is odd")

# Grade multiple students
for student in range(1, 6):
    score = 70 + student * 5  # Simulated scores
    if score >= 90:
        print(f"Student {student}: A")
    elif score >= 80:
        print(f"Student {student}: B")
    else:
        print(f"Student {student}: C")
```

---
layout: two-cols-header-2
---

## Breaking Out of Loops

::left::

Use `break` to exit early:

```python {monaco-run} {autorun: false}
# Find first number divisible by 7
for num in range(1, 100):
    if num % 7 == 0:
        print(f"Found it: {num}")
        break

# Password checker with limited attempts
for attempt in range(3):
    password = input("Enter password: ")
    if password == "secret":
        print("Access granted!")
        break
    else:
        print(f"Wrong! {2 - attempt} tries left")
```

::right::

This is a solution for forever-`while` loops!

```python {monaco-run} {autorun: false}
print("Do you like chocolate?")

while True:
    answer = input("Type 'yes' or 'no': ")
    if answer.lower() == "yes":
        print("Great! Chocolate is awesome!")
        break
    elif answer.lower() == "no":
        print("Are you sure?")
    else:
        print("Please type 'yes' or 'no'.")
```

---
layout: two-cols-header-2
---

## Common Loop Patterns

::left::

### Counting

```python {monaco-run} {autorun: false}
count = 0
for i in range(100):
    if i % 2 == 0:
        count = count + 1
print(f"Found {count} even numbers")
```

### Accumulating

```python {monaco-run} {autorun: false}
total = 0
for num in range(1, 11):
    total = total + num
print(f"Sum of 1-10: {total}")
```

::right::

### Finding maximum

```python {monaco-run} {autorun: false}
numbers = [45, 67, 23, 89, 12]
biggest = numbers[0]
for num in numbers:
    if num > biggest:
        biggest = num
print(f"Biggest: {biggest}")
```

### Parsing Input

```python {monaco-run} {autorun: false}
answer = False
while True:
    response = input("What's your answer? (yes/no): ")
    if response == "yes":
        answer = True
        break
    elif response == "no":
        answer = False
        break
    else:
        print("Please type 'yes' or 'no'.")
```

---

## Nested Loops

Just like conditions, we can nest loops inside loops:

```python {monaco-run} {autorun: false}
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        result = i * j
        print(f"{i} × {j} = {result}")
    print()  # Empty line between sections
```

---

## When to Use `while` vs `for`

**Use `while` when:**
- You don't know how many times to loop
- You're waiting for something to happen
- You need user input validation

**Use `for` when:**
- You know exactly how many times to loop
- You're processing a sequence of items
- You're counting up or down

---


---
layout: header-link
---

## Exercise:<br>The Guessing Game

[https://bigd103.link/guessing-game](https://bigd103.link/guessing-game)
