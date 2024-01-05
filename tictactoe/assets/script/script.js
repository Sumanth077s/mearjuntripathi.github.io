document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});


let audio = new Audio('./assets/tune/welcome.mp3');
window.onload = () => {
    welcomeSong();
    startConfetti();
}

function welcomeSong() {
    if (window.AudioContext) {
        const audioContext = new AudioContext();
        const audio = new Audio('path/to/your/audio/file.mp3');

        // Function to play the audio
        const playAudio = () => {
            audioContext.resume().then(() => {
                audio.play()
                    .then(() => {
                        console.log('Welcome, sir, for playing the game');
                    })
                    .catch(error => {
                        console.error('Error playing audio:', error);
                    });
            });
        };

        // Add an event listener to a button or any other element
        document.getElementById('playButton').addEventListener('click', playAudio);
    } else {
        console.error('AudioContext is not supported in this browser.');
    }
}

let container = document.querySelector('.welcome-container');
function startGame(btn) {
    stopConfetti();
    let div = document.createElement('div');
    div.classList.add('options');
    let btn1 = document.createElement('button');
    // let btn2 = document.createElement('button');
    let btn3 = document.createElement('button');
    btn1.innerHTML = '<a href="twoPlayer.html">Two Player</a>';
    // btn2.innerText = 'Online Multiplayer';
    btn3.innerHTML = '<a href="computer.html">Play Against Computer</a>';
    div.appendChild(btn1);
    // div.appendChild(btn2);
    div.appendChild(btn3);
    container.removeChild(btn);
    container.appendChild(div);
}

let mute = document.getElementById('mute');
mute.addEventListener('click', () => {
    if (mute.value == 'play') {
        welcomeSong()
        mute.value = "pause";
        mute.innerHTML = '<i class="fa fa-volume-up"></i>';
    }
    else {
        audio.pause();
        mute.value = "play";
        mute.innerHTML = '<i class="fa fa-volume-mute"></i>';
    }
})

// window.onbeforeunload = function () {
//     return "Do You want to exit";
// };