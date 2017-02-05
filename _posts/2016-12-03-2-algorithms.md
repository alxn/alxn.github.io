---
layout: post
title:  Algorithms
categories: career interview algorithms
---

This is by far the biggest area for the tech interview, though
thankfully it's an area you can study well. It just takes a lot of
time. It should probably be something you are doing on an ongoing
basis. If you are doing this studying for an hour or two a week, plan
**at least six months**.

Whilst "learning" to code these algorithms, remember the goal is to
learn, not to discover. Given a puzzle, think about it for 5-10
minutes. If you can't solve it: LOOK UP THE ANSWER - then fully
understand it. The solution you are looking for may have taken someone
YEARS to discover. You are attempting to stand on the shoudlers of
giants, not grow the height of a giant.

Do not just memorise this. Actually understand the solution in your
own terms. Consider understanding it, then coming back to code the
problem later, so that you test that understanding.

Your understanding helps you to remember, and needs to be explained in
the interview. It will also help with similar problems in the future.

Time to go to school!
---------------------

There's plenty of information out there on this topic, and great sites
to practice on, so in someway this is "easy", just a lot of material
to cover.

Remember that a whiteboard is the best environment for final
preparation, it's different without an editor.


* [Big-O Cheat Sheet](http://bigocheatsheet.com/)
* [Sedgewick Algo CheatSheet (and code)](http://algs4.cs.princeton.edu/cheatsheet/)
* [LeetCode](https://leetcode.com/)
* [LeetCode Articles](http://articles.leetcode.com/)
* [HackerRank](https://www.hackerrank.com/)
* [GeeksForGeeks](http://www.geeksforgeeks.org/) ([algorithms](http://www.geeksforgeeks.org/fundamentals-of-algorithms/))
* [The Algorithmist](http://www.algorithmist.com/)
* [neetcoder?](https://n00tc0d3r.blogspot.com/)
* Cracking the Coding Interview
  * [CTCI (book)](http://www.crackingthecodinginterview.com/)
  * [CTCI Videos on HackerRank](https://www.hackerrank.com/domains/tutorials/cracking-the-coding-interview)
* Programming Pearls (book)

Note that [Topcoder]() and [Project Euler]() are somewhat different to
the rest of the sites out there. While being a top 5% TopCoder, or
solving the first 100 Project Euler problems means you are very good
at what you do, these sites are not so much learning tools, as they
are competitive coding environments.

[Topcoder]: https://topcoder.com
[Project Euler]: https://projecteuler.net

MIT OpenCourseWare
------------------

There's a few other good videos out there, but by far the best are the
series from MIT. Totally worth checking out.

You can find all of these
Engineering:Computer-Science:Algorithms-and-Data-Structures with
"Video/Audio Lectures" on
[MIT's Open Courseware](https://ocw.mit.edu/courses/find-by-topic/#cat=engineering&subcat=computerscience&spec=algorithmsanddatastructures),
or [MIT CS and AI Lab](http://courses.csail.mit.edu/)

* MIT 6.046J / 18.410J Introduction to Algorithms (SMA 5503), Fall 2005, by Prof. Erik Demaine Prof. Charles Leiserson
  * [MIT](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/)
  * [iTunesU](https://itunes.apple.com/us/itunes-u/introduction-to-algorithms/id341597754)
  * [YouTube](https://www.youtube.com/playlist?list=PL8B24C31197EC371C)

* MIT 6.006 Introduction to Algorithms (Fall 2011), by Erik Demaine, Srini Devadas
  * [MIT](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/)
  * [iTunesU](https://itunes.apple.com/us/itunes-u/introduction-to-algorithms/id585700718)
  * [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb)

* MIT 6.851: Advanced Data Structures (Spring'14), Prof. Erik Demaine, with notes as well.
  * [MIT](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-851-advanced-data-structures-spring-2012/)
  * [MIT CSAIL](http://courses.csail.mit.edu/6.851/spring14/lectures/)
  * [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf)

* MIT 6.046J Design and Analysis of Algorithms, Spring 2015
  * [MIT](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/)
  * [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp)


Topics
------

Cracking The Coding Interview contains a good selection of
topics. I've extended that selection with quite a few more below.

Remember, Big-O Complexity is a **must**, but also throw in some basic
math(s):

 * Exponent and log rules
 * Trigonometry
 * Algebra
 * Progressions (arithmetic, geometric)
 * Permutations and combinations: `nPr`, `nCr` (n choose k).

Data Structures
===============

You *must* know all of these.

 * Arrays, Matrix, Linked List, Strings, Stacks, Queues, Heaps.
 * Bitfields/BitSets
 * Hashing
 * Trees (Suffix/Prefix as well), BSTs (AVL/Red-Black/B+)
 * Graphs (3 representations).

Algorithms
==========

Data structures now seem trivia in comparison to this list:

 * String search (KMP, Boyer Moore, Rabin-Karp, Suffix Tree).
 * Sorting (Quicksort, Mergesort, Heapsort).
 * Binary Search (Array or BST), Quickselect.
 * Tree and graph traversal, recursive and iterative. BFS, and {Pre, In, Post} Order DFS.
   * Remember to look up balanced tree rotations.
 * Greedy Algorithms
 * Recursion
 * Backtracking (e.g. [n-queens](https://en.wikipedia.org/wiki/Eight_queens_puzzle)).
 * Dynamic Programming
 * Misc: Bit math, Regexp

Be aware of using augmented data structures, e.g. augmenting a BST:

 * [Order statistic tree](https://en.wikipedia.org/wiki/Order_statistic_tree)
 * [Interval tree](https://en.wikipedia.org/wiki/Interval_tree)
   - Interval tree is quite a nice solution for some problems.

Parsing is little painful, you could try just suggesting Lex/Yacc
(Flex/Bison), though I got one question on this topic:

 * [Parsing](https://en.wikipedia.org/wiki/Bottom-up_parsing)

Better techniques for locating a substring quickly:

 * [Suffix Tree](https://en.wikipedia.org/wiki/Suffix_tree)
 * [Suffix Array](https://en.wikipedia.org/wiki/Suffix_array)
   * Auxiliary LCP [Longest Common Prefix Array](https://en.wikipedia.org/wiki/LCP_array)

Using Khan's algorithm in graphs:

 * [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting)

Dynamic Programming
===================

They all *love...* them some dynamic programming solutions, and a lot
of problems end up in this space, they are also a lot of fun. It's
magic when you draw out the tables by hand and see how simple it is to
solve these problems.

1. [Change/Coin Making Problem](https://en.wikipedia.org/wiki/Change-making_problem).
2. [Box stacking problem](http://www.geeksforgeeks.org/dynamic-programming-set-21-box-stacking-problem/) has an LIS solution.
3. [Coins In a Line](http://articles.leetcode.com/coins-in-line/)
4. [Egg Dropping](http://www.geeksforgeeks.org/dynamic-programming-set-11-egg-dropping-puzzle/)
5. [House Robber](http://www.programcreek.com/2014/03/leetcode-house-robber-java/)

Cheat-sheet technique:

1. Recursive solution?
2. Able to define the recurrence relation?
3. Try to apply top-down [Memoization](https://en.wikipedia.org/wiki/Memoization).
4. Got [Overlapping subproblems](https://en.wikipedia.org/wiki/Overlapping_subproblems)?
5. Wonder if you can do it bottom-up with [DP](https://en.wikipedia.org/wiki/Dynamic_programming)?

Check that it's possible:

1. [Optimal substructure](https://en.wikipedia.org/wiki/Optimal_substructure)
   - i.e. an optimal solution can be found using optimal solutions of subproblems.

Watch these
[animations from an ex-MIT TA](https://people.cs.clemson.edu/~bcdean/dp_practice/)
for common problems:

Longest:

 * [Common subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem) (LCS)
 * [Increasing subsequence](https://en.wikipedia.org/wiki/Longest_increasing_subsequence) (LIS)
   - Can be modified to maximum sum increasing subsequence.
 * [Edit distance](https://en.wikipedia.org/wiki/Edit_distance)
   - [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance)
 * [Common substring](https://en.wikipedia.org/wiki/Longest_common_substring_problem)
 * [Palindromic substring](https://en.wikipedia.org/wiki/Longest_palindromic_substring)

Finally:

 * [Max Sub Array (Kadane's)](https://en.wikipedia.org/wiki/Maximum_subarray_problem)
 * [Knapsack](https://en.wikipedia.org/wiki/Knapsack_problem)
 * [Bin Packing](https://en.wikipedia.org/wiki/Bin_packing_problem)

Advanced Topics
---------------

It seems like these topics rarely come up, but you've done so much
studying now, it's interesting to go over anyway.

 * [3SUM](https://en.wikipedia.org/wiki/3SUM) Problems.
 * [Subset sum](https://en.wikipedia.org/wiki/Subset_sum_problem)
 * [Partition](https://en.wikipedia.org/wiki/Partition_problem)
 * [Min Window that contains all](http://articles.leetcode.com/finding-minimum-window-in-s-which/)
 * Minimum Spanning Tree
   * [Prim's](https://en.wikipedia.org/wiki/Prim%27s_algorithm)
   * [Kruskal's](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)
 * Shortest Path
   * [Bellman–Ford](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)
   * [Dijkstra's](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

 * [Activity selection](https://en.wikipedia.org/wiki/Activity_selection_problem)
 * [Closest pair of points](https://en.wikipedia.org/wiki/Closest_pair_of_points_problem)
 * Median of two sorted arrays

Seriously?!?
------------

Phew!

Yes, I really have ready every single link and topic above. I can't
honestly remember all of them, but a good chunk are familiar to me
now.
