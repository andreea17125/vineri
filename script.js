let currentScreen = 1;
const correctPassword = "shadowlady"; 

document.getElementById("lockButton").addEventListener("click", () => {
    switchScreen(2);
});

document.getElementById("unlockButton").addEventListener("click", () => {
    const input = document.getElementById("passwordInput").value;
    if (input === correctPassword) {
        switchScreen(3); 
    } else {
        alert("Parola incorectă!");
    }
});

function switchScreen(screenNumber) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));

    if (screenNumber === 12) {
        
        document.querySelector(".music-player").classList.remove("hidden");
        document.querySelector(".playlist-container").classList.remove("hidden");
    } else {
        document.getElementById(`screen${screenNumber}`).classList.remove("hidden");
    }

    currentScreen = screenNumber;
}

function nextPage() {
    if (currentScreen >= 3 && currentScreen < 11) { 
        switchScreen(currentScreen + 1);
    } else if (currentScreen === 11) {
        switchScreen(12); 
    }
}

function prevPage() {
    if (currentScreen > 3) { 
        switchScreen(currentScreen - 1);
    }
}


const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const seekBar = document.getElementById('seek-bar');
const trackTitle = document.querySelector('.track-title');
const trackArtist = document.querySelector('.track-artist');
const albumArt = document.querySelector('.album-art');
const playlistContainer = document.querySelector('.playlist-container');

const playlist = [
    { src: 'smek.mp3', title: 'sexy', artist: 'eu', img: '11.jpg' },
    { src: 'oppai.mp3', title: 'oppai', artist: 'traian', img: '12.jpg' },
    { src: 'altsexy.mp3', title: 'altsexy', artist: 'eu', img: '13.jpg' },
    { src: 'doamna.mp3', title: 'tu domnu eu vagaboanta', artist: 'Puya', img: '14.jpg' },
    { src: 'driv.mp3', title: 'drivin crazy(eu peste 9 luni)', artist: 'eu', img: '15.jpg' },
    { src: 'ineed.mp3', title: 'i need your love(please)', artist: 'eu', img: '16.jpg' },
    { src: 'speed.mp3', title: 'speed(eu cu dicku meu)', artist: 'eu', img: '17.jpg' },
    { src: 'Kiss.mp3', title: 'kiss(me please)', artist: 'eu', img: '18.jpg' },
    { src: 'hai.mp3', title: 'hai cu mine(iti dau ce vrei)', artist: 'bug', img: '19.jpg' },
    { src: 'burn.mp3', title: 'burning up for u(i really do)', artist: 'eu', img: '20.jpg' }
];

let currentTrackIndex = 0;
let isPlaying = false;

function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    albumArt.style.backgroundImage = `url('${track.img}')`;
    seekBar.value = 0; 
}


function renderPlaylist() {
    playlistContainer.innerHTML = "";
    playlist.forEach((track, index) => {
        const trackItem = document.createElement("div");
        trackItem.classList.add("track-item");
        trackItem.innerHTML = `
            <div class="track-info">
                <img src="${track.img}" class="track-cover">
                <div>
                    <p class="track-title">${track.title}</p>
                    <p class="track-artist">${track.artist}</p>
                </div>
            </div>
        `;
        trackItem.addEventListener("click", () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            audio.play();
            isPlaying = true;
            playPauseBtn.textContent = '⏸';
        });
        playlistContainer.appendChild(trackItem);
    });
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶';
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸';
    }
    isPlaying = !isPlaying;
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
}


audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        seekBar.value = (audio.currentTime / audio.duration) * 100;
    }
});


seekBar.addEventListener('input', () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});


audio.addEventListener('ended', nextTrack);

playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);


loadTrack(currentTrackIndex);
renderPlaylist();
function switchScreen(screenNumber) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));

    if (screenNumber === 12) {
       
        document.querySelector(".music-player").style.display = "block";
        document.querySelector(".playlist-container").style.display = "block";
    } else {
        document.getElementById(`screen${screenNumber}`).classList.remove("hidden");
    }

    currentScreen = screenNumber;
}
