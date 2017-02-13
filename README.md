# 3Dcalrousel

-------
_Awesome 3D carousel plugin_

#### Demo

[http://kenwheeler.github.io/slick](http://kenwheeler.github.io/slick/)

#### CDN

To start working with Slick right away, there's a couple of CDN choices availabile
to serve the files as close, and fast as possible to your users:

- https://cdnjs.com/libraries/slick-carousel
- https://www.jsdelivr.com/projects/jquery.slick

#####Example using jsDelivr

Just add a link to the css file in your `<head>`:
```html
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
<!-- Add the slick-theme.css if you want default styling -->
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"/>
```

Then, before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
```

#### Package Managers

```sh
# Bower
bower install --save slick-carousel

# NPM
npm install slick-carousel
```

#### Contributing

PLEASE review CONTRIBUTING.markdown prior to requesting a feature, filing a pull request or filing an issue.

### Data Attribute Settings

In slick 1.5 you can now add settings using the data-slick attribute. You still need to call $(element).slick() to initialize slick on the element.

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
