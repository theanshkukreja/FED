let currentSong = new Audio();

function secToMinSec(seconds){
    if(isNaN(seconds) || seconds < 0){
        return "**:**";
    }
    const min = Math.floor(seconds / 60);
    const remSec = Math.floor(seconds % 60);
    const formMinutes = String(min).padStart(2,'0');
    const formSeconds = String(remSec).padStart(2,'0');
    return `${formMinutes}:${formSeconds}`;
}

async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/SPOTIFY/songs/");
    let respone = await a.text();
    let div = document.createElement('div');
    div.innerHTML = respone;
    let as = div.getElementsByTagName("a");
    let songs = [];

    for(let i=0; i < as.length; i++){
        if(as[i].href.endsWith(".mp3")){
            songs.push(as[i].href);
        }
    }

    return songs;
}

const playMusic = (track) => {
    //let audio =  new Audio("/SPOTIFY/songs/" + track);
    currentSong.src = "/SPOTIFY/songs/" + track;
    currentSong.play();
    play.src = "pause.svg";
    document.querySelector(".songinfo").innerHTML = track;
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

}

async function main(){ 
    let songs = await getSongs();
    let songsUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for( const song of songs){
        let index = song.indexOf("songs/");
        //let songn1 = song.substring(index + "songs/".length);
        let songName = song.substring(index + "songs/".length);
        //let songName = songn1.replaceAll(".mp3", "-")
        
        songsUL.innerHTML = songsUL.innerHTML + `<li>
 
                <img src="music.svg" alt="music" />
                <div class="info">
                  <div>${songName.replaceAll("%20", " ")}</div>
                  <div>Artist Name</div>
                </div>
                <div class="playnow">
                  <span>Play Now</span>
                  <img class="invert" src="play.svg" alt="play">
                </div>

        </li>`;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    play.addEventListener("click", () => {
        if(currentSong.paused){
            currentSong.play();
            play.src = "pause.svg";
        }else{
            currentSong.pause();
            play.src = "play.svg";
        }
    });

    currentSong.addEventListener("timeupdate", (a) => {
        document.querySelector(".songtime").innerHTML = `${secToMinSec(currentSong.currentTime)}/${secToMinSec(currentSong.duration)}`;
        document.querySelector(".circle").style.left = ((currentSong.currentTime/currentSong.duration) * 100) + "%";
    })

    sidhu.addEventListener("click", () => {
        playMusic("Malwa_Block.mp3");
        cardsidhu.src = "pause.svg";
    });

    jass.addEventListener("click", () => {
        playMusic("Allah.mp3");
        cardjass.src = "pause.svg";
    });

    twin.addEventListener("click", () => {
        playMusic("Diamond.mp3");
        cardtwin.src = "pause.svg";
    });

}

main();