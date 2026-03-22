/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const skip =player.querySelectorAll('[data-skip]');
function toToggle(){
	if(video.paused){
		video.play()
		toggle.textContent="►"
	}else{
		video.pause()
		toggle.textContent="❚ ❚"
	}
}

function seeProgress(){
	const percentProgress =(video.currentTime/video.duration)*100
	progressBar.style.flexBasis = percentProgress + '%';
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function toSkip() {
	video.currentTime+=parseFloat(this.dataset.skip)
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

progress.addEventListener('click', scrub);
toggle.addEventListener('click',toToggle);
video.addEventListener('click',toToggle);
video.addEventListener('timeupdate',seeProgress);
ranges.forEach(range => {
  range.addEventListener('input', handleRangeUpdate);
});
skip.forEach(button => {
  button.addEventListener('click', toSkip);
});