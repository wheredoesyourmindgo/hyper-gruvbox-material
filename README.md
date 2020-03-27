# hyper-gruvbox-material

A [Hyper](https://hyper.is) theme based on [gruvbox-material](https://github.com/sainnhe/gruvbox-material) and [hyper-hypest](https://github.com/dizzyup/hyper-hypest).

![Dark Style - medium contrast](https://github.com/wheredoesyourmindgo/hyper-gruvbox-material/raw/master/images/dark-screenshot.png)

![Light Style - medium contrast](https://github.com/wheredoesyourmindgo/hyper-gruvbox-material/raw/master/images/light-screenshot.png)

## Install

`hyper install hyper-gruvbox-material`

_or_

Add `hyper-gruvbox-material` to the plugins list in `~/.hyper.js` config file.

## Configuration

One can adjust theme `palette`, `style`, `contrast`, `accentColor`, `vibrancy`, `borders`, and `hideControls` options in `~/.hyper.js` config file. All options are configured with the following default values. Note, the screenshots shown in this README.md likely use _non-default_ settings.

```
gruvboxTheme: {
  style: 'dark', // or 'light'
  contrast: 'normal', // or 'soft', 'hard',
  palette: 'material', // or 'original, 'mix'
  accentColor: "yellow", //  or 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'
  vibrancy:, false // or true
  borders: false, // or true
  hideControls: false, // or true
  tabHeight: 32 // number expressed as pixels
  backgroundOpacity: 0.6 // number from 0 - 1; 1 being opaque
},
```

## Forked from

- [hyper-gruvbox](https://github.com/joshgentry/hyper-gruvbox)
- [hyper-hypest](https://github.com/dizzyup/hyper-hypest)

## License

MIT, refer to included LICENSE file for further details.
