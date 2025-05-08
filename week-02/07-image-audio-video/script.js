console.log("hi!");

const myImage = document.querySelector("img");
const myAudio = document.querySelector("audio");
const myVideo = document.querySelector("video");

myImage.addEventListener("load", (e) => {
  console.log("loaded image", e);
});

myAudio.addEventListener("play", (e) => {
  console.log("audio playing", e);
});

myAudio.addEventListener("ended", (e) => {
  console.log("audio ended", e);
});

myVideo.addEventListener("time", (e) => {
  console.log("video time", e);
});

myVideo.addEventListener("pause", (e) => {
  console.log("video paused", e);
});

document.getElementById("audio-play").addEventListener("click", (e) => {
  myAudio.play();
});
document.getElementById("audio-pause").addEventListener("click", (e) => {
  myAudio.pause();
});
document.getElementById("audio-stop").addEventListener("click", (e) => {
  myAudio.pause();
  myAudio.currentTime = 0;
});
document.getElementById("audio-volume").addEventListener("change", (e) => {
  myAudio.volume = e.target.value;
});

document.getElementById("video-play").addEventListener("click", (e) => {
  myVideo.play();
});
document.getElementById("video-pause").addEventListener("click", (e) => {
  myVideo.pause();
});
document.getElementById("video-stop").addEventListener("click", (e) => {
  myVideo.pause();
  myVideo.currentTime = 0;
});
document.getElementById("video-volume").addEventListener("change", (e) => {
  myVideo.volume = e.target.value;
});
