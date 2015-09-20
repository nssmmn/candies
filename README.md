![Candies Logo](/candies-logo.png)
# candies
A node.js package to generate a sample of length n.

Until now there are 7 distributions:

* Uniform distribution (discrete and continuous).
* Bernouli distribution.
* Binomial distribution.
* Poisson distribution.
* Normal (Gaussian) distribution.
* Exponential distribution.
* Pareto distribution.

## Usage
```js
var C = require('candies');

var n = 10; // For a sample of length n.

//Uniform distribution
var sample = C.uniform.continuous(n,0,2);  // equivalent to C.uniform(n,0,2);
var sample = C.uniform.continuous(n,5); // equivalent to C.uniform.continuous(n,5,6);
var sample = C.uniform.continuous(n); // equivalent to C.uniform.continuous(n,0,1);

var sample = C.uniform.discrete(n,0,5);

//Bernouli distribution
var sample = C.bernouli(n,.3);

//Binomial distribution
var sample = C.binomial(n,5,.3);

//Poisson distribution
var sample = C.poisson(n,1);

//Normal distribution
var sample = C.normal(n,2,2); // equivalent to C.gaussian(n,2,2)
var sample = C.normal(n); // equivalent to C.normal(n,0,1)

//Exponential distribution
var sample = C.exponential(n,2);
var sample = C.exponential(n); // equivalent to C.exponential(n,1)

//Pareto distribution
var sample = C.pareto(n,1000,1.5); // C.pareto(n,xmin,alpha)
```
