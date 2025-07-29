---
title: Data Science and Machine Learning 1 - Data Science - Data Analysis
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

# Data Analysis
Analyzing data to extract insights and inform decisions

---
layout: image-right
image: image-12.png
backgroundSize: contain
---

## Data Science

- Math <small>(but mostly Statistics)</small>
- Programming
- Domain Knowledge


## Data Analysis

The confluence of Math and Domain Knowledge.

---

## Types of Analysis
We can categorize data analysis into three main types.

### Descriptive
Summarizing or explaining trends within data.

### Predictive
Making predictions based on existing data.

### Prescriptive
Recommending actions based on predictions.

---
layout: image-right
image: image-1.png
---

## Descriptive Analysis

Alice, a Data Scientist, pulls data on visits to her LA/NYC news-focused website inspecting:

- Times of user arrivals
- IP addresses (to identify user locations)
- Screen sizes

<div v-click>

After aggregating by `hour`, `location`, and `screen_size`, she notices spikes in traffic from <span v-mark="{at: 2, color: 'orange', type: 'underline'}">small-screen devices</span> at:
- New York at <span v-mark="{at: 2, color: 'orange', type: 'underline'}">1pm (EDT)</span>
- Los Angeles at <span v-mark="{at: 2, color: 'orange', type: 'underline'}">10am (PDT)</span>.

</div>

<div v-click>

She can **describe** these traffic patterns by the times, screen sizes, and city.

</div>

<!-- 
Speaker Notes:
- Notice the correction: LA would be 10am PDT, not EDT
- This example shows how descriptive analysis doesn't make assumptions - it just tells us what IS happening
- The lunch-time mobile usage pattern is something many websites see
-->

---
layout: image-right
image: image.png
---

## From Descriptive to Predictive

Now, Alice is planning a launch for the same site in Chicago. She uses her descriptive findings (peak times, device usage, traffic spikes) to **predict** how new Chicago readers might behave.

For example, she might guess:

<div v-click>

- Chicago traffic will also peak around **lunch hours** on small-screen (likely mobile) devices.
- There may be similarities in local time-based usage patterns (e.g., a spike around 12pm local time).

</div>

---

## Prescriptive Analysis

Alice's boss, Bob, wants to **increase traffic** based on her predictions. What should they do?

<div v-click>

- **Timing**: Schedule targeted notifications or new content releases around local midday in each city to capture users during their break.
- **Mobile Optimization**: Ensure the site is well-optimized for small screens, because spikes are seen on mobile devices.

These recommendations (or **prescriptions**) are guided by the prior descriptive and predictive insights.

</div>

---

## What did Alice need?

<div v-click>

### Data Access

Alice needed web traffic logs (timestamps, locations, screen sizes).

### Aggregation & Trend Identification

Tools (like Pandas) to group the data by time/location and find peaks.

### Domain Knowledge

Interpreting results in context (e.g., understanding lunch breaks, mobile usage, local times).

### Testable Predictions

