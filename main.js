function MusicTaste() {
	let MusicGender = document.querySelectorAll('input[name="gender"]');
	let ballad = document.querySelector("#vanilla");
	let Pop = document.querySelector("#Pop");
	let Rb = document.querySelector("#RB");
	let text = document.querySelector("#text");

	let selectedMusic;
	for (const radioButton of MusicGender) {
		if (radioButton.checked) {
			selectedMusic = radioButton.value;
		}
	}

	// show the output:
	text.innerHTML = selectedMusic
		? `Currently playing: disc ${selectedMusic}`
		: `You haven't selected any disc`;
}

function updateDisc() {
    var discSelect = document.getElementById("discSelect");
    var vinylImage = document.getElementById("vinylImage");
    var discAudio = document.getElementById("discAudio");

    // Update the image source
    vinylImage.src = "images/" + discSelect.value;

    // Update the audio source and play the audio
    discAudio.src = "images/" + discSelect.value.replace('png', 'mp3');
    discAudio.load(); // This is necessary to load the new source
    discAudio.play();
}




