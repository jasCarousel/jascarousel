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

Include following style and script into your HTML  `<head>`:
```html
<link rel="stylesheet" type="text/css" href="https://websoldire.github.io/3Dcalrousel/3DCarousel.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>
<script src="https://websoldire.github.io/3Dcalrousel/3DCarousel.1.1.js"></script>
```

After that follow HTML structure:

### Html Settings

In 3Dcarousel 1.1 you need to follow this html structure 

Example:

```html
<div class="container">
    <div class="box">
        <figure> <div> 1 </div> </figure>
        <figure> <div> 2 </div> </figure>
        <figure> <div> 3 </div> </figure>
        <figure> <div> 4 </div> </figure>
        <figure> <div> 5 </div> </figure>
        <figure> <div> 6 </div> </figure>
        <figure> <div> 7 </div> </figure>
        <figure> <div> 8 </div> </figure>
        <figure> <div> 9 </div> </figure>
        <figure> <div> 10 </div> </figure>
        <figure> <div> 11 </div> </figure>
        <figure> <div> 12 </div> </figure>
        <figure> <div> 13 </div> </figure>
        <figure> <div> 14 </div> </figure>
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
			<td>if set value "x" it will generate horizonral carousel. And "y" will generate vartical carousel</td>
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
