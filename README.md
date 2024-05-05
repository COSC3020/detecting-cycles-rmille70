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

- When hasCycle() is called, it checks for the base cases (constant time), and if none of those apply, then for each vertex $v$ in the graph, deploy a depth first search on each edge of $v$ with $v$ as the target. The specific worst case time complexity of this would be $v$ times the worst case time complexity of dfsCycle() since we much ensure nodes have paths to themselves. Recall from my graph search program (https://github.com/COSC3020/graph-search-rmille70) that my implementation of depth first search has a worst case time complexity bounded by $\Theta(v + e)$ where $v$ is the number of vertices in a graph, and $e$ is the number of edges. Thus the specific worst case time complexity of hasCycle() is $v(v + e)$ which can be bounded by $\Theta(v^2 + ve)$