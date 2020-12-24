# Modal

![version](https://img.shields.io/github/manifest-json/v/Natjo/accordion)


## Usage
```html
<ul class="accordion">
	<li>
		<button class="summary" aria-expanded="false" aria-controls="desc-1">Lorem ipsum</button>
		<div id="desc-1" class="panel">
			<div class="content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <button>button</button>
			</div>
		</div>
	</li>
	<li>
		<button class="summary" aria-expanded="false" aria-controls="desc-2">Lorem, ipsum.</button>
		<div id="desc-2" class="panel">
			<div class="content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, quasi!</p>
			</div>
		</div>
	</li>
		<li>
		<button class="summary" aria-expanded="false" aria-controls="desc-3">Lorem</button>
		<div id="desc-3" class="panel">
			<div class="content">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi commodi explicabo a eveniet natus animi dolorum libero nam quod sunt molestias tenetur vitae, non, consectetur delectus mollitia! Repellendus illum, quod officiis dolores animi distinctio mollitia, quam perspiciatis amet molestiae alias praesentium suscipit, provident velit hic. Asperiores, voluptatibus provident rem natus fugiat ullam necessitatibus est! Laborum itaque vero fugit, iusto assumenda autem, ab alias eligendi reprehenderit.
                </p>
			</div>
		</div>
	</li>
		<li>
		<button class="summary" aria-expanded="false" aria-controls="desc-4">Ipsum</button>
		<div id="desc-4" class="panel">
			<div class="content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, quasi!</p>
			</div>
		</div>
	</li>
</ul>
```
```javascript
import accordion from '../../modules/accordion/accordion.js';

accordion(document.querySelector('.accordion'));
```

## Demo

[See codepen demo](https://codepen.io/natjo/pen/JedeVm?editors=1011)
