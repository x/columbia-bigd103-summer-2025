---
title: Data Science and Machine Learning 1 - Machine Learning - AI Agents
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

# AI Agents in 2025

---
layout: image-right
image: image-7.png
backgroundSize: contain
---

## How the AI Works
<p class="subheading">Quick Refresher</p>

**Architecture:** Neural network predicting next token in sequence

**Tokens:** Words → embedding vectors representing meaning

**Context:** Transformer updates embeddings using $n$ preceding tokens in context window

**Chat Interface:** Conversation prompt → model continues dialogue → you're the next "user" input

**Key insight:** It's all just sophisticated autocomplete

---
layout: two-cols
---

## Prompt Engineering

Crafting prompts to get desired outputs without changing model weights.

**Core Techniques**
- System/role prompts + few-shot examples
- Chain-of-thought reasoning ("Let's think step by step...")
- Prompt compression (big model → small model)
- Prompt caching for efficiency

**2025 Reality:** Most users don't write prompts anymore—AI assistants handle the meta-prompting

::right::

```python
import openai

def question_to_sql(question: str) -> str:
    messages = [
        {"role": "system",
         "content": "You transform questions into SQL. Be concise."},
        # Few-shot example
        {"role": "user",
         "content": "Top 10 oldest users?"},
        {"role": "assistant",
         "content": "SELECT * FROM users ORDER BY age DESC LIMIT 10;"},
        # Actual query
        {"role": "user",
         "content": question}]
    
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=messages,
        temperature=0
    )
    return response.choices[0].message["content"]

sql = question_to_sql("Products out of stock?")
# → SELECT * FROM inventory WHERE quantity = 0;
```

---
layout: two-cols-header-2
class: smaller-text
---

## Prompt Engineering vs. Fine-Tuning: The 2025 Verdict

::left::

### Prompt Engineering Won
- **Zero setup cost** beats training every time
- **Instant iteration** vs hours/days of training
- **Good enough** for 95% of use cases
- Modern models so capable that prompting suffices

**Winner:** API providers (OpenAI, Anthropic)  
**Loser:** ML infrastructure companies

::right::

### Fine-Tuning: Niche Use Cases
- **Extreme latency requirements** (edge devices)
- **Regulatory compliance** (on-prem)
- **Cost optimization** at massive scale
- **Unique domain languages** (protein folding)

---
layout: two-cols-header-2
---

## Model Size Wars: David vs Goliath

::left::

### Small Models
**Llama 3.3 70B, Qwen 2.5, Gemma 3**
- **Sweet spot:** Good enough for 80% of tasks
- **Run locally** on M4 Max / RTX 4090
- **Privacy first** (no data leaves device)
- **Use cases:**
  - Code completion
  - Personal assistants
  - Edge computing

::right::

### Large Models
**GPT-4o, Claude 3.5, Gemini 2.0**
- **Context windows:** 200K+ tokens
- **Multimodal** by default
- **Built-in tools** and web access
- **Use cases:**
  - Complex reasoning
  - Research synthesis
  - Creative work

---
layout: image-right
image: image-12.png
backgroundSize: contain
class: smaller-text
---

## Retrieval-Augmented Generation (RAG)

**The Pattern Everyone Uses:**
1. **Chunk** documents into semantic pieces
2. **Embed** chunks → vector database
3. **Retrieve** relevant chunks for query
4. **Generate** answer with citations

**What's New in 2025:**
- **Hybrid search** (vectors + keywords)
- **Multi-hop reasoning** over documents
- **Self-correcting** retrieval loops
- **Streaming RAG** for real-time data

**Dirty Secret:** Most "AI products" = RAG + nice UI

---
layout: image-right
image: image-9.png
backgroundSize: contain
---

## Deep Research

**What It Is:**
- AI agents conducting multi-hour research sessions across the web and documents
- Synthesizing hundreds of sources creating comprehensive reports

