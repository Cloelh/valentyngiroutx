let ratio = 0.25;

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}


const handleInersectservice = function(entries,obsever) {
	entries.forEach(function (entry){
		if (entry.intersectionRatio > ratio) {
			//entry.target.classList.add('reveal_service-visible');
			entry.target.classList.add(entry.target.getAttribute('data-revealation'));
		}
	})
	console.log('handleInersectservice');


}

const observer = new IntersectionObserver(handleInersectservice, options);


const elts = document.querySelectorAll('.reveal');
for (var i = 0; i < elts.length; i++) {
	observer.observe(elts[i]);
}



// pop

