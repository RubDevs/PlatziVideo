class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    play() {
        this.media.play();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            //virtual property
            get muted() {
                return this.media.muted;
            },

            set muted(value) {
                this.media.muted = value;
            }
        };
        this.plugins.forEach(plugin => {
            plugin.run(player);
        });
    }
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    isPaused() {
        return this.media.paused;
    }
}







export default MediaPlayer;