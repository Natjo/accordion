/**
 * @module Accordion
 *
 * @param el (el) element
 * @param multi (boolean) if true, enable multi panels to be opened
 */

const accordion = (el, mutli = false) => {
	const btns = el.querySelectorAll('.summary');
	const panels = el.querySelectorAll('.panel');
	const contents = el.querySelectorAll('.content');
	let intResize;

	const resize = () => {
		const heights = [];
		contents.forEach (content => heights.push(content.scrollHeight));
		btns.forEach((btn,i) => {
			panels[i].style.height = btn.getAttribute('aria-expanded') === 'true' ? `${heights[i]}px` : null;
		});
	};
	
	const onclick = el => {
		btns.forEach(btn => {
			if(el === btn){	
				btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') === 'true' ? false : true);
			}else if (!mutli){
				btn.setAttribute('aria-expanded', false);
			}
		});
		resize();
	}

	btns.forEach(btn => btn.onclick = () => onclick(btn));

	window.addEventListener('resize', () => {
		clearTimeout(intResize);
		intResize = setTimeout( () => resize(), 50);
	}, {passive: true});

}
export default accordion;