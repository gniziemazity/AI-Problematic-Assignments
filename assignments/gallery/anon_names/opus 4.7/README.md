# JavaScript Demo - Assignment

Continuation of the in-class JavaScript demo.

## Files
- `index.html` - main page, links the stylesheet and all scripts
- `style.css` - styling, including the 4 x 25 grid layout
- `cat.js` - the new `Cat` class (similar to `Dog`, with pointy ears + whiskers)
- `script.js` - the demo code, the two fetch variants, and the 100-animal grid
- `dog.js` - loaded from https://www.radufromfinland.com/dog.js (not included)
- `sounds/meow.mp3` - sound played when a cat is clicked
- `sounds/woof.mp3` - sound played when a dog is clicked

## What was done
1. **Cat class** - implemented in `cat.js` and linked in `index.html`.
   `talk()` meows; `render()` draws triangular pointy ears and whiskers
   using canvas lines/paths.
2. **Fetch the API** - both fetch variants were added to `script.js` with a
   single-line comment on every line. Variant 2 (async/await) was chosen and
   kept active; variant 1 is wrapped in a multi-line comment. 100 random
   animals are generated and drawn in a 4 x 25 grid.
3. **Click to talk + sound** - each grid cell has an `onmousedown` handler
   that calls the animal's `talk()` method and plays a sound via the
   HTML5 `<audio>` API (`new Audio(...)`).

## Sound sources
The two MP3 files were synthesized (generated from scratch as simple tones)
specifically for this assignment using FFmpeg, so they are original and
free to use. They are not downloaded from any third party.
