![Candies Logo](/candies-logo.png)
# candies
A node.js package to generate a sample of length n.

Until now there are 3 distributions:

* Uniform distribution (discrete and continuous).
* Poisson distribution.
* Normal (Gaussian) distribution.

## Usage
```js
var C = require('candies');

var n = 10; // For a sample of length n.

//Uniform distribution
var sample1 = C.uniform.continuous(n,0,2);  // equivalent to C.uniform(n,0,2);
var sample2 = C.uniform.continuous(n,5); // equivalent to C.uniform.continuous(n,5,6);
var sample3 = C.uniform.continuous(n); // equivalent to C.uniform.continuous(n,0,1);

var sample4 = C.uniform.discrete(n,0,5);

//Poisson distribution
var sample5 = C.poisson(n,1);

//Normal distribution
var sample6 = C.normal(n,2,2); // equivalent to C.gaussian(n,2,2)
var sample7 = C.normal(n); // equivalent to C.normal(n,0,1)
```
