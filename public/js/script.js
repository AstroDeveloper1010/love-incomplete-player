console.log("Welcome to Spotify");

const audioFiles = [
    new Audio("../assets/songs/arcade.mp3"),
    new Audio("../assets/songs/can we kiss forever.mp3"),
    new Audio("../assets/songs/faded.mp3"),
    new Audio("../assets/songs/let me love you.mp3"),
    new Audio("../assets/songs/night changes.mp3"),
    new Audio("../assets/songs/sia.mp3")
];

const playButtons = document.querySelectorAll(".playSongButton");
const classNames = ["s1", "s2", "s3", "s4", "s5", "s6"];
let isPlaying = [false, false, false, false, false, false];

function pauseAllExcept(index) {
    audioFiles.forEach((audio, i) => {
        if (i !== index) {
            audio.pause();
            isPlaying[i] = false;
        }
    });
}

playButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (!isPlaying[index]) {
            pauseAllExcept(index);
            audioFiles[index].play();
            console.log(`button${index + 1}`);
            isPlaying[index] = true;
        } else {
            audioFiles[index].pause();
            isPlaying[index] = false;
        }
    });
});
