function _uniform_c(n,a,b){
  var sample = new Array(n);
  for (var i = 0 ; i < sample.length ; i++){
    sample[i] = a + (b-a) * Math.random();
  }
  return sample;
}

function _uniform_d (n,a,b){
  var sample = new Array(n);
  for (var i = 0 ; i < sample.length ; i++){
    sample[i] = Math.round(a - 0.5 + (b + 0.5 - a) * Math.random());
  }
  return sample;
}

_uniform = _uniform_c;
_uniform.continuous = _uniform_c;
_uniform.discrete = _uniform_d;

function _poisson (n,lambda){
  // Donald Knuth algorithm
  var sample = new Array(n);
  var l = Math.exp(-lambda);
  for (var i = 0 ; i < sample.length ; i++){
    var k = 0, p= 1;
    do {
      k++;
      p *= Math.random();
    } while (p > l);
    sample[i] = k-1 ;
  }
  return sample;
}

function _normal(n,m,sd){
  //Box-Muller transform
  if( m === undefined) m=0;
  if( sd === undefined) sd=1;
  var sample = [];
  var u1,u2,z0,z1;
  for (var i = 0 ; i < Math.round(n/2) ; i++){
      u1 = Math.random();
      u2 = Math.random();
      z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2*Math.PI*u2) * sd + m;
      sample.push(z0);
      z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2*Math.PI*u2) * sd + m;
      sample.push(z1);
  }
  if (n%2) sample.pop();
  return sample;
}

module.exports={
  uniform : _uniform,
  poisson : _poisson,
  normal : _normal
};
