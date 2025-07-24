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
addons:
  - slidev-addon-python-runner

layout: cover
---

# While Loops

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

```python
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
