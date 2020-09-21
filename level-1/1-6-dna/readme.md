# 1.6. DNA

## Context

DNA is a double strand of chemical molecules. There are
four possible chemical molecules C, G, A, T, which are called bases.
 Usually a strand is represented as the strand of the letters of the molecules. 
For example: `GTTACG` would be a strand. But DNA is a double strand,
that is that there are two strands, with their elements connected.
A simple representation would be like:
```
...-G-T-T-A-C-G-...
    | | | | | |
...-C-A-A-T-G-C-...
```
Bases from one strand to the other have to be connected such that:
- A and T can be connected
- C and G can be connected

But other combinations are not possible. For example, that would
not work:

```
...-G-T-T-A-C-G-...
    | | | | | |
...-C-A-G-T-G-C-...
```
Because the third base as a T-G, and that is not legal.

## Problem

Code a function that takes two strands representing
the two strands of an DNA, and identifies the positions
where the pair of bases are not legal. The result should be
an array of same length as the inputs, with 0 if the position
is not an error, and 1 if the position is not legal.
