---
title: Data Science and Machine Learning 1 - Python - Group By
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
python:
  prelude: |
    import math
    import pandas as pd
  loadPackagesFromImports: true
  loadOptions:
    fullStdLib: false
    packages:
      - pandas
layout: cover
---

# The Unreasonable Effectiveness of "Group By"

Doing **good Data Science** by doing **good organization**.

---
layout: two-cols-header-2
---

## Finding the Mode with Dictionaries

::left::

The **mode**, or most frequent value, can be found using a dictionary to count occurrences:

1. Create an empty dictionary
2. Loop through the list, counting each value
3. Find the key with the highest count
4. Return that key as the mode

This is our first practical example of using dictionaries to solve a Data Science problem.

::right::

```python {monaco-run} {autorun: false}
def find_mode(numbers):
    # Count occurrences
    counts = {}
    for num in numbers:
        if num in counts:
            counts[num] = counts[num] + 1
        else:
            counts[num] = 1
    
    # Find the most frequent
    mode = None
    max_count = 0
    for num, count in counts.items():
        if count > max_count:
            max_count = count
            mode = num
    
    return mode

data = [1, 2, 3, 2, 4, 2, 5, 3, 2]
mode_value = find_mode(data)
print(f"Mode: {mode_value}")
```

---
layout: image-right
image: image-1.png
backgroundSize: contain
---

## What if it was More Complicated?

Imagine you have books data with multiple genres and quantities:

```python
# Create DataFrame from list of dictionaries
books_data = [
    {"id": 1, "genre": "adventure", "qty": 4, "price": 11.90},
    {"id": 2, "genre": "fantasy", "qty": 5, "price": 8.49},
    {"id": 3, "genre": "romance", "qty": 2, "price": 9.99},
    {"id": 4, "genre": "fantasy", "qty": 3, "price": 7.99},
    {"id": 5, "genre": "adventure", "qty": 3, "price": 9.99},
    {"id": 6, "genre": "romance", "qty": 1, "price": 5.88}
]
```

**Question:** How many of each genre do we have?

---
layout: quote
---

## Group By

1. **Group** data into groups based on a common attribute.
2. **Aggregate** something for each group.

---
layout: image-right
image: image-1.png
backgroundSize: contain
---

## Grouping w/ Pandas

```python {monaco-run} {autorun: false}
books_df = pd.DataFrame([{"id": 1, "genre": "adventure", "qty": 4, "price": 11.90}, {"id": 2, "genre": "fantasy", "qty": 5, "price": 8.49}, {"id": 3, "genre": "romance", "qty": 2, "price": 9.99}, {"id": 4, "genre": "fantasy", "qty": 3, "price": 7.99}, {"id": 5, "genre": "adventure", "qty": 3, "price": 9.99}, {"id": 6, "genre": "romance", "qty": 1, "price": 5.88}])

# Group by genre and sum quantities
qty_by_genre = books_df.groupby('genre')['qty'].sum()

print("Total quantities by genre:")
for genre, total_qty in qty_by_genre.items():
    print(f"  {genre}: {total_qty}")
```

---
layout: image-right
image: image.png
backgroundSize: contain
---

## Grouping w/ Pandas

```python {monaco-run} {autorun: false}
books_df = pd.DataFrame([{"id": 1, "genre": "adventure", "qty": 4, "price": 11.90}, {"id": 2, "genre": "fantasy", "qty": 5, "price": 8.49}, {"id": 3, "genre": "romance", "qty": 2, "price": 9.99}, {"id": 4, "genre": "fantasy", "qty": 3, "price": 7.99}, {"id": 5, "genre": "adventure", "qty": 3, "price": 9.99}, {"id": 6, "genre": "romance", "qty": 1, "price": 5.88}])

# Group by genre and calculate average price
avg_price_by_genre = \
    books_df.groupby('genre')['price'].mean()

# Print results
for genre, avg_price in avg_price_by_genre.items():
    print(f"  {genre}: ${avg_price:.2f}")
```

---

## Group By Pattern

The basic pattern for grouping in pandas:

