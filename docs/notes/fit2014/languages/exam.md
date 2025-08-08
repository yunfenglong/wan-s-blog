---
title: Exam Prep
icon: streamline-freehand-color:newspaper-fold
createTime: 2025/08/07 16:03:26
permalink: /fit2014/exam/languages/
---
::: note
This section is summarized based on the notes given by [Han Si Yi](https://github.com/HonSzeYee)
:::

## Logical Equivalences

| Name | Formula |
|------|---------|
| De Morgan's Laws | $\neg(P \lor Q) \equiv \neg P \land \neg Q$ |
| De Morgan's Laws | $\neg(P \land Q) \equiv \neg P \lor \neg Q$ |
| Implication | $P \to Q \equiv \neg P \lor Q$ |
| Biconditional | $P \leftrightarrow Q \equiv (P \to Q) \land (P \leftarrow Q)$ |
| Biconditional Alternative | $P \leftrightarrow Q \equiv (\neg P \lor Q) \land (P \lor \neg Q)$ |

## CNF (Conjunctive Normal Form) Patterns

### At Least K True

| Condition | Formula |
|-----------|---------|
| At least one from \{a,b\} | $a \lor b$ |
| At least one from \{a,b,c\} | $a \lor b \lor c$ |
| At least one from \{a,b,c,d\} | $a \lor b \lor c \lor d$ |
| At least two from \{a,b\} | $a \land b$ |
| At least two from \{a,b,c\} | $(a \lor b) \land (a \lor c) \land (b \lor c)$ |
| At least two from \{a,b,c,d\} | $(a \lor b \lor c) \land (a \lor b \lor d) \land (a \lor c \lor d) \land (b \lor c \lor d)$ |
| At least three from \{a,b,c\} | $a \land b \land c$ |
| At least three from \{a,b,c,d\} | $(a \lor b) \land (a \lor c) \land (a \lor d) \land (b \lor c) \land (b \lor d) \land (c \lor d)$ |

### At Most K True

| Condition | Formula |
|-----------|---------|
| At most one from \{a,b\} | $\neg a \lor \neg b$ |
| At most one from \{a,b,c\} | $(\neg a \lor \neg b) \land (\neg a \lor \neg c) \land (\neg b \lor \neg c)$ |
| At most one from \{a,b,c,d\} | $(\neg a \lor \neg b) \land (\neg a \lor \neg c) \land (\neg a \lor \neg d) \land (\neg b \lor \neg c) \land (\neg b \lor \neg d) \land (\neg c \lor \neg d)$ |
| At most two from \{a,b,c\} | $\neg a \lor \neg b \lor \neg c$ |
| At most two from \{a,b,c,d\} | $(\neg a \lor \neg b \lor \neg c) \land (\neg a \lor \neg b \lor \neg d) \land (\neg a \lor \neg c \lor \neg d) \land (\neg b \lor \neg c \lor \neg d)$ |
| At most three from \{a,b,c,d\} | $\neg a \lor \neg b \lor \neg c \lor \neg d$ |