---
title: Data Science and Machine Learning 1 - A Short Philosophical Detour
exportFilename: unsupervised-learning
theme: ../../../shared/theme
fonts:
    sans: 'IBM Plex Serif'
    mono: 'IBM Plex Mono'
info: |
  Class Number: BIGD103
  Instructor: Mr. Peticolas
transition: slide-left
mdc: true # https://sli.dev/features/mdc
layout: cover
---

# A Short Philosophical Detour

---
layout: section
---

## Why Are we Here?

---

## Learning Objectives

1. **Apply** data science skills using real-world data to **create** meaningful, interactive applications addressing authentic problems.

2. **Analyze** and **implement** practical machine learning approaches to **solve** real-world problems, emphasizing pragmatic solutions over deep theory.

3. **Examine** and **employ** large language models (LLMs) to **enhance** data-driven applications.

---
layout: two-cols-header-2
transition: fade
---

## Survey Results

::left::

### Core Technical Skills

- Python programming fundamentals (most common response)
- Building practical applications/products with code
- Data visualization and creating visual outputs

### AI/ML Deep Dive

- Understanding how AI works "under the hood"
- Large Language Models (LLMs)
- Deep learning techniques (LSTM specifically mentioned)
- Neural networks and model architectures

::right::

### Data Science Applications

- Statistical analysis and methods
- Connection between data science and machine learning
- How data drives decision-making

### Motivations

- Hands-on coding experience
- Understanding AI, not just using it
- Building "incredible" things

---
layout: two-cols-header-2
---

## Survey Results

::left::

### Core Technical Skills

- Python programming fundamentals (most common response) ✅
- Building applications/products with code
- Data visualization and creating visual outputs ❓

### AI/ML Deep Dive

- Understanding how AI works "under the hood" 🟨
- Machine Learning algorithms and techniques ✅
- Neural networks and LLMs 🟨

::right::

### Data Science Applications

- Statistical analysis and methods ✅
- Connection between data science and machine learning ✅
- How data drives decision-making ✅

### Motivations

- Hands-on coding experience ✅
- Understanding AI, not just using it 🟨
- Building "incredible" things

---
layout: image
image: image-1.png
backgroundSize: contain
---

---
layout: image
image: image.png
backgroundSize: contain
---

---
layout: image-left
image: image-2.png
backgroundSize: contain
---

## Tree of Knowledge Climbing Tools

- **Python**: Programming language for data science and machine learning.
- **Basic Statistics**: Fundamental concepts for understanding data distributions and relationships.
- **Pandas**: Library for data manipulation and analysis.
- **Scikit-learn**: Library for machine learning algorithms.

My goal is to teach you _just enough_ of these tools to show you some of the fruits up in the branches of this tree.

---
layout: section
---

## Why?

---
layout: quote
---

> If you want an average successful life, it doesn’t take much planning. Just stay out of trouble, go to school, and apply for jobs you might like.

> But if you want something extraordinary, you have two paths:
> 
> 1. Become **the best** at **one** specific thing.
> 2. Become **very good** (top 25%) at **two or more** things.
> 
> The first strategy is difficult to the point of near impossibility. Few people will ever play in the NBA or make a platinum album. I don’t recommend anyone even try.
> 
> The second strategy is fairly easy. Everyone has at least a few areas in which they could be in the top 25% with some effort. In my case, I can draw better than most people, but I’m hardly an artist. And I’m not any funnier than the average standup comedian who never makes it big, but I’m funnier than most people. The magic is that few people can draw well and write jokes. It’s the combination of the two that makes what I do so rare.

~ Scott Adams, *How to Fail at Almost Everything and Still Win Big*

---
layout: two-cols-header-2
---

## SealNet: CNNs to Detect Antarctic Seals

::left::
### Objective
Detect and count Antarctic pack-ice seals using satellite imagery.

### Importance

Seals are key predators in the Southern Ocean ecosystem, and understanding their population sizes helps predict ecosystem responses to threats like climate change and krill fishing.




::right::

### Methodology

- Use Worldview-3 satellite imagery.
- Develop a Convolutional Neural Network (CNN) to detect and locate seal centroids.
- Combines semantic segmentation heatmaps with binary classification. (?)
- Uses regression for counting.

### Results

- Locates over 30% of seals compared to human expert counts.
- Reduces detection time by 95% vs human.

<br>

<small>
www.sciencedirect.com/science/article/abs/pii/S0034425719306376
</small>



---
layout: section
---

## How Do I Know if This is a Skill Worth Getting Good At?

---
layout: two-cols-header-2
---

## Climbing the Tree for Ourselves

::left::

### Exploring Data Science

- Look for stories in the news that you think could be followed-up with data.
- Consider a field that you're passionate about. How can your passion be amplified with data?
- Explore data visualization libraries (Seaborn, D3.js), visualize a dataset that interests you.

### Exploring Machine Learning

- Look for a dataset that interests you on Kaggle. Build a simple model to predict something.
- Imagine a place where you'd want a machine learning model to help you. Try and make it.

::right::

### Exploring Programming

- Try a different programming language.
- Build a small website or application (e.g, a personal website).
- Try creating art with code (e.g., using Processing or p5.js).
- Automate a simple task on your computer (e.g., file organization).
- Build a game.


---
layout: two-cols-header-2
---

## You've Actually Learned More than Python in This Class

Most programming languages share common concepts, such as variables, control structures (like loops and conditionals), functions, and data structures (like lists and dictionaries).

::left::

```python
# Python
def nth_fibonacci(n):
   a, b = 0, 1
   for i in range(n):
       a, b = b, a + b
   return a
```

<br>

```java
// Java
public static int nthFibonacci(int n) {
    int a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return a;
}
```

::right::
```javascript
// JavaScript
function nthFibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}
```


<br>

```go
// Go
func nthFibonacci(n int) int {
    a, b := 0, 1
    for i := 0; i < n; i++ {
        a, b = b, a+b
    }
    return a
}
```

---
layout: two-cols-header-2
---

## Game Creation

::left::

### [Pygame Zero](https://pygame-zero.readthedocs.io/en/stable/index.html)
A beginner-friendly Python library for making games. It simplifies the process of creating 2D games.

```python
import pgzrun
def draw():
    screen.clear()
    screen.draw.text("Hello, Pygame Zero!", center=(400, 300), fontsize=50)
pgzrun.go()
```

### [Godot](https://godotengine.org/)
Very popular, beginner-friendly, and open-source game engine. GDScript is similar to Python.

::right::

### [Unity](https://unity.com/)
Popular game engine using C#. Great for 2D and 3D games.

### [Pico-8](https://www.lexaloffle.com/pico-8.php)
Fantasy console for making small games. Uses a Lua-like language. **Not free** but has a free trial.

### [Phaser](https://phaser.io/)
JavaScript framework for making 2D games. Great for web-based games.


---
layout: section
---

## A Few Demos

---

