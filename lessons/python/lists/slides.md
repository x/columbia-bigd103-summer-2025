---
title: Data Science and Machine Learning 1 - Python - Lists
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

# Lists

Storing Multiple Values Together

---

## Why Do We Need Lists?

Imagine tracking scores for 5 students:

```python {monaco-run} {autorun: false}
# Without lists - this gets messy fast!
student1_score = 85
student2_score = 92
student3_score = 78
student4_score = 88
student5_score = 95

# What if we had 100 students?
```

**Lists** let us store multiple values in one variable!

---

## Your First List

A list is an ordered collection of values:

```python {monaco-run} {autorun: false}
# Creating a list
scores = [85, 92, 78, 88, 95]
print(scores)

# Lists can hold any type
names = ["Alice", "Bob", "Charlie"]
print(names)

# Even mixed types!
mixed = [42, "hello", 3.14, True]
print(mixed)
```

**Key points:**
- Square brackets `[]` create a list
- Items separated by commas
- Can hold any data type

---

## Accessing List Items

Lists are **indexed** starting at 0:

```python {monaco-run} {autorun: false}
fruits = ["apple", "banana", "cherry", "date"]

# First item is at index 0
print(fruits[0])  # apple

# Second item is at index 1
print(fruits[1])  # banana

# Last item
print(fruits[3])  # date

# What happens here?
# print(fruits[4])  # Error! Index out of range
```

---

## Negative Indexing

Python lets you count from the end:

```python {monaco-run} {autorun: false}
colors = ["red", "green", "blue", "yellow"]

# Last item
print(colors[-1])   # yellow

# Second to last
print(colors[-2])   # blue

# First item (wraps around)
print(colors[-4])   # red
```

Most of the time, you'll just use `-1` to get the last item without knowing the list length.

---

## Getting the Length

Use the function `len()` to find how many items:

```python {monaco-run} {autorun: false}
numbers = [10, 20, 30, 40, 50]

length = len(numbers)
print(f"The list has {length} items")

# Common pattern: check if empty
if len(numbers) == 0:
    print("List is empty")
else:
    print("List has items")

# Shorter way
if numbers:  # Empty lists are "falsy"
    print("List has items")
```

---

## Modifying Lists

Lists are **mutable** - you can change them:

```python {monaco-run} {autorun: false}
grades = [85, 92, 78]
print(f"Original: {grades}")

# Change an item
grades[0] = 90
print(f"After change: {grades}")

# Add to the end
grades.append(88)
print(f"After append: {grades}")

# Remove a specific value
grades.remove(78)
print(f"After remove: {grades}")
```

---

## More List Methods

```python {monaco-run} {autorun: false}
tasks = ["homework", "dishes", "laundry"]

# Remove and return the last item
completed = tasks.pop()
print(f"Completed: {completed}")
print(f"Remaining: {tasks}")

# Insert at specific position
tasks.insert(0, "urgent task")
print(f"After insert: {tasks}")

# Clear everything
tasks.clear()
print(f"After clear: {tasks}")
```

---

## Slicing Lists

Get a portion of a list with slicing:

```python {monaco-run} {autorun: false}
letters = ['a', 'b', 'c', 'd', 'e', 'f']

# Get items 1-3 (not including 4)
print(letters[1:4])  # ['b', 'c', 'd']

# From beginning to index 3
print(letters[:3])   # ['a', 'b', 'c']

# From index 3 to end
print(letters[3:])   # ['d', 'e', 'f']

# Copy entire list
copy = letters[:]
print(copy)
```

---
layout: two-cols-header-2
---

## Iterating Over Lists

::left::

**Method 1: Direct iteration**

```python {monaco-run} {autorun: false}
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(f"I like {fruit}")
```

Best when you just need the values!

::right::

**Method 2: Index iteration**

```python {monaco-run} {autorun: false}
fruits = ["apple", "banana", "cherry"]

for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")
```

Use when you need the position too!

---

## Lists with Loops and Conditions

```python {monaco-run} {autorun: false}
numbers = [15, 8, 23, 42, 16, 4]

# Find all even numbers
evens = []
for num in numbers:
    if num % 2 == 0:
        evens.append(num)
print(f"Even numbers: {evens}")

# Count how many are over 20
count = 0
for num in numbers:
    if num > 20:
        count = count + 1
print(f"{count} numbers are over 20")
```

---

## Building Lists

Start with an empty list and grow it:

