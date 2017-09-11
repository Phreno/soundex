/**
 * Implémentation de l'algorithme soundex
 * Adapté au francais depuis https://gist.github.com/shawndumas/1262659
 *
 * @module soundex
 */
var local={
  lang:require('./dict'),
  constant:require('./constant'),
  config:require('./package.json').config,
  err:require('./err')
};

/**
 * Algorithme soundex.
 *
 * @method soundex
 * @s {String} le texte à convertir
 * @l {String} le dictionnaire à utiliser
 * @return Renvoie le code soundex du texte passé en paramètre
 */
soundex=function (s, l=local.config.DEFAULT_LANG) {
  if(undefined===s)
    throw (local.err.NO_WORDS)

  var
  a = s.toLowerCase().split(local.constant.EMPTY),
  f = a.shift(),
  r = local.constant.EMPTY,
  codes = local.lang[l];

  r = f +
  a.map(function (v, i, a) { return codes[v] })
  .filter(function (v, i, a) { return ((i === 0) ? v !== codes[f] : v !== a[i - 1]);})
  .join(local.constant.EMPTY);
  return (r + local.constant.RUNWAY).slice(0, 4).toUpperCase();
};

module.exports=soundex;
