import NowPlaying from "./components/NowPlaying.vue";

const SpotifyNowPlaying = {
    install(Vue) {
        Vue.component("spotify-now-playing", NowPlaying);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(SpotifyNowPlaying);
}

export default SpotifyNowPlaying;