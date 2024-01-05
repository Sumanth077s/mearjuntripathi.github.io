document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});


let audio = new Audio('./assets/tune/welcome.mp3');

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
mute.addEventListener('click', async() => {
    if (mute.value == 'play') {
        await audio.play();
        mute.value = "pause";
        mute.innerHTML = '<i class="fa fa-volume-up"></i>';
    }
    else {
        audio.pause();
        mute.value = "play";
        mute.innerHTML = '<i class="fa fa-volume-mute"></i>';
    }
})


window.onload = () => {
    mute.click();
    
    startConfetti();
}
                    

// window.onbeforeunload = function () {
//     return "Do You want to exit";
// };