---
title: Data Science and Machine Learning 1 - Data Science - Models
theme: ../../../shared/theme
fonts:
    sans: 'IBM Plex Serif'
    mono: 'IBM Plex Mono'
monaco: true
info: |
  Data Analysis and Models
  Based on "Weapons of Math Destruction" by Cathy O'Neil
transition: slide-left

layout: cover
---

# Models
Models, Metrics, and the U.S. News College Rankings

---
layout: header-link
---

# Reading

[bigd103.link/college-rankings](https://bigd103.link/college-rankings)

---
layout: section
---

# A Story: How Rankings Reshaped Higher Education

---
layout: image-right
image: image.png
---

## 1983: A Magazine's Ambitious Project

U.S. News & World Report, a struggling newsmagazine, decided to:
- Evaluate 1,800 colleges and universities
- Rank them for "excellence"
- Help students make their first big life decision
- Maybe boost newsstand sales to rival Time and Newsweek

**Initial approach:** Opinion surveys to university presidents

**Result:** Stanford #1, Amherst best liberal arts college

---
layout: image-right
image: image-1.png
---

## The Backlash

Complaints poured in:
- "The rankings are unfair!"
- "Look at the actual data!"
- "We deserve higher!"

**The magazine's response:** Let's make it "data-driven"

But this raised a crucial question...

---
layout: center
---

### What exactly can you measure about "educational excellence"?

---
layout: image-right
image: image-2.png
---

## The Challenge

### What They Wanted to Measure
- Educational excellence
- Student learning and growth
- "A way to deeper personal fulfillment"
- Life transformation

### The Problem
These are "squishy" values - impossible to quantify directly

### The Solution
Use **proxies** - measurable stand-ins

---
layout: image-right
image: image-3.png
---

## The Proxies They Chose

- **SAT scores** (student quality?)
- **Student-teacher ratios** (personal attention?)
- **Acceptance rates** (selectivity = quality?)
- **Freshman retention** (satisfaction?)
- **Graduation rates** (success?)
- **Alumni giving rates** (appreciation?)

**The Formula:** 75% algorithm + 25% reputation surveys

---
layout: center
---

### But what happens when a model becomes the standard?

---
layout: section
---

# What Is a Model?

---

## Definition

A **model** is a simplified representation of reality used to:
- Make predictions
- Guide decisions  
- Evaluate performance

### Key Characteristics
- **Abstraction**: Includes only "relevant" features
- **Input Data**: Based on historical data and assumptions
- **Output**: Predictions or decisions about future events

<br>

_Models employ the forms of statistical aggregation that we learned about in the last lesson._

---
layout: image
image: image-4.png
backgroundSize: contain
---

<!-- This slide is an image of confirmatory vs exploratory vs predictive models -->

---
layout: image-right
image: image-6.png
---

## Models in the Real World

### Where We Find Them
- Weather forecasts
- Credit scores
- Insurance rates
- School admissions
- Employee evaluations
- Criminal justice (recidivism prediction)

### Why They Matter
- Influence significant life decisions
- Increasingly automated
- Operating at massive scale

---
layout: two-cols-header-2
---

::left::

## What Makes a Good Model?

### Transparency
Clear and understandable to those affected

### Fairness
Doesn't reinforce existing inequalities

### Accountability
Mechanisms to challenge and appeal decisions

### Feedback Mechanisms
Learns from mistakes and improves over time

### Ethical Framework
Considers broader societal impact

::right::

## What Makes a Bad Model?

### Opacity
Black box - no one understands how it works

### Data Misuse
Uses proxies instead of measuring what matters

### Harmful Feedback Loops
Creates self-fulfilling prophecies

### No Accountability
No way to appeal or correct errors

### Perverse Incentives
Optimizes for the metric, not the goal

---
layout: section
---

# Back to Our Story

---
layout: image-right
image: image-5.png
backgroundSize: contain
---

## The Feedback Loop

1. **Low ranking** → Reputation suffers
2. **Bad reputation** → Top students avoid
3. **Fewer top students** → Top professors leave  
4. **Faculty exodus** → Alumni give less
5. **Less funding** → Ranking drops further

---
layout: image-right
image: image-7.png
---

## Gaming the System: TCU

### The Crisis (2008)
Ranking falls: 97 → 105 → 108 → 113

### The Response
- **$250M fundraising** (raised $434M)
- **$100M** campus beautification
- State-of-the-art **football facilities**

### The Result
- Better football → More applications → Higher selectivity → Better ranking
- 2015: Ranked #76 (climbed 37 places!)

---
layout: image-right
image: image-8.png
---

## Gaming the System: King Abdulaziz University

- 2014, at only 2 years old, ranked **#7 globally**

- Ahead of MIT, Harvard, and Stanford

- **The trick:** Paid top publishing mathematicians $72,000 to be "adjunct faculty" for 3-weeks a year

- Required them to change affiliation on citation databases

---
layout: image-right
image: image-10.png
backgroundSize: contain
---

## The Consequence
- 1985-2013: College costs rise **500%**
- Nearly **4x** inflation rate
- Students graduate with crushing debt
- Arms race for amenities: climbing walls, luxury dorms
- Colleges rank students by ability to pay, not merit
- Students hire consultants to game the system


**Colleges optimize for 15 U.S. News metrics, not student success.**

---

# Columbia University Cost: 1988 vs 2025

| Expense Category | 1988 Actual* | 1988 Adjusted for 2025 Inflation** | 2025 Actual |
|-----------------|-------------|-----------------------------------|-------------|
| **Tuition & Fees** | ~$13,000 | ~$35,326 | **$68,260** |
| **Room & Board** | ~$5,000 | ~$13,587 | **$17,058** |
| **Books & Supplies** | ~$500 | ~$1,359 | **$1,400** |
| **Other Expenses** | ~$800 | ~$2,174 | **$2,350** |
| **Total Cost of Attendance** | ~$19,300 | ~$52,446 | **$89,573** |

<small>* 1988 figures are estimates based on comparable Ivy League institutions (Harvard's 1988-89 total cost was $18,210)</small>
<br>
<small>** Using inflation rate of 171.74% from 1988 to 2025 (CPI: 118.3 in 1988 to 321.465 in 2025)</small>

---
layout: image-right
image: image-9.png
---

## The Model's Real Impact

### It Doesn't Just Measure - It Reshapes

- Turned diverse educational approaches into a monoculture
- Made colleges manage students like "investment portfolios"
- Created an ecosystem of consultants and gaming
- Ignored the most important metric: affordability

**A model meant to help students attend college has made it harder for them to afford it.**

---

## When Models Go Wrong

### 1. Proxies Become Targets
"When a measure becomes a target, it ceases to be a good measure"

### 2. Missing Variables Matter Most
What you leave out (cost) can matter more than what you include

### 3. Models Create Reality
They don't just describe the world - they reshape it

### 4. Gaming Is Inevitable
Any metric-based system will be optimized for metrics, not goals

### 5. Feedback Loops Amplify
Small advantages compound into permanent inequalities

---
layout: center
---

# Remember

When we reduce complex human systems to simple metrics, we don't just measure reality - 

**we reshape it.**

Choose your metrics wisely.