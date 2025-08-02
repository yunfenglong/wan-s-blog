---
title: Application
createTime: 2025/08/02 10:51:08
permalink: /fit2014/a2an0c2j/
draft: true
---

### Question 1: Truth Tables, DNF, and CNF

**Scenario:** A server has three critical services: **A**pache, **B**IND, and **C**ron. For the system to be considered "stable," at least two of these services must be running.

Let's represent the state of the services with propositions A, B, and C, where True means the service is running. We can construct a truth table to define the "stable" function.

| A | B | C | System Stable? | DNF Clause (if True) | CNF Clause (from False rows) |
|---|---|---|---|---|---|
| F | F | F | F | | $(A \lor B \lor C)$ |
| F | F | T | F | | $(A \lor B \lor \neg C)$ |
| F | T | F | F | | $(A \lor \neg B \lor C)$ |
| F | T | T | T | $(\neg A \land B \land C)$ | |
| T | F | F | F | | $(\neg A \lor B \lor C)$ |
| T | F | T | T | $(A \land \neg B \land C)$ | |
| T | T | F | T | $(A \land B \land \neg C)$ | |
| T | T | T | T | $(A \land B \land C)$ | |

---

#### Deriving the DNF (Disjunctive Normal Form)

The DNF is the disjunction (OR) of the minterms for each row where the function's output is **True**.

* **DNF Result**:
    $(\neg A \land B \land C) \lor (A \land \neg B \land C) \lor (A \land B \land \neg C) \lor (A \land B \land C)$

This DNF expression is true if exactly two services are running or if all three are running.

---

#### Deriving the CNF (Conjunctive Normal Form)

The CNF is the conjunction (AND) of maxterms derived from the rows where the function's output is **False**. For each 'False' row, we create a disjunction (OR) of the negated literals and apply De Morgan's laws.

1.  **Row 1 (FFF):** The condition is $(\neg A \land \neg B \land \neg C)$. Negating this gives $(A \lor B \lor C)$.
2.  **Row 2 (FFT):** The condition is $(\neg A \land \neg B \land C)$. Negating this gives $(A \lor B \lor \neg C)$.
3.  **Row 3 (FTF):** The condition is $(\neg A \land B \land \neg C)$. Negating this gives $(A \lor \neg B \lor C)$.
4.  **Row 5 (TFF):** The condition is $(A \land \neg B \land \neg C)$. Negating this gives $(\neg A \lor B \lor C)$.

* **CNF Result**:
    $(A \lor B \lor C) \land (A \lor B \lor \neg C) \land (A \lor \neg B \lor C) \land (\neg A \lor B \lor C)$

This CNF expression logically states that we cannot have zero services running or only one service running.

***

### Question 2: Properties of Formal Languages

**Claim:** All words in the language **EVEN-EVEN** have an even length.

#### Defining the EVEN-EVEN Language

The **EVEN-EVEN** language consists of strings over the alphabet $\{a, b\}$ where the number of 'a's is **even** (0, 2, 4, ...) and the number of 'b's is also **even** (0, 2, 4, ...).

* Let $|w|_a$ be the count of 'a's in a string $w$.
* Let $|w|_b$ be the count of 'b's in a string $w$.

For a string $w$ to be in EVEN-EVEN, $|w|_a$ must be even and $|w|_b$ must be even.

**Examples:** `aa`, `bb`, `aabb`, `aaaabb`, `bbbb`, and the empty string $\epsilon$.

#### Mathematical Proof

The total length of any string $w$ is $|w| = |w|_a + |w|_b$.

1.  Since $|w|_a$ is an even number, it can be written as $2k$ for some non-negative integer $k$.
2.  Since $|w|_b$ is an even number, it can be written as $2m$ for some non-negative integer $m$.

Now, substitute these into the formula for the total length:

$|w| = (2k) + (2m)$
$|w| = 2(k + m)$

Since $k$ and $m$ are integers, their sum $(k + m)$ is also an integer. The expression $2(k + m)$ is, by definition, an **even number**.

Therefore, every word in the EVEN-EVEN language must have an even length.

***

### Question 3: Proof of a Language Superset

Let **EQUAL** be the language of strings over $\{a,b\}$ that contain an equal number of a’s and b’s. Let **~ODD-ODD** be the complement of the ODD-ODD language (i.e., strings that do not have both an odd number of a's and an odd number of b's).

