# Fork of Kaltura Player

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

### Production Build

Build the player

```javascript
yarn run build:ovp:minimal
```

The build is created in **./dist/kaltura-player.js**

## Versioning

This fork has similar versioning as the original Kaltura player, for example

```
v<%kaltura-player-version>-minimal
```

For example

```
v0.37.3-minimal
```

Only tags ending with `-minimal` should be used

## Maintaining the fork

Steps for updating to latest version

- Set fetch origin to original kaltura repo
- Pull and merge `master` into `minimal` branch
- Test the dev build following Development section, If everything works fine continue
- Create prod build following Production Build section,
- Commit the changes in `minimal` branch
- Create and push new tag following the Versioning section
