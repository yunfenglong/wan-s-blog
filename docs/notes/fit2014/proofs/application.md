---
title: Application
createTime: 2025/08/10 14:15:45
permalink: /fit2014/fhclofu2/
---

### **(a) Prove, by induction on $n$, that for all $n \ge 3$, $n! \le (n-1)^n$**

::: card title="Proposition $P(n)$"
The statement to prove is $P(n): n! \le (n-1)^n$ for all integers $n \ge 3$.
:::

::: card title="Inductive Proof"
:::: steps
1.  **Base Case: $P(3)$**
    For $n=3$, we check if $3! \le (3-1)^3$.
    * $3! = 6$
    * $(3-1)^3 = 2^3 = 8$
    Since $6 \le 8$, the proposition $P(3)$ holds true.

2.  **Inductive Hypothesis**
    Assume that $P(k)$ is true for some arbitrary integer $k \ge 3$.
    That is, we assume: $k! \le (k-1)^k$.

3.  **Inductive Step: Proving $P(k+1)$**
    We want to prove that $(k+1)! \le k^{k+1}$.
    Let's start with the left-hand side of the inequality for $P(k+1)$:
    $$(k+1)! = (k+1) \times k!$$
    Using our Inductive Hypothesis ($k! \le (k-1)^k$), we can substitute to get:
    $$(k+1)! \le (k+1) \times (k-1)^k$$
    Now, we need to show that this result is less than or equal to the right-hand side of $P(k+1)$, which is $k^{k+1}$. We must prove:
    $$(k+1)(k-1)^k \le k^{k+1}$$
    Let's divide both sides by $k^k$. This is allowed as $k \ge 3$.

    $$(k+1)\frac{(k-1)^k}{k^k} \le k$$
    $$(k+1)\left(\frac{k-1}{k}\right)^k \le k$$  
    $$(k+1)\left(1 - \frac{1}{k}\right)^k \le k$$

    From Bernoulli's inequality or the binomial expansion, we know that for $k \ge 1$, $\left(1 - \frac{1}{k}\right)^k < \frac{1}{e}$. Also, $\left(1 - \frac{1}{k}\right)^k$ is an increasing function. Its value at $k=3$ is $(2/3)^3 = 8/27 \approx 0.296$.
    Another known inequality is that for $x > 1$, $(1 - 1/x)^x < 1/e < 1/2$. For $k \ge 3$, we have:
    $$(k+1)\left(1 - \frac{1}{k}\right)^k < \frac{k+1}{e}$$
    To complete the proof, we would need to show $\frac{k+1}{e} \le k$, which means $k+1 \le ek$, or $1 \le (e-1)k$. Since $e-1 \approx 1.718$ and $k \ge 3$, this inequality holds.
    Thus, $P(k+1)$ is true.

4.  **Conclusion**
    The base case is true, and the inductive step has been proven. By the Principle of Mathematical Induction, $n! \le (n-1)^n$ for all $n \ge 3$.
::::


---

### **(b) [Challenge] Can you use a similar proof to show that $n! \le (n-2)^n$?**

::: details Click to explore the challenge
**Assumption on $n$**

Let's first test for which values of $n$ the inequality $n! \le (n-2)^n$ might hold.
* For $n=3$: $3! = 6$, but $(3-2)^3 = 1^3 = 1$. $6 \le 1$ is **False**.
* For $n=4$: $4! = 24$, but $(4-2)^4 = 2^4 = 16$. $24 \le 16$ is **False**.
* For $n=5$: $5! = 120$, but $(5-2)^5 = 3^5 = 243$. $120 \le 243$ is **True**.
* For $n=6$: $6! = 720$, but $(6-2)^6 = 4^6 = 4096$. $720 \le 4096$ is **True**.

It appears we need to make the assumption that **$n \ge 5$**. A similar inductive proof could be attempted with $n=5$ as the base case, but the algebraic manipulation in the inductive step would be more challenging.

**How far can this be pushed?**

This question is about finding a tighter upper bound for $n!$ in the form $f(n)^n$. A very important result in mathematics that gives an approximation for the factorial function is **Stirling's Approximation**:
$$n! \approx \sqrt{2\pi n} \left(\frac{n}{e}\right)^n$$
From this approximation, we can see that $n!$ grows roughly on the order of $(\frac{n}{e})^n$. This suggests that the best integer-based function $f(n)$ would be related to $\frac{n}{e}$.
Since $e \approx 2.718$, we can see why $(n-2)^n$ is a reasonable bound (for $n \ge 5$), and $(n-3)^n$ would likely fail, as $f(n)=n-3$ would be a much smaller base than $n/e$.

Therefore, the best upper bound of the form $f(n)^n$ would involve a function $f(n)$ that is close to $\frac{n}{e}$.
:::