Ability to validate guesses (e.g., comparing Chicago's actual launch metrics to predicted metrics).

</div>

---

## What Is the Role of a Data Analyst?

- **Data Gathering:** Like Alice, a data analyst locates, collects, and integrates data from various sources (e.g., server logs, APIs, databases).

- **Data Cleaning and Preparation:** Alice ensures the data is accurate and consistent by handling missing values, correcting errors, and transforming formats.

- **Analysis and Modeling:** Using statistical methods or machine learning, Alice explores the data to uncover patterns and build predictive or descriptive models.

- **Domain Knowledge:** Just like Alice uses her understanding of web traffic behavior, domain expertise helps interpret results meaningfully.

- **Communication and Storytelling:** A crucial part of Alice's role is explaining insights—often through visualizations, reports, or presentations—to guide decision-making.

- **Prescriptive Action:** Finally, based on findings, Alice recommends actions or strategies (e.g., the best time to launch a campaign) to stakeholders like her boss, Bob.

---
layout: section
hideInToc: true
---

# Data

---
layout: center
---

<div class="book-3d">
  <div class="book-3d__inner">
    <img class="book-3d" src="./how_data_happened.jpg" />
  </div>
</div>

<!-- 
Speaker Notes:
- "How Data Happened" by Chris Wiggins and Matthew Jones traces the history of data from the 18th century to today
- The book shows how data collection started as a tool of empire and evolved into today's data science
- Key theme: data has always been about power - who collects it, who controls it, and what they do with it
-->

---
layout: image-right
image: 18th_century_crime_statistics.jpg
---

## Statistics:<br>A Matter of State

- In the 18th century, as empires expanded, governments collected data on population, land, and resources for administration.
- The word "statistics" initially meant **knowledge of the state** — counting births, deaths, taxes, etc.
- In the beginning, statistics was really just about collecting **datasets**.

<!-- 
Speaker Notes:
- The word "statistics" comes from the German "Statistik" - literally "state arithmetic"
- Early statistics were tools of empire - Napoleon's armies carried statisticians to count resources in conquered territories
- This was the birth of the census and systematic data collection
- Key insight: data collection has always been tied to power and control
-->

---
layout: image-right
image: image-2.png
backgroundSize: contain
---

## What Is a Dataset?

- A **dataset** is a structured collection of data, often presented in tabular form with rows representing different observations (e.g., users, timestamps) and columns representing features or variables (e.g., IP address, screen size, city).

- The goal of **describing** a dataset is to understand its key characteristics—like typical values, spread, and the relationships among variables.

---
layout: image-right
image: adolphe_quetelet.jpg
---

## Adolphe Quetelet

(1796–1874)

- Adolphe Quetelet was a Belgian astronomer.
- In 1835, he published "Sur l'homme", applying astr. methods to human data.
- He discovered that human characteristics (height) followed a "normal distribution"
- This inspired Quetelet to apply the same averaging techniques to human and social data, such as crime rates and physical measurements, laying the groundwork for ideas like the "Average Man" and BMI.

<!-- 
Speaker Notes:
- Quetelet's key insight: human variation follows the same mathematical patterns as astronomical measurement errors
- He believed there was an ideal "average man" and deviations were like errors from this ideal
- This was revolutionary but also problematic - it treated human diversity as "error"
- He invented BMI (Body Mass Index) which is still used today despite its flaws
- His work laid the foundation for both modern statistics and some problematic ideas about "normal" humans

In December 1823, he went to Paris to study astronomy at the Observatory there. He learnt astronomy from Arago and Bouvard and the theory of probability under Joseph Fourier and Pierre Laplace. He also met Poisson
-->

---
layout: center
---

The determination of the average man is not merely a matter of speculative curiosity; it may be of the most important service to the science of man and the social system. It ought necessarily to precede every other inquiry into social physics, since it is, as it were, the basis.

The average man, indeed, is in a nation what the centre of gravity is in a \[celestial\] body; it is by having that central point in view that we arrive at the apprehension of all the phenomena of equilibrium and motion.

― Adolphe Quetelet, A Treatise on Man and the Development of His Faculties

<!-- 
Speaker Notes:
- Note the physics metaphor - Quetelet saw society as a mechanical system with laws like astronomy
- The "average man" concept was used to define what was "normal" vs "deviant"
- This laid groundwork for both useful statistics AND harmful ideas about normalcy
- Important to remember: averages hide individual variation and can erase important differences
-->

---
layout: image-right
image: mean_median.png
backgroundSize: contain
---

## Measures of Central Tendency

1. **Mean**
   The arithmetic average.
   $\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i$

2. **Median**
   The middle value in an ordered set. Often more robust to outliers than the mean.

3. **Mode**
   The most frequently occurring value.

---
layout: image-right
image: mean_median.png
backgroundSize: contain
---

## Mean vs. Median

- Outliers or skewed data can heavily distort the mean. The median is more stable against extreme values.

- Notice how a few large values can **pull the mean** to the right, whereas the median stays near the center of most data points.

- Generally, **median** is preferred for skewed distributions.


---
layout: image-right
image: image-13.png
backgroundSize: contain
---

## Forever Age Distribution

- Mean: 18.8
- Median: 17.5
- Standard Deviation: 7.06064
- Lowest Score: 8
- Highest Score: 35
- Distribution Range: 27

---
layout: image-right
image: standard_deviation_diagram.svg.png
backgroundSize: contain
transition: fade
---

## Standard Deviation

A measure of how spread out the data is around the mean.

$\sigma = \sqrt{ \frac{1}{N-1} \sum_{i=1}^{N} (x_i - \overline{x})^2 }$

- **Low** std dev: Data points are close to the mean.
- **High** std dev: Data points are spread out over a wider range.

---
layout: image-right
image: standard_deviation_diagram.svg.png
backgroundSize: contain
---

## The Normal Distribution

Also known as the **Bell Curve** or **Gaussian Distribution**:

- Symmetrical about the mean.
- Mean = Median = Mode.
- Approximately 68% of data within 1σ, 95% within 2σ, and 99.7% within 3σ from the mean.

<!-- 
Speaker Notes:
- Named after Carl Friedrich Gauss, though discovered independently by many
- The "68-95-99.7 rule" is fundamental to statistics
- Many natural phenomena follow normal distributions (heights, test scores, measurement errors)
- But beware: not everything is normally distributed! (income, city sizes follow power laws)
-->

---
layout: image-right
image: eugenics_birth.jpg
---

## Francis Galton (1822–1911)

### The Good
- Expanded on Quetelet's ideas.
- Introduced **regression** and **correlation**.
- Created many statistical tools we still use.

### The Ugly
- Influenced by his cousin, Charles Darwin.
- Aimed to rank individuals within distributions (blame him for standardized tests).
- Believed intelligence and ability were primarily inherited.
- Coined the term **"eugenics"** to describe the effort to "improve" human genetics.

<!-- 
Speaker Notes:
- Galton's statistical innovations were groundbreaking, but his motivations were deeply problematic
- He invented correlation to prove that "genius" ran in families (ignoring privilege and opportunity)
- His work on regression came from studying heights - he noticed tall parents had slightly shorter children on average
- The term "regression to the mean" comes from this - he saw it as regression to mediocrity
- His eugenics ideas influenced horrific policies worldwide, including Nazi Germany
- Important lesson: good math can be used for terrible purposes - ethics matter in data science
-->

---
layout: center
---

"We want abler commanders, statesmen, thinkers, inventors, and artists.

The natural qualifications of our race are no greater than they used to be in semi-barbarous times, but the conditions amid which we are born are vastly more complex than of old."

~ Francis Galton

<!-- 
Speaker Notes:
- This quote shows Galton's worldview - he believed in racial hierarchy and "improvement"
- He ignored how social conditions, education, and opportunity shape outcomes
- His legacy reminds us that data science is never neutral - it reflects the values of those who practice it
- Modern data scientists must be aware of these historical biases and actively work against them
-->

---
layout: image-right
image: image-3.png
backgroundSize: contain
---

## Linear Regression

A statistical method for modeling relationships between a **dependent variable** and one or more **independent variables**. The simplest form is:

$$
y = mx + b
$$

Where $m$ is the slope and $b$ is the intercept.

_Galton originally studied how children's heights regressed toward the mean height of the population._

<!-- 
Speaker Notes:
- Galton noticed tall parents tended to have tall children, but not AS tall as the parents
- He called this "regression to mediocrity" - we now call it "regression to the mean"
- This is why we call it "regression" analysis - a historical artifact from Galton
- Modern regression is much more sophisticated but the name stuck
-->

---
layout: image-right
image: image-9.png
backgroundSize: contain
---

## IVs vs. DVs

- **Independent Variable (IV):** The factor you believe influences or causes changes (x-axis).
- **Dependent Variable (DV)**: The outcome that responds to changes in the IV(s) (y-axis).
- **Regression** is a way to model and measure the relationship between the IV(s) and DV.

### Example: Car Travel
- **IV:** Time driving (minutes, hours)
- **DV:** Distance from start point
- **Regression:** Estimated speed (slope) – how fast distance changes over time.

---
layout: image-right
image: correlation.webp
backgroundSize: contain
---

## Correlation

Indicates the strength and direction of a linear relationship between two variables.
**Pearson's correlation coefficient** ($r$):

$$
r = \frac{\sum (x_i - \overline{x})(y_i - \overline{y})}{\sqrt{\sum (x_i - \overline{x})^2 \sum (y_i - \overline{y})^2}}
$$

- **+1**: Perfect positive correlation.
- **0**: No linear correlation.
- **-1**: Perfect negative correlation.

### Covariance

How two variables change together:

$$
\text{cov}(X,Y) = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{n-1}
$$

---
layout: image-right
image: image-10.png
backgroundSize: contain
---

## Correlation<br>DOES NOT IMPLY<br>Causation

- **Correlation**: Two variables move together.
- **Causation**: One variable causes the other to change.

It's easy to find **spurious correlations** that are not meaningful.

<!-- 
Speaker Notes:
- Classic example: ice cream sales and drowning deaths are correlated (both increase in summer)
- The hidden variable is temperature/season - it causes both
- Always ask: could there be a confounding variable?
- Establishing causation requires controlled experiments, not just observational data
-->

---
layout: iframe
url: https://www.tylervigen.com/spurious-correlations
---

---
layout: section
hideInToc: true
---

# Making Sense of a Dataset

---
layout: two-cols-header
---

## Analyzing a New Dataset

::left::

### 1. **What Kind of Data?**
   - Nominal, ordinal, continuous, discrete?

### 2. **Central Tendency**
   - Mean, median, mode.

### 3. **Spread**
   - Range, standard deviation, IQR, percentiles.

::right::

### 4. **Inspect Shape**
   - Is it normal? Is there skew or kurtosis?

### 5. **Identify Outliers**
   - 5th/95th percentiles, IQR method, z-scores.

### 6. **Look for Relationships**
   - Correlation, covariance, scatter plots.