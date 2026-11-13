# Bug Bounty Wanderland

A calm, endless 3D open-world browser game about the ethical hacking community.
Live at https://santaclau.de

The Hacker Codex is an unofficial fan tribute to real hackers and their public work.
Nobody listed is affiliated with or has endorsed this game.

## Layout

| Path | What it is |
|---|---|
| `src/` | The source you edit: `game.js`, `data.js`, `hackers.js`, `style.css`, `game.css` |
| `src/vendor/three/` | three.js r160 and the add-ons the game uses (MIT licence) |
| `index.html`, `boot.js` | The page and its small start-up script (edited by hand) |
| `app.js`, `app.css`, `sw.js` | Built files. Do not edit; run the build instead |

## Changing and publishing

After editing anything in `src/`, `index.html` or `boot.js`:

```
npm install        # first time only
npm run build
git add -A
git commit -m "Describe the change"
git push
```

The build bundles and minifies the code, stamps each file's address with a fingerprint so
browsers fetch new copies only when something changed, and regenerates the offline cache.
The site updates about a minute after the push.

## Local preview

Serve this folder with any static file server and open it. The offline cache is only
switched on over https, so it never gets in the way while developing.
