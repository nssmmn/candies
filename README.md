![Candies Logo](/candies-logo.png)
# candies
A node.js package to generate a sample of length n.

## Usage
```js
var C = require('candies');
var sample = C.distribution_name(n,param1,param2,...); // return an array of length n.
```
Up to now there are 3 distributions:

Uniform distribution :
```js
var sample1 = C.uniform.continuous(n,a,b); // equivalent to C.uniform(n,a,b);
var sample2 = C.uniform.discrete(n,a,b);
```
Poisson distribution :
```js
var sample3 = C.poisson(n,lambda);
```
Normal distribution :
```js
var sample4 = C.normal(n,m,sd);
var sample5 = C.normal(n); // equivalent to C.normal(n,0,1)
```