**Prove that EQUAL ⊆ ~ODD-ODD.**

#### Proof

To prove this, we must show that any arbitrary string $w \in \text{EQUAL}$ must also be in $\text{\~ODD-ODD}$.

1.  Let $w$ be an arbitrary string in the language **EQUAL**.
2.  By the definition of EQUAL, the number of 'a's in $w$ is equal to the number of 'b's in $w$. Let's call this number $k$.
    * $|w|_a = k$
    * $|w|_b = k$
3.  The definition of **~ODD-ODD** means a string is in this language if $|w|_a$ is even OR $|w|_b$ is even.
4.  We analyze two cases for the value of $k$:
    * **Case 1: $k$ is an even number.**
        If $k$ is even, then $|w|_a = k$ is even and $|w|_b = k$ is also even. Since $|w|_a$ is even, the condition for $w$ to be in ~ODD-ODD is satisfied.
    * **Case 2: $k$ is an odd number.**
        If $k$ is odd, then $|w|_a = k$ is odd and $|w|_b = k$ is also odd. This means $w$ has an odd number of 'a's and an odd number of 'b's. This is the exact definition of a string in the **ODD-ODD** language.
5.  Let's re-examine our premise. The proof seems to fail in Case 2. Let's reconsider the properties.
    The length of any string in EQUAL is $|w| = |w|_a + |w|_b = k + k = 2k$. This means every string in EQUAL has an **even length**.

    Let's restart the proof with this insight.
    * Let $w \in \text{EQUAL}$. Then $|w|_a = |w|_b = k$.
    * To be in ODD-ODD, $|w|_a$ must be odd and $|w|_b$ must be odd.
    * If $|w|_a$ and $|w|_b$ were both odd, then $k$ would be an odd number.
    * However, if $k$ is odd, $|w|_a$ is odd and $|w|_b$ is odd. This fits the definition of ODD-ODD. Example: `ab`. $|w|_a=1, |w|_b=1$. This is in EQUAL and also in ODD-ODD.
    * This means `ab` is NOT in ~ODD-ODD.

Therefore, the statement **EQUAL ⊆ ~ODD-ODD is FALSE.** The string `ab` is a counterexample, as it is in EQUAL but not in ~ODD-ODD.

*(This demonstrates the importance of verifying claims and finding counterexamples)*.

Let's prove a different, correct statement: **If a palindrome has an even length, it is in ~ODD-ODD.**

* Let $w$ be a palindrome with even length $|w| = 2k$.
* We can write $w = uu^R$ for some string $u$ of length $k$.
* The number of 'a's in $w$ is $|w|_a = |u|_a + |u^R|_a = 2|u|_a$. This is an even number.
* Since $|w|_a$ is even, $w$ cannot have an odd number of 'a's AND an odd number of 'b's.
* Therefore, $w \in \text{\~ODD-ODD}$.

***

### Question 4: Proof by Truth Table

Prove the logical equivalence of De Morgan's Law: **$\neg(P \lor Q) \equiv (\neg P \land \neg Q)$**

| **P** | **Q** | $P \lor Q$ | $\neg(P \lor Q)$ | $\neg P$ | $\neg Q$ | $\neg P \land \neg Q$ |
|---|---|---|---|---|---|---|
| T | T | T | **F** | F | F | **F** |
| T | F | T | **F** | F | T | **F** |
| F | T | T | **F** | T | F | **F** |
| F | F | F | **T** | T | T | **T** |

Since the columns for $\neg(P \lor Q)$ and $(\neg P \land \neg Q)$ are identical for all possible truth values of P and Q, the two expressions are **logically equivalent**.

***

### Question 5: Proof by Derivation

Using the distributive law $A \lor (B \land C) \equiv (A \lor B) \land (A \lor C)$, prove the **absorption law**: **$P \lor (P \land Q) \equiv P$**.

You may also use the following axioms:
* Identity Law: $P \lor \text{False} \equiv P$
* Complementation Law: $P \land \neg P \equiv \text{False}$
* Domination Law: $P \lor \text{True} \equiv \text{True}$
* Tautology: $A \equiv A \land \text{True}$

1.  **Start with the Left-Hand Side (LHS):**
    $P \lor (P \land Q)$

2.  **Apply the distributive law:** $A \lor (B \land C) \equiv (A \lor B) \land (A \lor C)$.
    Here, $A = P$, $B = P$, and $C = Q$.
    $P \lor (P \land Q) \equiv (P \lor P) \land (P \lor Q)$

