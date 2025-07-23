---
title: Data Science and Machine Learning 1 - Python - Functions
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

# Functions

Writing Reusable Code

---

## What Is a Function?

You've already been using functions!

- `print('Hello')` - `print` is a function that displays text
- `input('Enter name: ')` - `input` is a function that gets user input
- `int('42')` - `int` is a function that converts a string to an integer
- `len('Python')` - `len` is a function that gets the length of a string
- `range(5)` - `range` is a function that generates a sequence of numbers
- `randint(1, 10)` - `randint` is a function that generates a random integer

A function is a **named block of code** that does a specific task.

---
layout: two-cols-header-2
---

## Why Use Functions?

::left::

Instead of copying code:

```python {monaco-run} {autorun: false}
# Calculate tip for lunch
lunch_bill = 25.00
lunch_tip = lunch_bill * 0.20
print(f"Lunch tip: ${lunch_tip}")

# Calculate tip for dinner (same code!)
dinner_bill = 45.00
dinner_tip = dinner_bill * 0.20
print(f"Dinner tip: ${dinner_tip}")
```

::right::

We can write it once and reuse it!

```python {monaco-run} {autorun: false}
def calculate_tip(bill, tip_percent=0.20):
    tip = bill * tip_percent
    return tip

# Calculate tip for lunch
lunch_bill = 25.00
lunch_tip = calculate_tip(lunch_bill)
print(f"Lunch tip: ${lunch_tip}")

# Calculate tip for dinner
dinner_bill = 45.00
dinner_tip = calculate_tip(dinner_bill)
print(f"Dinner tip: ${dinner_tip}")
```

---

## Your First Function

```python {monaco-run} {autorun: false}
def say_hello():
    print("Hello!")
    print("Welcome to Python!")

# Call the function
say_hello()
```

**Key parts:**
- `def` keyword starts a function
- Function name followed by `()`
- Colon `:` 
- Indented code is the function body

---

## Calling Functions

Writing a function doesn't run it. You must **call** it:

```python {monaco-run} {autorun: false}
def greet():
    print("Good morning!")

# Function exists but hasn't run yet

greet()  # NOW it runs!
greet()  # We can call it multiple times
greet()  # Each call runs the code inside
```

---

## Functions Can Take Input

Functions can accept **arguments** (input values):

```python {monaco-run} {autorun: false}
def greet_person(name):
    print(f"Hello, {name}!")
    print(f"Nice to meet you, {name}")

# Call with different names
greet_person("Alice")
greet_person("Bob")
```

The `name` is a **parameter** - it holds whatever value we pass in

---

## Multiple Parameters

Functions can take multiple inputs:

```python {monaco-run} {autorun: false}
def calculate_tip(bill, tip_percent):
    tip = bill * (tip_percent / 100)
    total = bill + tip
    print(f"Bill: ${bill}")
    print(f"Tip: ${tip}")
    print(f"Total: ${total}")

# Use it for different meals
calculate_tip(25.00, 20)
calculate_tip(45.50, 15)
```

---

## The `return` Statement

Functions can send values back:

```python {monaco-run} {autorun: false}
def calculate_tip_amount(bill, tip_percent):
    tip = bill * (tip_percent / 100)
    return tip

# Get the result and use it
lunch_tip = calculate_tip_amount(25.00, 20)
print(f"The tip is ${lunch_tip}")

# We can use the result in calculations
total = 25.00 + lunch_tip
```

---

## `return` vs `print`

These are different!

```python {monaco-run} {autorun: false}
def add_with_print(a, b):
    print(a + b)  # Shows on screen

def add_with_return(a, b):
    return a + b  # Sends value back

# Can't use print result
result1 = add_with_print(3, 4)  # Prints 7
print(result1)  # Prints None!

# Can use return result
result2 = add_with_return(3, 4)  # Returns 7
print(result2)  # Prints 7
```

---

## Functions Can Return Early

```python {monaco-run} {autorun: false}
def check_age(age):
    if age < 0:
        return "Invalid age!"
    if age < 18:
        return "Too young"
    return "Old enough"

print(check_age(-5))   # Invalid age!
print(check_age(16))   # Too young
print(check_age(21))   # Old enough
```

Once `return` runs, the function stops!

---

## Default Parameters

Give parameters default values:

```python {monaco-run} {autorun: false}
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

# Use default
greet("Alice")           # Hello, Alice!

# Override default
greet("Bob", "Hi")       # Hi, Bob!
greet("Charlie", "Hey")  # Hey, Charlie!
```

---

## Variable Scope

Variables inside functions are **local**:

```python {monaco-run} {autorun: false}
def calculate():
    x = 10  # Local variable
    print(f"Inside function: x = {x}")

x = 5  # Different variable!
calculate()
print(f"Outside function: x = {x}")
```

---

## Building Bigger Programs

Functions let us break problems into pieces:

```python {monaco-run} {autorun: false}
def get_bill_amount():
    return float(input("Enter bill amount: $"))

def get_tip_percent():
    return float(input("Enter tip percent: "))

def calculate_tip(bill, percent):
    return bill * (percent / 100)

def display_result(bill, tip):
    total = bill + tip
    print(f"\nBill: ${bill}")
    print(f"Tip: ${tip}")
    print(f"Total: ${total}")

# Main program
bill = get_bill_amount()
percent = get_tip_percent()
tip = calculate_tip(bill, percent)
display_result(bill, tip)
```

---

## Common Function Patterns

```python {monaco-run} {autorun: false}
# Validation function
def is_valid_grade(score):
    return score >= 0 and score <= 100

# Conversion function
def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Menu function
def show_menu():
    print("1. Add")
    print("2. Subtract")
    print("3. Quit")
    return input("Choose: ")
```

---

## Functions Make Code Readable

Without functions:
```python {monaco-run} {autorun: false}
print((float(input("Temperature: ")) * 9/5) + 32)
```

With functions:
```python {monaco-run} {autorun: false}
def get_temperature():
    return float(input("Temperature in C: "))

def convert_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

temp_c = get_temperature()
temp_f = convert_to_fahrenheit(temp_c)
print(f"{temp_c}°C = {temp_f}°F")
```

---

## Function Best Practices

1. Give functions clear names that say what they do
   - Good: `calculate_average()`, `is_valid_password()`
   - Bad: `func1()`, `do_stuff()`

2. Keep functions focused on one task

3. Use parameters instead of relying on external variables

4. Return values when you need to use the result

5. Add comments to explain complex logic


---
layout: header-link
---

# Exercise:<br>Choose Your Own Adventure

[https://bigd103.link/text-adventure-game](https://bigd103.link/text-adventure-game)