# jasCarousel

-------
_Awesome 3D carousel plugin_

#### Demo

[https://jascarousel.github.io/jascarousel/](https://github.com/jasCarousel/jascarousel)

#### CDN

To start working with jasCarousel right away, there's a couple of CDN choices availabile
to serve the files as close, and fast as possible to your users:

- https://jascarousel.github.io/jascarousel/js/jas-carousel.js
- https://jascarousel.github.io/jascarousel/css/jas-carousel.css

Include following style and script into your HTML  `<head>`:
```html
<link rel="stylesheet" type="text/css" href="https://jascarousel.github.io/jascarousel/css/jas-carousel.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://jascarousel.github.io/jascarousel/js/jas-carousel.js"></script>
```

After that follow HTML structure:

### Html Settings

In jasCarousel you need to follow this html structure 

Example:

```html
<ul class="slider">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
</ul>
```


### JavaScript setting and default options
```javascript


    $(".slider").jasCarousel({
        margin: 20,
        auto: false,
        speed: 800,
        delay: 2000,
        slideFrontFace: false,
        moveOnSlideClick: true,
        prevText:'Prev',
        nextText:'Next'
    })    
    
```

### Options

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 100px;">Name</th>
			<th style="width: 50px;">default</th>
			<th>description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>auto</td>
			<td>true</td>
			<td>3Dcarousel will auto play with this option</td>
		</tr>
		<tr>
			<td>delay</td>
			<td>1500</td>
			<td>delay between slide transition</td>
		</tr>
		<tr>
			<td>speed</td>
			<td>2000</td>
			<td>Transition Speed of slide change</td>
		</tr>
		<tr>
			<td>navigation</td>
			<td>true</td>
			<td>To genrate navigation button in 3Dcarousel</td>
		</tr>
		<tr>
			<td>prevText</td>
			<td>"prev"</td>
			<td>Add text into prev button</td>
		</tr>
		<tr>
			<td>nextText</td>
			<td>"next"</td>
			<td>Add text into next button</td>
		</tr>
		<tr>
			<td>autoDirection</td>
			<td>"next"</td>
			<td>Auto direction of slider navigation "next" and "prev"</td>
		</tr>
		<tr>
			<td>mode</td>
			<td>"horizontal"</td>
			<td>if set value "horizontal" it will generate horizonral carousel. And "vertical" will generate vartical carousel</td>
		</tr>
		<tr>
			<td>margin</td>
			<td>0</td>
			<td>Margin between each slide.</td>
		</tr>
	</tbody>
</table>

#### Contributing

Please review CONTRIBUTING.markdown prior to requesting a feature, filing a pull request or filing an issue.
