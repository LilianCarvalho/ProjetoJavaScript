const verificar = document.querySelectorAll('.verificar');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

verificar.forEach(verificar => {
	verificar.addEventListener('change', (e) => {
		doTheTrick(e.target)
	});
});

function doTheTrick(theClickedOne) {
	
	if(good.checked && cheap.checked && fast.checked) {
		
		if(good === theClickedOne) {
			fast.checked = false;
		}
		
		if(cheap === theClickedOne) {
			good.checked = false;
		}
		
		if(fast === theClickedOne) {
			cheap.checked = false;
		}
	}
}
