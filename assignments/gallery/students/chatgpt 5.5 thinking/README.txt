Random Animals JavaScript Assignment

Files included:
- index.html: main page, API fetch variants with line-by-line comments, 4 x 25 grid, and onmousedown interaction.
- dog.js: local Dog class used by the demo.
- cat.js: Cat class in its own file. It overrides talk() and draw() with meow, pointy ears, and whiskers.
- style.css: grid and page styling.
- sounds/dog.mp3 and sounds/cat.mp3: short generated placeholder animal sounds.

Audio source note:
The two MP3 files were generated locally for this assignment with Python sine-wave synthesis and ffmpeg conversion. They are original generated sounds, so there is no external download source.

Canvas line reference:
The cat whiskers are drawn with ctx.moveTo(), ctx.lineTo(), and ctx.stroke(), based on the HTML Canvas line drawing approach from W3Schools: https://www.w3schools.com/graphics/canvas_shapes.asp