```python {monaco-run} {autorun: false}
# Collect user input
shopping_list = []

for i in range(3):
    item = input(f"Enter item {i+1}: ")
    shopping_list.append(item)

print(f"\nYour shopping list: {shopping_list}")

# Generate a list
squares = []
for num in range(1, 6):
    squares.append(num ** 2)
print(f"Squares: {squares}")
```

---

## Common List Patterns

```python {monaco-run} {autorun: false}
scores = [85, 92, 78, 88, 95, 73]

# Find the sum
total = 0
for score in scores:
    total = total + score
print(f"Total: {total}")

# Find the maximum
highest = scores[0]  # Start with first
for score in scores:
    if score > highest:
        highest = score
print(f"Highest: {highest}")

# Calculate average
average = total / len(scores)
print(f"Average: {average:.1f}")
```

---

## Lists of Lists (2D Arrays)

Lists can contain other lists:

```python {monaco-run} {autorun: false}
# Tic-tac-toe board
board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
]

# Access specific cell
print(board[0][0])  # Top-left: 'X'
print(board[1][1])  # Center: 'X'

# Print the board
for row in board:
    print(row)
```

---

## Working with 2D Lists

```python {monaco-run} {autorun: false}
# Grade table: [student][test]
grades = [
    [85, 92, 88],  # Student 0
    [78, 85, 90],  # Student 1
    [92, 95, 93]   # Student 2
]

# Average for student 0
total = 0
for grade in grades[0]:
    total = total + grade
avg = total / len(grades[0])
print(f"Student 0 average: {avg:.1f}")

# All grades
for i in range(len(grades)):
    for j in range(len(grades[i])):
        print(f"Student {i}, Test {j}: {grades[i][j]}")
```

---

## Lists vs Strings

For the most part, we can treat strings like lists of single character strings:

```python {monaco-run} {autorun: false}
# Both can be indexed and sliced
word = "hello"
letters = ['h', 'e', 'l', 'l', 'o']

print(word[0])      # 'h'
print(letters[0])   # 'h'

# But strings are immutable!
# word[0] = 'H'     # ERROR!
letters[0] = 'H'    # This works!
print(letters)

# Convert between them
word_to_list = list("python")
print(word_to_list)
```

---

## Checking if Items Exist

Use `in` to check membership:

```python {monaco-run} {autorun: false}
inventory = ["sword", "shield", "potion"]

# Check if item exists
if "potion" in inventory:
    print("You have a potion!")

# Check if NOT in list
if "armor" not in inventory:
    print("You need armor!")

# In a loop
item_to_find = "shield"
found = False
for item in inventory:
    if item == item_to_find:
        found = True
        break
print(f"Found {item_to_find}: {found}")
```

---

## Sorting Lists

```python {monaco-run} {autorun: false}
# Sort a list of numbers
numbers = [42, 15, 8, 23, 4]
numbers_numbers = sorted(numbers)
print(f"Sorted numbers: {numbers_numbers}")
# Sort a list of strings
names = ["Charlie", "Alice", "Bob"]
sorted_names = sorted(names)
print(f"Sorted names: {sorted_names}")
```

`sorted()` returns a new sorted list, leaving the original unchanged.

```python {monaco-run} {autorun: false}
# Sort in reverse order
numbers = [42, 15, 8, 23, 4]
reverse_sorted_numbers = sorted(numbers, reverse=True)
print(f"Reverse sorted numbers: {reverse_sorted_numbers}")
```

`sorted` can also sort in reverse order with the `reverse=True` argument.

---

## List Functions Summary

| Method | What it does | Example |
|--------|--------------|---------|
| `append(item)` | Add to end | `lst.append(5)` |
| `remove(item)` | Remove first occurrence | `lst.remove(5)` |
| `pop()` | Remove & return last | `last = lst.pop()` |
| `insert(i, item)` | Insert at position | `lst.insert(0, 5)` |
| `clear()` | Remove all items | `lst.clear()` |
| `index(item)` | Find position | `pos = lst.index(5)` |
| `count(item)` | Count occurrences | `n = lst.count(5)` |

---

## Key Takeaways

1. **Lists store multiple values** in order
2. **Index from 0** (or use negative for end)
3. **Lists are mutable** - you can change them
4. **Use loops** to process all items
5. **Many methods** to add, remove, and modify
6. **Can nest lists** for 2D structures

Lists are one of Python's most useful features!

---
layout: header-link
---

# Exercise: Shopping List Manager

[bigd103.link/shopping-list](https://bigd103.link/shopping-list)