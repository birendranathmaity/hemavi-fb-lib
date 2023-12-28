console.log("fb pixel event init()====>")
var doms=document.querySelectorAll('a[id=fb-action]');
doms.forEach((btn,i) => {
btn.addEventListener('click', function(e) {
alert(doms[i].href)
  e.preventDefault();
console.log(e)
});

// do something awesome with each div

});
