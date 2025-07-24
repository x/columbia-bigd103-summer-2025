---
title: Data Science and Machine Learning 1 - Python - For Loops
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

layout: header-link
---

# Do Now

[bigd103.link/while-loop-penny](https://bigd103.link/while-loop-penny)

---
layout: cover
---

# For Loops

Making Code Repeat with Boundaries

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
for price in range(10, 31, 10):
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

Use `break` to exit early:

::right::

```python {monaco-run} {autorun: false}
# Find first number divisible by 7
for num in range(1, 100):
    if num % 7 == 0:
        print(f"Found it: {num}")
        break
```

::left::

```python
# Password checker with limited attempts
for attempt in range(3):
    password = input("Enter password: ")
    if password == "secret":
        print("Access granted!")
        break
    else:
        print(f"Wrong! {2 - attempt} tries left")
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

::right::

### Accumulating

```python {monaco-run} {autorun: false}
total = 0
for num in range(1, 11):
    total = total + num
print(f"Sum of 1-10: {total}")
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
    print("")  # Empty line between sections
```

---
layout: two-cols-header-2
---

## When to Use `while` vs `for`

::left::

**Use `while` when:**
- You don't know how many times to loop
- You're waiting for something to happen
- You need user input validation

::right::

**Use `for` when:**
- You know exactly how many times to loop
- You're processing a sequence of items
- You're counting up or down

---
layout: header-link
---

## Exercise:<br>The Guessing Game

[https://bigd103.link/guessing-game](https://bigd103.link/guessing-game)
