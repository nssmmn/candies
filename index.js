function _uniform_c(n,a,b){
  a = a || 0;
  b = b || a+1;
  var sample = [];
  for (var i = 0 ; i < n ; i++){
    sample.push( a + (b-a) * Math.random() );
  }
  return sample;
}

function _uniform_d (n,a,b){
  a = a || 0;
  b = b || a+1;
  var sample = [];
  for (var i = 0 ; i < n ; i++){
    sample.push( Math.round(a-0.5 + (b-a+0.5) * Math.random()));
  }
  return sample;
}

_uniform = _uniform_c;
_uniform.continuous = _uniform_c;
_uniform.discrete = _uniform_d;

function _poisson (n,lambda){
  // Donald Knuth algorithm
  var sample = [];
  var l = Math.exp(-lambda);
  for (var i = 0 ; i < n ; i++){
    var k = 0, p= 1;
    do {
      k++;
      p *= Math.random();
    } while (p > l);
    sample.push(k-1) ;
  }
  return sample;
}

function _normal(n,m,sd){
  //Box-Muller transform
  m = m || 0;
  sd = sd || 1;
  var sample = [];
  var u1,u2,z0,z1;
  for (var i = 0 ; i < Math.round(n/2) ; i++){
      u1 = Math.random();
      u2 = Math.random();
      z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2*Math.PI*u2) * sd + m;
      z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2*Math.PI*u2) * sd + m;
      sample.push(z0);
      sample.push(z1);
  }
  if (n%2) sample.pop();
  return sample;
}

module.exports={
  uniform : _uniform,
  poisson : _poisson,
  normal : _normal,
  gaussian : _normal
};
