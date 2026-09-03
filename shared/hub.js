// Renders the game shelf from window.GAMES (see games.js).

(function () {
  var shelf = document.getElementById('shelf');
  var games = window.GAMES || [];

  if (!games.length) {
    shelf.innerHTML = '<p class="tagline">No games listed yet — add one to games.js.</p>';
    return;
  }

  function motif(game) {
    if (game.motif === 'quad') {
      // 2x2 of tiles, one out of step
      return '<div class="motif-quad">' +
        '<i></i><i></i><i></i><i class="odd"></i></div>';
    }
    if (game.motif === 'chain') {
      // interlocking links
      return '<div class="motif-chain"><i></i><i></i><i></i></div>';
    }
    if (game.motif === 'funnel') {
      // narrowing bars
      return '<div class="motif-funnel"><i></i><i></i><i></i><i></i></div>';
    }
    if (game.motif === 'grid') {
      // a Wordle-ish feedback row
      return '<div class="motif-grid">' +
        '<i class="miss"></i><i class="near"></i><i class="hit"></i>' +
        '<i class="miss"></i><i class="hit"></i></div>';
    }
    if (game.motif === 'mask') {
      // three identical cards, one turned — the odd one out
      return '<div class="motif-swatches">' +
        '<i style="background:rgba(255,255,255,.30)"></i>' +
        '<i style="background:rgba(255,255,255,.30)"></i>' +
        '<i style="background:#E0A030;transform:rotate(9deg)"></i>' +
        '<i style="background:rgba(255,255,255,.30)"></i>' +
        '</div>';
    }
    if (game.motif === 'swatches') {
      var colors = ['#C43B3B', '#3E6FB0', '#4C9A4C', '#E0A030'];
      return '<div class="motif-swatches">' +
        colors.map(function (c) {
          return '<i style="background:' + c + '"></i>';
        }).join('') + '</div>';
    }
    return '<div class="motif-number"><small>#</small>' +
      String(Math.floor(Math.random() * 899) + 100) + '</div>';
  }

  shelf.innerHTML = games.map(function (game) {
    var tags = (game.tags || []).map(function (t) {
      return '<span class="chip">' + t + '</span>';
    }).join('');

    return '' +
      '<a class="card" href="' + game.file + '" style="--accent:' + game.accent + '">' +
        '<div class="motif">' + motif(game) + '</div>' +
        '<div class="card-body">' +
          '<h2>' + game.title + '</h2>' +
          '<p>' + game.tagline + '</p>' +
          '<div class="meta">' +
            '<span class="chip chip-strong">' + game.players + '</span>' +
            '<span class="chip">' + game.length + '</span>' +
            tags +
            '<span class="play">Play</span>' +
          '</div>' +
        '</div>' +
      '</a>';
  }).join('');
})();
