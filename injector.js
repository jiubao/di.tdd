function createInjector() {
  var cache = {};

  return {
    inject: inject,
    get: get
  };

  function get(name) {
    return cache[name];
  }

  function inject(name) {
    if (array.isarray(sth)) {
      var args = sth.slice(0, -1).map(item => get(item));
      cache[name] = sth[sth.length - 1].apply(null, args);
    } else if (typeof sth === 'function') {
      cache[name] = sth();
    } else {
      cache[name] = sth;
    }
  }

}

module.exports = createInjector;