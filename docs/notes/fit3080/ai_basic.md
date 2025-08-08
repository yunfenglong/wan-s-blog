---
title: Introduction to Artificial Intelligence
createTime: 2025/08/03 15:02:32
permalink: /fit3080/94l7fkfk/
---

## What is Artificial Intelligence?

Artificial Intelligence (AI) is a dynamic field in computer science with two primary objectives:

::: flex around center
::: card title="Understand Intelligence" icon="carbon:cognitive"
The first goal is to comprehend the very nature of intelligence itself.
:::
::: card title="Build Intelligent Systems" icon="carbon:chip"
The second goal is to construct machines and systems that exhibit intelligent behavior.
:::

### The Ingredients of Intelligence

While there's no single definition, we can identify several key characteristics that constitute an intelligent entity:

:::: steps

1.  **Communication**
    The ability to exchange and understand information.

2.  **Knowledge & Memory**
    Possessing internal knowledge and the capacity to remember and recall information.

3.  **World Model**
    Having an internal representation or model of the external world.

4.  **Intentionality**
    The capacity to have goals and formulate plans to achieve them.

5.  **Creativity**
    The ability to generate new and original ideas or solutions.
    ::::

### Defining AI Through the Years

The definition of AI has been articulated in various ways by pioneers in the field, reflecting its evolving focus.

::: timeline placement="between"

- Bellman's Definition
  time=1978 type=tip icon=carbon:chat-bot

  "[The automation of] activities that we associate with human thinking, activities such as decision-making, problem solving, learning ..."

- Rich and Knight's Definition
  time=1991 type=success placement=right icon=carbon:laptop

  "The study of how to make computers do things at which, at the moment, people are better."

- Winston's Definition
  time=1992 type=warning icon=carbon:function

  "The study of computations that make it possible to perceive, reason, and act."
:::

-----

## Core Approaches to AI

The pursuit of AI can be understood through different philosophical and practical lenses. We can categorize these approaches into two main dichotomies.

::: tabs

@tab Human vs. Rational

The first distinction is based on whether the goal is to replicate human-like processes or to achieve an ideal form of rationality.

  - **Thinking Humanly**: Focuses on emulating the human thought process.
  - **Acting Humanly**: Aims to create systems that behave in ways indistinguishable from humans.
  - **Thinking Rationally**: Involves modeling thought as a formal, logical process.
  - **Acting Rationally**: ==The primary focus of this course=={.important}, this approach aims to build agents that consistently take the optimal action to achieve their goals.

@tab Strong vs. Weak AI

This division is based on the ultimate ambition of the AI system.

**`Strong AI`**

  - **Goal**: To build a machine that is genuinely ==conscious and capable of thought=={.danger}.
  - **Perspective**: A top-down, philosophical approach that asks: *Does the program actually think?*
  - **Strategy**: Seeks to develop a universal strategy for intelligence.

**`Weak AI`**

  - **Goal**: To build a machine that ==acts as if it were intelligent=={.success}, without making claims about consciousness. It's like a submarine "swimming".
  - **Perspective**: A bottom-up, pragmatic approach focused on performance: *Does the program work?*
  - **Strategy**: Creates domain-specific solutions for narrow tasks, such as a chess program or a language translator.

:::

### Understanding Rational Action

> **Rational behavior** is about always doing the ==best thing=={.tip}.

The "best thing" is the action that **maximizes the expected performance** towards a goal, given all available information. However, this is often constrained.

  - **Bounded Rationality**
    This concept acknowledges that real-world agents have limited resources (like CPU time and memory). Therefore, the goal becomes doing the best *possible* action under these constraints.

This course defines AI as the study and construction of **rational agents**: systems designed to do the right thing.


## Milestones in AI

The field of AI has achieved remarkable successes that have captured public imagination and earned prestigious scientific accolades.

::: timeline placement="between"

- AlphaGo's Victory
  time=2016 type=success icon=carbon:trophy

  In 2016, Google DeepMind's AlphaGo defeated world champion Lee Sedol in the game of Go, a significant milestone in AI.

- Autonomous Driving
  time=Ongoing type=info placement=right icon=carbon:car

  Companies like Cruise continue to make significant progress in developing and testing self-driving cars.

- Generative AI
  time=2024 type=tip icon=carbon:video-add

  Models like OpenAI's Sora, capable of generating video from text prompts, demonstrate massive leaps in creative AI capabilities.

- Nobel Recognition
  time=2024 type=important placement=right icon=carbon:badge

  The Nobel Prizes in both Physics and Chemistry were awarded for foundational research in AI.
:::

    