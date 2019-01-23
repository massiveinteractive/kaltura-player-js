# Massive Fork of Kaltura Player

### Original Kaltura repository https://github.com/kaltura/kaltura-player-js.git

Using Webpack Module replacements modules (Kaltura UI, Shaka, Dash, Cast, js-logger) are excluded from the original build to reduce the size of the build.

## Getting Started

### Installing

First, clone and run [yarn] to install dependencies:

[yarn]: https://yarnpkg.com/lang/en/

```
git clone https://github.com/massiveinteractive/kaltura-player-js
cd kaltura-player-js
yarn install
```

### Development

```javascript
yarn run dev:ovp:minimal
```

then open http://localhost:8080/

### Building

Build the player

```javascript
yarn run build:ovp:minimal
```

The build is created in **./dist/kaltura-player.js**