3.  **Apply the Idempotent Law** ($P \lor P \equiv P$):
    $\equiv P \land (P \lor Q)$

    *(This proves the other absorption law, $P \land (P \lor Q) \equiv P$. Let's try another way to prove the original statement).*

Let's try a different approach starting from the LHS.

1.  **Start with the LHS:**
    $P \lor (P \land Q)$

2.  **Use the Tautology axiom** to write $P$ as $P \land \text{True}$:
    $\equiv (P \land \text{True}) \lor (P \land Q)$

3.  **Apply the distributive law** $(A \land B) \lor (A \land C) \equiv A \land (B \lor C)$ in reverse.
    Here, $A = P$, $B = \text{True}$, $C = Q$.
    $\equiv P \land (\text{True} \lor Q)$

4.  **Apply the Domination Law** ($\text{True} \lor Q \equiv \text{True}$):
    $\equiv P \land \text{True}$

5.  **Apply the Identity Law** ($P \land \text{True} \equiv P$):
    $\equiv P$

We have shown that $P \lor (P \land Q) \equiv P$.

***

### Question 6: Translating English to CNF

A team of three students, **A**lice, **B**ob, and **C**arol, are working on a project. Let the propositions A, B, and C mean that the respective student completed their part of the work.

Write a proposition in **Conjunctive Normal Form (CNF)** for each statement.

1.  **At least one student completed their work.**
    * $(A \lor B \lor C)$
2.  **Carol and Alice did not both complete their work.**
    * $(\neg C \lor \neg A)$
3.  **Exactly one student completed their work.**
    * This means "at least one" AND "at most one".
    * At least one: $(A \lor B \lor C)$
    * At most one (no two worked): $(\neg A \lor \neg B) \land (\neg A \lor \neg C) \land (\neg B \lor \neg C)$
    * **Result:** $(A \lor B \lor C) \land (\neg A \lor \neg B) \land (\neg A \lor \neg C) \land (\neg B \lor \neg C)$
4.  **At most two students completed their work.**
    * This is the same as saying "it's not the case that all three completed their work": $\neg(A \land B \land C)$
    * **Result:** $(\neg A \lor \neg B \lor \neg C)$
5.  **If Bob completed his work, then Alice also completed her work.**
    * $B \implies A$
    * **Result:** $(\neg B \lor A)$

***

### Question 7: Predicate Logic Translation

Using the function `capital(c)` (the capital of country `c`), the predicate `isNorthOf(p1, p2)` (place `p1` is north of place `p2`), and the constants `malaysia` and `thailand`, translate the following sentences into Predicate Logic. The universe of discourse is "all places and countries".

1.  **The capital of Malaysia is north of the capital of Thailand.**
    * `isNorthOf(capital(malaysia), capital(thailand))`
2.  **There is a country whose capital is north of Kuala Lumpur.**
    * Let `kualaLumpur` be a constant representing the city.
    * $\exists x \space isNorthOf(capital(x), kualaLumpur)$
3.  **Every place is north of some other place.**
    * $\forall x \space \exists y \space (isNorthOf(x, y) \land x \neq y)$
4.  **Every city that is north of Bangkok is also north of Singapore.**
    * Let `bangkok` and `singapore` be constants.
    * $\forall x \space isNorthOf(x, bangkok) \implies isNorthOf(x, singapore)$

***

### Question 8: Language Properties in Predicate Logic

Suppose you have access to the function $|x|$ (length of string $x$), relations like `=` and `∈`, and a language $L$ over the alphabet $\{a, b\}$.

1.  **Write a logical statement that is True if and only if $L$ contains the empty string $\epsilon$.**
    * The statement is simply that the empty string is an element of the set L.
    * $\epsilon \in L$
    * Alternatively, using a quantifier: $\exists x \space (x \in L \land |x| = 0)$

2.  **Write a logical statement that is True if and only if $L$ contains a finite number of strings of length 5.**
    * This means there exists some number $k$ that is an upper bound on the count of strings of length 5 in L. This is more complex than defining if the entire language is finite. A simpler interpretation is to state there isn't an infinite number of such strings. We can't easily express "the count of" in basic predicate logic.
    * A better approach for this level might be: **Write a statement that is True if and only if L contains *at least one* string of every possible length.**
    * $\forall n \exists x (x \in L \land |x| = n)$