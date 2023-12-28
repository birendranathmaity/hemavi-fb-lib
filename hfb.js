var doms=document.querySelectorAll('a[id=fb-action]');

doms.forEach(btn => {
btn.addEventListener('click', function(e) {
alert('kk')
  e.preventDefault();
console.log(e)
});

// do something awesome with each div

});
