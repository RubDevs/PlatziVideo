class MediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    play() {
        this.media.play();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
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