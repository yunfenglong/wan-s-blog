---
title: Application
createTime: 2025/08/02 17:36:31
permalink: /fit3143/ehkolxh2/
---

### **1. How would you classify a modern web server using Flynn's Taxonomy?**

A modern web server is best described as a **MIMD (Multiple Instruction, Multiple Data)** system. This is because a web server handles many user requests at the same time, with each user potentially performing a different task (e.g., one user searching, another posting a comment). This corresponds to multiple, independent instruction streams acting on multiple, different data streams.

### **2. Which of Flynn's classifications would be best for applying the same filter to thousands of images?**

The most efficient classification for this hardware would be **SIMD (Single Instruction, Multiple Data)**. The task involves applying one identical operation (the "single instruction") to a vast number of different data elements (the "multiple data" of the images) all at once. This architecture is highly efficient for problems with a high degree of regularity, like image processing.

### **3. What memory architecture does a supercomputer made of networked, multi-core nodes use?**

This system uses a **Hybrid Memory Architecture**.
* **Shared Memory**: At the node level, the multiple cores within a single machine can access that machine's memory as a global, shared resource.
* **Distributed Memory**: The thousands of nodes are connected by a network. To share data between different nodes, network communication is required because one node cannot directly access the memory of another.

### **4. Is a master-slave facial recognition program an example of SPMD or MPMD?**

This structure is best described as **MPMD (Multiple Program, Multiple Data)**. While the slave processors all run the same program, the master processor runs a *different* program responsible for distributing the work. Since the master's program and the slaves' program are different, MPMD is the more accurate description.

### **5. What is the main challenge of using a distributed memory architecture for an application that needs a large, shared data table?**

On a distributed memory system, the primary challenge would be the **lack of a global address space**. Unlike a shared memory system where any processor can directly access the table, a distributed system gives each processor its own private memory. Therefore, if a processor needs to read or update data held in another processor's memory, the programmer must explicitly write code to manage that communication over the network, adding significant complexity and requiring careful synchronization.