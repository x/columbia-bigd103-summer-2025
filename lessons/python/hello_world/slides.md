---
title: Data Science and Machine Learning 1 - Python - Hello World
theme: ../../../shared/theme
fonts:
    sans: 'IBM Plex Serif'
    mono: 'IBM Plex Mono'
monaco: true
info: |
  Class Number: BIGD103
  Instructor: Mr. Peticolas
transition: slide-left
export:
  perSlide: true
addons:
  - slidev-addon-python-runner

layout: cover
---

# Hello World

A Quick Introduction to Computers, Programming, and Python

---
layout: image-right
image: image.png
---

## What Really is a Computer?

- **Electronic machine** that follows instructions
- Takes **input** → processes it → gives **output**
- Only understands **1s and 0s** (binary)
- Everything else is translation

---
layout: image-right
image: image-1.png
backgroundSize: contain
---

## Modern Computers are Layers of Abstraction

- **Hardware**: Physical components (CPU, RAM, etc.)
- **Operating System**: Manages hardware (Windows, macOS, Linux)
- **Programming Languages**: Human-readable instructions (Python, Java, etc.)
- **Applications**: Software that performs tasks (web browsers, games, etc.)

---
layout: image-right
image: image-2.png
backgroundSize: contain
---

## What is a File?

- **Collection of data** stored on your computer in a **tree-like** structure
- Has a **path**, **name**, and **extension**
- File extensions indicate type:
  - `.txt` = text
  - `.py` = Python code
  - `.jpg` = image
- Files can be `created`, `read`, `written`, and `deleted`
- Some files can be `executed`, these are programs.

---
layout: image-right
image: image-3.png
backgroundSize: contain
---

## Source Code vs Machine Code

### Source Code
- **Human-readable** instructions we write
- Looks like:
  ```python {monaco-run} {autorun: false}
  print("Hello World")
  ```

### Machine Code
- **Computer-readable** instructions
- Looks like:
  ```
  48 89 e5     mov    %rsp,%rbp
  48 83 ec 10  sub    $0x10,%rsp
  bf 01 00 00  mov    $0x1,%edi
  ```
- **Source code** is translated to **machine code** by a **compiler**.

---
layout: image-right
image: image-4.png
backgroundSize: contain
---

## CPython Interpreter

- What actually runs Python code
- **Two-step process:**
    1. Python source → **bytecode**
    2. Bytecode → **machine code**
- Looks like:
  ```
  0 LOAD_GLOBAL              0 (print)
  2 LOAD_CONST               1 ('Hello, World!')
  4 CALL_FUNCTION            1
  6 RETURN_VALUE
  ```
- Why two steps? **Portability** - same Python code runs everywhere.

---
layout: image-right
image: image-5.png
backgroundSize: contain
---

## How Python Gets Executed

1. **You write** Python code in a `.py` file
2. **CPython interpreter** reads your code
3. **Converts** it to bytecode (behind the scenes)
4. **Computer executes** the bytecode
5. **You see** the result

*Python handles the translation for you!*

---
layout: two-cols-header-2
---

## Basic Input/Output

::left::

### Input
- **Getting information** from the user
- Keyboard, mouse, files, internet

### Output  
- **Showing information** to the user
- Screen, speakers, files, internet

### In Python Code
- `input()` - get text from user
- `print()` - show text to user

::right::

### Output
```python
print("Hello, World!")
```

### Input and Output
```python
name = input("Enter your name: ")
print(f"Hello, {name}!")
```


---
layout: image-right
image: a-byte-of-python.png
backgroundSize: contain
---

## A Byte of Python

