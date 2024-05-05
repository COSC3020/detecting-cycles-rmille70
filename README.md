[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3yAkp-x3)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The for loop within hasCycle() iterates for each vertex in the graph, and in that loop it calls the function dfsCycles() which is largely based off of the depth first search function I implemented in the graph search assignment. dfsCycles() checks for reflexive edges on first and last vertices (in constant time), if no loops are detected, we then increment our starting vertex and send our adjacency matrix to dfsFinder() for traversal. dfsFinder in the worst case would traverse all vertices (that can be reached) in the graph, and all edges in the graph. Thus specfic time complexity of hasCycle() is $v(v + e)$ (where $v$ is the number of vertices and $e$ is the number of edges) which can be bounded by $\Theta(v^2 + ve).$