**How It Works:**
1. **Query decomposition** → sub-questions
2. **Parallel search** across domains
3. **Source validation** and deduplication  
4. **Iterative refinement** based on gaps
5. **Synthesis** with citations


---
layout: image-right
image: image-13.png
backgroundSize: contain
---

## LLM Tool Calling

LLMs often can’t do math precisely, access real-time data, or solve complex domain-specific tasks. Tools offer a way to extend their capabilities.

This is similar to when you or me use a calculator to handle a task we can't purely in our head.

- **Accuracy**: Offload tricky operations (math, date/time) to specialized services.
- **Freshness**: Query web or internal APIs for the latest info.
- **Extended Capabilities**: LLM can orchestrate more complex tasks beyond text generation (e.g., code execution, image generation).

---
layout: two-cols-header-2
---

## Function Calling or Tool Invocation

::left::
1. **Prompt**: LLM sees something like:  
   “You can use these tools: Calculator, GoogleSearch. If a question requires it, call the tool with an argument.”

2. **LLM Output**: 
   ```
   I need to call: Calculator({"expression": "2+2"})
   ```
3. **System**: Actually performs the operation: `2+2=4`
4. **LLM**: Receives result `"4"` → continues answer.

::right::
```python
@tool
def multiply(a: int, b: int) -> int:
    """Multiply two numbers."""
    return a * b

user_input = "What's 2*2?"
answer = model.query(user_input, tools=[multiply])
print(final_answer)  # "The answer is 4."
```

This is a toy example loosely based on langchain because every LLM API has its own way of calling tools right now.

---
layout: two-cols-header-2
---

## Structure Data Generation

::left::

- LLMs are great at generating text, but they often produce unstructured or inconsistent output.
- Structured data generation helps us define the format we want and ensures the LLM returns data in that format.
- This is especially useful for applications that require structured data, like databases or APIs.

**This is also great if you're trying to write a DnD Campaign!**

::right::

```python
from langchain_core.pydantic_v1 import BaseModel, Field

class Joke(BaseModel):
    setup: str = Field(description="The setup of the joke")
    punchline: str = Field(description="The punchline to the joke")
    rating: int|None = Field(description="How funny the joke is, from 1 to 10")

structured_llm = llm.with_structured_output(Joke)
structured_llm.invoke("Tell me a joke about cats")

# Output:
#   Joke(
#       setup='Why was the cat sitting on the computer?',
#       punchline='To keep an eye on the mouse!',
#       rating=None,
#   )
```

---
layout: image-right
image: image-14.png
backgroundSize: contain
---

## Agents: Letting LLMs Autonomously Act

- **Definition**: An “agentic” LLM is not just responding once, but can:
  1. Plan a multi-step approach
  2. Call external tools or APIs as needed
  3. Maintain intermediate “memory”
  4. Decide when it’s done or needs more info

Agents can break down tasks, gather data, synthesize and handle more complex workflows.

They also allow us to create domain-specific specialist models. Possibly across different companies or teams.

---
layout: section
hideInToc: true
---

# Emerging Frameworks

---
layout: two-cols-header-2
---

## LangChain
<p class="subheading">API Wrappers</p>

::left::

- A framework for building applications with LLMs.
- It wraps around LLM APIs and provides a consistent interface for:
    - Prompt management
    - Tool invocation
    - Memory management
    - Agentic workflows
- Big first-movers advantage in the LLM space.
- **Generally hated by everyone I know.**

Langchain is a bad implementation of a good idea. Ultimately, a handful of patterns will emerge and we'll need **community standards**.

::right::

```python
from langchain.tools import StructuredTool
from pydantic import BaseModel, Field

class CalculatorInput(BaseModel):
    a: int = Field(description="first number")
    b: int = Field(description="second number")

def multiply(a: int, b: int) -> int:
    """Multiply two numbers."""
    return a * b

calculator = StructuredTool.from_function(
    func=multiply,
    name="Calculator",
    description="multiply numbers",
    args_schema=CalculatorInput,
    return_direct=True,
)
```

---
layout: image-right
image: image-6.png
backgroundSize: contain
---

