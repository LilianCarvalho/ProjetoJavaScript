const container = document.getElementById('suggestion_container');
const suggestions_count = document.getElementById('suggestions_count');
let textarea = document.getElementById('textarea')

container.addEventListener('click', (e) => {
	const btn = e.path.find(el => el.classList && el.classList.contains('vote-btn'));
	
	if(btn) {
		const suggestionEl = e.path.find(el => el.classList && el.classList.contains('suggestion'));
		
		if(btn.classList.contains('voted')) {
			btn.classList.remove('voted');
			unvoteFor(suggestionEl);
				
		} else {
			btn.classList.add('voted');
			voteFor(suggestionEl);
		}
	}
});
let array = []

function addSuggestionToDOM() {
	const newSuggestion = document.createElement('div');
	textarea.addEventListener('keydown', (e) =>{

		if (e.key === 'Enter'){
		e.preventDefault()	
		newSuggestion.classList.add('suggestion');
		newSuggestion.innerHTML = `
		<div class="left">
			<button class="vote-btn">
				<i class="fas fa-chevron-up"></i>
			</button>
			<p>
				<span class="votes">0</span>
				votes
			</p>
		</div>
		<div class="right">
			<strong>${document.getElementById('textarea').value}</strong>
		</div>
	`;
	document.getElementById('textarea').value = ''
		}

	} )
	container.appendChild(newSuggestion);
	suggestions_count.innerText = +suggestions_count.innerText + 1;
}


function voteFor(el) {
	const voteEl = el.querySelector('span.votes');
	
	voteEl.innerText = +voteEl.innerText + 1;
}

function unvoteFor(el) {
	const unvoteEl = el.querySelector('span.votes');
	
	unvoteEl.innerText = +unvoteEl.innerText - 1;
}

addSuggestionToDOM()