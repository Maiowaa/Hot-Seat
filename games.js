// Game manifest. To add a game: drop the HTML in games/, add an entry here.
// Plain .js rather than .json so the hub works when opened directly from disk
// (file:// blocks fetch(), but script tags load fine).
window.GAMES = [
  {
    id: 'dex-duel',
    title: 'Dex Duel',
    file: 'games/dex-duel.html',
    tagline: 'A secret dex number is drawn. Everyone names a species — whoever lands closest to the number takes the round.',
    players: '2–6 players',
    length: '~5 min',
    tags: ['guessing', 'head-to-head'],
    accent: '#C23B3B',
    accentDark: '#9E2E2E',
    motif: 'number'
  },
  {
    id: 'lot-house',
    title: 'The Lot House',
    file: 'games/lot-house.html',
    tagline: 'A blind auction where lots are sold by colour alone. Identities open at the close — then you bet on how they fight.',
    players: '2 players',
    length: '~15 min',
    tags: ['auction', 'bluffing', 'betting'],
    accent: '#173628',
    accentDark: '#0e241a',
    motif: 'swatches'
  },
  {
    id: 'imposter',
    title: 'Imposter',
    file: 'games/imposter.html',
    tagline: 'Everyone gets the same species — except one. Same type, same generation, one letter of difference in the story they tell.',
    players: '3–10 players',
    length: '~10 min',
    tags: ['social deduction', 'bluffing'],
    accent: '#4B3A6B',
    accentDark: '#332748',
    motif: 'mask'
  }
];
