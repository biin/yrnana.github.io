---
title: '[LeetCode] 108. Convert Sorted Array to Binary Search Tree'
date: '2020-05-14T13:23:17+09:00'
tags: [Algorithm, LeetCode, Tree, DFS, Binary Search Tree]
published: true
---

# Problem

> Given an array where elements are sorted in ascending order, convert it to a height balanced BST.  
> For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
>
> 오름차순으로 정렬된 주어진 배열을 height balanced BST로 변형해라.  
> 이 문제에서 height-balanced binary tree는 모든 노드들의 하위 트리의 깊이가 1 이상 차이가 나지 않는 이진 트리로 정의한다.

```
Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5],
which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
```

# Solution

1. 배열의 중간을 구하고 루트 노드로 설정한다.
2. 왼쪽 반과 오른쪽 반을 나누어 재귀로 노드를 구한다.
   1. 왼쪽 반 배열의 중간을 구하고 이전 노드의 왼쪽 노드로 만든다.
   2. 오른쪽 반 배열의 중간을 구하고 이전 노드의 오른쪽 노드로 만든다.

시간 복잡도 $O(N)$

```py
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


def arr_to_bst_util(arr, l, r):
    if l >= r:
        return None
    m = (l + r) // 2
    node = TreeNode(arr[m])
    node.left = arr_to_bst_util(arr, l, m)
    node.right = arr_to_bst_util(arr, m + 1, r)
    return node


def arr_to_bst(nums):
    return arr_to_bst_util(nums, 0, len(nums))


if __name__ == '__main__':
    print(arr_to_bst([-10, -3, 0, 5, 9]))
```