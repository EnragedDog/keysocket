function onKeyPress(key) {
	if(window.location.hostname == "youtube.com"){
		
		var video = document.querySelector('#movie_player');
		if (!video.getPlayerState) { // HTML5 Player
			if (key === NEXT) {
				var nextButton = document.querySelector('.ytp-button-next, .ytp-next-button');
				simulateClick(nextButton);
			} else if (key === PLAY) {
				var playPauseButton = document.querySelector('.ytp-button-pause, .ytp-button-play, .ytp-pause-button, .ytp-play-button');
				simulateClick(playPauseButton);
			} else if (key === PREV) {
				var backButton = document.querySelector('.ytp-button-prev, .ytp-prev-button');
				simulateClick(backButton);
			} else if (key === STOP) {
				var stopButton = document.querySelector('.ytp-button-pause');
				simulateClick(stopButton);
			}
		} else { // Flash Player
			if (key === PLAY) {
				if (video.getPlayerState() === 2) {
					video.playVideo();
				} else {
					video.pauseVideo();
				}
			} else if (key === STOP) {
				video.pauseVideo();
			}
		}
	}
	else if (window.location.hostname == "music.youtube.com"){
		if (key === NEXT) {
			var nextButton = document.querySelector('#left-controls .next-button');
			simulateClick(nextButton);
		}
		else if (key === PLAY) {
			var playPauseButton = document.querySelector('#play-pause-button');
			simulateClick(playPauseButton);
		}
		else if (key === PREV) {
			var backButton = document.querySelector('#left-controls .previous-button');
			simulateClick(backButton);
		}
	}
}

pluginLoaded('Youtube');