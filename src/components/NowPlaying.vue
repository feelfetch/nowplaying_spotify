<template>
  <span class="spotifyNowPlaying">{{ currentTrackStr }}</span>
</template>

<script>

import { Buffer } from 'buffer'
const clientID = process.env.VUE_APP_SPOTIFY_CLIENT_ID
const clientSecret = process.env.VUE_APP_SPOTIFY_CLIENT_SECRET
const refreshToken = process.env.VUE_APP_SPOTIFY_RT
const basic = Buffer.from(`${clientID}:${clientSecret}`).toString('base64')
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

// This gets the access token from Spotify to connect to the API using provided refresh token.
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }).toString()
  })
  return response.json()
}

// Get the current now playing track of given user access token.
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken()
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export default {
  name: 'NowPlaying',
  data () {
    return {
      currentTrackStr: 'Nothing playing right now.'
    }
  },
  watch: {
    '$route.path' () {
      this.currentTrack()
    }
  },
  beforeMount () {
    this.currentTrack()
  },
  mounted: function () {
    window.setInterval(() => {
      this.currentTrack();
    }, 20000)
  },
  methods: {
    async currentTrack () {
      try {
        const response = await getNowPlaying()
        if (response.status === 200) {
          const { item, is_playing: np } = await response.json()
          this.currentTrackStr = `${np ? 'Now playing:' : 'Last played:'} ${
            item.name
          } by ${item.artists.map(artist => artist.name).join(', ')}.`
        }
      } catch (e) {
        this.currentTrackStr = "Couldn't fetch data :("
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
