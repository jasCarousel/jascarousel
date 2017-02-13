# 3Dcalrousel

-------
_Awesome 3D carousel plugin_

#### Demo

[https://websoldire.github.io/3Dcalrousel/](https://websoldire.github.io/3Dcalrousel/)

#### CDN

To start working with Slick right away, there's a couple of CDN choices availabile
to serve the files as close, and fast as possible to your users:

- https://websoldire.github.io/3Dcalrousel/jquery.newCarousel.1.1.js
- https://websoldire.github.io/3Dcalrousel/jquery.newCarousel.css

#####Example using jsDelivr

Just add a link to the css file in your `<head>`:
```html
<link rel="stylesheet" type="text/css" href="newCarousel.css">
<script src="jquery.touchSwipe.min.js"></script>
<script src="jquery.newCarousel.1.1.js"></script>
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
			<td>imageSrc</td>
			<td>null</td>
			<td>You must provide a path to the image you wish to apply to the parallax effect.</td>
		</tr>
		<tr>
			<td>naturalWidth</td>
			<td>auto</td>
			<td>You can provide the natural width and natural height of an image to speed up loading and reduce error when determining the correct aspect ratio of the image.</td>
		</tr>
		<tr>
			<td>naturalHeight</td>
			<td>number</td>
			<td>auto</td>
		</tr>
		<tr>
			<td>position</td>
			<td>center center</td>
			<td>This is analogous to the background-position css property. Specify coordinates as top, bottom, right, left, center, or pixel values (e.g. -10px 0px). The parallax image will be positioned as close to these values as possible while still covering the target element.</td>
		</tr>
		<tr>
			<td>positionX</td>
			<td>xPos</td>
			<td>center</td>
		</tr>
		<tr>
			<td>positionY</td>
			<td>yPos</td>
			<td>center</td>
		</tr>
		<tr>
			<td>speed</td>
			<td>0.2</td>
			<td>The speed at which the parallax effect runs. 0.0 means the image will appear fixed in place, and 1.0 the image will flow at the same speed as the page content.</td>
		</tr>
		<tr>
			<td>zIndex</td>
			<td>-100</td>
			<td>The z-index value of the fixed-position elements.  By default these will be behind everything else on the page.</td>
		</tr>
		<tr>
			<td>bleed</td>
			<td>0</td>
			<td>You can optionally set the parallax mirror element to extend a few pixels above and below the mirrored element.  This can hide slow or stuttering scroll events in certain browsers.</td>
		</tr>
		<tr>
			<td>iosFix</td>
			<td>true</td>
			<td>iOS devices are incompatable with this plugin. If true, this option will set the parallax image as a static, centered background image whenever it detects an iOS user agent. Disable this if you wish to implement your own graceful degradation.</td>
		</tr>
		<tr>
			<td>androidFix</td>
			<td>true</td>
			<td>If true, this option will set the parallax image as a static, centered background image whenever it detects an Android user agent. Disable this if you wish to enable the parallax scrolling effect on Android devices.</td>
		</tr>
		<tr>
			<td>overScrollFix</td>
            		<td>false</td>
			<td>(Experimental) If true, will freeze the parallax effect when "over scrolling" in browsers like Safari to prevent unexpected gaps caused by negative scroll positions.</td>
		</tr>
	</tbody>
</table>
