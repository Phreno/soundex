module.exports=function (s) {
  var
  a = s.toLowerCase().split(''),
  f = a.shift(),
  r = '',
  codes = {
    a: '', e: '', i: '', o: '', u: '',
    b: 1, p: 1,
    c: 2, k: 2, q: 2,
    d: 3, t: 3,
    l: 4,
    m: 5, n: 5,
    r: 6,
    g: 7, j:7,
    x: 8, z:8, s:8,
    f: 9, v:9
  };

  r = f +
  a.map(function (v, i, a) { return codes[v] })
  .filter(function (v, i, a) { return ((i === 0) ? v !== codes[f] : v !== a[i - 1]);})
  .join('');
  return (r + '000').slice(0, 4).toUpperCase();
};
