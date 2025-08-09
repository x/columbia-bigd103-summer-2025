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
