---
title: 'Depth First Search'
date: '2020-05-13T21:15:46+09:00'
excerpt: '깊이 우선 탐색 (DFS, Depth First Search)'
tags: [DFS, Graph, Tree, Data Structures, Algorithm]
published: true
---

# 깊이 우선 탐색 (DFS)

DFS는 트리 또는 그래프 자료구조를 순회(Traversal)하기 위한 알고리즘이다. 한 노드에서 시작해서 최대한 깊숙히 들어가서 확인한 후 더 이상 이동할 곳이 없으면 백트래킹을 사용하여 부모 정점으로 이동하여 다른 루트를 탐색하는 방식이다.

# DFS in Tree

- Preorder Traversal : `1 2 4 5 3`
- Inorder Traversal : `4 2 5 1 3`
- Postorder Traversal : `4 5 2 3 1`
- 시간 복잡도 $O(V)$

```py
def preorder(node):
    if node:
        print(node.val, end=' ')
        preorder(node.left)
        preorder(node.right)


def inorder(node):
    if node:
        inorder(node.left)
        print(node.val, end=' ')
        inorder(node.right)


def postorder(node):
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.val, end=' ')


def inorder_with_stack(root):
    node = root
    stack = []
    while node or stack:
        if node:
            stack.append(node)
            node = node.left
        elif stack:
            node = stack.pop()
            print(node.val, end=' ')
            node = node.right
```

# DFS in Graph

- 시간 복잡도 $O(V+E)$
- 공간 복잡도 $O(V)$

```py
def dfs_util(n, g, visited):
    print(n, end=' ')
    visited[n] = True
    for node in g.get(n, []):
        if not visited[node]:
            dfs_util(node, g, visited)


def dfs(start, v, g):
    visited = [False] * v
    dfs_util(start, g, visited)
    print()


def dfs_with_stack(start, v, g):
    visited = [False] * v
    stack = [start]
    while stack:
        n = stack.pop()
        if not visited[n]:
            print(n, end=' ')
            visited[n] = True
        for node in g.get(n, []):
            if not visited[node]:
                stack.append(node)
    print()


if __name__ == '__main__':
    vertices = 6
    graph = {
        0: [1, 2],
        1: [2, 3],
        2: [3],
        3: [4],
        4: [0, 1, 5],
    }
    dfs(0, vertices, graph)  # 0 1 2 3 4 5
    dfs_with_stack(0, vertices, graph)  # 0 2 3 4 5 1
```