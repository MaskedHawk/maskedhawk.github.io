var x = document.getElementsByClassName('about');
function hideall(x, j = -1)
{
	for(var i = 0; i < x.length; i++)
	{
  		if(i != j)
  			$(x[i]).hide();
  	}
}
function txtToggle(x)
{
	x.slideToggle();
}
// case of resize
window.onresize = function(event) {
  if(window.matchMedia("(min-width: 992px)").matches)
  {
    hideall(x);
    $('.about').each(function(i, obj) {
      $("#md-txt" + i).append($(this));
    });
  } else {
    $('.about').each(function(i, obj) {
      $("#sm-txt" + i).append($(this));
    });
  }
};

$(document).ready(function(){
	var btn = document.getElementsByClassName('mitem');
  
  hideall(x);
// case of small screen
  if (window.matchMedia("(max-width: 992px)").matches) {
    $('.about').each(function(i, obj) {
      $("#sm-txt" + i).append($(this));
    });
  }  
  $('.mitem').click(function(event){
    hideall(x, this.id);
    $(x[this.id]).slideToggle();
	});
});
