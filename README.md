# Accordion

![version](https://img.shields.io/github/manifest-json/v/Natjo/accordion)

Not finished

## Html
```html
Set id of the panel in `aria-controls`.
<ul class="accordion">
	<li>
		<button class="summary" aria-expanded="false" aria-controls="desc-1">Lorem ipsum</button>
		<div id="desc-1" class="panel">
			<div class="content">
                <!-- content desc-1 --> 
			</div>
		</div>
	</li>
	<li>
		<button class="summary" aria-expanded="false" aria-controls="desc-2">Lorem, ipsum.</button>
		<div id="desc-2" class="panel">
			<div class="content">
                <!-- content desc-2 --> 
			</div>
		</div>
	</li>
		<li>
		<button class="summary" aria-expanded="false" aria-controls="desc-3">Lorem</button>
		<div id="desc-3" class="panel">
			<div class="content">
                <!-- content desc-3 --> 
			</div>
		</div>
	</li>
		<li>
		<button class="summary" aria-expanded="false" aria-controls="desc-4">Ipsum</button>
		<div id="desc-4" class="panel">
			<div class="content">
                <!-- content desc-4 --> 
			</div>
		</div>
	</li>
</ul>
```
## Javascript
```javascript
import accordion from '../../modules/accordion/accordion.js';

accordion(document.querySelector('.accordion'));
```

## Demo

[See codepen demo](https://codepen.io/natjo/pen/JedeVm?editors=1011)
