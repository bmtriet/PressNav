# PressNav
jQuery plugin to navigate Bootstrap pagination by pressing arrow keys

*Why?*

I've surf alot of website that've a pagination at bottom of the page. To navigate throught those tiny pagination button that let's me loose focused ... Then I've think that I could write a simple script to navigate the pagination with my keyboard. Then... here it is :)

#How to use ?

**It's pretty simple.. **

```javascript
$('.pagination').PressNav();
```
Remember the pagination html structure have to follow as below

```html
<ul class="pagination">
	<li><a href="2.html">&laquo;</a></li>
	<li><a href="index.html">1</a></li>
	<li><a href="2.html">2</a></li>
	<li class="active"><a href="#">3</a></li>
	<li class="disabled"><a href="#">&raquo;</a></li>
</ul>
```
I've build it to work with Twitter Bootstrap, for other framework just use the same html structure and user jQuery selector as the example  below : 

```javascript
$('.yourPaginationClass').PressNav({
  nextClass: '.yourPaginationClass > li:first-child > a',
	prevClass: '.yourPaginationClass > li:last-child > a',
});
```

That all :).. Have fun...
