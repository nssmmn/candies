![Candies Logo](/candies-logo.png)

# Candies
A node.js package to generate a sample of length n.

Available generators are:

* **Uniform** distribution (**discrete** and **continuous**).
* **Bernouli** distribution.
* **Binomial** distribution.
* **Poisson** distribution.
* **Normal (Gaussian)** distribution.
* **Exponential** distribution.
* **Pareto** distribution.
* ***Urn***.

## Usage
```
npm install candies
```

```js
var C = require('candies');

var n = 10,
    values = ['mint','orange','strawberry'],
    weight = [.2,.3,.5];

var sample = C.urn(n,value,weight);
// generate randomly a sample of 10.
```

For more details [see the wiki.](https://github.com/nssmmn/candies/wiki)
