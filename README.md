# Hot Seat

Fan-made Pokémon party games you play on one screen, passing the device around.
No accounts, no downloads, no second device.

| Game | Players | Length | |
|---|---|---|---|
| **Dex Duel** | 2–6 | ~5 min | closest guess to a secret dex number |
| **The Lot House** | 2 | ~15 min | blind auction on colour, then bet on the battle |
| **Imposter** | 3–10 | ~10 min | one player has a different species |
| **Odd One Out** | 1–6 | ~3 min | three share a property, one doesn't |
| **Type Chain** | 1–8 | ~8 min | match a type with the previous species |
| **Narrow It Down** | co-op | ~7 min | twenty yes/no questions against the app |
| **Dexle** | 1–6 | ~5 min | eight guesses with type/gen/colour feedback |

## Running it

It's a static site with no build step. Either open `index.html` straight from
disk, or serve the folder:

```bash
python -m http.server 8123
```

Everything works over `file://` too — that's why the data files are `.js`
(`window.X = [...]`) rather than `.json`. `fetch()` is blocked on `file://`;
script tags are not.

## Layout

```
index.html          hub — renders cards from games.js
games.js            the manifest
games/              one self-contained HTML file per game
data/
  dex-names.js      1025 ordered species names  -> window.DEX_NAMES
  dex-entries.js    1025 [name, types, hex, colour, legendary?] -> window.DEX_ENTRIES
shared/
  theme.css         hub styling + card motifs
  hub.js            renders the game shelf
  backlink.js       injects the "back to Hot Seat" strip into each game
  dex.js            species data layer (see below)
  game.css          shared chrome for the newer games
```

## Adding a game

1. Drop a self-contained HTML file in `games/`.
2. Add `<script src="../shared/backlink.js"></script>` before `</body>`.
3. Add an entry to `games.js` — `id`, `title`, `file`, `tagline`, `players`,
   `length`, `tags`, `accent`, `motif`. A new `motif` also needs a branch in
   `shared/hub.js` and styles in `shared/theme.css`.

No rebuild, no framework, no coupling. Each game still works opened on its own.

### shared/dex.js and shared/game.css

The four newest games build on two shared pieces, which keeps them short:

```html
<script src="../data/dex-names.js"></script>
<script src="../data/dex-entries.js"></script>
<script src="../shared/dex.js"></script>
<link rel="stylesheet" href="../shared/game.css">
```

`window.DEX` exposes `GENERATIONS`, `POOLS`, `genOf`, `entry`, `all`, `names`,
`poolMax`, `random`, `findByName`, `shuffle`, `sample`, `allTypes` and
`allColours`. `entry(dexNumber)` returns a flat object — `{num, name, types,
color, colorName, legendary, gen, region}` — which is the shape every game
reads.

`game.css` carries the family look (masthead, panels, option buttons,
scoreboard, autocomplete). A game sets `--accent` and gets the rest free.
Dex Duel, The Lot House and Imposter predate both and keep their own
self-contained styling and their own copy of the generation table.

## The species data

Both data files were generated from the PokéAPI source dataset (types, colour
categories, legendary/mythical flags), covering every species through
Generation IX including the Paradox forms. `data/` is deliberately the only
place species live — the games read `window.DEX_NAMES` / `window.DEX_ENTRIES`
and hardcode nothing, so swapping those two files re-themes every game without
touching game code.

Regenerating them needs `pokemon_species.csv`, `pokemon_types.csv`,
`types.csv`, `pokemon_colors.csv` and `pokemon.csv` from
`PokeAPI/pokeapi/data/v2/csv`.

## Licensing / IP

Non-commercial fan work. Pokémon and Pokédex are trademarks of Nintendo,
Creatures Inc. and GAME FREAK Inc.; this project is unaffiliated with and
unendorsed by any of them, and ships none of their artwork, audio or game
files — only publicly documented species names, types and colours.

Keep it that way: no ads, no donations, no official assets, and keep the
trademarks out of the project name and domain.
