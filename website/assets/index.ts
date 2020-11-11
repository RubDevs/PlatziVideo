import MediaPlayer from '@rubdevs/mediaplayer'
import AutoPlay from '@rubdevs/mediaplayer/lib/plugins/AutoPlay'
import AutoPause from '@rubdevs/mediaplayer/lib/plugins/AutoPause'
import AdsPlugin from '@rubdevs/mediaplayer/lib/plugins/Ads/index'

const video = document.querySelector('video');
const playButton: HTMLElement = document.getElementById('playButton')
const muteButton: HTMLElement = document.getElementById('muteButton');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(),new AutoPause(), new AdsPlugin()] });
playButton.onclick = () => player.isPaused()? player.play(): player.pause()
muteButton.onclick = () => player.media.muted ? player.unmute() : player.mute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.error(error.message)
    })
}