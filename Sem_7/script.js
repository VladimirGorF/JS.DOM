"use strict";

const play = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-circle-pause");
const volume = document.querySelector(".fa-volume-high");
const noVolume = document.querySelector(".fa-volume-xmark");
const video = document.querySelector("video");
const videoRange = document.querySelector(".video-range");
const volumeRange = document.querySelector(".volume-range");
const timer = document.querySelector(".clock-span");
const volumeValue = document.querySelector(".volume-span");
const audio = document.querySelector(".audio");

pause.classList.add("displayOff");
play.addEventListener("click", function () {
  video.play();
  audio.play();
  pause.classList.remove("displayOff");
  play.classList.add("displayOff");
});

pause.addEventListener("click", function () {
  video.pause();
  audio.pause();
  play.classList.remove("displayOff");
  pause.classList.add("displayOff");
});

video.addEventListener("timeupdate", function () {
  const minutes = Math.floor(video.currentTime / 60);
  const seconds = Math.floor(video.currentTime % 60);
  timer.textContent = ` ${String(minutes).padStart(2, "0")} : ${String(
    seconds
  ).padStart(2, "0")}`;

  videoRange.value = (video.currentTime / video.duration) * 100;
  audio.value = (video.currentTime / video.duration) * 100;
});

videoRange.addEventListener("input", function () {
  video.currentTime = (videoRange.value / 100) * video.duration;
  audio.currentTime = (videoRange.value / 100) * video.duration;
});

noVolume.classList.add("displayOff");

volumeRange.addEventListener("input", function () {
  const vol = volumeRange.value / 100;
  audio.volume = vol;
  volumeValue.innerHTML = Math.floor(vol * 10);

  if (vol === 0) {
    volume.classList.add("displayOff");
    noVolume.classList.remove("displayOff");
  } else {
    volume.classList.remove("displayOff");
    noVolume.classList.add("displayOff");
  }
});
