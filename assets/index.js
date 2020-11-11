import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.ts'

const video = document.querySelector('video');
const playButton = document.getElementById('playButton')
const muteButton = document.getElementById('muteButton');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(),new AutoPause()] });
playButton.onclick = () => player.isPaused()? player.play(): player.pause()
muteButton.onclick = () => player.media.muted ? player.unmute() : player.mute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.error(error.message)
    })
}