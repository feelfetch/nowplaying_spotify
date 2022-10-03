This package let's you display what you're currently listening to on spotify.

To use it, you need Spotify's Client ID, Client Secret and Refresh Token saved as environment variables. [How to get these](https://rentry.co/r3eph).

```js
VUE_APP_SPOTIFY_CLIENT_ID=
VUE_APP_SPOTIFY_CLIENT_SECRET=
VUE_APP_SPOTIFY_RT=
```
Install the package
```js
yarn add vue_nowplaying_spotify
```

Once you have installed the package, in your entry file of the repository (main.js if you are using it in a Vue CLI project).

Write the import command

```js
import SpotifyNowPlaying from 'vue_nowplaying_spotify'
```

To install it globally:

```js
Vue.use(SpotifyNowPlaying)
```

You can also import the individual components locally:

```js
import SpotifyNowPlaying from 'vue_nowplaying_spotify'
```