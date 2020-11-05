function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

MediaPlayer.prototype.play = function(){
    this.media.play();
}

MediaPlayer.prototype._initPlugins = function(){
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        //virtual property
        get muted() {
            return this.media.muted
        },

        set muted(value){
            this.media.muted = value
        }
    }
    this.plugins.forEach(plugin => {
        plugin.run(player)
    });
}

MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

MediaPlayer.prototype.isPaused = function(){
    return this.media.paused
}

export default MediaPlayer;