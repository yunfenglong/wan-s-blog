---
title: Revision Seminar
createTime: 2025/06/10 10:25:59
permalink: /fit2004/4wrqvzov/
---

__Materials:__ [Video 1](https://youtu.be/v0hT7F_n_Sw), [Video 2](https://youtu.be/HwZYMT767uc), [Video 3](https://youtu.be/sy-mFw4lDkQ), [Video 4](https://youtu.be/bqUmVSj_rxE), [Video 5](https://youtu.be/DTpBszSWikA)

## Recurrence Relationship

#### Solving Recurrence Relationship

1. $T(N)=T(N-a) + b*N^c$ →  $O(N(N-a+b*N^c))$
2. $T(N) = a*T(N/b) + N*c$ → Use Master Theorem
    1. $log_b a < c$ → $O(N^c)$
    2. $log_b a = c$ → $O(N^c * log(N))$
    3. $log_b a > c$ → $O(N^{log_b a})$

:::tip Key Points
- Get the ==dominated term==
- If they are the same, leave two or just pick one (depends on what options you have)
:::

## Sorting Algorithms

#### Complexity and Loop Invariant

| Algorithm | Worst Case | Aux Space | Loop Invariant |
| --- | --- | --- | --- |
| Bubble Sort | $O(N^2)$ | $O(1)$ | 1. array[n-i+1] is sorted <br/> 2. array[j] ≥ array[0…j] |
| Selection Sort | $O(N^2)$ | $O(1)$ | 1. array[0…i] is sorted <br/> 2. array[0…i-1] ≤ array[i…N] |
| Insertion Sort | $O(N^2)$ | $O(1)$ | 1. array[0…i] is sorted <br/> 2. array[0…j-1] ≤ array[j…i] |
| Quick Select | $O(N^2)$ | $O(1)$ | k-th smallest elements in the array[low…high] found |
| Quick Sort | $O(N^2)$ | $O(log N)$ | array[low...i] <= pivot < array[i+1...j-1] |
| Quick Sort with DNF | $O(N^2)$ | $O(log N)$ | 1. array[low...lt-1] < pivot <br/> 2. array[lt...gt] == pivot <br/> 3. array[gt+1...high] > pivot |
| Counting Sort | $O(N + k)$, where k is the counter | $O(N + k)$, where k is the counter | — |
| Radix Sort | $O(kN)$, where k is the number of digit of the integer | $O(N + b)$, where b is the base of the integer | — |

:::warning Important
- Implement the code and get the ==loop invariant== understanding
- What is the loop invariant of __every algorithm__ you have learned?
:::

## Suffix Trie and Tree

#### Complexity

|  | Worst Time | Aux Space |
| --- | --- | --- |
| Suffix Trie | $O(N^2)$ | $O(N^2)$ |
| Suffix Tree | $O(N)$ | $O(N)$ |

**Explanation of achieving this complexity**

A **Suffix Trie** is a trie that contains all the suffixes of a given string. For a string of length 'n', there are 'n' suffixes. In the worst-case scenario (e.g., a string of all different characters like "abcdef"), the total number of nodes in the trie can be the sum of the lengths of all suffixes, which is 1 + 2 + ... + n = O(n²)

A **Suffix Tree** improves upon this by compressing paths. Any node in the trie that has only one child is merged with its child. This significantly reduces the number of nodes and edges, bringing the space complexity down to O(n). Algorithms like Ukkonen's and McCreight's can construct a Suffix Tree in O(n) time.

#### Prefix doubling with O(1) comparison

:::note Prefix Doubling
- Make sure to know the ==O(1) comparison trick== for this technique
:::

## Graph

#### Complexity and Combinations of Data Structures

|  | Worst Time with Adjacency Matrix | Aux Space with Adjacency Matrix | Worst Time with Adjacency List | Aux Space with with Adjacency List | Handle with negative edges | Main Goal |
| --- | --- | --- | --- | --- | --- | --- |
| Dijkstra | $O(V^2)$ | $O(V^2)$ | $O((E+V)logV)$ | $O(V)$ | **Only S to next node** | Shortest Path (Single Source) |
| Bellman-Ford | $O(V^3)$ | $O(V^2)$ | $O(V\cdot E)$ | $O(V)$ | Yes | Shortest Path (Single Source) |
| Floyd-Warshall | $O(V^3)$ | $O(V^2)$ |  |  | Yes | Shortest Path (All-Paris) |
| Prim’s | $O(V^2)$ | $O(V^2)$ | $O((E+V)logV)$ | $O(V)$ | Yes | Minimum Spanning Tree |
| Kruskal’s |  |  | $O(E log E)$ | $O(E + V)$ | Yes | Minimum Spanning Tree |
| BFS | $O(V^2)$ | $O(V^2)$ | $O(V + E)$ | $O(V)$ |  |  |
| DFS | $O(V^2)$ | $O(V^2)$ | $O(V + E)$ | $O(V)$ |  |  |

#### Apply a algorithm to Graphs

|  | Single Destination | Multiple Sources |
| --- | --- | --- |
| Single Source | 1. Dijkstra's: Best choice if no negative edges exist. It's the fastest. <br/> 2. Bellman-Ford: Use if negative edges exist. | 1. Dijkstra's: From source S if no negative edges. <br/> 2. Bellman-Ford: From source S if negative edges exist. |
| Multiple Destinations | Dijkstra's / Bellman-Ford: On the reversed graph, starting from T. | Floyd-Warshall |

#### Identifying the Negative Cycles

| Algorithm |  |
| --- | --- |
| Bellman-Ford | A negative cycle is present if, after running the main loop of the Bellman-Ford algorithm for V-1 iterations (where V is the number of vertices), a subsequent V-th iteration still results in a shorter path for any vertex. |
| Floyd-Warshall | The presence of a negative cycle is determined by examining the diagonal of the final distance matrix computed by the algorithm. If any of the diagonal values are negative, it signifies that the corresponding vertex i is part of a negative cycle. |

#### Finding Minimum and Maximum Spanning Tree

**Minimum Spanning Tree**

1. Kruskal's Algorithm: Sorts all edges by weight in ascending (smallest to largest) order. It adds edges to the tree as long as they don't form a cycle.
2. Prim's Algorithm: Starts from an arbitrary vertex and greedily grows the tree. In each step, it adds the cheapest edge that connects a vertex in the tree to a vertex outside the tree, typically using a min-priority queue.

**Maximum Spanning Tree**

1. Negate the Edge Weights (The Easiest Trick)
2. Modify the Code Logic

#### Graph Operations

| Operation | Graph Representation | Time Complexity |
| --- | --- | --- |
| Check if edge exists (Outgoing) | Adjacency Matrix | $O(1)$ |
| Check all adjacent vertices (Incoming + outgoing) | Adjacency Matrix | $O(V)$ |
| Check if edge exists (Outgoing) | Adjacency List | $O(V)$ or $O(N(A))$ |
| Check all adjacent vertices (Incoming + outgoing) | Adjacency List | $O(V+E)$ → without reverse list or $O(V)$ →with reverse list |
| with BFS to check if edge exists | Adjacency List | $O(V + E)$ |
| with BFS to check all adjacent vertices | Adjacency List | $O(N(A))$ |
| with BFS to check if edge exists | Adjacency List (Not Connected) | $O(V)$ or $O(N(A))$ |
| with BFS to check all adjacent vertices | Adjacency List (Not Connected) | $O(N(A))$ |
| with BFS to check if edge exists | Adjacency Matrix | $O(1)$ |
| with BFS to check all adjacent vertices | Adjacency Matrix | $O(V)$ |
| with DFS to check if edge exists | Adjacency List (Not Connected) | $O(V)$ or $O(N(A))$ |
| with DFS to check all adjacent vertices | Adjacency List (Not Connected) | $O(N(A))$ |
| with Dijkstra to check if all adjacent vertices | Adjacency List | $O(N(A))$ |
| with Dijkstra to check if all adjacent vertices | Adjacency Matrix | $O(V)$ |

## Dynamic Programming

#### Approach

1. Bottom-up
2. Top-down

#### Complexity and Recurrence Relation

:::tip Complex DP Problems

The following table summarizes common dynamic programming problems with their complexity and recurrence relations:

:::

| Algorithm | Time | Space | Goal |
| --- | --- | --- | --- |
| **House Robber** | $O(N)$ | $O(N)$ | Max profit, can't rob adjacent houses |
| **House Robber II** | $O(N)$ | $O(N)$ | Max profit, circular array, can't rob adjacent |
| **Maze Paths** | $O(N^2)$ | $O(N^2)$ | Count ways to reach destination |
| **Maze with Coins** | $O(N^2)$ | $O(N^2)$ | Maximum coins collectible |
| **Longest Increasing Subsequence** | $O(N^2)$ | $O(N)$ | Find LIS length |
| **Longest Common Subsequence** | $O(NM)$ | $O(NM)$ | Find LCS of two strings |
| **Edit Distance** | $O(NM)$ | $O(NM)$ | Min operations to transform string |
| **Maximum Subarray (2D)** | $O(N^2)$ | $O(N^2)$ | Max sum subarray |
| **Maximum Subarray (Kadane)** | $O(N)$ | $O(N)$ | Max sum subarray |

:::important Recurrence Relations

**House Robber:** `memo[i] = max(memo[i-2] + house[i], memo[i-1])`

**Maze Paths:** 
- Base: `memo[0][m-1] = 1`
- Recurrence: `memo[i][j] = memo[i-1][j] + memo[i][j+1]`

**LCS:** `memo[i][j] = max(memo[i-1][j-1] + (a[i]==b[j] ? 1 : 0), memo[i-1][j], memo[i][j-1])`

**Kadane's Algorithm:** `memo[i] = max(memo[i-1] + arr[i], arr[i])`

:::

## Flow Network

Approach:

1. Apply Shortcut
2. Solve for Ford-Fulkerson
3. Do the residual network
    1. Demand and Lower Bounds
        1. Removing Demand
        2. Removing lower bound

## Searching Trees

#### AVL Tree

1. Using Ian’s method

#### 2-3 Tree

1. Every node is either 2-node or 3-node
2. Can only insert at leaf
3. ~~Can only delete at leaf~~

#### RB Tree

1. Root is always black
2. Can only insert at leaf and colored RED node
3. ONLY OK If inserted is LEFT child of black -> use the median trick

## Application

1. Mainly focus on complexity