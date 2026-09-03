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
  },
  {
    id: 'odd-one-out',
    title: 'Odd One Out',
    file: 'games/odd-one-out.html',
    tagline: 'Four species. Three share a type, a generation or a colour — and one is quietly wrong. Twenty seconds to say which.',
    players: '1–6 players',
    length: '~3 min',
    tags: ['quickfire', 'spot the difference'],
    accent: '#2E7D8A',
    accentDark: '#22606B',
    motif: 'quad'
  },
  {
    id: 'type-chain',
    title: 'Type Chain',
    file: 'games/type-chain.html',
    tagline: 'Name a species sharing a type with the last one. No repeats, clock running. Stall and you are out — last one standing takes it.',
    players: '1–8 players',
    length: '~8 min',
    tags: ['word chain', 'elimination'],
    accent: '#4F8A5B',
    accentDark: '#3C6B45',
    motif: 'chain'
  },
  {
    id: 'narrow-it-down',
    title: 'Narrow It Down',
    file: 'games/narrow-it-down.html',
    tagline: 'The app hides a species and answers your questions honestly. Twenty of them, everyone against the dex — a wrong guess costs three.',
    players: 'co-op, any number',
    length: '~7 min',
    tags: ['deduction', 'co-operative'],
    accent: '#7A5C3E',
    accentDark: '#5E462E',
    motif: 'funnel'
  },
  {
    id: 'dexle',
    title: 'Dexle',
    file: 'games/dexle.html',
    tagline: 'Eight guesses. Each one reports back on type, generation, colour and dex number. Alone, or pass the phone and race the same species.',
    players: '1–6 players',
    length: '~5 min',
    tags: ['puzzle', 'daily-style'],
    accent: '#B03A5B',
    accentDark: '#8C2C48',
    motif: 'grid'
  }
];
