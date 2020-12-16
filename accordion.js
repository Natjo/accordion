const accordion = el => {
	const btns = el.querySelectorAll('.summary');
	const panels = el.querySelectorAll('.panel');
	const contents = el.querySelectorAll('.content');
	let heights = [];
	let intResize;
	
	const resize = () => {
		heights = [];
		contents.forEach (content => heights.push(content.scrollHeight));
		btns.forEach((btn,i) => {
			panels[i].style.height = btn.classList.contains('active') ? `${heights[i]}px` : null;
		});
	};

	btns.forEach(btn => {
		btn.onclick = () =>{
			btn.classList.toggle('active');
			resize();
		}
	});

	window.addEventListener('resize', () => {
		clearTimeout(intResize);
		intResize = setTimeout( () => resize(), 50);
	});

}
export default accordion;