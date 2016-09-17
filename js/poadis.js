
function clickScroll(element){
    var temp = document.getElementById(element);
    if(temp === null){
    	window.location = "index.html#"+element;
    }
    else{
    	$('html, body').animate({ scrollTop: $("#"+element).offset().top}, 800);
    }
}

function triggerAlert(){
	$('#myModal').modal('show');
}

$(document).ready(function(){
    $('.temp').tooltip({title: "<img src=\"img/AboutUs.png\" style=\"height:50px;padding:0px;margin:0px;\">", html: true, placement: "right"});
});