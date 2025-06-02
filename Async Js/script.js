// class Song{
//     constructor(title,artist,audioSrc,coverImage){
//         this.title = title;
//         this.artist = artist;
//         this.audioSrc = audioSrc;
//         this.coverImage = coverImage;
//         this.audio = new Audio(audioSrc);//this is the js default constructor. which will help us to easily add the play and pause function.
//     };
//     play(){
//         this.audio.play();
//     }
//     pause(){
//         this.audio.pause();
//     }
// };
class Song {
  constructor(title, artist, coverImg, audioSrc) {
    this.title = title;
    this.artist = artist;
    this.coverImg = coverImg;
    this.audioSrc = audioSrc;
  }

  createElement() {
    const song = document.createElement('div');
    song.classList.add('song');

    song.innerHTML = `
      <div class="song-container">
        <div class="visual">
          <img src="${this.coverImg}" alt="">
        </div>
        <div class="info">
          <h2>${this.title}</h2>
          <p>${this.artist}</p>
        </div>
      </div>
      <div class="play-button">
        <img src="play-button-arrowhead.png" alt="">
      </div>
    `;

    return song;
  }
}

class SpeedDial {
  constructor(imgSrc) {
    this.imgSrc = imgSrc;
  }

  createElement() {
    const dial = document.createElement('div');
    dial.classList.add('speed-dial');
    dial.innerHTML = `<a href="#"><img src="${this.imgSrc}" alt=""></a>`;
    return dial;
  }
}

class UI {
  constructor(mountSelector) {
    this.app = document.querySelector(mountSelector);
  }

  renderPlaylist(songs, speedDials) {
    const musicContainer = document.createElement('div');
    musicContainer.classList.add('music-container');

    musicContainer.innerHTML = `
      <div class="justSaying">
      <button id="button">
      </button>
        <h2>Books open , Lip gloss on, Let's Slay.</h2>
      </div>
    `;
    const playlist = document.createElement('div');
    playlist.classList.add('playlist');

    const bossyPlaylist = document.createElement('div');
    bossyPlaylist.classList.add('bossy-playlist');

    const songContainer = document.createElement('div');
    songContainer.classList.add('song-container');

    // Add all songs
    songs.forEach(song => {
      songContainer.appendChild(song.createElement());
    });

    const speedDialContainer = document.createElement('div');
    speedDialContainer.classList.add('speed-dial-container');

    // Add all speed dials
    speedDials.forEach(dial => {
      speedDialContainer.appendChild(dial.createElement());
    });

    // Nest structure
    bossyPlaylist.appendChild(songContainer);
    bossyPlaylist.appendChild(speedDialContainer);
    playlist.appendChild(bossyPlaylist);
    musicContainer.appendChild(playlist);
    this.app.appendChild(musicContainer);
  }
}

const songs = [
  new Song("Confident", "Demi Lovato", "download.jpeg", "audio1.mp3"),
  new Song("Boss B*tch", "Doja Cat", "download.jpeg", "audio2.mp3"),
  new Song("7 Rings", "Ariana Grande", "download.jpeg", "audio3.mp3")
];

const speedDials = [
  new SpeedDial("download.jpeg"),
  new SpeedDial("download.jpeg"),
  new SpeedDial("download.jpeg"),
  new SpeedDial("download.jpeg")
];

const ui = new UI("#app");
ui.renderPlaylist(songs, speedDials);

        const button = document.getElementById("button");
    button.addEventListener("click",function(){
      window.location.href = "index.html";
    });