```python
# Basic groupby pattern
grouped = df.groupby('key_column')['value_column'].agg_function()

# Multiple aggregations
grouped = df.groupby('key_column').agg({
    'value_column1': 'sum',
    'value_column2': 'mean',
    'value_column3': ['min', 'max']
})

# Then analyze results
for key, value in grouped.items():
    # Process each group's result
```

This pattern solves countless real-world problems!

---
layout: two-cols-header-2
---

## Multi-Level Grouping

::left::

We can group by single attributes:

```python {monaco-run} {autorun: false}
temps_df = pd.DataFrame([{"city": "NYC", "month": "Jan", "temp": 32}, {"city": "NYC", "month": "Jan", "temp": 35}, {"city": "NYC", "month": "Jan", "temp": 28}, {"city": "NYC", "month": "Feb", "temp": 38}, {"city": "NYC", "month": "Feb", "temp": 42}, {"city": "NYC", "month": "Feb", "temp": 35}, {"city": "LA", "month": "Jan", "temp": 65}, {"city": "LA", "month": "Jan", "temp": 68}, {"city": "LA", "month": "Jan", "temp": 70}, {"city": "LA", "month": "Feb", "temp": 67}, {"city": "LA", "month": "Feb", "temp": 72}, {"city": "LA", "month": "Feb", "temp": 69}])

# Group by city
city_avg = temps_df.groupby('city')['temp'].mean()

# Average per city
for city, temp_avg in city_avg.items():
    print(f"{city}: {temp_avg:.1f}°F")
```

::right::

We can group by multiple attributes:

```python {monaco-run} {autorun: false}
temps_df = pd.DataFrame([{"city": "NYC", "month": "Jan", "temp": 32}, {"city": "NYC", "month": "Jan", "temp": 35}, {"city": "NYC", "month": "Jan", "temp": 28}, {"city": "NYC", "month": "Feb", "temp": 38}, {"city": "NYC", "month": "Feb", "temp": 42}, {"city": "NYC", "month": "Feb", "temp": 35}, {"city": "LA", "month": "Jan", "temp": 65}, {"city": "LA", "month": "Jan", "temp": 68}, {"city": "LA", "month": "Jan", "temp": 70}, {"city": "LA", "month": "Feb", "temp": 67}, {"city": "LA", "month": "Feb", "temp": 72}, {"city": "LA", "month": "Feb", "temp": 69}])

# Group by city AND month
monthly_temps = \
    temps_df.groupby(['city', 'month'])['temp'].mean()

# Average per city per month
for city_and_month, temp_avg in monthly_temps.items():
    city, month = city_and_month  # NEW SYNTAX: unpacking
    print(f"{city}-{month}: {temp_avg:.1f}°F")
```

---

## Group By for Different Statistics

```python {monaco-run} {autorun: false}
# Sales data: (salesperson, quarter, amount)
sales_df = pd.DataFrame([{"name": "Alice", "quarter": "Q1", "amount": 50000}, {"name": "Alice", "quarter": "Q1", "amount": 30000}, {"name": "Alice", "quarter": "Q2", "amount": 45000}, {"name": "Bob", "quarter": "Q1", "amount": 40000}, {"name": "Bob", "quarter": "Q2", "amount": 60000}, {"name": "Bob", "quarter": "Q2", "amount": 35000}, {"name": "Charlie", "quarter": "Q1", "amount": 55000}, {"name": "Charlie", "quarter": "Q2", "amount": 50000}])

# Calculate multiple statistics at once
person_stats = sales_df.groupby('name')['amount'].agg(['sum', 'mean', 'max'])

for person, stats in person_stats.iterrows():
    total = stats['sum']
    avg = stats['mean']
    max_sale = stats['max']
    print(f"{person}: Total=${total}, Avg=${avg:.0f}, Max=${max_sale}")
```

---

## Group By Functions

