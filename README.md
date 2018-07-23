# 3Dcalrousel

-------
_Awesome 3D carousel plugin_

#### Demo

[https://websoldire.github.io/3Dcalrousel/](https://websoldire.github.io/3Dcalrousel/)

#### CDN

To start working with 3Dcalrousel right away, there's a couple of CDN choices availabile
to serve the files as close, and fast as possible to your users:

- https://websoldire.github.io/3Dcalrousel/3DCarousel.1.1.js
- https://websoldire.github.io/3Dcalrousel/3DCarousel.css

Just add a link to the css file in your `<head>`:
```html
<link rel="stylesheet" type="text/css" href="https://websoldire.github.io/3Dcalrousel/3DCarousel.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>
<script src="https://websoldire.github.io/3Dcalrousel/3DCarousel.1.1.js"></script>
```

Then, before your closing ```<body>``` tag add:


#### Contributing

PLEASE review CONTRIBUTING.markdown prior to requesting a feature, filing a pull request or filing an issue.

### Html Settings

In 3Dcarousel 1.1 you need to follow this html structure 

Example:

```html
<div class="container">
    <div class="box">
        <figure><div class="one">1</div></figure>
        <figure><div class="two">2</div></figure>
        <figure><div class="three">3</div></figure>
        <figure><div class="four">4</div></figure>
        <figure><div class="five">5</div></figure>
        <figure><div class="six">6</div></figure>
        <figure><div class="six">7</div></figure>
        <figure><div class="six">8</div></figure>
        <figure><div class="six">9</div></figure>
        <figure><div class="six">10</div></figure>
        <figure><div class="six">11</div></figure>
        <figure><div class="six">12</div></figure>
        <figure><div class="six">13</div></figure>
        <figure><div class="six">14</div></figure>
    </div>
</div>
```


### JavaScript setting and default options
```javascript

    $(".container").carousel({
        timer:1500,
        auto:true,
        navigation:true,
        prevText:"prev",
        nextText:"next",
        swipe:true,
        infiniteLoop:true,
        axes:"y",
        margin:0 
    });
    
    
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
			<td>timer</td>
			<td>1500</td>
			<td>Interval between slide change</td>
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
			<td>swipe</td>
			<td>true</td>
			<td>Enable or desable swipe functionality</td>
		</tr>
		<tr>
			<td>infiniteLoop</td>
			<td>true</td>
			<td>3Dcarousel will rotate infinite if this option is true</td>
		</tr>
		<tr>
			<td>zIndex</td>
			<td>-100</td>
			<td>The z-index value of the fixed-position elements.  By default these will be behind everything else on the page.</td>
		</tr>
		<tr>
			<td>axes</td>
			<td>"x"</td>
			<td>if set value "x" it will genrate horizonral carousel. And "y" will ganrate vartical carousel</td>
		</tr>
		<tr>
			<td>margin</td>
			<td>0</td>
			<td>Margin between each slide.</td>
		</tr>
	</tbody>
</table>
