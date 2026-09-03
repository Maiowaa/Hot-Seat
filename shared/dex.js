// Shared species data layer, built on top of data/dex-names.js and
// data/dex-entries.js. Load those two first, then this.
//
// Everything a game needs about a species comes from here, so swapping the
// files in data/ still re-themes every game without touching game code.

(function () {
  var NAMES   = window.DEX_NAMES   || [];
  var ENTRIES = window.DEX_ENTRIES || [];

  var GENERATIONS = [
    {gen:1, region:'Kanto',       lo:1,   hi:151},
    {gen:2, region:'Johto',       lo:152, hi:251},
    {gen:3, region:'Hoenn',       lo:252, hi:386},
    {gen:4, region:'Sinnoh',      lo:387, hi:493},
    {gen:5, region:'Unova',       lo:494, hi:649},
    {gen:6, region:'Kalos',       lo:650, hi:721},
    {gen:7, region:'Alola',       lo:722, hi:809},
    {gen:8, region:'Galar/Hisui', lo:810, hi:905},
    {gen:9, region:'Paldea',      lo:906, hi:1025},
  ];

  // Standard difficulty control across games: how much of the dex is in play.
  var POOLS = [
    {key:'kanto', label:'Kanto',   hi:151,  note:'Gen 1 only'},
    {key:'early', label:'Gen 1–3', hi:386,  note:'through Hoenn'},
    {key:'all',   label:'All',     hi:1025, note:'through Paldea'},
  ];

  function genOf(num){
    for(var i = 0; i < GENERATIONS.length; i++){
      var g = GENERATIONS[i];
      if(num >= g.lo && num <= g.hi) return g;
    }
    return null;
  }

  // dex number -> a flat object every game can read the same way
  function entry(num){
    var row = ENTRIES[num - 1];
    if(!row) return null;
    var g = genOf(num);
    return {
      num: num,
      name: row[0],
      types: row[1],
      color: row[2],
      colorName: row[3],
      legendary: !!row[4],
      gen: g ? g.gen : null,
      region: g ? g.region : null,
    };
  }

  var cache = {};
  function all(maxDex){
    maxDex = Math.min(maxDex || ENTRIES.length, ENTRIES.length);
    if(cache[maxDex]) return cache[maxDex];
    var out = [];
    for(var n = 1; n <= maxDex; n++){
      var e = entry(n);
      if(e) out.push(e);
    }
    cache[maxDex] = out;
    return out;
  }

  function names(maxDex){
    return NAMES.slice(0, Math.min(maxDex || NAMES.length, NAMES.length));
  }

  function poolMax(key){
    for(var i = 0; i < POOLS.length; i++){
      if(POOLS[i].key === key) return POOLS[i].hi;
    }
    return ENTRIES.length;
  }

  function random(maxDex){
    var list = all(maxDex);
    return list[Math.floor(Math.random() * list.length)];
  }

  function findByName(name){
    if(!name) return null;
    var want = String(name).toLowerCase();
    for(var i = 0; i < NAMES.length; i++){
      if(NAMES[i].toLowerCase() === want) return entry(i + 1);
    }
    return null;
  }

  // Fisher-Yates, in place, returns the array.
  function shuffle(arr){
    for(var i = arr.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function sample(arr, k){
    return shuffle(arr.slice()).slice(0, k);
  }

  // Every type present in the loaded data, sorted.
  function allTypes(maxDex){
    var seen = {};
    all(maxDex).forEach(function(e){
      e.types.forEach(function(t){ seen[t] = true; });
    });
    return Object.keys(seen).sort();
  }

  function allColours(maxDex){
    var seen = {};
    all(maxDex).forEach(function(e){ seen[e.colorName] = true; });
    return Object.keys(seen).sort();
  }

  window.DEX = {
    GENERATIONS: GENERATIONS,
    POOLS: POOLS,
    genOf: genOf,
    entry: entry,
    all: all,
    names: names,
    poolMax: poolMax,
    random: random,
    findByName: findByName,
    shuffle: shuffle,
    sample: sample,
    allTypes: allTypes,
    allColours: allColours,
  };
})();
