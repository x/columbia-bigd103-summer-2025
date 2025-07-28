---
title: Data Science and Machine Learning 1 - Python - Statistics with Lists
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

# Statistics with Lists

Calculating Central Tendency in Python

---

## Review: What We Know

### Statistics
- **Mean**: The average of all values
- **Median**: The middle value when sorted
- **Mode**: The most frequent value
- **Standard Deviation**: How spread out the data is

### Lists
- Storing multiple values: `scores = [85, 92, 78]`
- Accessing items: `scores[0]`
- Adding items: `scores.append(95)`
- Iterating: `for score in scores:`

---
layout: two-cols-header-2
---

## Calculating the Mean

::left::

The mean is the sum of all values divided by the count:

$$\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i$$

::right::

```python {monaco-run} {autorun: false}
def get_mean(values):
    total = 0
    for value in values:
        total = total + value
    count = len(values)
    return total / count

scores = [85, 92, 78, 88, 95, 73]

# Calculate mean
mean_score = get_mean(scores)
print(f"Mean Score: {mean_score:.2f}")
```

---

## Finding the Median

The median is the middle value when sorted:

```python {monaco-run} {autorun: false}
def get_median(values):
    sorted_values = sorted(values)
    n = len(sorted_values)
    if n % 2 == 0:  # Even number of values
        mid1 = sorted_values[n // 2 - 1]
        mid2 = sorted_values[n // 2]
        return (mid1 + mid2) / 2
    else:  # Odd number of values
        return sorted_values[n // 2]

values = [23, 45, 12, 67, 34, 89, 56]
median = get_median(values)
print(f"Median: {median}")
```

---

## Why Median Matters: U.S. Net Worth by Age

| **Age of Head of Family** | **Median Net Worth** | **Average Net Worth** |
|----------------------|------------------|-------------------|
| Under 35             | $39,040          | $183,380          |
| 35-44                | $135,300         | $548,070          |
| 45-54                | $246,700         | $971,270          |
| 55-64                | $364,270         | $1,564,070        |
| 65-74                | $410,000         | $1,780,720        |
| 75+                  | $334,700         | $1,620,100        |

<small>https://www.nerdwallet.com/article/finance/average-net-worth-by-age</small>

---
layout: image
image: image-1.png
---

---
layout: two-cols-header-2
---

## Understanding Skew

When data is **skewed**, mean and median tell different stories:

::left::

```python {monaco-run} {autorun: false}
# Right-skewed data (long tail on right)
salaries = [30, 35, 40, 45, 50, 55, 60, 70, 250]

mean_sal = sum(salaries) / len(salaries)
median_sal = sorted(salaries)[len(salaries)//2]

print("Right-skewed (income-like):")
print(f"Mean: ${mean_sal:.0f}k")
print(f"Median: ${median_sal:.0f}k")

if mean_sal > median_sal:
    print("Mean > Median = Right skew!")
    print("A few high values pull the mean up")
```

::right::

**Rule of thumb:**
- Mean > Median → Right skew
    - Example: income, wealth
- Mean < Median → Left skew
    - Example: age at death
- Mean ≈ Median → Symmetric
    - Example: height, weight

---
layout: image
image: image-2.png
backgroundSize: contain
---


---
layout: two-cols-header-2
---

## What is a Histogram?

::left::

A histogram is a chart that shows how frequently different values appear in your data:


**Why use histograms?**
- See patterns at a glance (symmetric? skewed? bimodal?)
- Spot outliers immediately
- Understand spread better than just mean/median
- Make better decisions based on distribution shape

::right::

```python {monaco-run} {autorun: false}
scores = [72, 85, 90, 78, 92, 88, 75, 95, 82, 88, 91, 79, 86, 90, 83]

# Count scores in ranges (bins)
range_60_70 = 0
range_70_80 = 4   # 72, 75, 78, 79
range_80_90 = 7   # 82, 83, 85, 86, 88, 88, 90
range_90_100 = 4  # 90, 91, 92, 95

def make_bar(count):
    bar = ""
    for i in range(count):
        bar += "█"
    return bar

print("60-70 : " + make_bar(range_60_70))
print("70-80 : " + make_bar(range_70_80))
print("80-90 : " + make_bar(range_80_90))
print("90-100: " + make_bar(range_90_100))
```

---
layout: two-cols-header-2
---

## Calculating Standard Deviation

::left::

How spread out is our data?

$$\sigma = \sqrt{ \frac{1}{N-1} \sum_{i=1}^{N} (x_i - \overline{x})^2 }$$

::right::

```python {monaco-run} {autorun: false}
values = [2, 4, 4, 4, 5, 5, 7, 9]

# Step 1: Calculate mean
mean = sum(values) / len(values)
print(f"Mean: {mean}")

# Step 2: Calculate squared differences
squared_diffs = []
for x in values:
    diff = x - mean
    squared_diffs.append(diff ** 2)

# Step 3: Calculate variance and std dev
variance = sum(squared_diffs) / (len(values) - 1)
std_dev = variance ** 0.5

print(f"Standard deviation: {std_dev:.2f}")
```

---

## Comparing Spread

Standard deviation helps us understand consistency:

```python {monaco-run} {autorun: false}
# Two classes with same mean
class_a = [82, 84, 85, 85, 86, 88]
class_b = [70, 75, 85, 85, 95, 100]

mean_a = sum(class_a) / len(class_a)
mean_b = sum(class_b) / len(class_b)

# Calculate std dev for both
def std_dev(data):
    mean = sum(data) / len(data)
    squared_diffs = [(x - mean)**2 for x in data]
    return (sum(squared_diffs) / (len(data) - 1)) ** 0.5

print(f"Class A - Mean: {mean_a:.1f}, Std Dev: {std_dev(class_a):.1f}")
print(f"Class B - Mean: {mean_b:.1f}, Std Dev: {std_dev(class_b):.1f}")
print("\nClass B has more variation in scores!")
```

---

## Quartiles

Understanding data distribution:

```python {monaco-run} {autorun: false}
scores = [65, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95, 98]
sorted_scores = sorted(scores)

# Quartiles
n = len(sorted_scores)
q1_index = n // 4
q2_index = n // 2  # median
q3_index = 3 * n // 4

print(f"Q1 (25th percentile): {sorted_scores[q1_index]}")
print(f"Q2 (50th percentile/median): {sorted_scores[q2_index]}")
print(f"Q3 (75th percentile): {sorted_scores[q3_index]}")
```

---

## Percentiles

Percentiles indicate the relative standing of a value within a dataset.

```python {monaco-run} {autorun: false}
scores = [65, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95, 98]
sorted_scores = sorted(scores)
n = len(sorted_scores)

# What percentile is a score of 85?
score = 85

num_below_score = 0
for s in sorted_scores:
    if s < score:
        num_below_score += 1

percentile = (num_below_score / n) * 100
print(f"\nA score of {score} is at the {percentile:.0f}th percentile")
```

---
layout: two-cols-header-2
---

## When to Use Each Measure

::left::

**Mean**
- Good for symmetric data
- Sensitive to outliers
- Use for: test scores, temperatures

**Median**
- Robust to outliers
- Better for skewed data
- Use for: income, home prices

::right::

**Standard Deviation**
- Measures consistency
- Higher = more spread
- Use for: quality control, risk assessment

**Quartiles/Percentiles**
- Understand distribution shape
- Identify outliers
- Compare relative standing

---
layout: header-link
---

# Exercise: Housing Prices
[bigd103.link/housing-prices](https://bigd103.link/housing-prices)