let playlist = {
    songs: [
        { title: "Song 1", artist: "Artist 1", isPlaying: false },
        { title: "Song 2", artist: "Artist 2", isPlaying: false },
        { title: "Song 3", artist: "Artist 3", isPlaying: false }
    ],
    playSong: function(title) {
        // Your code here using 'this'
        for(let song of this.songs){
            if(song.title === title){
                song.isPlaying = true;
            } else {
                song.isPlaying = false; 
            }
        }
    },
    getCurrentlyPlayingSong: function() {
        // Your code here using 'this'
        for(let song of this.songs){
            if(song.isPlaying === true){
                return song.title;
            }
        }
    },
    shuffleSong: function (){
        for(let i = this.songs.length -1; i > 0; i-- ){
            let j = Math.floor(Math.random()*(i+1));
            [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]];
        }
    }
};

playlist.playSong("Song 2");
console.log(playlist.getCurrentlyPlayingSong()); 

playlist.playSong("Song 3");
console.log(playlist.getCurrentlyPlayingSong()); 

console.log("Before shuffle:", playlist.songs.map(song => song.title));

playlist.shuffleSong();

console.log("After shuffle:", playlist.songs.map(song => song.title));