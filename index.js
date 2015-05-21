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
_uniform.continous = _uniform_c;
_uniform.discrete = _uniform_d;

function _poisson (n,lambda){
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

module.exports={
  uniform : _uniform,
  poisson : _poisson
};
