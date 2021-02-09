# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

An exercise created as a student at Lighthouse Labs (week 1). Just for learning, not for use in production-grade software.

## Usage

**Install it:**

`npm install @t_weideman/lotide`

**Require it:**

`const _ = require('@t_weideman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first element of an array.
* `tail`: Returns the tail of an array.
* `middle`: Returns the middle-most element(s) of an array.
* `assertEqual`: Compares two values and declares whether or not they are equal.
* `eqArrays`: Compares two arrays, returning true or false depending on whether or not they are equal.
* `assertArraysEqual`: Declares whether or not two arrays are equal.