```python {monaco-run} {autorun: false}
import pandas as pd

sales_df = pd.DataFrame([{"name": "Alice", "quarter": "Q1", "amount": 50000}, {"name": "Alice", "quarter": "Q1", "amount": 30000}, {"name": "Alice", "quarter": "Q2", "amount": 45000}, {"name": "Bob", "quarter": "Q1", "amount": 40000}, {"name": "Bob", "quarter": "Q2", "amount": 60000}, {"name": "Bob", "quarter": "Q2", "amount": 35000}, {"name": "Charlie", "quarter": "Q1", "amount": 55000}, {"name": "Charlie", "quarter": "Q2", "amount": 50000}])

def custom_agg(df, group_col, value_col, agg_func):
    """Custom groupby wrapper function"""
    return df.groupby(group_col)[value_col].agg(agg_func)

# Use built-in sum
grouped_sales = custom_agg(sales_df, 'name', 'amount', 'sum')

for person, total in grouped_sales.items():
    print(f"{person}: Total=${total}")
```

---
layout: two-cols-header-2
---

## What Can we Combine with Group By?

::left::

- **sum**: Sum of values per group
- **mean**: Average value per group
- **median**: Middle value per group
- **mode**: Most frequent value per group
- **count**: Number of items per group
- **std**: Standard deviation per group
- **max/min**: Highest/lowest value per group
- **quantile**: Percentile values per group
- **Custom Functions**: Any function that takes a Series and returns a single value

::right::

```python {monaco-run} {autorun: false}
import pandas as pd

sales_df = pd.DataFrame([{"name": "Alice", "quarter": "Q1", "amount": 50000}, {"name": "Alice", "quarter": "Q1", "amount": 30000}, {"name": "Alice", "quarter": "Q2", "amount": 45000}, {"name": "Bob", "quarter": "Q1", "amount": 40000}, {"name": "Bob", "quarter": "Q2", "amount": 60000}, {"name": "Bob", "quarter": "Q2", "amount": 35000}, {"name": "Charlie", "quarter": "Q1", "amount": 55000}, {"name": "Charlie", "quarter": "Q2", "amount": 50000}])

# Multiple aggregations including custom function
def my_range(series):
    return series.max() - series.min()

person_aggs = sales_df.groupby('name')['amount'].agg([
    'mean',
    'count',
    ('range', my_range)  # Custom function with name
])

for person, stats in person_aggs.iterrows():
    print(f"{person}: Average=${stats['mean']:.2f}, Count={stats['count']}, Range=${stats['range']}")
```

---
layout: section
---

# Examples

---
layout: image-right
image: image-4.png
backgroundSize: contain
---

## Political Voting

### Approach

- GROUP BY demographic (age, gender, location)
- AGGREGATE sum of counts

### Application

- 2020 demographics we're used to target ads in 2024 election to target improving turnout
- Policy is often driven by demographics

<small>https://apnews.com/article/election-harris-trump-women-latinos-black-voters-0f3fbda3362f3dcfe41aa6b858f22d12</small>

---
layout: image-right
image: 12seasons-nyc-2025-07-29.png
backgroundSize: contain
---

## 12seasons.nyc

### Grouping for Baseline

- 60 years of hour-by-hour NYC weather data
- **GROUP BY** hour and day-of-year
- **AGGREGATE** median temperature, stddev of temperature

### Analysis Against Baseline

- On page load, fetch the current hour, day-of-year, and temperature.
- Depending on how many standard deviations above or below the median the current temperature is, update pointer.

---
layout: two-cols-header-2
---

## Why Group By is "Unreasonably Effective"

::left::

1. **One Pattern, Many Uses**
   - Sales analysis
   - Student performance
   - Weather patterns
   - Website analytics
   - Employee metrics

2. **Follow-Up**
    - Can be extended with more aggregations
    - Easy to answer up follow-up questions about a group with filtering or compound-keys

::right::

3. **Scales to Real Data**
   - Works with 10 rows or 10 million
   - Foundation of data analysis tools
   - Used in SQL, Pandas, Excel, etc.

4. **Explainable**
   - Intuitive for non-programmers
   - Makes complex data approachable
   - Helps non-technical stakeholders focus on insights


---
layout: header-link
---

# Exercise: Airbnb Analysis
[bigd103.link/airbnb-analysis-pandas](https://bigd103.link/airbnb-analysis-pandas)