## Model Context Protocol (MCP)

- **Open protocol** by Anthropic for LLM-to-tool communication
- Standardizes how agents connect to external data sources and deterministic code functions.
- **Key components:**
  - Servers expose resources (databases, APIs, files)
  - Clients (LLMs) request data via standardized format
  - Transport layer (stdio, HTTP/SSE)


---
layout: image-right
image: image-8.png
backgroundSize: contain
---

# A2A (Application-to-Application)

- **Direct AI-to-AI communication** without human intermediation
- LLMs calling other LLMs/AI services programmatically
- **Current examples:**
  - ChatGPT ↔ Claude via APIs
  - Multi-agent systems (AutoGPT, BabyAGI)
- **Challenges:** Error propagation, cost explosion, alignment
- **Future:** <u>Agent marketplaces</u>

---
layout: section
---

## Some Emerging Libraries

---
layout: two-cols-header-2
---

## Not-Diamond
<p class="subheading">Model Arbitrage</p>

::left::

- An AI model evaluation and recommendation framework.
- Helps predict which LLM is best-suited to respond to each input.
- Goal is to improve the accuracy and efficiency of LLMs in real-world applications while reducing costs.

**Not-Diamond is a "bridge technology."**

I suspect that models will become _more_ general with time, not less. Not-Diamond is a in a great position to capitalize on the diversity of models available today.

::right::

```python
from notdiamond import NotDiamond

# Define the Not Diamond routing client
client = NotDiamond()

# The best LLM is determined by Not Diamond based on the messages and specified models
result, session_id, provider = client.chat.completions.create(
    messages=[ 
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Concisely explain merge sort."}  # Adjust as desired
    ],
    model=['openai/gpt-4o', 'openai/gpt-4o-mini', 'anthropic/claude-3-5-sonnet-20240620']
)

print("Not Diamond session ID: ", session_id)  # A unique ID of Not Diamond's recommendation
print("LLM called: ", provider.model)  # The LLM routed to
print("LLM output: ", result.content)  # The LLM response
```

---
layout: two-cols
---

## Instructor
<p class="subheading">Structured Data Former</p>

- A Python library for getting structured data from language models.
- It helps you define the data structure you want and ensures the LLM returns data in that format.
- It validates the output and can automatically fix issues.
- Built on top of Pydantic, it manages validation context, retries with Tenacity, and streaming responses.

Libraries like these have a big opportunity to "structure" the unstructured datasets for Pandas.

https://python.useinstructor.com/

::right::

```python
import instructor
from pydantic import BaseModel
from openai import OpenAI

# Define your desired output structure
class ExtractUser(BaseModel):
    name: str
    age: int

# Patch the OpenAI client
client = instructor.from_openai(OpenAI())

# Extract structured data from natural language
res = client.chat.completions.create(
    model="gpt-4o-mini",
    response_model=ExtractUser,
    messages=[{"role": "user", "content": "John Doe is 30 years old."}],
)

assert res.name == "John Doe"
assert res.age == 30
```

---
layout: two-cols
---

## Other Weird Tools

Lots of libraries are emrging that help us integrate chat models into our applications in new and interesting ways.

