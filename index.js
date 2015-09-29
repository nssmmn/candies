function _isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function _sum(){
  return Array.prototype.map.call(arguments,function(x){
    if ( _isNumeric(x) ){
        return +parseFloat(x);
    }
    else if ( Array.isArray(x) ){
      return _sum.apply(null,x);
    } else {
      return typeof x != 'boolean'? 0: x ? 1 : 0;
    }
  }).reduce( function(x,y){
    return x+y;
  });
}

function _cumsum(arr){
  n = arr.length;
  if ( n < 2 ) return (arr);
  for( var i = 1 ; i < n ; i++){
    arr[i] += arr[i-1];
  }
  return arr;
}

function _uniform_c(size,a,b){
  a = a || 0;
  b = b || a+1;
  var sample = [];
  for (var i = 0 ; i < size ; i++){
    sample.push( a + (b-a) * Math.random() );
  }
  return sample;
}

function _uniform_d (size,a,b){
  a = a || 0;
  b = b || a+1;
  var sample = [];
  for (var i = 0 ; i < size ; i++){
    sample.push( Math.round( (a - 0.5) + (b - a + 1) * Math.random()));
  }
  return sample;
}

_uniform = _uniform_c;
_uniform.continuous = _uniform_c;
_uniform.discrete = _uniform_d;

function _combination(n,k){
  if (!k) return 1;
  if (k > (n/2)) k = n-k;
  for (var i = 1,p = 1; i<=k; i++){
    p*=(n-k+i)/i;
  }
  return p;
}

function _binomial(size,n,p){
  var prob =[];
  prob[0] = Math.pow((1-p),n);
  for(var ii=1;ii<n;ii++){
    prob[ii] = prob[(ii-1)]+(_combination(n,ii)*Math.pow((p),ii)*Math.pow((1-p),(n-ii)));
  }
  prob[n] = 1;
  var sample = [];
  for (var i = 0 ; i < size ; i++){
    var j = -1;
    var u = Math.random();
    do {
      j++;
    } while (u > prob[j]);
    sample.push(j) ;
  }
  return sample;
}

function _bernouli(size,p){
  var sample = [];
  for (var i = 0 ; i < size ; i++){
    var u = Math.random();
    sample.push(u > 1-p ? 1 : 0);
  }
  return sample;
}

function _poisson (size,lambda){
  // Donald Knuth algorithm
  var sample = [];
  var l = Math.exp(-lambda);
  for (var i = 0 ; i < size ; i++){
    var k = 0, p= 1;
    do {
      k++;
      p *= Math.random();
    } while (p > l);
    sample.push(k-1) ;
  }
  return sample;
}

function _normal(size,m,sd){
  //Box-Muller transform
  m = m || 0;
  sd = sd || 1;
  var sample = [];
  var u1,u2,z0,z1;
  for (var i = 0 ; i < Math.round(size/2) ; i++){
      u1 = Math.random();
      u2 = Math.random();
      z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2*Math.PI*u2) * sd + m;
      z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2*Math.PI*u2) * sd + m;
      sample.push(z0);
      sample.push(z1);
  }
  if (size % 2) sample.pop();
  return sample;
}

function _exponential(size,lambda){
  lambda = lambda || 1;
  var sample = [];
  for (var i = 0 ; i < size ; i++){
    sample.push( - Math.log ( Math.random() ) / lambda );
  }
  return sample;
}

function _pareto(size,m,a){
  var sample = [];
  for (var i = 0 ; i < size ; i++){
    u = Math.random();
    if(!u) u = 1;
    sample.push( m / Math.pow(u,(1/a)) );
  }
  return sample;
}

function _urn(size,val,weight){
  var sample = [],
      s = _sum(weight),
      c = _cumsum(weight);

  var prob = c.map(function(x){
    return x/s;
  });

  for (var i = 0 ; i < size ; i++){
    var j = -1;
    var u = Math.random();
    do {
      j++;
    } while (u > prob[j]);
    sample.push(val[j]) ;
  }

  return sample;
}

module.exports={
  uniform : _uniform,
  bernouli : _bernouli,
  binomial : _binomial,
  poisson : _poisson,
  normal : _normal,
  gaussian : _normal,
  exponential : _exponential,
  pareto : _pareto,
  cumsum : _cumsum,
  sum : _sum,
  urn : _urn
};
