![Candies Logo](/candies-logo.png)

# Candies
A node.js package to generate a sample of length n.

## Usage
```
npm install candies
```

```js
var C = require('candies');

var n = 10,
    values = ['mint','orange','strawberry'],
    weight = [.2,.3,.5];

var sample = C.urn(n,values,weight);
// generate randomly a sample of 10.
```

For more details [see the wiki](https://github.com/nssmmn/candies/wiki).