[**MetaGPT**](https://github.com/geekan/MetaGPT): A Multi-Agent (agentic) Workflow framework.

[**Magentic**](https://github.com/jackmpcollins/magentic): Something like an easier-to-use version of LangChain.

[**LLM Wrapper**](https://github.com/meirm/llm_wrapper/tree/main): A (toy) library for generate functions from LLMs. The "prompt" is the function signature and docstring. 

[**BabyAGI**](https://github.com/yoheinakajima/babyagi): A (toy) library for building a self-building agent that writes its own code.

::right::

```python
from llm_wrapper import llm_func
from langchain_openai import OpenAI

@llm_func
def famous_quote() -> str:
    """Returns a famous quote according to the subject provided."""
    pass

llm = OpenAI()

query = "Peace and War"
quote = famous_quote(llm=llm, query=query)
print(quote)  # Output: "Peace is not a relationship of nations. It is a condition of mind brought about by a serenity of soul. Peace is not merely the absence of war. It is also a state of mind. Lasting peace can come only to peaceful people. - Jawaharlal Nehru

@llm_func
def check_grammar() -> float:
    """Check the grammar of the sentence and return a float number between 0 and 1 reflecting its correctness."""
    pass

query = "I are a student."
correctness = check_grammar(llm=llm, query=query)
print(correctness)  # Output: 0.5

query = "I am a student."
correctness = check_grammar(llm=llm, query=query)
print(correctness)  # Output: 1.0
```

---
layout: section
hideInToc: true
---

# Emerging Consumer Products

---
layout: image-right
image: image.png
backgroundSize: contain
---

## Cursor
<p class="subheading">Coding Tools</p>

- A code editor built on top of VSCode.
- Integrates LLMs to provide real-time code suggestions, documentation, and debugging help.
- Loads the entire codebase into the context window.
- Users subscribe to a monthly plan for access to models.
- Much more powerful than Github Copilot.

This is pretty popular among my network right now. They're also now **the fastest growing SAAS company in history** at $100M in 12 months.

---
layout: image-right
image: image-4.png
backgroundSize: contain
---

## Granola
<p class="subheading">AI Notetakers</p>

- A tool that listens to Zoom calls and generates summaries, action items, and follow-ups.
- Uses LLMs to analyze the conversation and extract key points.
- Can integrate with your calendar to automatically summarize meetings.
- You can "chat with" your conversation history to get more context or ask follow-up questions.

This is one that I personally use at work. Our sales team uses another version called **Gong**. Zoom has launched its own compeditor.


---
layout: image-right
image: image-2.png
backgroundSize: contain
---

## Bee
<p class="subheading">AI Journalers</p>

- Similar to Granola, but for your life.
- A personal assistant that listens to your conversations and journals for you.
- Users report an eery feeling of being "watched" and hallucinations are especially disturbing.

---
layout: image-right
image: image-1.png
backgroundSize: contain
---

## Onyx
<p class="subheading">Personal Chat Bots</p>

- Personal or Team chat platform that integrates with your data sources.
- Team Use:
    - Chat logs (Slack, Discord, etc.)
    - Knowledge base (Confluence, Salesforce, etc.)
    - Document storage (Google Drive, Dropbox, etc.)
    - Zoom Calls (Gong, etc.)
- Personal Use:
    - I know (of) some people who integrate it with personal Obsidian.

---
layout: section
hideInToc: true
---

# Some Old-Man Thoughts About Using LLMs

---
layout: image-right
image: image-17.png
backgroundSize: contain
---

## In Coding

- When I startd my career using Vim and nothing more than a syntax highlighter.
- Now I use:
    - A static linter
    - A static type-checker
    - A code formatter
    - An LLM copilot
- LLM-driven Strategies
    - Comment-driven coding
    - Use simple frameworks the LLM can fit in context (Flask, HTMX, AlpineJS)

**Strong fundamentals and experience writing code will get you further than memorizing a library.**

---
layout: image-right
image: image-19.png
backgroundSize: contain
---

## Embrace Plain Text
- Learn and write in Markdown
    - Bear, Obsidian, Mkdocs
- The slides for this class are written in Markdown (using Slidev).
- Learn latex for math and writing

<br><br>

$\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} \left( y_i - \hat{y}_i \right)^2$

$\text{MSE} = \frac{1}{n} \left( \mathbf{y} - \hat{\mathbf{y}} \right)^\top \left( \mathbf{y} - \hat{\mathbf{y}} \right)$

---
layout: image-right
image: image-5.png
backgroundSize: contain
---

## Follow the Hobbyists

- Following a bunch of people talking about new approaches is a great way to learn.

- Your classes are not going to teach you this stuff because your professors don't know it.

- You're in a unique position to adopt ths technology faster than anyone else.

- Share what you learn with each other!

---