- Written by **Swaroop Chitlur**
- All my slides for teaching Python are adapted from this book!
- Licensed under a **Creative Commons License**
- [<small>Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported License</small>](https://creativecommons.org/licenses/by-sa/4.0/)
- https://python.swaroopch.com/

---

## Comments

- Use `#` for comments
- They can be above:
  ```python
  # Note that print is a function 
  print('hello world') 
  ```
- Or at the end
  ```python
  print('hello world')  # Note that print is a function
  ```

**Well commented code is easier to understand for future readers (including yourself).**

---

## Literal Constants

- Numbers: `5`, `1.23`
- Strings: `'This is a string'`, `"It's a string!"`
- Boolean: `True`, `False`
- Nothing!: `None`

---

## Numbers
Numbers are mainly of two types - **integers** and **floats**.

### Integers
- An example of an integer is `2` which is just a whole number.

### Floats
- Examples of floating point numbers ("floats") are `3.23` and `52.3e-4`.
- The `e` notation indicates powers of 10. `52.3e-4` => `52.3 * 10^-4^`.

---

## Strings

- Strings are used to represent text.
- You can use single quotes, double quotes, or triple quotes for multi-line strings.
  ```python
  'Hello'
  "Hello"
  '''
  This is a
  multi-line string
  '''
  ```
- Strings are **immutable**

---

## Variables

- Variables are used to store data.
- You can assign a value to a variable using the `=` operator.
```python {monaco-run} {autorun: false}
name = 'Mr. P'
age = 99
print(name)
print('is')
print(age)
print('years old')
```

---

## String Concatenation

You can concatenate strings using the `+` operator.

```python {monaco-run} {autorun: false}
name = 'Mr. P'
age = 99
print(name + ' is ' + str(age) + ' years old')
```

---

## String Interpolation

Python has a powerful string interpolation capability.

```python {monaco-run} {autorun: false}
name = 'Mr. P'
age = 99
print(f'{name} was {age} years old')
```

---

## Variables Rules

- The first character of the identifier must be a letter of the alphabet or an underscore (_).
- The rest of the identifier name can consist of letters (uppercase ASCII or lowercase ASCII or Unicode character), underscores (_) or digits (0-9).
- Identifier names are case-sensitive. For example, `myname` and `myName` are not the same.

### Examples

- `age`, `name`, `foo`, `bar`
- `age2`, `name_2`, `foo_bar`
- `_age`, `_name` - starting with `_` denotes "private"
- `AGE`, `NAME` - ALL_CAPS denotes "constant"
- `i`, `j`, `k` - common for iterators in loops (more on this later)
- `df`, `x`, `y`, `X`, `Y` - bad variables but common in data science

---

## Variables Contain Both Data and Types

You can find our the type by using the `type` function.

```python {monaco-run} {autorun: false}
i = 5
print(i)
print(type(i))
```

```python {monaco-run} {autorun: false}
i = 'foo'
print(i)
print(type(i))
```

---

## Logical Operators

```python
True and False
## False

True or False 
## True

not True      
## False
```

---
layout: two-cols-header-2
---

## Some Basic Math

::left::

Python, at it's core, is a calculator. You can do basic math operations like addition, subtraction, multiplication, and division.

```python {monaco-run} {autorun: false}
print(2 + 3)  # Addition
print(5 - 2)  # Subtraction
print(2 * 3)  # Multiplication
print(6 / 2)  # Division
```

::right::

It also works on variables

```python {monaco-run} {autorun: false}
x = 5
y = 2
z = x + y
print(z)
```

We'll talk WAY more about this in the next lesson, but for now, just know that Python can do math.

---
layout: iframe-right
url: https://pyodide.org/en/stable/console.html
---

## REPL - Read-Eval-Print Loop

- **Interactive** way to run code
- **R**ead your code → **E**valuate it → **P**rint the result → **L**oop back
- Type code, hit Enter, see result immediately
- Perfect for **experimenting** and **learning**

---
layout: iframe-right
url: https://jupyter.org/try-jupyter/lab/
---

## Jupyter Notebook

- **Web-based** coding environment
- Combines **code**, **text**, and **output** in one document
- Code goes in **cells** - run one cell at a time
- Like a **digital notebook** for programming
- Perfect for **data science** and **learning**

*Think: Google Docs + Python code*

---
layout: header-link
---

# Exercise: Variables

[bigd103.link/variables](https://bigd103.link/variables)
