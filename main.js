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
